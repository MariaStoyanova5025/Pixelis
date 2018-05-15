$(()=>{

    const appKey = 'kid_ryt5FBX2f';
    const appSecret = '838945f0470d4d21ae70006bb31094f7'
    const host = 'https://baas.kinvey.com';
    const AppHeaders={
        'Authorization' : 'Basic ' + btoa(appKey + ":" + appSecret)
    }; 
    $('#buttonreg').on('click', register);
    function register(event) {
        event.preventDefault();
            $.ajax({
                method: "POST",
                url:`${host}/user/${appKey}/`,
                headers: AppHeaders,
                data: getInfoReg()
            }).then((response) => {
                console.log(response);
                sessionStorage.setItem("username", response.username)
                sessionStorage.setItem("email", response.email)
                window.location.href = "profile"
            })
    }
    $('#buttonlog').on('click', login);
    function login(event) {
        console.log("asd")
        event.preventDefault();
        $.ajax({
            method:"POST",
            url:`${host}/user/${appKey}/login`,
            headers:AppHeaders,
            data: getInfoLog()
        }).then((response) => {
            console.log(response);
            sessionStorage.setItem("username", response.username)
            window.location.href = "profile"
        })
    }

    function getInfoReg()
    {
        var username = document.getElementById("username").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        if (!validateEmail(email))
        {
            var element = document.createElement("h1").innerHTML = "ne staa";
            
        }
        if (password.length < 5)
        {
            console.log("too little");
        }
        return {username: username,
                email: email,
                password: password}
    }
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function getInfoLog()
    {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        return {username: username,
            password: password}
    }
})
