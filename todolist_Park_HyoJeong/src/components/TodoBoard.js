// import React from 'react';
// import TodoItem from './TodoItem';


// function TodoBoard(props){

//     return(
//         <div>
//             <h1>Todo List</h1>
//             <TodoItem />
//             {props.todoList.map((item) => <TodoItem item={item} />)}
//         </div>
//     )
// }

// export default TodoBoard;

import React from 'react';
import TodoItem from './TodoItem'
import './TodoBoard.css'

// props는 App에서 넘겨준 todolist 배열임
function TodoBoard(props){

    return (
        <div className='todoBoard'>
            {/* <TodoItem/> 이거를 굳이 보여줄 필요가 없다 */}
            {props.todolist.map((item) => <TodoItem item={item} />)} {/* TodoItem에 item:{item} 을 넘겨줌 */}
        </div>
    )
}

export default TodoBoard;