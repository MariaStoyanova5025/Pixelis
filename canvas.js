var curr_col;
function createCanvas() {
    console.log("bla");
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
 