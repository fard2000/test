document.addEventListener("DOMContentLoaded", ()=>{
// ul=document.querySelector('ul');
    for(i=0; i<20; i++){
        randRadios=Math.floor(Math.random()*40)+41;
        randCx=Math.floor(Math.random()*window.innerWidth);
        randCy=Math.floor(Math.random()*window.innerHeight);
        drawCircle(randRadios,randCx,randCy);

        // li=document.createElement('li');
        // li.innerHTML=Math.floor(Math.random()*window.innerWidth);
        // ul.append(li);
    }

});

function drawCircle(randRadios,randCx,randCy){
    svg=d3.select('svg');

    svg.append('circle')
    .attr('cx',randCx)
    .attr('cy',randCy)
    .attr('r',randRadios)
    .style('fill','green');
}
