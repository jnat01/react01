import { React } from 'react'
import ItemList from './ItemList'

const Content = ({
  items,
  handleCheck,
  handleDelete,
}) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <div>
          Nothing on your list
        </div>
      )}
    </main>
  )
}

export default Content