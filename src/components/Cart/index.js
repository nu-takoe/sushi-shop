import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setTotalPrice, switchLocation } from "../../redux/actions"
import CartItem from "../CartItem"
import './Cart.css'

export default function Cart() {
    const cart = useSelector(state => state.store.cart)
    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)

    //доступность кнопки оформить заказ
    const [readyToOrder, setReadyToOrder] = useState(true)

    const order = (<Link className="order-btn" to='/order' onClick={() => dispatch(setTotalPrice(total))}>Оформить заказ</Link>)
    const disabledOrder = (<Link className="order-btn" to='/' onClick={() => dispatch(switchLocation())}>Невозможно оформить заказ, корзина пуста</Link>)

    useEffect(() => {
        if (!cart.length) setReadyToOrder(false)
        setTotal(0)
        cart.forEach(element => {
            setReadyToOrder(true)
            setTotal((prev) => prev + element.price * element.current)
        });
    }, [cart])

    return (
        <div className='cart'>
            <h2>Ваши покупки:</h2>

            <div className="cart-list">
                {cart.map(item => <CartItem key={item.id} item={item} />)}
            </div>

            <div className="total-price">
                <p>Итого: {total}</p>
            </div>

            {readyToOrder ? order : disabledOrder}
        </div>
    )
}