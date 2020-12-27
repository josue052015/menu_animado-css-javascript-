const btntoggle = document.querySelector('.toggle-btn');
btntoggle.addEventListener('click',function(){
    console.log('click')
    document.getElementById('sidebar').classList.toggle('active');
})