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
                data:{
                    content: data
                 }
            }).then((response) => {
                console.log(response);
                var img = document.createElement('img');
                img.src = response.content
                document.getElementsByTagName('body')[0].appendChild(img)
            })
    }

})

var coll = document.getElementsByClassName("button button1");
coll[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log(content)
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

var curr_col;
function createCanvas(n) {
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
        case 64: s = 10;
        break;
        case 128: s = 5;
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
function addlis(n)
{
    var svg = document.getElementsByTagName("svg")[0];
    var rect = svg.children;
    for(let i = 0; i < n*n; i++)
    {
        rect[i].addEventListener("click", color);
    }
}

function color()
{
    this.style = `fill:${curr_col};stroke-width:1;stroke:rgb(0,0,0)`;
}

function red()
{
    curr_col = "red";
}

function orange()
{
    curr_col = "orange";
}

function yellow()
{
    curr_col = "yellow";
}

function green()
{
    curr_col = "green";
}

function blue()
{
    curr_col = "blue";
}

function purple()
{
    curr_col = "purple";
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
