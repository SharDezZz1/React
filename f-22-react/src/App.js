import "./App.css";
import React, { useState, useEffect } from "react";
// components
import First from "./components/first/First";
import Card from "./components/card/Card";

function App() {
  // reactive variables
  const [posts, setPosts] = useState([]);
  // on load
  useEffect(() => {
    getPosts();
  }, []);
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
      {posts.map((post) => {
        return <Card delete={deletePost} key={post.id} post={post}></Card>
      })}
    </div>
  );
}

export default App;