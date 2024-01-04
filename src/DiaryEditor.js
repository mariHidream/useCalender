
import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {
    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState]  = useState({
        author : "",
        content : "",
        emotion : "1"
    });

    const handelChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handelSubmit = () => {
        if(state.author.length < 1) {
            authorInput.current.focus();
            return
        }

        if(state.content.length < 1){
            contentInput.current.focus()
            return
        }
        onCreate(state.author, state.content, state.emotion);
        alert("저장성공")
        setState({
            author : "",
            content : "",
            emotion : 1
        })
    }
    
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    ref={authorInput}
                    name = "author"
                    value={state.author} 
                    onChange={handelChangeState}
                />
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handelChangeState}
                />
            </div>
            <div>
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handelChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handelSubmit}>저장하기</button>
            </div>
        </div>
    )
}

export default DiaryEditor;