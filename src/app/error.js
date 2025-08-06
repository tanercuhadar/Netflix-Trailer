'use client'

import React from 'react'
import Link from 'next/link'

function Error({ error, reset }) {
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
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Something went wrong!</h1>
            <p style={{ fontSize: "20px", marginBottom: "30px" }}>An error has occurred. Sorry for that!</p>
            <div style={{ display: "flex", gap: "20px" }}>
                <button
                    onClick={reset}
                    style={{
                        fontSize: "18px",
                        padding: "12px 24px",
                        backgroundColor: "#e50914",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease"
                    }}
                >
                    Try again
                </button>
                <Link
                    href="/"
                    style={{
                        textDecoration: "none",
                        fontSize: "18px",
                        padding: "12px 24px",
                        backgroundColor: "#333",
                        color: "white",
                        borderRadius: "6px",
                        transition: "background-color 0.3s ease"
                    }}
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default Error 