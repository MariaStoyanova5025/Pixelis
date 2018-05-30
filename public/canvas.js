$(()=>{

    const appKey = 'kid_ryt5FBX2f';
    const host = 'https://baas.kinvey.com'; 
    function userHeaders() {
        return {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }
    $('#upload').on('click', upload);
    function upload(event) {
        event.preventDefault();
        var s = new XMLSerializer().serializeToString(document.getElementById("svg"))
        var data = 'data:image/svg+xml;base64,' + window.btoa(s);
            $.ajax({
                method: "POST",
                url:`${host}/appdata/${appKey}/images`,
                headers: userHeaders(),
                success:  function(anotherError) {
                    alert('Successfuly saved');
                },
                error:  function(anotherError) {
                    alert('You shoud be logged');
                },
                data:{
                    author: sessionStorage.getItem('username'),
                    content: data
                 }
            }).then((response) => {
                
            })
    }

})

var new_ = document.getElementsByClassName("new");
for (i = 0; i < new_.length; i++) {
new_[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});
}

var curr_col;
function createCanvas(n) {
    document.getElementsByClassName("size")[0].style.display = "none"
    let oldsvg = document.getElementsByTagName("svg")[0];
    if(oldsvg){
        oldsvg.innerHTML = '';
        console.log("eho, vladi")
    }
    var svg = document.getElementsByTagName("svg")[0];
    x = 0;
    y = 0;
    s = 0;
    switch(n)
    {
        case 16: s = 40;
        break;
        case 32: s = 20;
        break;
    }
    for(let i = 0; i < n; i++) {
        for(let k = 0; k < n; k++){
            svg.innerHTML += `<rect x = ${x} y = ${y} width= "${s}" height="${s}" style="fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)"/>`;
            x += s; 
        }
        x = 0;
        y+= s;
    }
    addlis(n);
}
var check = false;
function color_pick()
{
    check = true;
}
function addlis(n)
{
    var svg = document.getElementsByTagName("svg")[0];
    var rect = svg.children;
    for(let i = 0; i < n*n; i++)
    {
        rect[i].addEventListener("click", color);
    }
}

function trash()
{
    var svg = document.getElementsByTagName("svg")[0];
    var rect = svg.children;
    for(let i = 0; i < rect.length; i++)
    {
        rect[i].style = `fill:white;stroke-width:1;stroke:rgb(0,0,0)`;
    }
}

function color()
{
    if(check == true)
        {
            check = false;
            curr_col = this.style.getPropertyValue('fill');
        }
    
    this.style = `fill:${curr_col};stroke-width:1;stroke:rgb(0,0,0)`;
}

function change(color)
{
    curr_col = color;
    
}

function rubber()
{
    curr_col = "white";
}

//Stackoverflow.com
// потребител Ciro Costa на дата Jan 29 '15 at 23:36
//https://stackoverflow.com/questions/28226677/save-inline-svg-as-jpeg-png-svg

function triggerDownload (imgURI) {
    var evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    });
    
    var a = document.createElement('a');
    a.setAttribute('download', 'MY_COOL_IMAGE.png');
    a.setAttribute('href', imgURI);
    a.setAttribute('target', '_blank');
    
    a.dispatchEvent(evt);
    }



function download()
{    
    console.log('asd')
    var svg = document.getElementById('svg');  
  
   

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var data = (new XMLSerializer()).serializeToString(svg);
    console.log(data);
    var DOMURL = window.URL || window.webkitURL || window;
  
    var img = new Image();
    var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svgBlob);
  
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
  
      var imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
  
      triggerDownload(imgURI);
    };
  
    img.src = url;
}
