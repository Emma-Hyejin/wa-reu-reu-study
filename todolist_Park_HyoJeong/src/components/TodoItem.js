// import React, {useState} from 'react';
// import './TodoItem.css'

// function TodoItem(props){

//     const [deleteItem, setDeleteItem] = useState(false);

//     const clickDeleteItem = () => {
//         setDeleteItem(true);
//     }

//     if(deleteItem){
//         return null;
//     }

//     return(
//         <div className="todo-item">
//             {props.item}
//             <button onClick={clickDeleteItem}>삭제</button>
//         </div>
//     )
// }

// export default TodoItem;

import React, {useState} from 'react';
import './TodoItem.css'
// props는 App에서 넘어온 todolist 배열의 각 요소임
function TodoItem(props){

    const [deleteItem, setDeleteItem] = useState(false);

    const deleteClick = () => {
        setDeleteItem(!deleteItem);
    }

    if(deleteItem){
        return null;
    }

    const hideClass = () => {
        document.querySelector("successed").classList.toggle("aaa")
    }   



    {/* 눈에서는 삭제, but 배열에서는 삭제 X 방법 알아보자 */}

    return(
        <div className='todo-item'>
            <input className='successed' type='checkbox'></input>
            <span className='todoItemCnt'>{props.item}</span> {/* TodoBoard에서 item:{item} 넘겨준 값 */}
            {/* <button className="deleteBtn" onClick={deleteClick}>하지 말기</button> */}
        </div>
    )
}

export default TodoItem;