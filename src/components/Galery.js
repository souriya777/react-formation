import React, { useEffect, useState} from 'react'

const Galery = () => {
    const [myDate, setDate] = useState('')
    useEffect(() => {
        console.log('useEffect')
        fetch('https://jsonplaceholder.typicode.com/photos').then(
            () => {
                
            }
        )
    }, [])

    setInterval(() => {
        setDate(new Date().toString())
    }, 1000)
    return (
        <div>
            Hello!
        </div>
    )
}

export default Galery
