import React from 'react'

export const Close = ({ size, fill, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={onClick}
            style={{
                width: size,
                height: size,
                fill,
                cursor: "pointer",
                marginRight: "-10px"
            }}
        >
            <path
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
            />
        </svg>
    )
}