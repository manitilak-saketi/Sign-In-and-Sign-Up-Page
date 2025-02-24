var loginDiv=document.querySelector("#login");
var adminDiv=document.querySelector("#admin");

function userLogin(){
    loginDiv.style.transition="transform 0.5s";
    adminDiv.style.transition="transform 0.5s";
    loginDiv.style.transform="translate(0%)";
    adminDiv.style.transform="translate(100%)";

}
function adminLogin(){
    adminDiv.style.transition="transform 0.5s";
    loginDiv.style.transition="transform 0.5s";
    loginDiv.style.transform="translate(-100%)";
    adminDiv.style.transform="translate(-100%)";
}