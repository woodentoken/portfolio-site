// assets_source/script.ts

document.addEventListener('DOMContentLoaded', function() {
  // write to console.log when DOM is ready
  console.log('DOM is ready');
  console.log("Saved theme:", localStorage.getItem('theme'));
});




// document.documentElement.classList.add('no-transition');  // Add a class to disable transitions initially

// window.addEventListener('load', () => {
//   document.documentElement.classList.remove('no-transition');  // Remove the class after the page loads
// });


// const themeToggle = document.getElementById('themeToggle');

// // Check if there's a saved theme in localStorage, or default to light
// const currentTheme = localStorage.getItem('theme') || 'dark';
// document.documentElement.setAttribute('data-theme', currentTheme); // Apply the theme to <html>


// // Set the initial theme based on localStorage or default to light theme
// if (currentTheme) {
//   document.body.classList.add(currentTheme);
//   themeToggle.checked = currentTheme === 'dark-theme';
// } else {
//   document.body.classList.add('light-theme');
// }

// // Update the button text based on the current theme
// themeToggle.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

// // Add event listener to toggle the theme
// themeToggle.addEventListener('click', () => {
//   // Toggle between dark and light themes
//   const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
//   document.documentElement.setAttribute('data-theme', newTheme); // Apply the new theme
//   localStorage.setItem('theme', newTheme); // Save the theme to localStorage
//   themeToggle.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'; // Update button text

//   // // Add event listener for the theme toggle
// // themeToggle.addEventListener('change', () => {
//   // if (themeToggle.checked) {
//   //   document.body.classList.remove('light-theme');
//   //   document.body.classList.add('dark-theme');
//   //   localStorage.setItem('theme', 'dark-theme');
//   // } else {
//   //   document.body.classList.remove('dark-theme');
//   //   document.body.classList.add('light-theme');
//   //   localStorage.setItem('theme', 'light-theme');
//   // }

  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme); // Apply the new theme
// });
  console.log("Current theme:", document.documentElement.getAttribute('data-theme'));
  console.log("Saved theme:", localStorage.getItem('theme'));
// });

// script.js

// Get the toggle element and the current theme
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

// Check if a theme is stored in localStorage
if (currentTheme) {
  // Apply the stored theme to the body
  document.body.classList.add(currentTheme);
  
  // Set the toggle state based on the saved theme (checked for dark, unchecked for light)
  themeToggle.checked = currentTheme === 'dark-theme';
} else {
  // Default to light theme if no theme is stored
  document.body.classList.add('light-theme');
  themeToggle.checked = false;  // Ensure the toggle is unchecked by default
}

// Add event listener for the theme toggle
themeToggle.addEventListener('change', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme); // Apply the new theme
  // });
  if (themeToggle.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});
