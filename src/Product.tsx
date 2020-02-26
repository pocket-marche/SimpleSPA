import React from 'react'
import {useParams} from 'react-router-dom'

export function Product() {
  const {id} = useParams<{id: string}>()
  return <div>This is SPA Product {id}</div>
}
