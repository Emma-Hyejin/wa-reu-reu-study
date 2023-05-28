import React, {useState} from 'react';
import axios from 'axios';
import './Weather.css';

// 밖에서 전역 선언: 추후 사용을 위해 앞 부분 과 key 미리 선언
const api = {
    key: "61e4de226cefdb83739208b48e6ee9eb",
    base: "https://api.openweathermap.org/data/2.5/" ,
}


const Weather = () => {
    //날짜 불러오기
    const dateBuilder = (d) =>{
        let months = [
            "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월",
        ];
        //일요일 먼저 시작. 
        let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate();
        return `${year}년 ${month} ${date}일 ${day}`;
    }


    //날씨 API 불러오기 axios 
    const city = "Seoul"; 
    const url = `${api.base}weather?q=${city}&appid=${api.key}`;
    const [weather, setWeather] = useState('');

    axios.get(url).then((res) =>{
        const data = res.data;
        setWeather({
            id: data.weather[0].id, // icon 생성할 때 -img
            temperature:data.main.temp, //화씨 온도
            main: data.weather[0].main,// 날씨 표현 Clear
            loading:false,
        });
        // console.log(data);
    });
    
    const png = '@2x.png';
    const wth_url = 'https://openweathermap.org/img/wn/';
    const icon = (weather) =>{
        if(weather.id >=200 && weather.id <= 232){
            `${wth_url}10d${png}`
        }else if(weather.id >=300 && weather.id <= 321){
            `${wth_url}09d${png}`
        }
    }



    return(
        <div className="wth__container">
            <div className="wth__wrapper">
                <h2> 떠나고 싶은 </h2>
                <div className="wth__show">
                    <h2>{dateBuilder(new Date())}</h2>
                    <div>{(weather.temperature-273.15).toFixed(2)}℃</div>
                    {/* <div>{weather.temperature}</div> */}
                    <div>{weather.main}</div>
                </div>
            </div>
        </div>
    )
}

export default Weather;