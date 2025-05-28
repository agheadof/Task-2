import { useState } from 'react'
import './Nav.css'
import menu from './../../../assets/imges/menu.svg'
const Nav = ({ logo, items }) => {
  const [navActive, setNavActive] = useState(items[0]?.content)
  const [showNav, setShowNav] = useState(false)
  return (
    <>
    <nav>
      <div className='desktop-nav'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <ul className='desktop-ul'>

          {items.map((item, index) => {
            return (
              <li key={index} className={'nav-item ' + (navActive === item?.content ? 'active' : '') + (item?.content === 'Contact' ? ' contact' : '')}> <a href={item?.link} onClick={() => setNavActive(item?.content)}>{item?.content}</a> </li>
            )
          })}

        </ul>
        <button className='menu-button' onClick={() => { setShowNav(!showNav) }}><img src={menu} /></button>

      </div>

      

    </nav>
    
    <div className={'mobile-nav' + (showNav ? ' show-nav' : '')}>
        <ul>

          {items.map((item, index) => {
            return (
              <li key={index} className={(navActive === item?.content ? 'active' : '') + (item?.content === 'Contact' ? ' contact' : '')}> <a href={item?.link} onClick={() => setNavActive(item?.content)}>{item?.content}</a> </li>
            )
          })}

        </ul>
      </div>
      </>

  )
}

export default Nav