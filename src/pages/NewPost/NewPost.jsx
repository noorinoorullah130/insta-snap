import React from "react";

import "./NewPost.css";
import Header from "../../components/Header/Header";
import Left from "./../../components/Left/Left";

const NewPost = () => {
    return (
        <>
            <Header />
            <Left />
            <div className="new-post">
                <form className="post-form">
                    <h1>Create New Post</h1>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter post title..."
                    />

                    <label htmlFor="post-content">Post Content</label>
                    <textarea
                        placeholder="Enter post Content"
                        id="post-content"
                        rows={5}
                    ></textarea>

                    <label htmlFor="upload-image">Upload Image</label>
                    <input type="file" id="upload-image" />

                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
};

export default NewPost;
