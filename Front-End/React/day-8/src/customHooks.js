import { useState, useEffect } from 'react'

export function useSessionStorage(key) {

  const [data, setData] = useState(() => {
    const dataFromSessionStorage = window.sessionStorage.getItem(key)
    return dataFromSessionStorage || ''
  })

  useEffect(() => {
    window.sessionStorage.setItem(key, data)
  }, [data])

  return [data, setData]
}