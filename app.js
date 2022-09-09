/*Select Elements */

const addBtn = document.querySelector(".add");
const pupup = document.querySelector(".pupup");
const create = document.querySelector(".create");
const date = document.querySelector(".date"); 
const gridTable = document.querySelector(".grid-table"); 
const inputs = document.querySelectorAll(".create input"); 
const removes = document.querySelectorAll(".remove"); 
let myLibrary = JSON.parse(localStorage.getItem("library"));



/*ADD Event Listener */ 

date.innerText = new Date().getFullYear();
addBtn.addEventListener("click",(e) =>{
    // gsap.to(".pupup",1,{display : "flex",duration: 1,ease: "power1.inOut"});
    // gsap.to(".create",1,{clipPath: 'circle(2500px)',duration: 1,ease: "power1.inOut"});
    pupup.classList.add("active");
    create.classList.add("active");
});

pupup.addEventListener("click",(e) =>{
    pupup.classList.remove("active");
    create.classList.remove("active");
});

create.addEventListener("click",(e) =>{
    e.stopPropagation();
});
create.addEventListener("submit",(e) =>{
    e.preventDefault();
    let read;
    let title = inputs[0].value;
    let author = inputs[1].value;
    let pages = inputs[2].value;
    if (inputs[3].checked){
        read = true
    }  
    else{
        read = false
    }
    addBookToLibrary(title,author,pages,read);
    displayBooks();
    pupup.classList.remove("active");
    create.classList.remove("active");
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].checked = false;
    store();
});


/* Functions */ 


