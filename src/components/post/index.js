import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Post({post}){

    return (
        <div className="post-container">
            <div>
                <img className="post-image" src={post.image}>
                </img>
            </div>
            <div>
                <p className="post-date">{post.date}</p>
                <Link to="#">
                    <p className="post-title">{post.title}</p>
                </Link>
                <p className="post-description"> {post.description} </p>
                

            </div>

        </div>

    )
}