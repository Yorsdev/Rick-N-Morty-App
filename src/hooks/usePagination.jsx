import { useEffect, useState } from "react"

export const usePagination = (items, maxItemsVisible = 5) => {
  const [page, setPage] = useState()
  

  useEffect(() => {
    setPage(1)
}, [items])

  const prev = () => {
    setPage(page - 1)
  
  }
  const next = () => {
    setPage(page + 1)
  }
  
  const itemsPagination = items.slice((page - 1) * maxItemsVisible, page *
  maxItemsVisible)
  
  const totalPages = Math.ceil(items.length / maxItemsVisible)

  return {
  prev, 
  next, 
  itemsPagination, 
  totalPages,
  page,
  maxItemsVisible
  }
}

