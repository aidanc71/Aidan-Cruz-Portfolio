const whiteStyleButton = document.querySelector("#white-style-button");
let greenStyle = localStorage.getItem("greenStyle");
const greenStyleButton = document.querySelector("#green-style-button");
let purpleStyle = localStorage.getItem("purpleStyle");
const purpleStyleButton = document.querySelector("#purple-style-button");

/* const disableGreenStyle = () => {
    document.body.classList.remove("greenStyle");
    
    localStorage.setItem("greenStyle", null);
};*/

const disableAllStyles = () => {
    document.body.classList.remove("greenStyle");
    localStorage.setItem("greenStyle", null);
    document.body.classList.remove("purpleStyle");
    localStorage.setItem("purpleStyle", null);
};

greenStyleButton.addEventListener("click", () => 
{
    greenStyle = localStorage.getItem("greenStyle")
    if(greenStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("greenStyle");
    localStorage.setItem("greenStyle", "enabled");
    }
    else 
    {
        return;
    }
});

purpleStyleButton.addEventListener("click", () => 
{
    purpleStyle = localStorage.getItem("purpleStyle")
    if(purpleStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("purpleStyle");
    localStorage.setItem("purpleStyle", "enabled");
    }
    else 
    {
        return;
    }
});

whiteStyleButton.addEventListener("click", () => 
{
    disableAllStyles();
});