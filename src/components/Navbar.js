import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {

    const menuList= ['NEW', 'ANIMALS', 'AMUSEABLES', 'BAGS & CHARMS', 'COLLECTIONS'];

  return (
    <div>
        <div className='top-bar'>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} />
            </div>  
        </div>

        <div className='logo-img'>
            <img width={200} src='https://cdn11.bigcommerce.com/s-fz2bnmwg7y/images/stencil/250x100/jellycat-logo-250x100_1707353282__97555.original.png' />
        </div>

        <div className='menu-area'>

            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} className='search-btn'/>
                <input type='text' className='search-input' placeholder='Search..'/>
            </div>

            <ul className='menu-list'>
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>

            
        </div>
    </div>
  )
}

export default Navbar