import React from "react";

import "./Post.css";
import Comment from "../../components/Comment/Comment";
import ProfilePic from "../../assets/users-images/profile pic.webp";
import PostImage from "../../assets/bg-images/bg-sign-in-basic.jpeg";
import LikeIcon from "../../assets/thumbs-up-solid.svg";
import CommentIcon from "../../assets/comment-solid.svg";
import ShareIcon from "../../assets/share-solid.svg";

const Post = () => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-left">
                    <img src={ProfilePic} alt="post profile picture" />

                    <div className="post-details">
                        <h2>Noorullah</h2>
                        <p>{new Date().toLocaleString()}</p>
                    </div>
                </div>
                <h1>...</h1>
            </div>
            <div className="post-body">
                <div className="post-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur fugiat repudiandae tempora, dolore dolores
                        sapiente hic delectus fugit nisi doloribus et quia!
                        Omnis, exercitationem asperiores ut unde adipisci
                        perferendis officia.
                    </p>
                    <img src={PostImage} alt="" />
                </div>

                <div className="post-actions">
                    <button>
                        Like{" "}
                        <span>
                            (10) <img src={LikeIcon} alt="" />
                        </span>
                    </button>
                    <button>
                        Comment{" "}
                        <span>
                            (10) <img src={CommentIcon} alt="" />
                        </span>
                    </button>
                    <button>
                        Share{" "}
                        <span>
                            (10) <img src={ShareIcon} alt="" />
                        </span>
                    </button>
                </div>
            </div>

            <Comment />
        </div>
    );
};

export default Post;
