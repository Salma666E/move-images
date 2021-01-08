var butt= document.getElementById("move_butt");
var img_left= document.getElementById("vert_left");
var img_right= document.getElementById("vert_right");
var img_bottom= document.getElementById("vert_bottom");
var timInterval;
var axsis= 0;

function go(){
    if( butt.textContent == "Stop" )
    {
        butt.textContent = "Go";
        clearInterval(timInterval);
    }
    else
    {
        butt.textContent = "Stop";
        timInterval=setInterval(function(){
            axsis++;
            document.querySelector("#vert_left").style.left =axsis+"px";
            document.querySelector("#vert_right").style.right =axsis+"px";
            document.querySelector("#vert_bottom").style.bottom =axsis+"px";
            if( axsis == 230 ){
                while(axsis != 0){
                    --axsis;
                    document.querySelector("#vert_left").style.left = axsis+"px";
                    document.querySelector("#vert_right").style.right = axsis+"px";
                    document.querySelector("#vert_bottom").style.bottom = axsis+"px";
                }
            }
        },30);
    }
}
function reset(){
    axsis= 0;
    img_right.setAttribute("style","right: 0");
    img_left.setAttribute("style","left: 0");
    img_bottom.setAttribute("style","bottom: 0");
}
setInterval(function(){
    document.getElementById("p1").textContent= "<img src='images/icon1.gif' style=left:'"+axsis+"px'>";
    document.getElementById("p2").textContent= "<img src='images/icon2.gif' style=left:'"+axsis+"px'>";
},30);
