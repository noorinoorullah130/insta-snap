import React, { useState, useEffect } from "react";
import "./Post.css";
import LikeIcon from "../../assets/thumbs-up-solid.svg";
import CommentIcon from "../../assets/comment-solid.svg";
import ShareIcon from "../../assets/share-solid.svg";
import Loader from "../../Common/Loader";
import Comment from "./../Comment/Comment";

const Post = ({ allPosts }) => {
    const [localPosts, setLocalPosts] = useState([]);
    const [activeCommentPostId, setActiveCommentPostId] = useState(null);

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Initialize and sync posts
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        const formattedNewPosts =
            allPosts?.map((post) => ({
                ...post,
                likes: post.likes || 0,
                isLiked: post.isLiked || false,
                comments: post.comments || [],
            })) || [];

        // Merge new posts with saved posts, removing duplicates
        const mergedPosts = [
            ...formattedNewPosts.filter(
                (newPost) =>
                    !savedPosts.some((savedPost) => savedPost.id === newPost.id)
            ),
            ...savedPosts,
        ];

        setLocalPosts(mergedPosts);
    }, [allPosts]);

    // Save to localStorage when posts change
    useEffect(() => {
        if (localPosts.length > 0) {
            localStorage.setItem("posts", JSON.stringify(localPosts));
        }
    }, [localPosts]);

    const handleLike = (postId) => {
        setLocalPosts((prevPosts) =>
            prevPosts.map((post) => ({
                ...post,
                likes:
                    post.id === postId
                        ? post.isLiked
                            ? post.likes - 1
                            : post.likes + 1
                        : post.likes,
                isLiked: post.id === postId ? !post.isLiked : post.isLiked,
            }))
        );
    };

    const handleCommentToggle = (postId) => {
        setActiveCommentPostId((prev) => (prev === postId ? null : postId));
    };

    const handleAddComment = (postId, commentText) => {
        setLocalPosts((prevPosts) =>
            prevPosts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [
                            ...post.comments,
                            {
                                id: Date.now(),
                                text: commentText,
                                author: loggedInUser.name,
                                authorImage: loggedInUser.image,
                                timestamp: new Date().toISOString(),
                            },
                        ],
                    };
                }
                return post;
            })
        );
    };

    if (!localPosts.length) {
        return (
            <p className="no-posts">
                No posts available. Please create new posts.
            </p>
        );
    }

    // Sort posts by timestamp (newest first)
    const sortedPosts = [...localPosts].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    return sortedPosts.map((post) => (
        <div className="post" key={post.id}>
            <div className="post-header">
                <div className="post-header-left">
                    <img
                        src={post.authorProfilePic}
                        alt="post profile picture"
                        className="post-profile-img"
                    />
                    <div className="post-details">
                        <h2 className="post-author">{post.authorName}</h2>
                        <p className="post-time">
                            {new Date(post.timestamp).toLocaleString()}
                        </p>
                    </div>
                </div>
                <h1 className="post-options">...</h1>
            </div>
            <div className="post-body">
                <div className="post-content">
                    <div
                        style={{ whiteSpace: "pre-wrap" }}
                        className="post-text"
                    >
                        {post.content}
                    </div>
                    {post.image && (
                        <img
                            src={post.image}
                            alt="Post content"
                            className="post-image"
                        />
                    )}
                </div>

                <div className="post-actions">
                    <button
                        onClick={() => handleLike(post.id)}
                        className={`like-button ${post.isLiked ? "liked" : ""}`}
                    >
                        Like{" "}
                        <span className="action-count">
                            ({post.likes}){" "}
                            <img
                                src={LikeIcon}
                                alt="Likes"
                                className="action-icon"
                            />
                        </span>
                    </button>
                    <button
                        onClick={() => handleCommentToggle(post.id)}
                        className="comment-button"
                    >
                        Comment{" "}
                        <span className="action-count">
                            ({post.comments?.length || 0}){" "}
                            <img
                                src={CommentIcon}
                                alt="Comments"
                                className="action-icon"
                            />
                        </span>
                    </button>
                    <button className="share-button">
                        Share{" "}
                        <span className="action-count">
                            (0){" "}
                            <img
                                src={ShareIcon}
                                alt="Share"
                                className="action-icon"
                            />
                        </span>
                    </button>
                </div>
                {activeCommentPostId === post.id && (
                    <Comment
                        comments={post.comments || []}
                        onAddComment={(comment) =>
                            handleAddComment(post.id, comment)
                        }
                    />
                )}
            </div>
        </div>
    ));
};

export default Post;
