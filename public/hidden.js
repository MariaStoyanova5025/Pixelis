function check()
{
    if(sessionStorage.getItem("username") === null)
    {
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'block';
        document.getElementById('profile').style.display = 'none';
        document.getElementById('galery').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
    } else {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('galery').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
    }
}

function logout()
{
    sessionStorage.clear();
}