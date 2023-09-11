import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import setBodyColor from '../utilities/bodyColor'
import { useState } from 'react'
export default function Layout () {
    let time = new Date().getHours()
    console.log(time)
    // "1995-12-25T21:15:30"
    const [isNight, setIsNight] = useState(time >= 20 || time < 6)
   
    if(isNight){
        setBodyColor('night')
    }else{
        setBodyColor() 
    }
    return (
        <>
        <Header isNight={isNight}/>
        <Outlet isNight={isNight}/>
        <Footer isNight={isNight}/>
        </>
    )
}