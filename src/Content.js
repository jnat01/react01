import {React, useState} from 'react'

const Content = () => {
  const [name, setName] = useState('Ricky')
  const [count, setCount] = useState(0)

  const handleNameChange = () => {
    const names = ['Bob', 'Dave', 'Jim']
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }

  const handleClick = () => {
    setCount(count + 1) 
    /**
     *  current value of state enters the function, even if you use a setter
     *  the value of the currentState is what is logged
     * */  
    console.log(count)
  }

  const handleClick2 = () => {
    console.log(count)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello { name } { count }
      </p>
      <button onClick={handleNameChange}>
        Change Name
      </button>
      <button onClick={handleClick}>
        Check Count
      </button>
      <button onClick={handleClick2}>
        handleClick2
      </button>
      <button onClick={(e) => handleClick3(e)}>
        Click it 3
      </button>
    </main>
  )
}

export default Content