import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 z-50 pointer-events-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold arcade-title">
          <span className="text-blue-500">Chat</span>And<span className="text-purple-500">Build</span>
        </div>
        <button className="btn-primary text-xs">
          Start Creating
        </button>
      </div>
    </header>
  )
}

export default Header
