function openGoh(){
    const mod = document.getElementById('modGoh'); /* Gets The God of High School modal */
    mod.classList.add('open') /* Shows modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            mod.classList.remove('open'); /* Hides modal */
        }
    })
}

function openEva(){
    const mod = document.getElementById('modEva'); /* Gets Evangelion modal */
    mod.classList.add('open') /* Shows modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            mod.classList.remove('open'); /* Hides modal */
        }
    })
}

function openMob(){
    const mod = document.getElementById('modMob'); /* Gets Mob Psycho 100 modal */
    mod.classList.add('open') /* Shows modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            mod.classList.remove('open'); /* Hides modal */
        }
    })
}