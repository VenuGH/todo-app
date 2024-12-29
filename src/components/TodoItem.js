export default function TodoItem({ item , onDelete, index}) {
    return (
        <div style={{
            color: "red",
            display: "flex",
            marginTop: 5,
            marginLeft: "10%"
                    }}>
            <input type = "radio"  />
            <div>{ item }</div>
            <input type = "button" onClick={function(){
                onDelete(index)
            }} /> 

        </div>
    )
}