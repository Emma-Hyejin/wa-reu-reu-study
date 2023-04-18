// import React, {useState} from 'react';
// import './App.css';
// import TodoBoard from './components/TodoBoard';

// // 인풋창 있고 버튼 있음
// // 인풋에 값 넣으면 실제로 추가 되게
// // 아이템 누르면 삭제도 되게

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [todoList, setTodoList] = useState([]);

//   const addItem = () =>{
//     setTodoList([...todoList, inputValue]);
//   }

//   const inputValueChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return (
//     <main>
//       <input value={inputValue} type='text' onChange={inputValueChange}></input>
//       <button onClick={addItem}>추가</button>
//       <TodoBoard todoList={todoList} />
//     </main>
//   );
// }

// export default App;

import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard'


function App(){

  const [inputValue, setInputValue] = useState('');
  const [todolist, setTodolist] = useState([]);

  const addTodolist = () => {
    // 입력 창이 빈 문자열이면 등록이 안되게
    if(inputValue.length !== 0){
      if(todolist.length <= 5){
        // 화면 길이 이상 못 넘어가게 하고 싶은데 초기 값 설정을 다시 봐야할 듯
        setTodolist([...todolist, inputValue]);
      }
    }

    
    // console.log(todolist);
    setInputValue('');
  }

  const inputChage = (event) => {
    setInputValue(event.target.value)
  }
  
  const listIni = () => {
    setTodolist([]);
  }

  // 데일리 투두리스트가 컨셉이면 넣으려고요!
  const todayDate = () => {
    return new Date();
  }

  return(
    <main>
      <div className='postIt'>
        <h1 className='postH1'>To Do List</h1>
        <div className='sticker'></div>
        <input className='todoInput' value={inputValue} type='text' onChange={inputChage}></input>
        <button className='addBtn' onClick={addTodolist}>해보자⭐</button>
        <TodoBoard todolist={todolist} /> {/*todolist:{todolist} 를 TodoBoard로 넘겨줌*/}
        <button className='initialBtn' onClick={listIni}>첨부터!</button>
      </div>
      
    </main>
  )
}

export default App;
