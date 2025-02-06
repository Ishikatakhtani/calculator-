let store=""
let show=document.querySelector("#display")
let cal=(value)=>{
    store=store+value
    let show=document.querySelector("#display")
    show.innerHTML=store
}

let res=()=>{
    show.innerHTML=eval(store)
    store=eval(store)
    store.toString()
}

let c=()=>{
   store=""
   show.innerHTML=store
}
let d=()=>{
   
    store=store.slice(0,-1)
    show.innerHTML=store
}
   
let sqr=()=>{
    store=store*store
   show.innerHTML=store
}


// let inpbox=document.querySelector("#display")
//  inpbox.addEventListener("keydown",(e)=>{
//   (e.key);
//  })