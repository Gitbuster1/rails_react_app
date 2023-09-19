import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

function PostDetails() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                    setLoading(false);
                } else {
                    throw response;
                }
            } catch (e) {
                console.error("An error occurred:", e);
            }
        };
        fetchCurrentPost();
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
            <Link to="/">Back to posts</Link>
        </div>
    );
}

export default PostDetails;
