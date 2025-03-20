import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-6 z-50 pointer-events-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-400 text-xs">
          © 2023 ChatAndBuild | Cosmic Creator
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
