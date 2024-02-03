import { React, useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1, 
      checked: false,
      item: 'item 1'
    },
    {
      id: 2, 
      checked: false,
      item: 'item 2'
    },
    {
      id: 3, 
      checked: false,
      item: 'item 3'
    },
  ])

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className='item'
            >
              <input
                type='checkbox'
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? {textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role='button'
                tabIndex='0'
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          Nothing on your list
        </div>
      )}
    </main>
  )
}

export default Content