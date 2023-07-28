import React from 'react'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'
import { TopHeader } from './topHeader/TopHeader'
import './MainHeader.css';

export const MainHeader = () => {
  return (
    <>
      <div>
        <TopHeader />
      </div>
      <div className='header'>
        <Navbar />
        <Header />
      </div>

    </>
  )
}
