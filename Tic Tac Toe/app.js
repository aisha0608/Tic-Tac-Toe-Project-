let boxes = document.querySelectorAll("#box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#btn");
let msgbox=document.querySelector(".message");
let msg=document.querySelector("#msg"); 
let turn="O";
const winPattern=
[
    [0,1,2],[3,4,6],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach(box => 
{
    box.addEventListener("click", () => 
    {
        if(turn=="O")
        {
            box.innerText="O";
            box.style.color="#CA054D";
            turn="X";
        }
        else
        {
            box.innerText="X";
            turn="O";
        }
        box.disabled=true;
        checkWinner();
    });
});
const resetgame= () =>
{
    turn="O";
    enableBox();
    msgbox.classList.add("hide");
}
const disableBox = () =>
{
    for(let i of boxes)
    {
        i.disabled=true;
    }
};
const enableBox = () =>
{
    for(let i of boxes)
    {
        i.disabled=false;
        i.innerText="";
        i.style.color = "";
    }
};

const showWinner= (winner)=>{
    msg.innerText="Congratulations! Winner is "+winner;
    msgbox.classList.remove("hide");
    disableBox();
}
const checkWinner= () => {
    let draw=true;
        for(let i of winPattern)
        {
            let pos1=boxes[i[0]].innerText;
            let pos2=boxes[i[1]].innerText;
            let pos3=boxes[i[2]].innerText
            if(pos1!="" && pos2!="" && pos3!="")
            {
                if(pos1==pos2 && pos2==pos3)
                {
                    console.log("winner");  
                    showWinner(pos1);
                    return;
                }
            }
        }
        for(let i of boxes)
        {
            if(i.innerText==="")
            {
                draw=false;
                break;
            }
        }
        if(draw)
        {
            msg.innerText="It's a Draw!Play Again";
            msgbox.classList.remove("hide");
            disableBox();
        }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
