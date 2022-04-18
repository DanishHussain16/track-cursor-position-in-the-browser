var target=document.querySelector('body');

target.addEventListener('mousemove',over);



function over(e){
    document.querySelector('.posx').innerHTML='along x axis:  '+e.clientX;
    document.querySelector('.posy').innerHTML=' along y axis:  '+e.clientY;
}
