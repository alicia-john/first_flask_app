let login_button = document.getElementById("login");

let login = function(){
    console.log("login")
    location.assign("http://127.0.0.1:5000/to_do_list");
}
login_button.addEventListener('click', login);