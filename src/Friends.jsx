import { useEffect, useState } from "react"
import "./user.css"
import Friend from "./Friend"

export default function Friends() {
    const [value, setValue] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setValue(data))
    },[])

    return (
        <div className="box">
            <h3>Total Value : {value.length}</h3>
            {
                value.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}