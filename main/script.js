class AutoSlider {
    constructor() {
        // Get references to the three radio input elements that control which slide is visible
        this.radioButtons = [
            document.getElementById('radio1'),
            document.getElementById('radio2'),
            document.getElementById('radio3')
        ];
        
        // Track which slide is currently active (0 = first slide, 1 = second, 2 = third)
        this.currentIndex = 0;
        
        // Call init to set up all event listeners
        this.init();
    }
    
    // Sets up all event listeners
    init() {
        // Monitor radio button changes to keep currentIndex in sync with the UI
        // This ensures we always know which slide is active even if changed by other means
        this.radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    this.currentIndex = index;
                }
            });
        });

        // Add keyboard navigation support
        // Left arrow key goes to previous slide, right arrow key goes to next slide
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    // Manually navigate to a specific slide by its index position
    // Validates that the index is within range before attempting to navigate
    goToSlide(index) {
        if (index >= 0 && index < this.radioButtons.length) {
            // Set the corresponding radio button to checked, which triggers the CSS to show that slide
            this.radioButtons[index].checked = true;
            // Update the current index to reflect the new active slide
            this.currentIndex = index;
        }
    }
    
    // Advance to the next slide in the sequence
    // Uses modulo operator to wrap around to the first slide when reaching the end
    nextSlide() {
        let nextIndex = (this.currentIndex + 1) % this.radioButtons.length;
        this.goToSlide(nextIndex);
    }

    // Go back to the previous slide in the sequence
    // Adds the total number of slides before modulo to handle negative values correctly
    prevSlide() {
        let prevIndex = (this.currentIndex - 1 + this.radioButtons.length) % this.radioButtons.length;
        this.goToSlide(prevIndex);
    }
}

// Wait for the entire HTML document to be fully loaded before initializing the slider
// This ensures all DOM elements (radio buttons, nav buttons) exist when we try to select them
document.addEventListener('DOMContentLoaded', () => {
    // Create a new AutoSlider instance without automatic sliding
    const Slider = new AutoSlider();
    
    // Call an external function to add any additional custom controls if defined
    if (typeof addExtraControls === 'function') {
        addExtraControls(Slider);
    }
});

function openGoh(){
    const mod = document.getElementById('modGoh'); /* Gets The God of High School modal */
    mod.classList.add('open') /* Shows modal */

    const iframeGoh = document.getElementById('iframe-goh');

    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            const videoSrc = iframeGoh.src;
            iframeGoh.src = '';
            iframeGoh.src = videoSrc;
            
            mod.classList.remove('open'); /* Hides modal */
            document.body.style.overflow = 'scroll';
        }
    })
    document.body.style.overflow = 'hidden';
}

function openEva(){
    const mod = document.getElementById('modEva'); /* Gets Evangelion modal */
    mod.classList.add('open') /* Shows modal */
    const iframeEva = document.getElementById('iframe-eva');

    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            const videoSrc = iframeEva.src;
            iframeEva.src = '';
            iframeEva.src = videoSrc;

            mod.classList.remove('open'); /* Hides modal */
            document.body.style.overflow = 'scroll';
        }
    })
    document.body.style.overflow = 'hidden';
}

function openMob(){
    const mod = document.getElementById('modMob'); /* Gets Mob Psycho 100 modal */
    mod.classList.add('open') /* Shows modal */
    const iframeMob = document.getElementById('iframe-mob');

    mod.addEventListener('click', (e) =>{
        if(e.target.id == 'close'){ /* Checks if clicked element is the close button */
            const videoSrc = iframeMob.src;
            iframeMob.src = '';
            iframeMob.src = videoSrc;
            
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