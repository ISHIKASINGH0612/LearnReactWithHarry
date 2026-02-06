import React from 'react'

const Footer = () => {
    let footerStyle={
      position: "fixed",
      bottom: "0",
      width: "100%"
    };
    
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      made by Ishika Singh with love for learning purpose only @febuaray 2026
    </footer>
  )
}

export default Footer
