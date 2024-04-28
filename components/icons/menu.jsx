import React from 'react'

export const Menu = ({ size, fill, onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={onClick}
            style={{ width: size, height: size, fill, cursor: "pointer" }}
        >
            <path fill="none" stroke={fill} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352" />
        </svg>
    )
}