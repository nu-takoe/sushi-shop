import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeItemsSort } from "../../redux/actions"
import './Nav.css'

export default function NavigationType() {

    const dispatch = useDispatch()

    const [style, setStyle] = useState(['nav-button', 'nav-button', 'nav-button'])

    const changeStyle = (e) => {
        let pos = e.target.dataset.style
        let baseStyleArr = ['nav-button', 'nav-button', 'nav-button']
        baseStyleArr[pos] += ' nav-active'
        setStyle(baseStyleArr)
    }

    const changeSort = (e) => {
        let pos = e.target.dataset.pos
        dispatch(changeItemsSort(pos))
        changeStyle(e)
    }

    return (
        <div className="nav-container">
            <ul className="nav">
                <li><button onClick={changeSort} className={style[0]} data-pos='sushi' data-style='0'>Суши</button></li>
                <li><button onClick={changeSort} style={{ marginLeft: 20, marginRight: 20 }} className={style[1]} data-pos='roll' data-style='1'>Роллы</button></li>
                <li><button onClick={changeSort} className={style[2]} data-pos='set' data-style='2'>Сеты</button></li>
            </ul>
        </div>
    )
}