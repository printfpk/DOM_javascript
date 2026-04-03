function openFeatures(){
  var allElems =document.querySelectorAll('.elem')
var  fullElemPage = document.querySelectorAll('.fullElem')
var  fullElemPageBackBtn = document.querySelectorAll('.fullElem .back')

allElems.forEach(function(elem){
  //console.log(elem.id);

  elem.addEventListener('click',function(){
    fullElemPage[elem.id].style.display = 'block'
  })
})

fullElemPageBackBtn.forEach(function(back){
  //console.log(kuchbhi)
  back.addEventListener('click',function() {
    fullElemPage[back.id].style.display = 'none'

  })
})
}
openFeatures()
