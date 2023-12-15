import React from 'react'

const Button = ({
    type = 'button',
    children='button',
    className = '',
    ...props
}
) => {
  return (
    <button 
    type={type}
    className= {`flex items-center justify-center py-2 px-6 rounded-lg hover:bg-primary dark:hover:text-white ${className}`} 
   {...props}
    >
        {children}
    </button>
  )
}

export default Button;   