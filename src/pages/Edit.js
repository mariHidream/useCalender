import { useNavigate, useSearchParams } from "react-router-dom"

const Edit = ()=>{
    const navigator = useNavigate()
    const [searchParams,serSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    const mode = searchParams.get("mode");
    return(
        <div>
            <h1>Edit</h1>
            <p>이곳은 Edit </p>
            <button onClick={()=> serSearchParams({who : 'k'})}>who are you</button>
            <button onClick={()=>{ navigator('/home') }}>Home</button>
            <button onClick={()=>{ navigator(-1) }}>back</button>
        </div>
    )
}

export default Edit;