// Initialize Hammer on the body
var hammerTap = new Hammer(document.getElementById('gestureBox'));

// Display alert for tap gesture
alert("Tap to change the box color.");

// Unique gesture interaction for tap
hammerTap.on("tap", function () {
  changeColor();
});

function changeColor() {
  const gestureBox = document.getElementById('gestureBox');
  const randomColor = getRandomColor();
  gestureBox.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
