let dark=document.getElementById('dark')
let body=document.getElementById('body')
let nav=document.getElementById('nav')
let para=document.getElementById('para')
let btn=document.getElementById('btn')
let vari=document.getElementById('vari')
let output=document.getElementById('output')
let output2=document.getElementById('output2')
nav.style.background="#f8f9fa"
nav.style.color="#212529"
btn.addEventListener("click", function(){
    output.innerText=`${para.value.split(vari.value).length-1} words found 
    ${para.value.length} characters in the paragraph
    index number in the paragraph ${para.value.indexOf(vari.value)+1} to ${para.value.indexOf(vari.value)+1+vari.value.length}`
})
// darkmode
dark.addEventListener("click",function(){
    body.style.backgroundColor="#212529"
    body.style.color="#f8f9fa"
    nav.style.backgroundColor="#1c1c1c"
})
dark.addEventListener("dblclick",function(){
    body.style.color="#212529"
    body.style.backgroundColor="#fff"
    nav.style.backgroundColor="#f8f9fa"
    nav.style.color="white"
})
//loader
let content=document.getElementById(`content`)
let loader=document.getElementById('loader')
let wid=0
content.style.visibility="hidden"
setInterval(() => {
    wid++
    loader.style.width=`${wid}%`
    if(wid==100){
    wid=-10*100000*10000*10000
    loader.style.display="none"
    content.style.visibility="visible"
   }
}, 10);
