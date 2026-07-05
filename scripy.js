// 1. Generate Floating Hearts Background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // 3-6 seconds
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 300);

// 2. The Interactive "Run Away" No Button
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.btn-container');
    
    // Get boundaries of the button container so it doesn't fly off screen
    const containerWidth = container.clientWidth;
    
    // Generate random coordinates within the container limits
    const randomX = Math.floor(Math.random() * (containerWidth - 80));
    const randomY = Math.floor((Math.random() - 0.5) * 150); 

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// 3. Handle the "Yes" Button Click
function forgiven() {
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('successCard').style.display = 'block';
}