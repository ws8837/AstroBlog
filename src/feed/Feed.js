import React, { useState, useEffect } from "react";
import "./Feed.css";
import Card from "./Card.js";
import fetchDefault from "./fetchDefault";
import fetchDay from "./fetchDay";

const Feed = () => {
  const [data, setData] = useState([
    {
      title: "...posts are loading!...",
      date: "please allow up to 30 seconds for posts to load",
    },
  ]);

  // Fetch more when user reaches bottom of page
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await fetchDefault();
      setData(data);
      // setIsLoading(false);
    };
    // console.log("fetching...");
    fetchDefaultData();
  }, []);

  const searchForDay = () => {
    let searchText = document.getElementById("searchBar").value;
    let keyword = document.getElementById("searchKeyword").value;
    const fetchDayData = async () => {
      const data = await fetchDay(searchText, keyword); 
      setData(data);
      // setIsLoading(false);
    };
    // console.log("fetching...");
    fetchDayData();
  };

  // checks for empty data & puts posts into reverse chronological order
  const dataCheck = [...data].reverse() ?? [
    {
      title: "...posts are loading!...",
      date: "please allow up to 30 seconds for posts to load",
    },
  ];

  const refreshPage = () => {
    window.location.reload();
  };

  // maps all posts as a Card component
  return (
    <div>
      <button className="feed-button" onClick={refreshPage}>
        <b>Home</b>
      </button>
      <input type="text" id="searchBar" placeholder="yyyy-mm-dd" />
      <input type="text" id="searchKeyword" placeholder="keyword" />
      <button className="feed-button" onClick={searchForDay}>
        <b>Search</b>
      </button>

      

      {dataCheck.map((cardData) => (
        <div key={cardData.title}>
          <Card cardData={cardData} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
