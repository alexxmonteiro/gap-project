function openGoh(){
    const mod = document.getElementById('modGoh');
    mod.classList.add('open')
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){
            mod.classList.remove('open');
        }
    })
}

function openEva(){
    const mod = document.getElementById('modEva');
    mod.classList.add('open')
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){
            mod.classList.remove('open');
        }
    })
}

function openMob(){
    const mod = document.getElementById('modMob');
    mod.classList.add('open')
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){
            mod.classList.remove('open');
        }
    })
}