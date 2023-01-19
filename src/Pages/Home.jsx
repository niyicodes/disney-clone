import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgSlider from "../Components/ImgSlider";
import NewDisney from "../Components/NewDisney";
import Originals from "../Components/Originals";
import Recommended from "../Components/Recommended";
import Trending from "../Components/Trending";
import Viewers from "../Components/Viewers";
import { setMovies } from "../Feature/Movie/movieSlice";
import { selectUserName } from "../Feature/User/userSlice";
import { db } from "../Firebase/FirebaseConfigFile";
import {collection, onSnapshot} from 'firebase/firestore'

const Home = (props) => {
 const dispatch = useDispatch();
 const userName = useSelector(selectUserName);

 let recommends = [];
 let newDisney = [];
 let originals = [];
 let trending = [];


 useEffect(() => {
  onSnapshot(collection(db, "movies"),(snapshot) => {
   snapshot.docs.map((doc) => {
    switch (doc.data().type) {
     case "recommend":
      recommends = [...recommends, { id: doc.id, ...doc.data() }];
      break;
     case "new":
      newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
      break;
     case "original":
      originals = [...originals, { id: doc.id, ...doc.data() }];
      break;
     case "trending":
      trending = [...trending, { id: doc.id, ...doc.data() }];
      break;
    }
   });
   dispatch(
    setMovies({
     recommend: recommends,
     newDisney: newDisney,
     originals: originals,
     trending: trending,
    })
   );
  });
 }, [userName]);

 return (
  <Container>
   <ImgSlider />
   <Viewers />
   <Recommended />
   <NewDisney />
   <Originals />
   <Trending />
  </Container>
 );
};

const Container = styled.main`
 position: relative;
 background: url();
 min-height: calc(100vh - 250px);
 overflow-x: hidden;
 display: block;
 top: 72px;
 padding: 0 calc(3.5vw + 5px);

 &:after {
  background: url("/images/home-background.jpng") center no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
 }
`;
export default Home;
