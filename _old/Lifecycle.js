import React, {useEffect, useState}  from "react";

const UnmountTest = () => {
    return <div>Unmount Testung Component</div>
}

const Lifecycle = () => {

    // const [count, setCount] = useState(0);
    // const [text, setText] = useState("");

    // useEffect(() => {
    //     console.log("Mount");
    // },[]);

    // useEffect(()=>{
    //     console.log("Update");
    // },[]);

    // useEffect(()=>{
    //     console.log(`count is update : ${count}`);
    //     if(count > 5){
    //         alert('count가 5이상이 되어 초기화 합니다');
    //         setCount(1)
    //     }
    // },[count])

    // useEffect(()=>{
    //     console.log(`text is update : ${text}`);
    // },[text])

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{padding: 20}}>
            {/* {
                <div>
                    {count}
                    <button onClick={()=>setCount(count+1)}>+</button>
                </div>
                <div>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
                </div>

                
            } */}
            <button onClick={toggle}>On/Off</button>
                {isVisible && <UnmountTest/>}
        </div>
    )
};

export default Lifecycle;