let boxes=document.querySelectorAll(".boxes");
let resetbtn=document.querySelector(".restart");
let soundoff=document.querySelector(".audio")
let icon=document.querySelector("#sound")
let music=document.querySelector(".audiosrc")
let name1=prompt("Player X's Name");
let name2=prompt("Player O's Name");
let para=document.querySelector(".para");
para.innerText=name2+"'s Turn";
let turnO=true;
let m=0;

soundoff.addEventListener("click",()=>{
    if(m==0){
    icon.innerText="volume_off";
    music.pause();
    m=1;
    }
    else if(m==1){
        icon.innerText="volume_up";
    music.play();
    m=0;
    }
})

const winning=[
    [0,3,6],
    [0,1,2],
    [3,4,5],
    [1,4,7],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            para.innerText=name1+"'s Turn"
        }
        else{
            box.innerText="X";
            turnO=true;
            para.innerText=name2+"'s Turn";
        }
        box.disabled=true;

        checkWinner();
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const checkWinner=()=>{
    for(arr of winning){
        let pos1=boxes[arr[0]].innerText;
        let pos2=boxes[arr[1]].innerText;
        let pos3=boxes[arr[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3 && turnO==true){
                para.innerText=name1+" Wins";
                disableboxes();
            }
            else if(pos1==pos2 && pos2==pos3){
                para.innerText=name2+" Wins";
                disableboxes();
            }
        }
    }
}

resetbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
    }
    enableboxes();
    para.innerText=name2+"'s Turn";
    turnO=true;
})