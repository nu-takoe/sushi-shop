import { useState } from "react"
import { useSelector } from "react-redux"
import './Order.css'

export default function Order() {
    const total = useSelector(state => state.store.totalPrice)
    const cart = useSelector(state => state.store.cart)

    const [info, setInfo] = useState({
        name: null,
        number: null,
        city: 12,
        street: null,
        houseNumber: null
    })

    const order = {
        cart,
        info
    }

    function sendOrder(e) {
        for (let prop in info) {
            if (info[prop] == null || !info[prop]) {
                e.preventDefault()
                alert('Вы заполнили не всю информацию')
                return
            }
        }

        e.preventDefault()
        alert(JSON.stringify(order))
    }

    function changeName(e) {
        let regexp = /\d/
        let newName = e.target.value

        if (!newName.match(regexp)) {
            setInfo(prev => ({
                ...prev,
                name: newName
            }))
        } else {
            e.target.value = newName.slice(0, -1)
        }
    }

    function changeCity(e) {
        let regexp = /\d/
        let newValue = e.target.value

        if (!newValue.match(regexp)) {
            setInfo(prev => ({
                ...prev,
                city: newValue
            }))
        } else {
            e.target.value = newValue.slice(0, -1)
        }
    }

    function changeStreet(e) {
        let regexp = /\d/
        let newValue = e.target.value

        if (!newValue.match(regexp)) {
            setInfo(prev => ({
                ...prev,
                street: newValue
            }))
        } else {
            e.target.value = newValue.slice(0, -1)
        }
    }

    function changeHouseNumber(e) {
        //оставил ввод букв для литеров и тд
        let newValue = e.target.value

        setInfo(prev => ({
            ...prev,
            houseNumber: newValue
        }))
    }


    function changeNumber(e) {
        let input = e.target.value
        let inputNumber = input.replace(/\D/g, '')
        let formattedNumber = ''

        if (inputNumber.length >= 1) {
            formattedNumber = '(' + inputNumber.substring(0, 3)
        }

        if (inputNumber.length >= 4) {
            formattedNumber += ') ' + inputNumber.substring(3, 6)
        }

        if (inputNumber.length >= 7) {
            formattedNumber += '-' + inputNumber.substring(6, 8)
        }

        if (inputNumber.length >= 9) {
            formattedNumber += '-' + inputNumber.substring(8, 10)
        }
        setInfo(prev => ({
            ...prev,
            number: '+7' + formattedNumber
        }))
        e.target.value = formattedNumber
    }


    return (
        <div className="order">
            <h2 onClick={() => setInfo('penis')}>Оформление заказа</h2>
            <form className='order-form'>
                <label htmlFor='1'>Имя:</label>
                <input id="1" type='text' placeholder='Имя' onChange={(e) => changeName(e)} />
                <label htmlFor='2'>Номер телефона:</label>
                <input id="2" type='text' placeholder='(XXX)-XXX-XX-XX' onChange={(e) => changeNumber(e)} />
                <label htmlFor='3'>Город:</label>
                <input id="3" type='text' placeholder='Город' onChange={(e) => changeCity(e)} />
                <label htmlFor='4'>Улица:</label>
                <input id="4" type='text' placeholder='Улица' onChange={(e) => changeStreet(e)} />
                <label htmlFor='5'>Номер дома:</label>
                <input id="5" type='text' placeholder='Номер дома' onChange={(e) => changeHouseNumber(e)} />

                <p className="total-order">К оплате: <span className="order-price">{total}р</span></p>

                <button type='submit' onClick={(e) => sendOrder(e)}>Готово</button>
            </form>
        </div>
    )
}