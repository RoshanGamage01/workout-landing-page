const menuBtn = document.getElementById('ham');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');

menuBtn.onclick = function(){
    menuBtn.style.display = 'none';
    menu.style.display = 'block';
    menu.style.right = '0px';
    closeBtn.onclick = function(){
        menuBtn.style.display = 'flex';
        menu.style.right = '-150px';
    }
}