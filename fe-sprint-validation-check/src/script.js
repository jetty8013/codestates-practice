// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

let password1 = document.querySelector('#password')
let password2 = document.querySelector('#password-retype')
let elMismatchMessage = document.querySelector('.mismatch-message')


elInputUsername.onkeyup =function(){
  isMoreThan4Length(elInputUsername.value)
}

password1.onkeyup = function(){
  isMatch(password1.value,password2.value)
}

password2.onkeyup = function(){
  isMatch(password1.value,password2.value)
}


function isMoreThan4Length(value) {
 if(value.length >= 4){
  elSuccessMessage.classList.remove('hide')
  elFailureMessage.classList.add('hide')
 }
 else{
  elSuccessMessage.classList.add('hide')
  elFailureMessage.classList.remove('hide')
 }
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 !== password2){
  elMismatchMessage.classList.remove('hide')
  return false
  }else if(password1 === password2){
    elMismatchMessage.classList.add('hide')
    return true
  }
}
