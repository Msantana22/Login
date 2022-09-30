

let email = document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = 'Orange';
});

email.addEventListener('blur',()=>{
email.style.borderColor = '#ccc';
});

let senha = document.getElementById('senha');
senha.addEventListener('focus',()=>{
    senha.style.borderColor = 'orange';
});

senha.addEventListener('blur',()=>{
senha.style.borderColor = '#ccc';
});

 
const password = document.getElementById('senha');
const olho= document.getElementById('olho');

function Exibirsenha(){
    if(password.type === 'password')
    {
        password.setAttribute('type', 'text');
        olho.src = 'eye-slash.svg'     
        }else{

        password.setAttribute('type', 'password');
        olho.src = 'eye-solid.svg' 
    
    }
}
