var curr_col;
function createCanvas() {
    let oldsvg = document.getElementsByTagName("svg")[0];
    if(oldsvg){
        oldsvg.innerHTML = '';
    }
    var svg = document.getElementsByTagName("svg")[0];
    x = 0;
    y = 0;
    for(let i = 0; i < 10; i++) {
        for(let k = 0; k < 10; k++){
            svg.innerHTML += `<rect x = ${x} y = ${y} width="50" height="50" style="fill:rgb(255,255,255);stroke-width:3;stroke:rgb(0,0,0)"/>`;
            x += 50; 
        }
        x = 0;
        y+= 50;
    }
    addlis();
}
function addlis()
{
    var svg = document.getElementsByTagName("svg")[0];
    var rect = svg.children;
    for(let i = 0; i < 100; i++)
    {
        rect[i].addEventListener("click", color);
    }
}

function color()
{
    this.style = `fill:${curr_col};stroke-width:3;stroke:rgb(0,0,0)`;
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
        console.log("izvinete????");
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
  
      var imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
  
      triggerDownload(imgURI);
    };
  
    img.src = url;
}
