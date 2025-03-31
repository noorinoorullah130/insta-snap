import React, { useRef, useState } from "react";

import "./NewPost.css";
import Header from "../../components/Header/Header";
import Left from "./../../components/Left/Left";

const NewPost = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const [post, setPost] = useState({
        id: Date.now(),
        content: "",
        image: null,
    });

    const inputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            timestamp: new Date().toISOString(),
            authorId: loggedInUser.id,
            authorName: loggedInUser.name,
            authorProfilePic: loggedInUser.image,
            comments: [],
            likes: 0,
        };

        const updatedLoggedInUser = {
            ...loggedInUser,
            posts: [...(loggedInUser.posts || []), newPost],
        };

        const updatedUsers = users.map((user) => {
            if (user.id === loggedInUser.id) {
                return updatedLoggedInUser;
            }
            return user;
        });

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(updatedLoggedInUser)
        );

        console.log(updatedLoggedInUser);

        setPost({
            id: Date.now(),
            content: "",
            image: null,
        });

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPost((prev) => ({
                    ...prev,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Header />
            <Left />
            <div className="new-post">
                <form className="post-form" onSubmit={handleSubmit}>
                    <h1>Create New Post</h1>
                    <label htmlFor="post-content">Post Content</label>
                    <textarea
                        onChange={handleChange}
                        value={post.content}
                        placeholder="Enter post Content"
                        name="content"
                        id="post-content"
                        style={{ whiteSpace: "pre-wrap" }}
                        rows={5}
                        required
                    ></textarea>

                    <label htmlFor="upload-image">Upload Image</label>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        ref={inputRef}
                        name="image"
                        id="upload-image"
                    />

                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
};

export default NewPost;
