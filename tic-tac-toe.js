let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newg");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true;// playerX , playerO;
let winningptns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetgame = ()=>{
    turnO = true;
    count=0;
    boxenable();
    msgcontainer.classList.add("hide");
}
const boxenable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const boxdisable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkwinner();
        if (count === 9 && !isWinner) {
            draw();
        }
    });
});

const showwinner=(winner)=>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxdisable();
}

const checkwinner = ()=>{
    for(let pattern of winningptns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2 =  boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner",pos1);
                showwinner(pos1);
                return true;
            }
        }
    }
};

let draw = ()=>{
    msg.innerText = `DRAW.`
    msgcontainer.classList.remove("hide");
    boxdisable();
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
// using git that how to modify the file.