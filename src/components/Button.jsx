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
    className= {`flex items-center justify-center bg-primary w-10 h-10 rounded-lg hover:bg-primarydarkhover ${className}`} 
   {...props}
    >
        {children}
    </button>
  )
}

export default Button;   