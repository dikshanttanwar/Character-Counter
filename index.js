let charTotal = document.querySelector(".charTotal")
let charRem = document.querySelector(".charRem")
let textArea = document.querySelector("#textBox")

console.log(textArea)

// charRem.innerText = ` Remaining Character : ${textArea.value}` 

textArea.addEventListener("keyup",()=>{
    let textLength = textArea.value.length;
    charRem.innerText = `Remaining Character : ${textLength}`
    // if(textLength==100){
    //     textArea.
    // }
})