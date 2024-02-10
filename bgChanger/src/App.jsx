import { useState } from "react"


function App() {
  const [color, setColor] = useState("#232b2b")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="fles flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2
        rounded-3xl">
          <button
          onClick={() => setColor ("#FF7722")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "#FF7722"}}
          >भगवा</button>
          <button
          onClick={() => setColor ("yellow")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor ("Blue")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button
          onClick={() => setColor ("silver ")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "silver "}}
          >Silver </button>
          <button
          onClick={() => setColor ("MediumVioletRed")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "MediumVioletRed"}}
          >MediumVioletRed</button>
          <button
          onClick={() => setColor ("purple")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
          onClick={() => setColor ("brown")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >Brown</button>
          <button
          onClick={() => setColor ("red")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor ("Orange")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>
          <button
          onClick={() => setColor ("green")}
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

        </div>

      </div>

    </div>
  )
}

export default App
