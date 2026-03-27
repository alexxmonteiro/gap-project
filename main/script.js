class AutoSlider {
    constructor(interval = 5000) {
        // Get references to the three radio input elements that control which slide is visible
        this.radioButtons = [
            document.getElementById('radio1'),
            document.getElementById('radio2'),
            document.getElementById('radio3')
        ];
        
        // Get all navigation button elements (prev/next or dot indicators)
        this.navBtns = document.querySelectorAll('.nav-btn');
        
        // Track which slide is currently active (0 = first slide, 1 = second, 2 = third)
        this.currentIndex = 0;
        
        // Time in milliseconds between automatic slide transitions (default 5 seconds)
        this.interval = interval;
        
        // Stores the setInterval ID so we can clear and restart it when needed
        this.autoPlayInterval = null;
        
        // Flag indicating whether auto-play is currently enabled
        this.isPlaying = true;
        
        // Call init to set up all event listeners and start auto-play
        this.init();
    }
    
    // Sets up all event listeners and starts the automatic slideshow
    init() {
        // Begin automatically advancing slides at the specified interval
        this.startAutoPlay();

        // Add click handlers to navigation buttons (previous/next or dot indicators)
        // When clicked, manually navigate to the corresponding slide
        this.navBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

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
        // Manual navigation resets the auto-play timer so the user has time to view the slide
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

    // Begins the automatic slideshow by setting up a recurring interval
    // Clears any existing interval first to prevent multiple timers running simultaneously
    startAutoPlay() {
        // Stop any currently running auto-play to avoid duplicate intervals
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        
        // Create a new interval that calls nextSlide() every 'interval' milliseconds
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.interval);
        
        // Update the playing status flag
        this.isPlaying = true;
    }
    
    // Changes the delay between automatic slide transitions
    // If auto-play is currently active, restarts it with the new timing
    setInterval(newInterval) {
        this.interval = newInterval;
        // Only restart if auto-play is currently running
        if (this.isPlaying) {
            this.startAutoPlay();
        }
    }
    
    // Restarts the auto-play timer from scratch
    // Used after manual user interaction (like clicking nav buttons or using keyboard)
    // This gives the user time to view the manually selected slide before auto-play resumes
    resetAutoPlay() {
        if (this.isPlaying) {
            this.startAutoPlay();
        }
    }
}

// Wait for the entire HTML document to be fully loaded before initializing the slider
// This ensures all DOM elements (radio buttons, nav buttons) exist when we try to select them
document.addEventListener('DOMContentLoaded', () => {
    // Create a new AutoSlider instance that transitions slides every 5 seconds
    const Slider = new AutoSlider(5000);
    
    // Call an external function to add any additional custom controls if defined
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