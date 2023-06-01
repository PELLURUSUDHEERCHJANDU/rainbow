const button=document.querySelector('Button');
const body=document.querySelector('Body');
const color=['violet','indigo','blue','green','yellow','orange','red'];
body.style.backgroundColor='black';
document.addEventListener('click',function() {
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}
);