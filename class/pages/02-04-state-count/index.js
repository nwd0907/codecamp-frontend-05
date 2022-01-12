import { useState } from 'react'

export default function LetCount(){

    const [ count, setCount ] = useState(0)

    function zzz(){
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={zzz}>카운트 증가!!</button>
        </div>
    )

}