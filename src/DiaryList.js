import DiaryItem from "./DiaryItem";

const DiaryList = ({onDelete, diary}) => {
    console.log(diary);
    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diary.length}개의 일기</h4>
            <div>
                {diary.map((e,idx) => (
                    <DiaryItem key={e.id} {...e} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}

export default DiaryList;