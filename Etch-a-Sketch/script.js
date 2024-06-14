

const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
                const div = document.createElement("div");
                div.classList.add("grid-item");
                container.appendChild(div)
            }
         }
const divs = document.querySelectorAll(".grid-item");
divs.forEach(div => {
    div.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    div.style.backgroundColor = randomColor
        })
})

function getRandomColor() {
const r = Math.floor(Math.random() * 256)
const g = Math.floor(Math.random() * 256)
const b = Math.floor(Math.random() * 256)
return `rgb(${r}, ${g}, ${b})`;
}


const button = document.querySelector(".new-grid");

button.addEventListener('click', () => { createNewGrid() 
})

function createNewGrid() {
const container = document.querySelector("#container");
let num = prompt("Enter the number of Grid Elements (up to 100")


num = parseInt(num);
num = Math.min(num, 100);

    if (isNaN(num) || num < 1) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return; 
    }


    container.innerHTML = "";    
    container.style.setProperty('--num', num);
        
        
        
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                        const div = document.createElement("div");
                        div.classList.add("new-grid-item");
                        container.appendChild(div)
                    }
                 }

                 const divs2 = document.querySelectorAll(".new-grid-item");
                 divs2.forEach(div => {
                 div.addEventListener('mouseover', () => {
                 const randomColor = getRandomColor();
                 div.style.backgroundColor = randomColor
             })
         })

        }
        
    



 

