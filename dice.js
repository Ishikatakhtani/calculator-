let n=()=>{
 let s=Math.floor(Math.random()*6+1)
//  s.innerHTML(`rolled dice is ${s}`)
//  document.write(s)
console.log(s)

// sh1.style.display=='none'
if( s==1){
    let sh1= document.querySelector("#roll1")
    sh1.style.display="block";  

    let sh2=document.querySelector("#roll2")
    sh2.style.display="none";

      let sh3=document.querySelector("#roll3")
        sh3.style.display="none"
    
     let sh4=document.querySelector("#roll4")
    sh4.style.display="none"

    let sh5=document.querySelector("#roll5")
    sh5.style.display="none"

     let sh6=document.querySelector("#roll6")
    sh6.style.display="none"

 }

// let sh2=document.querySelector("#roll2")
// sh2.style.display=='none'
 else  if(  s==2){
    let sh2=document.querySelector("#roll2")
   sh2.style.display="block";
   let sh1= document.querySelector("#roll1")
   sh1.style.display="block";  

   let sh3=document.querySelector("#roll3")
        sh3.style.display="none"
    
     let sh4=document.querySelector("#roll4")
    sh4.style.display="none"

    let sh5=document.querySelector("#roll5")
    sh5.style.display="none"

     let sh6=document.querySelector("#roll6")
    sh6.style.display="none"
 }

 
 else if(s==3 )
    {
        let sh3=document.querySelector("#roll3")
        sh3.style.display="block"
        let sh2=document.querySelector("#roll2")
        sh2.style.display="block";
        let sh1= document.querySelector("#roll1")
        sh1.style.display="block";  

        let sh4=document.querySelector("#roll4")
        sh4.style.display="none"
    
        let sh5=document.querySelector("#roll5")
        sh5.style.display="none"
    
         let sh6=document.querySelector("#roll6")
        sh6.style.display="none"
    
 }

 
 else if(s==4 ){
    let sh4=document.querySelector("#roll4")
    sh4.style.display="block"
    let sh3=document.querySelector("#roll3")
    sh3.style.display="block"
    let sh2=document.querySelector("#roll2")
    sh2.style.display="block";
    let sh1= document.querySelector("#roll1")
    sh1.style.display="block";  

    let sh5=document.querySelector("#roll5")
    sh5.style.display="none"

     let sh6=document.querySelector("#roll6")
    sh6.style.display="none"

 }

 
else if(s==5 ){
    let sh5=document.querySelector("#roll5")
    sh5.style.display="block"
    let sh4=document.querySelector("#roll4")
    sh4.style.display="block"
    let sh3=document.querySelector("#roll3")
    sh3.style.display="block"
    let sh2=document.querySelector("#roll2")
    sh2.style.display="block";
    let sh1= document.querySelector("#roll1")
    sh1.style.display="block";

let sh6=document.querySelector("#roll6")
    sh6.style.display="none"
    
 }

 
else  if(s==6  ){
    let sh6=document.querySelector("#roll6")
    sh6.style.display="block"
    let sh5=document.querySelector("#roll5")
    sh5.style.display="block"
    let sh4=document.querySelector("#roll4")
    sh4.style.display="block"
    let sh3=document.querySelector("#roll3")
    sh3.style.display="block"
    let sh2=document.querySelector("#roll2")
    sh2.style.display="block";
    let sh1= document.querySelector("#roll1")
    sh1.style.display="block";
    
   
 }
 
    
 
}

