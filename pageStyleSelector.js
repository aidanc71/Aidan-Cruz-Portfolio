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

/*const whiteBgIcon = document.querySelector("#bg-icon-white");
const blackBgIcon = document.querySelector("#bg-icon-black")*/

const whiteIcons = document.querySelectorAll(".white-icon");
const blackIcons = document.querySelectorAll(".black-icon");

const blackMobilePhoneIcon = document.querySelector("#mobile-phone");
const blackDesktopPhoneIcon = document.querySelector("#desktop-phone");
const whiteMobilePhoneIcon = document.querySelector("#mobile-phone-white");
const whiteDesktopPhoneIcon = document.querySelector("#desktop-phone-white");
const bottomBlackMobilePhoneIcon = document.querySelector("#bottom-mobile-phone");
const bottomBlackDesktopPhoneIcon = document.querySelector("#bottom-desktop-phone");
const bottomWhiteMobilePhoneIcon = document.querySelector("#bottom-mobile-phone-white");
const bottomWhiteDesktopPhoneIcon = document.querySelector("#bottom-desktop-phone-white");
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

const enableWhiteIcons = () => 
    {
        blackIcons.forEach(icon => {
            icon.classList.add("disabled");
        })
        whiteIcons.forEach(icon => {
            
            icon.classList.remove("disabled");
        })
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
        {
            blackMobilePhoneIcon.classList.add("disabled");
            bottomBlackMobilePhoneIcon.classList.add("disabled");
            whiteMobilePhoneIcon.classList.remove("disabled");
            bottomWhiteMobilePhoneIcon.classList.remove("disabled");
        }
        else
        {
            if(blackDesktopPhoneIcon != null)
            {
            blackDesktopPhoneIcon.classList.add("disabled");
            }
            if(bottomBlackDesktopPhoneIcon != null)
            {
            bottomBlackDesktopPhoneIcon.classList.add("disabled");
            }
            if(whiteDesktopPhoneIcon != null)
            {
            whiteDesktopPhoneIcon.classList.remove("disabled");
            }
            if(bottomWhiteDesktopPhoneIcon != null)
            {
            bottomWhiteDesktopPhoneIcon.classList.remove("disabled");
            }
        }
    }
const enableBlackIcons = () =>
    {
        whiteIcons.forEach(icon => {
            icon.classList.add("disabled");
        })
        blackIcons.forEach(icon => {
            icon.classList.remove("disabled");
        })
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
            {
                whiteMobilePhoneIcon.classList.add("disabled");
                bottomWhiteMobilePhoneIcon.classList.add("disabled");
                blackMobilePhoneIcon.classList.remove("disabled");
                bottomBlackMobilePhoneIcon.classList.remove("disabled");
            }
            else
            {
                if(whiteDesktopPhoneIcon != null)
                {
                whiteDesktopPhoneIcon.classList.add("disabled");
                }
                if(bottomWhiteDesktopPhoneIcon != null)
                {
                bottomWhiteDesktopPhoneIcon.classList.add("disabled");
                }
                if(blackDesktopPhoneIcon != null)
                {
                blackDesktopPhoneIcon.classList.remove("disabled");
                }
                if(bottomBlackDesktopPhoneIcon != null)
                {
                bottomBlackDesktopPhoneIcon.classList.remove("disabled");
                }
            }
    }

whiteStyleButton.addEventListener("click", () => 
{
    disableAllStyles();
    enableBlackIcons();
});

darkStyleButton.addEventListener("click", () => 
{
    darkStyle = localStorage.getItem("darkStyle")
    if(darkStyle !== "enabled") 
    {
    disableAllStyles();
    document.body.classList.add("darkStyle");
    enableWhiteIcons();
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
    enableBlackIcons();
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
    enableBlackIcons();
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
    enableBlackIcons();
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
    enableBlackIcons();
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
    enableBlackIcons();
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
    enableBlackIcons();
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