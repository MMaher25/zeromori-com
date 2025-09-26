import React from 'react'

const Footer = () => {
  return (
      <footer className="
        absolute
        bottom-0
        flex
        w-screen
        flex-col
        items-center
        text-center
        justify-center
      ">
        <p>© {new Date().getFullYear()} Zero Mori. All rights reserved.</p>
        <p>Hero image courtesy of <a href="https://www.instagram.com/contrairephoto/">Contraire Photo</a>.</p>
      </footer>
  )
}

export default Footer