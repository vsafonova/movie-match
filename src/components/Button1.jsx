export default Button({text = 'default value', handleClick}) {
   return (    
     <button onClick={handleClick}>{text}</button>
  )
}