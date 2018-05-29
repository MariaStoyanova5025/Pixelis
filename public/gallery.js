$(()=>{
    const appKey = 'kid_ryt5FBX2f';
    const host = 'https://baas.kinvey.com'; 
    function userHeaders() {
        return {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }
    console.log(sessionStorage.getItem('authToken'));
    $.ajax({
        method: "GET",
        url:`${host}/appdata/${appKey}/images?query={"author":"${sessionStorage.getItem('username')}"}`,
        headers: userHeaders()
    }).then((response) => {
        console.log(response)
        let i = 1
        response.forEach(function(img) {
            $('.all').append($('<div></div>').addClass('part').append($('<div></div>').attr('id', 'name').append($('<p></p>').text('Pixel ' + i))).append($('<img>').attr('src', img.content)))
            i++
        });
    })
})