function book(title,author,pages,isread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

function addBookToLibrary(title,author,pages,isread) {
    newBook = new book(title,author,pages,isread);
    myLibrary.push(newBook);
}

function displayBooks(){
    gridTable.innerHTML = '';
    let i = 0;
    console.log("------------");
    for(ele of myLibrary){
        the_new_book = document.createElement("div");
        the_new_book.classList.add('bookCart');
        the_new_book.setAttribute('data-book',i);
        the_new_book.innerHTML = ` <p class="info title">${ele.title}</p>
        <p class="info author">${ele.author}</p>
        <p class="info pages">${ele.pages}</p>
        <button class="info read">${ele.isread}</button>
        <button class="info remove">Remove</button>`;
        gridTable.appendChild(the_new_book);
        console.log(ele.isread);
        if(ele.isread == true){
            the_new_book.children[3].innerText = "READ";
        }
        else{
            the_new_book.children[3].innerText = "Not READ";
            the_new_book.children[3].classList.add("active");
        }
       

        the_new_book.querySelector(".remove").addEventListener("click",(e) =>{
            myLibrary.splice(e.target.parentElement.getAttribute("data-book"),1);
            displayBooks();
            store();
        });
        console.log(myLibrary);
        the_new_book.querySelector(".read").addEventListener("click",(e) =>{
            if(myLibrary[e.target.parentElement.getAttribute("data-book")].isread){
                myLibrary[e.target.parentElement.getAttribute("data-book")].isread = false;
                e.target.innerText = "Not READ";
                e.target.classList.add("active");
            }
            else{
                myLibrary[e.target.parentElement.getAttribute("data-book")].isread = true;
                e.target.innerText = "READ";
                e.target.classList.remove("active");
            }
            console.log(myLibrary);
            store();
        });
        i++;
    }
}
function store(){
    localStorage.setItem("library",JSON.stringify(myLibrary));
}
// addBookToLibrary("T1","A1",100,true);
// addBookToLibrary("T2","A2",200,false);
// console.log(JSON.stringify(myLibrary));
localStorage.setItem("library",JSON.stringify(myLibrary));
displayBooks();

// console.log(myLibrary);

























































// let display_value = "";
// let Value1 = ''; 
// let Value2 = ''; 
// let ValueOpa = ''; 
// const divide =  (N1,N2) => {
//     if(N2 == 0){
//         return "LMAO";
//     }
//     return N1 / N2;
// };
// const multiply =  (N1,N2) => {
//     return N1 * N2;
// };
// const subtract =  (N1,N2) => {
//     return N1 - N2;
// };
// const add =  (N1,N2) => {
//     return N1 + N2;
// };
// const operate = (N1,N2,opa) =>{
//     if(opa == "+"){
//         return add(N1,N2);
//     }
//     else if(opa == "-"){
//         return subtract(N1,N2);
//     }
//     else if(opa == "*"){
//         return multiply(N1,N2);
//     }
//     else if(opa == "/"){
//         return divide(N1,N2);
//     }
// };
// let isclear = true;
// const clear = () =>{
//     const clear_btn = document.querySelector(".clear");
//     clear_btn.addEventListener("click",() => {
//         const lastOperation = document.querySelector(".lastOperation");
//         const CurrentOperation = document.querySelector(".CurrentOperation");
//         lastOperation.innerText = "";
//         CurrentOperation.innerText = "0";
//         lastOperation.innerText = "0";
//         isclear = true;
//         display_value = "";
//         Value1 = ''; 
//         Value2 = ''; 
//         ValueOpa = ''; 
//     });
// };
// const backSpace = () =>{
//     // const deleteBtn = document.querySelector(".delete");
//     const CurrentOperation = document.querySelector(".CurrentOperation");
//     if(display_value){
//         if(display_value.length == 1){
//             display_value = 0;
//             CurrentOperation.textContent = display_value;
//         }
//         else{
//             display_value =  display_value.slice(0,display_value.length - 1); 
//             CurrentOperation.textContent = display_value;
//         }
//     }
// };

// const storeValue = () =>{
//     const btn_nb = document.querySelectorAll(".btn_nb");
//     const CurrentOperation = document.querySelector(".CurrentOperation");
//     const btn_equals = document.querySelector(".btn_equals");
//     const btns_opi = document.querySelectorAll(".opi");
//     const lastOperation = document.querySelector(".lastOperation");
//     const deleteBtn = document.querySelector(".delete");
//     const pu_btn = document.querySelector(".pu");
//     deleteBtn.addEventListener("click",() =>{
//         backSpace();
//     });
//     pu_btn.addEventListener("click",() =>{
//         isclear = true;
//         display_value = "";
//         Value1 = ''; 
//         Value2 = ''; 
//         ValueOpa = '';
//         CurrentOperation.textContent = "0";
//         lastOperation.textContent = "0";
//         const SlideTl = gsap.timeline({defaults:{duration : 1 , ease : "power2.inOut"}});
//         SlideTl.to(".pupup",{clipPath: 'circle(0px)'});
//         SlideTl.to(".pupup",{display : 'none' },"-=1");
//         return;
//     });
//     btn_nb.forEach((nb) =>{
//         nb.addEventListener("click",() => {
//             if(isclear){
//                 CurrentOperation.textContent = "";
//             }
//             if(nb.textContent == "."){
//                 if(display_value){
//                     if(!display_value.includes(".")){
//                         display_value += nb.textContent;
//                         CurrentOperation.textContent = display_value;
//                     }
//                 }
//                 else{
//                     display_value = "0."
//                     CurrentOperation.textContent = display_value;
//                 }
//             }
//             else{
//                 display_value += nb.textContent;
//                 CurrentOperation.textContent = display_value;
//                 // console.log(nb.textContent);
//                 isclear = false; 
//                 console.log(display_value);
//             }
//         });
//     });
//     btns_opi.forEach((nb) =>{
//         nb.addEventListener("click",() => {
//             if (Value1 != "" && ValueOpa != "" && display_value !=  ""){
//                 if (Value1 != "" && ValueOpa != "" && display_value !=  ""){
                    
//                     Value2 = display_value;
//                     lastOperation.textContent = Value1 + ` ${ValueOpa} ` + Value2 + ' = ' ;
//                     if(String(operate(Number(Value1),Number(Value2),ValueOpa)).includes(".")){
//                         CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//                         Value1 = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//                     }
//                     else{
//                         CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa);
//                         Value1 = operate(Number(Value1),Number(Value2),ValueOpa);
//                     }
//                     display_value = "";
//                     if(Value1 == "LMAO"){
//                         gsap.to(".pupup",1,{display : 'flex', clipPath: 'circle(100%)'});
//                     }
//                 }
//             }
//             if(Value1){
//                 lastOperation.textContent = Value1 + ' ' + nb.textContent;
//                 Value2 = display_value;
//                 display_value = "";
//                 CurrentOperation.textContent = "0";
//                 isclear = true;
//                 ValueOpa = nb.textContent;

//             }
//             else{
//                 Value1 = display_value;
//                 display_value = "";
//                 CurrentOperation.textContent = "0";
//                 isclear = true;
//                 ValueOpa = nb.textContent;
//                 lastOperation.textContent = Value1 + ' ' + nb.textContent;
//             }
            
//         });
//     });
//     btn_equals.addEventListener("click",() =>{ 
//         if (Value1 != "" && ValueOpa != "" && display_value !=  ""){
//         Value2 = display_value;
//         lastOperation.textContent = Value1 + ` ${ValueOpa} ` + Value2 + ' = ' ;
//         if(String(operate(Number(Value1),Number(Value2),ValueOpa)).includes(".")){
//             CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//             Value1 = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//         }
//         else{
//             CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa);
//             Value1 = operate(Number(Value1),Number(Value2),ValueOpa);
//         }
//         display_value = "";
//         console.log("value1",Value1,"value2",Value2);
//         if(Value1 == "LMAO"){
//                 gsap.to(".pupup",1,{display : 'flex', clipPath: 'circle(100%)'});    
//                 isclear = true;
//                 display_value = "";
//                 Value1 = ''; 
//                 Value2 = ''; 
//                 ValueOpa = '';
//                 CurrentOperation.textContent = "LMAO";
//                 lastOperation.textContent = "0";
//                 return; 
//         }

//     }
//     })
// };

// // console.log(operate(10,5,"+"));
// // console.log(operate(10,5,"-"));
// // console.log(operate(10,5,"*"));
// // console.log(operate(10,5,"/"));
// clear();
// storeValue();
// // console.log(divide(10,5));
// // console.log(multiply(10,5));
// // console.log(subtract(10,5));
// // console.log(add(10,5));