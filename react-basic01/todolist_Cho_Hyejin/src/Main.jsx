import React from 'react';
import './Main.css';
import './App.css';
import './Component/Contents.css';
import Footer from './Footer';
import Sidebar from './Side/Sidebar';
import Contents from './Component/Contents';
import {useState} from 'react';
import {Icon } from 'react-icons-kit';
import {cross} from 'react-icons-kit/metrize/cross'


const Main = () => {
    const parseDate = new Date().toLocaleDateString('ko-kr');  // 날짜
    const [showPopup, setShowpopup] = useState(false);         // pop up
    const [newListcontent, setNewListcontent] = useState(''); // 입력 
    const [lists, setLists] = useState([{
        id:1,
        content:'첫번 째 할 일',
        date:'2022-03-31',
    }]);

    const togglePopup = () => {
        setShowpopup(!showPopup);
    }

    const onTextChange = (e) => { // newListContent에 입력한 값이 담김.
        setNewListcontent(e.target.value);
    }
    
    // +TASK 클릭시 발동 함수
    const openClicksubmit = () => {   
        togglePopup();
    }

    // const addNewList = []; 계속 빈 배열만..

    // 모달 창 안의 ADD List 버튼 클릭 시 발동 함수 
    const closeClicksubmit = () => {
        const newlist={
            id: lists.length+1,
            content:newListcontent,
            date: new Date().toLocaleDateString('ko-kr'), 
        }

        
        setLists([...lists, newlist]);  // 입력 받은 것과 기존 lists를 합친다.  - lists에 새로운 값이 닮김. 
        togglePopup();
        console.log(Array.isArray(lists)); // 배열 맞는디..
    }
    console.log(lists);

    // const addNewList = (newlist) => {
    //     setLists([...lists, newlist]);
    // }
    // const addNewList = [];

    return (
        <div className="main__container">
            <div className="main__left">
                <div className="main__content">
                    <div className="content__title">
                        <h3>Today List</h3>
                        <div className="content__under">
                            <div className="under__date"> {parseDate}</div>
                            <div className="under__btn">
                                <button className="open" onClick={openClicksubmit}>+ New Task</button>
                                {showPopup ? (
                                    <div className="popup">
                                        <div className="popup_inner">
                                            <div className="h2_title">
                                                <h2>To Do List</h2>
                                                <span className="close_"><Icon size={25} icon={cross} className="close_icon" onClick={openClicksubmit}/></span>
                                            </div>
                                            <div className="popup_inputs">
                                                <div className="input_date">{parseDate}</div>
                                                <textarea className="text_list" placeholder='write what will you do'
                                                value={newListcontent}
                                                onChange={onTextChange}
                                                > </textarea>
                                                {/* <button className="add_list close" onClick={onClicksubmit} >Add List</button> */}
                                                <button className="add_list close" onClick={closeClicksubmit}>Add List</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="content__lists">
                        <Contents data={lists}/> 
                        {/* 새로 만들어진 배열이 알맞게 넘어간다.  */}
                    </div>
                </div>
                <Footer/>
            </div>
            <div className="main__right">
                <Sidebar data={lists}/>
            </div>
        </div>
    )
}

export default Main;