//called
let textInput = document.getElementById("textInput");
let plusBtn = document.getElementById("plusBtn");
let ulTag = document.getElementById("ulTag");

//click function
plusBtn.addEventListener("click", (e)=>{
   let Text = textInput.value.trim()
//condition for create Element
    if(Text ===""){
        alert("Do not have any text")
    }
    else{
    let li = document.createElement("div");  //div create for input fild
    let input = document.createElement("input");//input create for add text
    input.setAttribute("type","text");//Atribute set
    input.value=textInput.value;
     li.appendChild(input) //


//styled li div     
    li.style.cssText=`
    background-color:white;
    
    display:flex;
    justify-content: space-around;
    width:500px;
    margin-top:10px;
    padding-left:10px;
    padding-bottom:10px;
    padding-top:10px;
    border-radius:10px; `

    let pen = document.createElement("i"); //created fontwesome icon tag (adit icon)
    pen.setAttribute("class","fa-solid fa-pen");// icon code 
    pen.innerHTML=""
    li.appendChild(pen);
    //styled adit icon
    pen.style.cssText=`
    background-color:tomato;
    margin-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-top:10px;
    border-radius:10px;
    color:green;`

  
    let trus = document.createElement("i"); // created trus icon by fontwosome
    trus.setAttribute("class","fa-solid fa-trash"); //icon fontwosome code 
    trus.innerHTML=""
    li.appendChild(trus);
    //trus icon styled
    trus.style.cssText=`
    background-color:yellow;
    margin-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-top:10px;
    border-radius:10px;
    color:green;`

    ulTag.appendChild(li);    
    textInput.value="";

    trus.addEventListener("click",()=>{
     li.remove()
    });
    
    pen.addEventListener("click", ()=>{             //adit icon anable code 
    input.disabled=false;
    input.focus();
    input.select();
    })



}

    
    
    
}) 
    
