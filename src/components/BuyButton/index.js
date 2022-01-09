/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, switchLocation } from "../../redux/actions"
import './BuyButton.css'

export default function BuyButton({ item, inCart }) {
    const dispatch = useDispatch()

    const [status, setStatus] = React.useState(false)
    const [text, setText] = React.useState('Купить')

    const cart = useSelector(state => state.store.cart)

    useEffect(() => {
        setStatus(inCart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [inCart, cart])

    function buy(e) {
        e.preventDefault()
        setStatus(true)
        dispatch(addToCart(item))
        setText('В корзину')
        
    }

    return (
        <>
            {status ? <Link to='/cart' className="buy-btn" onClick={() => dispatch(switchLocation())}>Корзина</Link> : <a href='\' className="buy-btn" onClick={e => buy(e)}>{text}</a>}
        </>
    )
}