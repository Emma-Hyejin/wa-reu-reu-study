import React from 'react';
import './Contents.css';
import SingleList from './SingleList';




const Contents = ({data}) => {
    return(
        <div className="lists_container">
            <ul className="lists">
                {data.map((e)=>{
                    return(
                        <SingleList sendData = {e}/>
                    )
                })}
                
                {/* {newlists.map((e)=>{
                    return(
                    <SingleList key={e.id} content={e.content} date = {e.date} ></SingleList>
                    // <SingleList/>
                    // <SingleList onButtonclick={addNewList} key={addNewList.id}/>
                    )
                })} */}
            </ul>
        </div>
    )
}

export default Contents;