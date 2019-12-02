import { useState, useEffect } from 'react'

export const useBoxIconsState = (API) => {
  const [boxIcon, setBoxIcons] = useState({})

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setBoxIcons(data))
  }, [])

  return boxIcon
}
