import React from 'react'
const year= new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
       <div className="container">
         <p>
            &copy; copyright  {year}
         </p>
         <span><a href="#!">MIB</a></span>
       </div>
    </footer>
  )
}

export default Footer