// rfce
import React from 'react'
import ytLogo from './images/yt-logo.png'
import searchIcon from './images/search.png'
import {BsFillMicFill} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div class="header">
                <div class="header-items header-logo">
                    <div class="header-first">
                        <GiHamburgerMenu />
                    </div>
                    <div class="header-second">
                        {/* <a href='/'><img id='yt-logo' src={ytLogo}/></a> */}
                        <Link to={'/'}><img id='yt-logo' src={ytLogo}/></Link>
                    </div>
                </div>
                <div class="header-items header-center">
                    {/* <div class="header-search"></div> */}
                    <input class="header-search" placeholder='Search..'/>
                    <button class="search-button">
                        {/* <img class="small-image" src={searchIcon}></img> */}
                        <BiSearch class="search-icon" />
                    </button>
                    <div class="header-mic">
                         <BsFillMicFill class="search-icon" />
                    </div>
                </div>
                <div class="header-items header-profile">
                    {/* <div class="header-tools"></div> */}
                    <button class="header-tools">Sign In</button>
                </div>
            </div>
    </div>
  )
}

export default Header
