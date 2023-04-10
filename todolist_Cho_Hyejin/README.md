# 조혜진 todolist 

React를 사용해서 To Do List를 구현해보았습니다. 

(1) Main 화면<br>
<img src="https://user-images.githubusercontent.com/110151638/230899816-38efc35c-ec6b-4b09-b57d-c4a331b86f1a.png"  width="700" height="450">

(2) 모달 창 화면<br>
<img src="https://user-images.githubusercontent.com/110151638/230901557-47eafd6a-d062-42a6-ac05-21f1de908c84.png"  width="700" height="450">

## 구현 기능

* 모달 창에서 새로운 to do list 입력 시 main 화면에 새 list 추가 
* 새로운 list 추가 될 때마다 sidebar 의 'Total Task' 증가
* weatehr open API를 활용하여 각 도시의 현재 날씨 불러오는 기능 구현


## 기능 구현 시 어려웠던 점 

**+ New Task** 버튼 클릭 시 모달 창 화면 등장하며, 모달 창 안에서 content 입력 시 Main 화면의 list 파트에 추가 되는 기능을 구현하려고 했습니다. 

#### Component 분리 

* 모달창이 있는 **Main component** 
* list들이 추가 될 **Contents component** 
* 각 list 를 구현 할 **SingleList component** 

새로운 데이터 입력 시 -> 모달 창 component -> contents component -> singlelist component 순으로 new list를 props로 전달을 해야 했습니다. Component 단위로 data를 넘기는 것이 익숙하지 않은 상태에 여러개로 쪼개진 Component로 인하여 처음에는 새로운 lsit가 추가된 new lists를 어떻게 보내야 하는지 해맸으나 useState를 이용하여 data를 전달하였습니다. 

```JavaScript
//Main.jsx
const [ lists , setLists ] = useState([ /*초기 임시 data*/ ])
// 생략

<Contents data={lists}>
```
```JavaScript
//Contents.jsx
const Contents = ({data}) => {
    return (
        //생략 
        {data.map((e)=>{
            return(
                <SingleList sendData = {e}>
            )
        })}
    )
}

```
```JavaScript
//SingleList.jsx
const SingleList = ({sendData})=>{
    return(
        //생략 Ex.
        <div className="content">{sendData.content}</div>
    )
}
```



## 구현 예정 기능 : try challenge

* 입력 한 list의 **수정** 및 **삭제** 기능 구현 
* **Star** 부분에 CSS animation 효과를 적용한 이모티콘 넣기 