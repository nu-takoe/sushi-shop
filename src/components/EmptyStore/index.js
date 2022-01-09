import './EmptyStore.css'

export default function EmptyStore(){

    let arr = []
    for(let i = 0; i < 12; i++){
        arr.push(<div className='empty-item' key={i}><p>пися вв попе</p></div>)
    }

    return(
        <div className='empty-store'>
            <ul>
                { arr }
            </ul>
        </div>
    )
}