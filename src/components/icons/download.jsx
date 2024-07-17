import React from 'react'

export const Download = ({ size, fill, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={onClick} 
            style={{ width: size, height: size, fill, cursor: "pointer" }}
        >
            <path
                d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="42"
            />
            <path
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="42"
                d="M176 272l80 80 80-80M256 48v288"
            />
        </svg>
    )
}