import React from 'react'
import {Link} from 'react-router-dom'

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function Top() {
  return (
    <ul>
      {ids.map(id => (
        <li key={id}>
          <Link to={`/products/${id}`}>product {id}</Link>
        </li>
      ))}
    </ul>
  )
}
