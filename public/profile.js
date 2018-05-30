document.onload = profile();
function profile()
{
    document.getElementById("name").innerHTML = "Name: " + sessionStorage.getItem("username");
    document.getElementById("email").innerHTML = "Email: " + sessionStorage.getItem("email");
}
