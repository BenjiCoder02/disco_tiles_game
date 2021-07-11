let row = 20;
let col = 30
let grid = document.querySelector(".grid")

for (let i = 0; i < row; i++){
    for (let j = 0; j < col; j++){
         let mouseDown = false
        let box = document.createElement("div")
        box.classList.add("box")
        box.addEventListener("click", function(){
            box.classList.add("wall")
        })
        grid.addEventListener("mousedown", function(){
           // box.classList.add("wall")
           
           mouseDown = true
          
        })
        
        grid.addEventListener("mouseup", function(){
            mouseDown = false
        })
        
        box.addEventListener("mouseover", function(){
            if (mouseDown === true){
                box.classList.add("wall")
            }
            
        })
        grid.appendChild(box)
    }
}



