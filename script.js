function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function destroyIncorrectPhone()
{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    {
        document.getElementById('desktop-phone').classList.add("disabled");
    }
    else
    {
        document.getElementById('mobile-phone').classList.add("disabled");
    }
}

function copyNumber()
{
    alert("Copied Number (+1 913-226-3901) To Clipboard!")
    navigator.clipboard.writeText("+1 913-226-3901")
}