import { useState, useEffect } from 'react'

export const useSlidersState = (API) => {
  const [sliders, setSliders] = useState({})

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSliders(data))
  }, [])

  return sliders
}
