

let email = document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = '#4f46e5';
});

email.addEventListener('blur',()=>{
email.style.borderColor = 'transparent';
});

let senha = document.getElementById('senha');
senha.addEventListener('focus',()=>{
    senha.style.borderColor = '#4f46e5';
});

senha.addEventListener('blur',()=>{
senha.style.borderColor = 'trasnparent';
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
