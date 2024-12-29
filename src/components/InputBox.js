import { useRef } from "react"

export default function InputBox({ onEnter }) {

    let inputRef = useRef('')

    return(
        <div style= {{
            display: "grid",
             width: "80%",
             marginLeft: "10%",
            
        }}>
            <input type="text" ref={inputRef}/>
            <input type="button" style={{backgroundColor: "blue", color:"white"}} value="+" onClick={function() {
                onEnter(inputRef.current.value)
            }} />

        </div>
        
    )
}