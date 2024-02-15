import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () => {

    const diary = useContext(DiaryStateContext)

    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diary.length}개의 일기</h4>
            <div>
                {diary.map((e,idx) => (
                    <DiaryItem key={e.id} {...e}/>
                ))}
            </div>
        </div>
    )
};

DiaryList.defaultProps = {
    diary: []
};

export default DiaryList;