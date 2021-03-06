import React from 'react'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import { Outlet } from 'react-router-dom'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default WebsiteLayout