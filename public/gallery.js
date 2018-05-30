$(()=>{
    const appKey = 'kid_ryt5FBX2f';
    const host = 'https://baas.kinvey.com'; 
    function userHeaders() {
        return {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }
    $.ajax({
        method: "GET",
        url:`${host}/appdata/${appKey}/images?query={"author":"${sessionStorage.getItem('username')}"}`,
        headers: userHeaders()
    }).then((response) => {
        let i = 1
        response.forEach(function(img) {
            $('.all').append($('<div></div>').attr('id', img._id).addClass('part').append($('<div></div>').append($('<p></p>').attr('id', 'name').text('Pixel ' + i))).append($('<img>').attr('src', img.content)).append($('<button>').html('Delete').on('click', delete_image)))
            i++
        });
    })
    function delete_image(){
        
        $.ajax({
            method:"DELETE",
            url:`${host}/appdata/${appKey}/images/${$(this).parent().attr('id')}`,
            headers: userHeaders(),
            success: ()=>{
                $(this).parent().remove();
            }
        })
    }
})

