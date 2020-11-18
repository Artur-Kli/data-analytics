import React, { useState } from 'react'
import { Link } from '@reach/router'

export default function ResponsiveNavigation({navLinks, background, hoverBackground, linkColor, logo}) {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav 
      className="responsive-toolbar"
      style={{background}}
    >
      <ul 
        style={{background}}
        className={navOpen ? 'active' : ''}
      >
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="30px" width="30px" alt="logo-nav-toggler" />
        </figure>
        {navLinks.map((link, index) => 
          <li
            key={index}
            onMouseEnter={()=> setHoverIndex(index)}
            onMouseLeave={()=> setHoverIndex(-1)}
            style={{background: hoverIndex === index ? (hoverBackground || '#999'): ''}}
          >
            <Link 
              to={link.path} 
              style={{color: linkColor}}
            >
              {link.text}
              <i className={link.icon} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
