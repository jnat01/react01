// import logo from './logo.svg';
// import './App.css'; // Moved some of it to the index.css
import { React, useState, useEffect } from 'react'
import Header from './Header'
import SearchItem from './SearchItem'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'

function App() {
  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch(err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    // simulated loading times, to give an idea of actual api requests.
    // you wouldn't do this in actual implementation
    setTimeout(() => {
      fetchItems()
    }, 2000)
  }, [])

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

    setItems([...items, myNewItem])
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )

    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    
    setItems(listItems)
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
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => (
            (item.item).toLowerCase()).includes(search.toLowerCase()
          ))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
