const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', markInvalid)

function markInvalid(){
    const password = document.getElementById('password')
    const confirm = document.getElementById('confirm')
    const error = document.getElementById('error')
    if(password.value !== confirm.value){
        password.classList.add('invalid')
        confirm.classList.add('invalid')
        error.style.display = "block"
    }
    else {
        password.classList.remove('invalid')
        confirm.classList.remove('invalid')
        error.style.display = "none"
    }
}