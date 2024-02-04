// import logo from './logo.svg';
// import './App.css'; // Moved some of it to the index.css
import { React, useState } from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))
  const [newItem, setNewItem] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    let id

    if (!items.length) {
      id = 1
    } else {
      id = items.reduce((acc, item) =>
        item.id > acc.id ? item : acc
      ).id + 1
    }

    const myNewItem = {
      id,
      item,
      checked: false,
    }

    setAndSaveItems([...items, myNewItem])
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )

    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return

    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header
        title='Grocery List'
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
