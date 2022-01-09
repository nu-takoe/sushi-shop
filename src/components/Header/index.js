import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { goHome, switchLocation } from "../../redux/actions"
import './Header.css'

export default function Header() {
    const location = useSelector(state => state.app.location)
    const dispatch = useDispatch()

    const cartHref = (<Link className="header-button" to='/cart' onClick={() => dispatch(switchLocation())}>корзина 🛒</Link>)
    const shopHref = (<Link className="header-button" to='/' onClick={() => dispatch(switchLocation())}>магазин 🏯</Link>)

    return (
        <>
        <header className="header">
            <Link className="logo-button" to='/' onClick={() => dispatch(goHome())}>РОЛЛЫ 🍣</Link>
            {location ? cartHref : shopHref}
        </header>

        <Outlet/>

        </>
    )
}