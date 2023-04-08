import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
// components
import First from "./components/first/First";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";

function App() {
  // reactive variables
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  // on load
  useEffect(() => {
    getPosts();
  }, []);
  const searchPosts = useMemo(() => {
    return posts.filter((post) => {
      return post.title
    })
  }, [posts])
  // functions
  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        return setPosts(data);
      });
  }

  function deletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }


  return (
    <div className="App" style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }}>
      <First />
      <div>
        <Counter></Counter>
      </div>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      {posts.map((post) => {
        return <Card delete={deletePost} key={post.id} post={post}></Card>
      })}
    </div>
  );
}

export default App;