function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function getInfoLog()
{
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    let li = document.createElement('li');
    li.innerHTML = username
    document.getElementsByTagName('ul')[0].appendChild(li)
}

function getInfoReg()
{
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    console.log("-" + username + "-" + password)
    if (!validateEmail(email))
    {
        var element = document.createElement("h1").innerHTML = "ne staa";
         
    }
    if (password.length < 5)
    {
        console.log("too little");
    }
}
