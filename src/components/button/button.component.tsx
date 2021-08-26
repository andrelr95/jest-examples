import React from 'react'

interface ButtonProps {
  textColor?: string
  backgroundColor?: string
}
const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button 
      style={{
        color: props.color || 'white',
        backgroundColor: props.backgroundColor || 'blue'
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button