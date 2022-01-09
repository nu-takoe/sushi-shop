import React from 'react' 
import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart, icreaceItem, reduceItem } from "../../redux/actions"
import './CartItem.css'

export default function CartItem(props) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.store.cart)
    
    React.useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function reduce() {
        dispatch(reduceItem(props.item.id, props.item.current, props.item.name))
    }

    function increace() {
        dispatch(icreaceItem(props.item.id))
    }

    function remove(){
        if(cart.length === 1){
            localStorage.setItem('cart', [])
        }
        dispatch(deleteFromCart(props.item.name))
    }

    return (
        <div className='cart-item'>
            <div className="cart-pos-img">
                <img alt="cart-pos" src={props.item.img} />
            </div>

            <p className="cart-pos-name">{props.item.name}</p>
            <p className="cart-pos-price">{props.item.price}</p>

            <div className='item-current'>
                <button onClick={reduce}>-</button>
                <p>{props.item.current}</p>
                <button onClick={increace}>+</button>
            </div>

            <div className="cart-pos-remove">
                <button onClick={remove}>Удалить</button>
            </div>
        </div>
    )
}