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
            if(img.name == null)
            {
                img.name = "Pixel"
            }
            $('.all')
            .append($('<div></div>').attr('id', img._id).addClass('part')
            .append($('<div></div>').append($('<p></p>').attr('id', 'name').text(img.name)))
            .append($('<img>').attr('src', img.content))
            .append($('<button>').html('Delete').on('click', delete_image))
            .append($('<button>').html('Raname').on('click', rename_image)))
            i++
        });
    })
    
    function rename_image()
    {
        if($(this).parent().find('input').length  === 0)
        {
            $(this).parent()
            .append($('<input>').attr('id', 'img_name'))
            .append($('<button>').html("submit").on('click',rename))
        }
       
    }

    function rename()
    {
        $.ajax({
            method:"PUT",
            url:`${host}/appdata/${appKey}/images/${$(this).parent().attr('id')}`,
            headers: userHeaders(),
            data:{
                author: sessionStorage.getItem("username"),
                name : $("#img_name").val(),
                content: $($(this).parent().children().get(1)).attr("src")
            },
            success: ()=>{
                document.location.reload() 
            }
        })
    }

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

