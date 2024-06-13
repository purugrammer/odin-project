const container = document.querySelector("#container");

for (let i = 0; i < 16; i++)
    {
        for (let j = 0; j < 16; j++)
            {
                const div = document.createElement("divs");
                div.textContent = "row"
                container.appendChild(div)

            }

            const div = document.createElement("divs");
            div.textContent = "row"
            container.appendChild(div)

    }

const divs = document.querySelector("divs");
divs.addEventListener('click', () => {
    divs.style.backgroundColor = "black"
    console.log(divs)
});
 


