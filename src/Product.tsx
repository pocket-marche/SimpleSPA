import React from 'react'
import {useParams, Link} from 'react-router-dom'

export function Product() {
  const {id} = useParams<{id: string}>()
  return (
    <div>
      <h1>This is SPA Product {id}</h1>
      <div>
        <Link to={`/products/${Number(id) + 1}`}>Next with Link</Link>
      </div>
      <div>
        <a href={`/products/${Number(id) + 1}`}>Next with a tag</a>
      </div>
    </div>
  )
}
