import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { switchLocation } from "../../redux/actions"
import BuyButton from "../BuyButton"
import './Item.css'

export default function Item(props) {
    const cart = useSelector(state => state.store.cart)
    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        cart.forEach(element => {
            if (element.id === props.item.id) {
                setInCart(true)
            }
        });
    })

    const dispatch = useDispatch()

    return (
        <div className='item'>
            <img src={props.item.img} alt={props.item.description} className="item-img" />
            <div className="item-about">
                <p>{props.item.name}</p>
                <Link to={`/${props.item.id}`} onClick={() => dispatch(switchLocation())}>Подробнее</Link>
            </div>
            <div className="item-stuff">
                <p>{props.item.price}</p>
                <BuyButton item={props.item} inCart={inCart} />
            </div>
        </div>
    )
}