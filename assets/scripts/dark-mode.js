const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')
checkbox.addEventListener('change', function(){
    if( !html.classList.contains('dark-mode') ){
        html.classList.add('dark-mode');
        localStorage.setItem('user-color', 'dark');
    }else{
        html.classList.remove('dark-mode');
        localStorage.setItem('user-color', 'white');
    };
})

// storage dark/white mode
let userColor = localStorage.getItem('user-color') || 'white';
if(userColor === 'dark'){
    html.classList.add('dark-mode');
    document.querySelector('#switch').checked = true;
};