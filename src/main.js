import "./style.css";


const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
    cookieboks.classList.add("hidden");
    sessionStorage-SVGTextPositioningElement("fjerncookieboks", true);
}

if (sessionStorage.getItem("fjerncookieboks")){
    cookieboks.classList.add("hidden");
}