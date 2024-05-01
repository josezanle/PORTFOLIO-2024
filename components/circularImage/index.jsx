import Image from 'next/image'
import { Fragment } from 'react'

export const CircularImage = ({ src = "", alt = '', size = 100, ...props }) => {
    return (
        <Fragment>
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                className='bordered__image'
                style={{ borderRadius: "100%", objectFit:"contain" }}
                {...props}
            />
        </Fragment>
    )
}
