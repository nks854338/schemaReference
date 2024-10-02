import React, { useState } from "react";
import axios from "axios";

const CreatePost = ({ isLoggedIn, onPostCreated }) => {
  const [postTitle, setPostTitle] = useState(""); // Title of the post
  const [postContent, setPostContent] = useState(""); // Content of the post
  const [error, setError] = useState(""); // To capture error messages
  const token = localStorage.getItem("authToken"); // Authentication token

  const handleCreatePost = async () => {
    if (!isLoggedIn) {
      setError("Please login to create a post.");
      return;
    }

    try {
      const response = await axios.post(
        "https://schema-reference-backend.vercel.app/posts",
        { title: postTitle, content: postContent }, // Send title and content to server
        {
          headers: { Authorization: `Bearer ${token}` }, // Authorization header
        }
      );
      console.log("Post created successfully", response.data);
      setPostTitle("");
      setPostContent("");
      onPostCreated(); // Call the function to fetch posts again after creation
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Unauthorized: Please log in to create a post.");
        } else if (error.response.status === 403) {
          setError("Forbidden: You do not have permission to create posts.");
        } else {
          setError(`Error creating post: ${error.response.status}`);
        }
      } else {
        setError("Error creating post: Network Error");
      }
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="formContainer">
        <div className="data">
          <div className="dataHeading" style={{ fontSize: "18px" }}>
            Create a Post
          </div>
          <div>
            {/* Title input field */}
            <label htmlFor="title">Title</label>
            <input
              style={{
                width: "100%",
                borderBottom: "solid #000813 1px",
                outline: "none",
                marginTop: "20px",
              }}
              id="title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)} // Update postTitle state
              placeholder="Write your title..."
            />
          </div>
          <div>
            {/* Content input field */}
            <label htmlFor="content">Content</label>
            <textarea
              style={{
                width: "100%",
                borderBottom: "solid #000813 1px",
                outline: "none",
                marginTop: "20px",
              }}
              id="content"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)} // Update postContent state
              placeholder="Write your post..."
            />
          </div>
          <button
            onClick={handleCreatePost}
            style={{
              backgroundColor: "#000813",
              color: "#fff",
              height: "30px",
              width: "80px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
