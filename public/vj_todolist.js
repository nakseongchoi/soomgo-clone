const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    // zero to hero 봐라, js 모듈 분리하기 

const TODOS_LS = 'toDos';

let toDos = []; //목록이 되기 위해서 array 사용

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //parseInt는 string을 num으로 바꿈
    }); //지우려는 놈의 id와 같지 않은 id를 가진 리스트만 리턴한다
    // Array.filter() Array 중 괄호 안의 조건과 일치하는애들만 반환한다.
    toDos = cleanToDos;
    saveToDos();
    // console.log(cleanToDos);
    // console.log(event.target.parentNode); //event.target : 바로 그것을 지칭함
    //console.dir(a)하면 a의 디렉토리를 알 수 있음. 여기서 부모, 자식을 다 알 수 있다.
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JS는 localStorage에 string만 저장하려고함
    // 그래서 true를 넣어도 "true"라는 string으로 인식
    // object를 넣어도 "object"라고 인식. 객체가 아니라
    // 이를 위해 JSON.stringify를 사용해야함.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "✖"; //value로 말고 innerHTML로 해야
    delBtn.addEventListener("click",deleteTodo);
    const span = document.createElement("span");
    const newId = toDos.length +1 ;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id =newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
    //부모.appendChild(자식); 부모 안에 자식을 만든다.
}

function handleSubmit(event) { 
    event.preventDefault();
    const currentValue = toDoInput.value;    
    paintToDo(currentValue);
    toDoInput.value = "";
}

// function something(toDo) {
//     console.log(toDo.text);
// }

function something(toDo){
    paintToDo(toDo.text);
    console.log(toDo);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !==null) {
       const parsedToDos =JSON.parse(loadedToDos);
          parsedToDos.forEach(something);
    //    parsedToDos.forEach(function(a){
    //        paintToDo(a.text);
    //        console.log(a.text);
    //    });
       //forEach(function(toDo) {
        //    console.log(toDo.text);
        //    })    라고 해도 됨 위에 바깥에 빼놓아도 되고
       //forEach 배열원소에 대해서 각각 함수를 실행한다 
       //load : 불러오기 , parsing JS가 Object를 이해할 수 있게 도와줌
    } 
}

function init() { 
    loadToDos(); //새로고침할때 저장되어있는 애들이 그대로 뜰 수 있게
    toDoForm.addEventListener("submit", handleSubmit) //쓴거를 저장시키고 띄울 수 있게
}


init();