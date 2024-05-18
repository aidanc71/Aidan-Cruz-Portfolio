let alertMessage = document.getElementById("alert-message"); 

function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function destroyIncorrectPhone()
{
    const bottomMobilePhoneIcon = document.getElementById("bottom-mobile-phone")
    const bottomDesktopPhoneIcon = document.getElementById("bottom-desktop-phone")
    const mobilePhoneIcon = document.getElementById("mobile-phone")
    const desktopPhoneIcon = document.getElementById("desktop-phone")
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    {
        mobilePhoneIcon.classList.remove("disabled");

        bottomMobilePhoneIcon.classList.remove("disabled");
        bottomMobilePhoneIcon.classList.add("contact-info-container");
    }
    else
    {
        desktopPhoneIcon.classList.remove("disabled"); 

        bottomDesktopPhoneIcon.classList.remove("disabled");
        bottomDesktopPhoneIcon.classList.add("contact-info-container");
    }
}

function copyNumber()
{
    const copyAlert = document.getElementById("copy-alert");

    alertMessage.innerHTML = "Copied Number +1 (913)-226-3901 To Clipboard"
    navigator.clipboard.writeText(9132263901);
    
    let alertTopOffset = (window.scrollY + 800).toString() + "px";
    copyAlert.style.setProperty("--alert-top-offset", alertTopOffset);

    copyAlert.classList.remove("disabled");
    copyAlert.classList.remove("hide");
    copyAlert.classList.add("show");
    copyAlert.classList.add("enabled");
    setTimeout(function(){
        copyAlert.classList.add("hide");
    }, 3000);
    
}

function closeAlert()
{
    const copyAlert = document.getElementById("copy-alert");
    copyAlert.classList.add("disabled");
}