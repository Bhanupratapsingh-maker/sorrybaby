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

// 2. The Absolute Runaway Logic using CSS Transforms
function moveButton() {
    const noBtn = document.getElementById('noBtn');

    // Generate random offsets (can move up to 150px left/right and 100px up/down)
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 200) - 100;

    // Apply the hardware transform translation
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// 3. Handle the "Yes" Button Click
function forgiven() {
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('successCard').style.display = 'block';
}
