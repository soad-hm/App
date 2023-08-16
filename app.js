let $=document
const btnP=document.querySelector('#btn-save')
const btnd=document.querySelector('#btn-delete')
const inputbox= document.querySelector('#input-field')
const anothercolor=document.querySelectorAll('.color-box')
const container=document.querySelector('#listed')
// function plus(){
// //اضافه کردن یه دیو جدید 
// //محتوایات inputداخل container
// //حذف متن در inputbox

// }
anothercolor.forEach(function(colors){
    colors.addEventListener('click',function(event){
       let all= event.target.style.backgroundColor
       inputbox.style.backgroundColor=all
    })
})
function ncreate () {
    let dv = $.createElement('div')
    dv.className = 'card shadow-sm rounded'
    let bgcolor = inputbox.style.backgroundColor
    dv.style.backgroundColor = bgcolor
    dv.addEventListener('click',removenote)

    let Par = $.createElement('p')
    Par.className='card-text p-3'
    Par.innerHTML=inputbox.value

    dv.append(Par)
    container.append(dv)
    inputbox.value=' '
    inputbox.style.backgroundColor='#fff'
}
function removenote(event){
event.target.parentElement.remove()
}




btnd.addEventListener('click',function(){
    inputbox.value=''
    inputbox.style.backgroundColor='#fff'
})
btnP.addEventListener('click',ncreate)