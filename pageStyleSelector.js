const whiteStyleButton = document.querySelector("#white-style-button");
let darkStyle = localStorage.getItem("darkStyle");
const darkStyleButton = document.querySelector("#dark-style-button");
let redStyle = localStorage.getItem("redStyle");
const redStyleButton = document.querySelector("#red-style-button");
let orangeStyle = localStorage.getItem("orangeStyle");
const orangeStyleButton = document.querySelector("#orange-style-button");
let yellowStyle = localStorage.getItem("yellowStyle");
const yellowStyleButton = document.querySelector("#yellow-style-button");
let greenStyle = localStorage.getItem("greenStyle");
const greenStyleButton = document.querySelector("#green-style-button");
let blueStyle = localStorage.getItem("blueStyle");
const blueStyleButton = document.querySelector("#blue-style-button");
let purpleStyle = localStorage.getItem("purpleStyle");
const purpleStyleButton = document.querySelector("#purple-style-button");

const whiteBgIcon = document.querySelector("#bg-icon-white");
const blackBgIcon = document.querySelector("#bg-icon-black")

/*
let Style = localStorage.getItem("Style");
const StyleButton = document.querySelector("#-style-button");
*/
const disableAllStyles = () => {
    localStorage.setItem("darkStyle", null);
    localStorage.setItem("redStyle", null);
    localStorage.setItem("orangeStyle", null);
    localStorage.setItem("yellowStyle", null);
    localStorage.setItem("greenStyle", null);
    localStorage.setItem("blueStyle", null);
    localStorage.setItem("purpleStyle", null);
    /*localStorage.setItem("Style", null);*/
    
    document.body.classList.remove("darkStyle");
    document.body.classList.remove("redStyle");
    document.body.classList.remove("orangeStyle");
    document.body.classList.remove("yellowStyle");
    document.body.classList.remove("greenStyle");
    document.body.classList.remove("blueStyle");
    document.body.classList.remove("purpleStyle");
    /*document.body.classList.remove("Style");*/
};

whiteStyleButton.addEventListener("click", () => 
{
    disableAllStyles();
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    
});

darkStyleButton.addEventListener("click", () => 
{
    darkStyle = localStorage.getItem("darkStyle")
    if(darkStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("darkStyle");
    whiteBgIcon.classList.remove("disabled")
    blackBgIcon.classList.add("disabled");
    localStorage.setItem("darkStyle", "enabled");
    }
    else 
    {
    return;
    }
});

redStyleButton.addEventListener("click", () => 
{
    redStyle = localStorage.getItem("redStyle")
    if(redStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("redStyle");
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    localStorage.setItem("redStyle", "enabled");
    }
    else 
    {
    return;
    }
});

orangeStyleButton.addEventListener("click", () => 
{
    orangeStyle = localStorage.getItem("orangeStyle")
    if(orangeStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("orangeStyle");
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    localStorage.setItem("orangeStyle", "enabled");
    }
    else 
    {
    return;
    }
});

yellowStyleButton.addEventListener("click", () => 
{
    yellowStyle = localStorage.getItem("yellowStyle")
    if(yellowStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("yellowStyle");
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    localStorage.setItem("yellowStyle", "enabled");
    }
    else 
    {
    return;
    }
});
greenStyleButton.addEventListener("click", () => 
{
    greenStyle = localStorage.getItem("greenStyle")
    if(greenStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("greenStyle");
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    localStorage.setItem("greenStyle", "enabled");
    }
    else 
    {
        return;
    }
});

blueStyleButton.addEventListener("click", () => 
{
    blueStyle = localStorage.getItem("blueStyle")
    if(blueStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("blueStyle");
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    localStorage.setItem("blueStyle", "enabled");
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
    blackBgIcon.classList.remove("disabled");
    whiteBgIcon.classList.add("disabled")
    localStorage.setItem("purpleStyle", "enabled");
    }
    else 
    {
        return;
    }
});
/*
StyleButton.addEventListener("click", () => 
{
    Style = localStorage.getItem("Style")
    if(Style !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("Style");
    localStorage.setItem("Style", "enabled");
    }
    else 
    {
    return;
    }
});
*/