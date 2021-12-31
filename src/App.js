import "./App.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Alertmsg from "./components/Alertmsg.js";
import Newsbody from "./components/Newsbody";
import useInfiniteScroll from "./components/infiniteScroll/infinitescroll"
import LoadingBar from "react-top-loading-bar";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Latest");
  const [progress, setProgress] = useState(0);
  const [newsResult, setNewsResult] = useState();
  const [loadmore, setLoadmore] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setLoadmore(loadmore + 10)
      setData(data);
      setIsFetching(false);
    }, 2000);}
    
    const options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q:category, lang: 'hi',page_size:loadmore},
      headers: {
        'x-api-key': 'xl9f2x8pApuQKBdobqWOYSl5TcoLIhXj2XE6Qw688Lk',
      
      }
    };
  const getData = async () => {
   await axios.request(options).then(function (response) {
      setData(response.data.articles);
      console.log(response.data)
      setProgress(100)
    }).catch(function (error) {
      console.error(error);
    });
  };


  useEffect(() => {
    getData();
    setProgress(progress + "30");
  }, [category,loadmore]);

//   console.log(keyword);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavigationBar
        keyword={keyword}
        setKeyword={setKeyword}
        setCategory={setCategory}
      />
      <Alertmsg newsResult={newsResult}/>
      <Newsbody
        category={category}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
        newsResult={newsResult}
        setNewsResult={setNewsResult}
        data={data}
      />
    </>
  );
}

export default App;
