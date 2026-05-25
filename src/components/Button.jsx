import React from 'react'
import { baseClasses, sizeClasses } from '../assets/assets'

export const Button = ({ className = '', size = 'default', children, ...props }) => {

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className='relative flex items-center justify-center gap-2'>
        {children}
      </span>
    </button>
  )
}
