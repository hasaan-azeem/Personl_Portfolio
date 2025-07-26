import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css' // Important for styles

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    })

    return () => scroll.destroy()
  }, [])

  return (
    <div data-scroll-container>
      {children}
    </div>
  )
}

export default SmoothScrollWrapper
