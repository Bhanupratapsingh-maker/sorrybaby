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

// 2. The Interactive "Run Away" No Button (Guaranteed Jump)
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Generate values between 5% and 85% for horizontal width
    const randomX = Math.floor(Math.random() * 75) + 5;
    // Generate values between 10px and 90px for vertical alignment
    const randomY = Math.floor(Math.random() * 80) + 10;

    // Use percentages for X to make sure it handles mobile/desktop screens easily
    noBtn.style.left = randomX + "%";
    noBtn.style.top = randomY + "px";
}

// 3. Handle the "Yes" Button Click
function forgiven() {
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('successCard').style.display = 'block';
}
