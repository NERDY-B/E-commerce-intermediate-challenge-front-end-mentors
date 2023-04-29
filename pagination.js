const right = document.querySelector('.right');
const left = document.querySelector('.left');
const thumbNail = document.querySelector('.thumbnail-slide');
const pixel = 300;
let i = 0;
const thumbNailIcon = document.querySelector('.thumbnail');
const imgArr = Array.from(right.closest('.thumbnail-slide').querySelectorAll('img'));
let thumbNailArray = [];

//get and store the child img of parent li in an array thumbnailarray
thumbNailIcon.querySelectorAll('li').forEach((el,index) => {
    thumbNailArray.push(el.firstElementChild);
    thumbNailArray[index].setAttribute(`data-border`, `${index}`);
})

thumbNailArray[0].style.border = `2px solid hsl(26, 100%, 55%)`;
//pagination control movement
right.addEventListener('click',function(e){
    console.log(i, 'index val');
    thumbNailArray[i + 1].style.setProperty(`border`, `2px solid hsl(26, 100%, 55%)`);

    imgArr[i].scrollIntoView({behavior: 'smooth'});
    // thumbNailArray[i].setAttribute('data-border', `${i}`);
    i++;
    console.log(i);
    // if(i=== 3) i =0;
    if((thumbNailArray[i-1].getAttribute('data-border')) !== i )
    console.log(thumbNailArray[i-1]);
    thumbNailArray[i-1].style.removeProperty('border');

   

});


console.log(thumbNailArray);