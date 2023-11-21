// Maria: Exibir e fechar o menu do usuário
const userIcon = document.getElementById('userIcon');
const userMenu = document.getElementById('userMenu');

userIcon.addEventListener('click', function () {
    if (userMenu.style.display === 'block') {
        userMenu.style.display = 'none';
    } else {
        userMenu.style.display = 'block';
    }
});

const submenus = document.querySelectorAll(".submenu");

        submenus.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.querySelector(".submenu-options").classList.add("display-active");
            })

            element.addEventListener("mouseout", () => {
                element.querySelector(".submenu-options").classList.remove("display-active");
            })
        });

        const submenuOptions = document.querySelectorAll(".submenu-option");

        submenuOptions.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.querySelector(".submenu-options-inner").classList.add("display-active");
            })

            element.addEventListener("mouseout", () => {
                element.querySelector(".submenu-options-inner").classList.remove("display-active");
            })
        });

//Laís, Lie: 
//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

