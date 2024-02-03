import React from 'react'

const Footer = ({
  length,
}) => {
  const today = new Date()

  return (
    <footer>
      <div>
        {length} List {length === 1 ? 'item' : 'items'}
      </div>
      <div>
        Copyright &copy; {today.getFullYear()}
      </div>
    </footer>
  )
}

export default Footer