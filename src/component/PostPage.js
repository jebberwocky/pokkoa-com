import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

function PostPage() {
    const { category, year } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Try to load the post file
        fetch(`/posts/${category}/${year}.md`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Post not found');
                }
                return res.text();
            })
            .then(content => {
                // Check if content looks like HTML (which means file doesn't exist)
                if (content.trim().startsWith('<!DOCTYPE') || content.trim().startsWith('<html')) {
                    throw new Error('Post not found');
                }
                setPost({ content });
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error loading post:', err);
                setError(true);
                setLoading(false);
            });
    }, [category, year]);

    if (loading) {
        return (
            <Container className="my-5" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <p>Loading...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="my-5" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h2>Post Not Found</h2>
                <p>The post you're looking for doesn't exist.</p>
                <p>
                    <a href="/">← Back to Home</a>
                </p>
            </Container>
        );
    }

    return (
        <Container className="my-5" style={{ maxWidth: '800px' }}>
            <article>
                <div
                    className="post-content"
                    style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#333'
                    }}
                >
                    <ReactMarkdown
                        components={{
                            // Custom styling for markdown elements
                            h1: ({node, ...props}) => <h1 style={{marginTop: '2rem', marginBottom: '1rem'}} {...props} />,
                            h2: ({node, ...props}) => <h2 style={{marginTop: '1.5rem', marginBottom: '0.75rem'}} {...props} />,
                            h3: ({node, ...props}) => <h3 style={{marginTop: '1.25rem', marginBottom: '0.5rem'}} {...props} />,
                            p: ({node, ...props}) => <p style={{marginBottom: '1rem'}} {...props} />,
                            a: ({node, ...props}) => <a style={{color: '#0066cc'}} {...props} />,
                            ul: ({node, ...props}) => <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}} {...props} />,
                            ol: ({node, ...props}) => <ol style={{marginBottom: '1rem', paddingLeft: '2rem'}} {...props} />,
                            li: ({node, ...props}) => <li style={{marginBottom: '0.5rem'}} {...props} />,
                            code: ({node, inline, ...props}) =>
                                inline
                                    ? <code style={{backgroundColor: '#f5f5f5', padding: '2px 6px', borderRadius: '3px', fontFamily: 'monospace'}} {...props} />
                                    : <code style={{display: 'block', backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '5px', overflowX: 'auto', fontFamily: 'monospace'}} {...props} />,
                            pre: ({node, ...props}) => <pre style={{backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '5px', overflowX: 'auto'}} {...props} />
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </Container>
    );
}

export default PostPage;