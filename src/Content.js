import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Dave', 'Jim']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  const handleClick = () => {
    console.log('you clicked it')
  }

  const handleClick2 = (name) => {
    console.log(`hello ${name}`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello { handleNameChange() }
      </p>
      <button onClick={() => handleClick2('Foo')}>
        Click it 2
      </button>
      <button onClick={(e) => handleClick3(e)}>
        Click it 3
      </button>
    </main>
  )
}

export default Content