import React from "react";

import "./Post.css";
import Comment from "../../components/Comment/Comment";
import ProfilePic from "../../assets/users-images/profile pic.webp";
import PostImage from "../../assets/bg-images/bg-sign-in-basic.jpeg";
import LikeIcon from "../../assets/thumbs-up-solid.svg";
import CommentIcon from "../../assets/comment-solid.svg";
import ShareIcon from "../../assets/share-solid.svg";
import Loader from "../../Common/Loader";

const Post = ({ allPosts }) => {
    if (!allPosts) {
        return <Loader />;
    }

    return allPosts.map((post) => (
        <div className="post" key={post.id}>
            <div className="post-header">
                <div className="post-header-left">
                    <img
                        src={post.authorProfilePic}
                        alt="post profile picture"
                    />

                    <div className="post-details">
                        <h2>{post.authorName}</h2>
                        <p>{new Date(post.timestamp).toLocaleString()}</p>
                    </div>
                </div>
                <h1>...</h1>
            </div>
            <div className="post-body">
                <div className="post-content">
                    <div style={{ whiteSpace: "pre-wrap" }}>{post.content}</div>
                    {post.image && <img src={post.image} alt="Post content" />}
                </div>

                <div className="post-actions">
                    <button>
                        Like{" "}
                        <span>
                            ({post.likes}) <img src={LikeIcon} alt="" />
                        </span>
                    </button>
                    <button>
                        Comment{" "}
                        <span>
                            ({post.comment?.length || 0}){" "}
                            <img src={CommentIcon} alt="" />
                        </span>
                    </button>
                    <button>
                        Share{" "}
                        <span>
                            (0) <img src={ShareIcon} alt="" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    ));
};

export default Post;
