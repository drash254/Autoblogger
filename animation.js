// Function to perform animation on characters within h1
function animateText() {
    const text = document.getElementById('animatedText');
    if (text) {
        const chars = text.textContent.split('');
        text.textContent = ''; // Clear the text content

        chars.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            text.appendChild(span);

            // Animation using GSAP or any other preferred method
            gsap.fromTo(span, {
                opacity: 0,
                y: '100%',
                rotation: gsap.utils.random(-180, 180)
            }, {
                opacity: 1,
                y: '0%',
                rotation: 0,
                duration: 0.5,
                ease: 'back.out(1.7)',
                delay: Math.random() * 0.5 // Adjust the delay for each character
            });
        });
    }
}

// Function to load GSAP from CDN and perform animation after it's loaded
function loadGSAP(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';
    script.onload = callback;
    document.head.appendChild(script);
}

// Load GSAP dynamically and trigger animation on load
document.addEventListener('DOMContentLoaded', function () {
    loadGSAP(animateText);
});

// Selecting elements by class name returns a collection, so you might want to specify which element in the collection you want to add the event listener to (e.g., [0] for the first element)
const elements = document.getElementsByClassName('bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out');

// Adding an event listener to each element in the collection
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
        // Redirect to index.html when clicked
        window.location.href = 'index.html';
    });
}
