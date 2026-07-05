// 1. Generate Floating Hearts Background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 300);

// 2. Viewport-Wide Runaway Script
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Completely clear out the initial center alignment margin once she hovers
    noBtn.style.marginLeft = "0px";

    // Measure the exact visible screen dimension dimensions
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate maximum safe bounds so the button doesn't shoot off the edge
    const maxLeft = screenWidth - noBtn.offsetWidth - 20;
    const maxTop = screenHeight - noBtn.offsetHeight - 20;

    // Generate coordinates anywhere across her entire view screen
    const randomLeft = Math.max(20, Math.floor(Math.random() * maxLeft));
    const randomTop = Math.max(20, Math.floor(Math.random() * maxTop));

    // Force application via explicit pixel parameters
    noBtn.style.left = randomLeft + "px";
    noBtn.style.top = randomTop + "px";
}

// 3. Handle the "Yes" Button Click
function forgiven() {
    document.getElementById('mainCard').style.display = 'none';
    // Hide the floating button completely when she finally says yes
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('successCard').style.display = 'block';
}
