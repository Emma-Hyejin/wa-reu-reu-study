import React from 'react';
import './SingleList.css';
import {Icon} from 'react-icons-kit';
import {edit2} from 'react-icons-kit/feather/edit2'
import {ic_remove_circle_outline_outline} from 'react-icons-kit/md/ic_remove_circle_outline_outline'

const SingleList = ({sendData}) => {
    // const onRemove = useCallback((id)=>{
    //     setTodos
    // })

    return(
        <li className="list" id={sendData.id}>
            <section className="single_contents">
                <div className="content">{sendData.content}</div>
                <div className="date">{sendData.date}</div>
            </section>
            <section className="single_modify">
                <span className="icon rewrite"><Icon size={20} icon={edit2}/></span>
                <span className="icon rewrite" ><Icon size={20} icon={ic_remove_circle_outline_outline}/></span>
            </section>
        </li>
    )
}

export default SingleList;