import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "./CreatePost"; // Assuming CreatePost is in a separate file

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("authToken");
  const isLoggedIn = !!token; 

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3300/posts", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in headers
        },
      });
      setPosts(response.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Unauthorized: Please log in to access posts.");
        } else if (error.response.status === 403) {
          setError("Forbidden: You do not have permission to access this resource.");
        } else {
          setError(`Error fetching posts: ${error.response.status}`);
        }
      } else {
        setError("Error fetching posts: Network Error");
      }
    }
  };

  // Fetch posts when the component mounts or when the user logs in
  useEffect(() => {
    if (isLoggedIn) {
      fetchPosts(); // Only fetch posts if user is logged in
    }
  }, [isLoggedIn, token]);

  return (
    <div className="mainCon">
      {/* Show login prompt if not logged in */}
      {!isLoggedIn ? (
        <div className="displayMessage">
          <h2>Please login to see the data</h2>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side: Create Post form */}
          <div className="left" style={{ flex: 1, marginRight: "20px" }}>
            <CreatePost isLoggedIn={isLoggedIn} onPostCreated={fetchPosts} />
          </div>

          {/* Right side: Display created posts */}
          <div className="right" style={{ flex: 1 }}>
            <h2>Created Posts</h2>
            <div className="stories-div">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post._id || post.title} className="card">
                    <div className="card1">
                      <div className="bottom">
                        <p className="message">
                          <span className="outHead">Post Title: </span> {post.title}
                        </p>
                      </div>
                      <div className="top">
                        <p className="outData">
                          <span className="outHead">Content: </span> {post.content}
                        </p>
                      </div>
                    </div>
                    <div className="hr"></div>
                  </div>
                ))
              ) : (
                <div>No posts found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
