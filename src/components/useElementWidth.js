import {useState} from 'react'

const useElementWidth = (elementId) => {
    const [width, setWidth] = useState(0)
    const el = document.getElementById(elementId)
    if (el)
        setWidth(el.getBoundingClientRect().width)
    window.addEventListener("resize", function () {
        console.log("useElementWidth")
        if (el)
            setWidth(el.getBoundingClientRect().width)
    })

    return width;
}

export default useElementWidth
