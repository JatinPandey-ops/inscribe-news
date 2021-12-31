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
  const [loadmore, setLoadmore] = useState(20);
  const [keyword, setKeyword] = useState("");
  const apiKey = "509188a77b8842cda77e53f751ce7aaf";
  // console.log(category)
  const url = `https://newsapi.org/v2/everything?q=${category}&language=hi&apiKey=${apiKey}&pageSize=${loadmore}`;
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setLoadmore(loadmore + 10)
      setData(data);
      setIsFetching(false);
    }, 2000);}

  const getData = async () => {
    try {
      const fetchData = await axios.get(url);
    //   console.log(fetchData);
      const parsedData = await fetchData.data.articles;
      setData(parsedData);
      setNewsResult(fetchData.data.totalResults);
      setProgress(progress + "100");
    } catch (err) {
      console.log(err);
    }
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
