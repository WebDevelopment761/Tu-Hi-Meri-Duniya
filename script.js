// Typewriter effect
const text = `Mai tumse ek baat kehna chahta hoon, jo dil mein kab se chhupi thi...
Tumhari muskurahat, tumhara andaaz, sab kuch mere dil ko chhoo gaya hai.
Shayad yeh mohabbat hai…
Kya tum meri zindagi ka hissa banogi? 💖`;

let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Music unmute on first interaction
document.body.addEventListener('click', function () {
  const bg = document.getElementById('bgMusic');
  bg.muted = false;
  bg.play();
}, { once: true });

// YES response
document.getElementById('yesBtn').onclick = function () {
  document.getElementById('response').innerText = "Yay! I love you too 💘";
};

// NO button run away
const noBtn = document.getElementById('noBtn');
noBtn.onmouseover = function () {
  this.style.transition = 'none';
  this.style.position = 'absolute';
  this.style.top = Math.random() * 80 + "%";
  this.style.left = Math.random() * 80 + "%";
};
// Auto-play music after short delay (bypass mute restriction)
window.addEventListener("load", () => {
  const audio = document.getElementById("bgMusic");

  // Try to play after a slight delay (some browsers allow this)
  setTimeout(() => {
    audio.muted = false;
    audio.volume = 0.6; // optional volume control
    audio.play().catch(() => {
      // If blocked, wait for user interaction
      document.body.addEventListener('click', () => {
        audio.muted = false;
        audio.play();
      }, { once: true });
    });
  }, 500);
});
