import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import EmptyStore from "../EmptyStore"
import Item from "../Item"

export default function Store(){
    const loader = useSelector(state => state.app.loader)
    const items = useSelector(state => state.store.menu)
    const sort = useSelector(state => state.app.sortItems)

    const [menu, setMenu] = useState(items)


    useEffect(() => {
        sort === 'all' ? setMenu(items) : setMenu(items.filter(item => item.type === sort))
    }, [sort, items])

    
    const menuList = (<ul style={{display: 'flex', flexWrap: 'wrap', padding: 0, justifyContent: 'center', alignItems: 'center'}}>{menu.map((item, index) => <Item item={item} key={index}/>)}</ul>)

    return(
        <div className='store'>
            {loader ? <EmptyStore/> : menuList}
        </div>
    )
}