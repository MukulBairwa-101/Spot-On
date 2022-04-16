import React,{useEffect,useState} from "react"
import Images from "./Components/pages/Images";
import Loader from "./Components/Loader";
import './App.css';
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import Navigation from "./Components/Navigation";

function App() {
  const [images,setImages]= useState([]);
  
  const {REACT_APP_API_ENDPOINT,REACT_APP_ACCESS_KEY } = process.env ;


  useEffect(() =>{
    fetchData();
  })
  

  const fetchData = () =>{
    axios.get(`${REACT_APP_API_ENDPOINT}/random?client_id=${REACT_APP_ACCESS_KEY}&count=10`)
    .then(res=>setImages([...images,...res.data]))
  }

  return (
    <div className="App">
      
      <Navigation />
      <InfiniteScroll
      dataLength={images.length}
      next={fetchData}
      hasMore={true}
      loader={<Loader />}    
      >
          <Images images={images} /> 
      </InfiniteScroll>
    </div>
  );
}

export default App;
