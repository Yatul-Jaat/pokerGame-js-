let main=document.getElementById("main")
let card=document.getElementById("cards")
let sumCards=document.getElementById("sum")
let startButton=document.getElementById("start")
let saveGame =document.getElementById("save")

let sum=0
let hello =false

function start(){
    main.textContent="Choose the Card"
    card.textContent="cards: "
    sumCards.textContent="sum: "
    sum=0
    hello =true
}

function save(){
    if(hello){
        let number=Math.floor(Math.random()*10)+2
        sum+=number
    
        if (sum<21){
            main.textContent="Choose another card"
        }
        else if (sum===21){
            main.textContent="You won the game"        
        }
        else{
            if(hello){
                main.textContent="You are out of the game"
                card.textContent+=number+" - "
                sumCards.textContent="Sum: "+sum
                hello=false
            }
            return
        }
        card.textContent+=number+" - "
        sumCards.textContent="Sum: "+sum
    }
    
}