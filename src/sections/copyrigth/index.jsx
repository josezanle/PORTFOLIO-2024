import { LGBLACK, WHITE, YELLOW } from '@/theme'
import React from 'react'

const CopyRigth = () => {
  return (
      <div className='CopyRigth__container'>
      <h2 className="year">&#x2605; 2024</h2>
      <p className='text'>Developed by Zanle Studio - All Rights Reserved</p>
        <style jsx>
            {`
            .CopyRigth__container {
                width: 100%;
                background: ${LGBLACK};
                color: grey;
                text-align: center;
                padding-bottom: 2em;
            }
            .CopyRigth__container .year {
                width: 100%;
                color: ${WHITE} ;
                text-align: center;
                font-size: 14px;
            }
            .CopyRigth__container .text{
              color: ${YELLOW};
              text-align: center;
              font-size: 13px;
            }
            `}
        </style>
      </div>
  )
}

export default CopyRigth