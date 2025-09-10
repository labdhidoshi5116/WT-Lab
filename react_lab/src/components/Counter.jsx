    import React from 'react'
    import { useEffect } from 'react';
    import { useState } from 'react';

    function Counter() {
        const [count,setCount] =useState(0);
        const[visible,setVisible] = useState(false);
        
        // only prints when count changes, visble change won't trigger this
        // useEffect(() => {
        //     console.log("Component re-rendered 1");
        // }, [count]);

        // only prints once when count changes, visble change won't trigger this
        // useEffect(() => {
        //     console.log("Component re-rendered 2");
        // }, []);

        // prints when either count or visible changes
        useEffect(() => {
            console.log("Component re-rendered 3");
        });


    return (
        <>
        <h2>Count:{count}</h2> 
        <button onClick={()=>{
                setCount((prev)=>prev+1);
        }}>
                Increment
        </button>
            <button onClick={()=>setVisible(!visible)}>
                make visible or invisible
        </button>
        {visible && <h2>Hello</h2>}
        </>
    )
    }
    export default Counter
