import React, { useState } from "react";
import "./Comment.css";
import SendIcon from "../../assets/sent.png";
import ProfilePic from "../../assets/users-images/profile pic.webp"; // Add this import

const Comment = ({ comments, onAddComment }) => {
    const [newComment, setNewComment] = useState("");

    const handleSubmit = () => {
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment("");
        }
    };

    return (
        <div className="comment">
            <div className="comment-input">
                <input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                />
                <img
                    src={SendIcon}
                    className="sent-icon"
                    onClick={handleSubmit}
                    alt="Send comment"
                />
            </div>

            <div className="all-comments">
                {comments.map((comment) => (
                    <div className="single-comment" key={comment.id}>
                        <div className="comment-detail">
                            <img
                                src={comment.authorImage || ProfilePic}
                                alt={comment.author}
                            />
                            <div>
                                <h4>{comment.author}</h4>
                                <p>
                                    {new Date(
                                        comment.timestamp
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>
                        <p className="comment-content">- {comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comment;
