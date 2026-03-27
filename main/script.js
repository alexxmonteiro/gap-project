class AutoSlider {
    constructor(interval = 5000) {
        this.radioButtons = [
            document.getElementById('radio1'),
            document.getElementById('radio2'),
            document.getElementById('radio3')
        ];
        this.navBtns = document.querySelectorAll('.nav-btn');
        
        this.currentIndex = 0;
        this.interval = interval;
        this.autoPlayInterval = null;
        this.isPlaying = true;
        
        this.init();
    }
    
    init() {
        this.startAutoPlay();

        this.navBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        this.radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    this.currentIndex = index;
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.resetAutoPlay();
            }
        });
    }

    goToSlide(index) {
        if (index >= 0 && index < this.radioButtons.length) {
            this.radioButtons[index].checked = true;
            this.currentIndex = index;
        }
    }
    
    nextSlide() {
        let nextIndex = (this.currentIndex + 1) % this.radioButtons.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        let prevIndex = (this.currentIndex - 1 + this.radioButtons.length) % this.radioButtons.length;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.interval);
        
        this.isPlaying = true;
    }
    
    setInterval(newInterval) {
        this.interval = newInterval;
        if (this.isPlaying) {
            this.startAutoPlay();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const Slider = new AutoSlider(5000);
    
    addExtraControls(Slider);
});

function openGoh(){
    const mod = document.getElementById('modGoh'); /* Gets The God of High School modal */
    mod.classList.add('open') /* Shows modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            mod.classList.remove('open'); /* Hides modal */
            document.body.style.overflow = 'scroll';
        }
    })
    document.body.style.overflow = 'hidden';
}

function openEva(){
    const mod = document.getElementById('modEva'); /* Gets Evangelion modal */
    mod.classList.add('open') /* Shows modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            mod.classList.remove('open'); /* Hides modal */
            document.body.style.overflow = 'scroll';
        }
    })
    document.body.style.overflow = 'hidden';
}

function openMob(){
    const mod = document.getElementById('modMob'); /* Gets Mob Psycho 100 modal */
    mod.classList.add('open') /* Shows modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            mod.classList.remove('open'); /* Hides modal */
            document.body.style.overflow = 'scroll';
        }
    })
    document.body.style.overflow = 'hidden';
}

function openMore(){
    const mod = document.getElementById('modMore');  /* Target modal container */
    mod.classList.add('open');                       /* Show modal */
    
    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){                  /* Verify close button click */
            mod.classList.remove('open');             /* Hide modal */
            document.body.style.overflow = 'scroll';
        }
    })
    document.body.style.overflow = 'hidden';
}