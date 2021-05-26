import {useState} from 'react'

function Horloge() {
    const [myDate, setDate] = useState('')

    setInterval(() => {
        setDate(new Date().toString())
    }, 1000)

    return <h2>{myDate}</h2>
}
export default Horloge;
