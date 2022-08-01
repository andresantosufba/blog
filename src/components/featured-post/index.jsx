import React from "react";
import "./styles.css";
import AuthorBadge from "../author-badge";
import { Link } from "react-router-dom";

export default function FeaturedPost({ post }){

    return (
        <div className="featured-post-container">
            <div>
                <img className="featured-post-image" src={post.image}>
                </img>
            </div>
            <div>
                <p className="featured-post-date">{post.date}</p>
                <Link to="/" className="featured-post-title">{post.title}</Link>
                <p className="featured-post-description"> {post.description} </p>
                <AuthorBadge/>

            </div>

        </div>

    )
}