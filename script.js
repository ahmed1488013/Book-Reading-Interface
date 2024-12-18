// Function to adjust font size based on user selection
function adjustFontSize() {
  const fontSize = document.getElementById("font-size").value;
  const bookText = document.getElementById("book-text");
  bookText.style.fontSize = fontSize;
}

// Function to adjust background color based on user selection
function adjustBackgroundColor() {
  const backgroundColor = document.getElementById("background-color").value;
  document.body.style.backgroundColor = backgroundColor;
  // Apply a soft transition to make the change smoother
  document.querySelector('.container').style.background = backgroundColor === '#FFFFFF' ? 'linear-gradient(135deg, #FAF3E0, #E0F7FA)' : '#FAF3E0';
}
