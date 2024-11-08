import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * ScrollToTop component ensures the window scrolls to top on route change.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {JSX.Element} The rendered ScrollToTop component.
 */
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollToTop
