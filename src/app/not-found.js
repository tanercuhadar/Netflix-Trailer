import React from 'react'
import Link from 'next/link'

function NotFound() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "#000",
                color: "white",
            }}
        >
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404 - Page Not Found</h1>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>The page you are looking for does not exist.</p>
            <Link
                href="/"
                style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    padding: "12px 24px",
                    backgroundColor: "#e50914",
                    color: "white",
                    borderRadius: "6px",
                    transition: "background-color 0.3s ease"
                }}
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFound 