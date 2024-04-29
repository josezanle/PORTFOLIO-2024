import React from 'react'

export const Medical = ({ size, fill, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={onClick}
            style={{ width: size, height: size, fill, cursor: "pointer" }}
            className='spin'
        >
            <path d="M429.93 174.27l-16.47-28.59a15.49 15.49 0 00-21.15-5.7l-98.39 57a4 4 0 01-6-3.5L288 80a16 16 0 00-16-16h-32a16 16 0 00-16 16l.07 113.57a4 4 0 01-6 3.5l-98.39-57a15.49 15.49 0 00-21.15 5.7l-16.46 28.6a15.42 15.42 0 005.69 21.1l98.49 57.08a4 4 0 010 6.9l-98.49 57.08a15.54 15.54 0 00-5.69 21.1l16.47 28.59a15.49 15.49 0 0021.15 5.7l98.39-57a4 4 0 016 3.5L224 432a16 16 0 0016 16h32a16 16 0 0016-16l-.07-113.67a4 4 0 016-3.5l98.39 57a15.49 15.49 0 0021.15-5.7l16.47-28.59a15.42 15.42 0 00-5.69-21.1l-98.49-57.08a4 4 0 010-6.9l98.49-57.08a15.51 15.51 0 005.68-21.11z"
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="40" />
                
            <style jsx>{`
                .spin{animation: spin 3s infinite linear}
                @keyframes spin {
                0% { transform: rotate(0deg)}
                100% { transform: rotate(360deg)}
                }
            `}</style>
        </svg>
    )
}