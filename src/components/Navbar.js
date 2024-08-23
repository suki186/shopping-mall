import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faCartShopping, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {

    const menuList= ['NEW', 'ANIMALS', 'AMUSEABLES', 'BAGS & CHARMS', 'ALL PRODUCTS'];

    const navigate = useNavigate();
    const [width, setWidth] = useState(0);

    const goToLoginpage =()=> {
        authenticate === false ? navigate("/login") : navigate("/");
        setAuthenticate(false);
    }

    const goToHomepage =()=> {
        navigate("/");
    }

    const search =(event)=> {
        if (event.key == "Enter") {
            console.log("Search key");

            // 입력한 검색어를 읽어와 url 바꾸기
            const keyword = event.target.value;
            navigate(`/?q=${keyword}`);

            event.target.value = '';
        }

    }

    return (
        <div className='navber'>

            <div className="side-menu" style={{ width: width }}>
                <FontAwesomeIcon className="exit-btn" icon={faX} onClick={() => setWidth(0)} />

                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </div>

                <div className='search-box2'>
                    <FontAwesomeIcon icon={faSearch} className='search-btn'/>
                    <input type='text' className='search-input' placeholder='Search..' onKeyPress={(event)=>search(event)} />
                </div>

            </div>

            <div className='top-bar'>
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(200)} />
                </div>

                <div className='bag-button'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>  

                <div className='login-button' onClick={goToLoginpage}>
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    <FontAwesomeIcon icon={authenticate == true ? faUserSolid : faUserRegular} />
                </div>  
            </div>

            <div className='logo-img'>
                <img width={200} src='https://cdn11.bigcommerce.com/s-fz2bnmwg7y/images/stencil/250x100/jellycat-logo-250x100_1707353282__97555.original.png' onClick={goToHomepage}/>
            </div>

            <div className='menu-area'>

                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} className='search-btn'/>
                    <input type='text' className='search-input' placeholder='Search..' onKeyPress={(event)=>search(event)} />
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