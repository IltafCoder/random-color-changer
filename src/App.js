import { useState } from "react"
import Color from "./components/Color"
import "./index.css"

function App () {

    function fillColors () {
        const num_1 = Math.floor(Math.random() * 256).toString()
        const num_2 = Math.floor(Math.random() * 256).toString()
        const num_3 = Math.floor(Math.random() * 256).toString()

        return `rgb(${num_1}, ${num_2}, ${num_3})`
    }

    const initialColors = Array.from({ length: 36 }, fillColors)
    const [colors, setColors] = useState(initialColors)

    function changeColor (i) {
        const newColors = [...colors]
        newColors[i] = fillColors()
        setColors(newColors)
    }

    return (

        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2 p-2 h-screen">
           
           {colors.map((element, index) => <Color key={index} c={element} changeColor={() => changeColor(index)} index={index}></Color>)}

        </div>
    )
}

export default App