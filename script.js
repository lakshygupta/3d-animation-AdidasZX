const card = document.querySelector('.card');
const container = document.querySelector('.container');

//ITEMS ANIMATE
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');
const desc = document.querySelector('.info h3');


container.addEventListener('mousemove',(e) => {
    // console.log(e.pageX);
    let xAxis = (window.innerWidth/2 - e.pageX) / 25;
    let yAxis = (window.innerHeight/2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate IN
container.addEventListener('mouseenter', e =>{
    card.style.transition = 'none';

    //POPOUT
    title.style.transform = 'translateZ(70px)';
    sneaker.style.transform = 'translateZ(90px) rotateZ(15deg)';
    purchase.style.transform = 'translateZ(70px)';
    sizes.style.transform = 'translateZ(70px)';
    desc.style.transform = 'translateZ(70px)';

})

//Animate OUT
container.addEventListener('mouseleave', e=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`   

    //POPBACK
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    desc.style.transform = 'translateZ(0px)';

})
