import React from 'react';

export const ProgressBar = ({value=0}) => {
  return (
    <div className='progress'>
        <span>{value}%</span>
        <div>

        </div>
    </div>
  )
}
