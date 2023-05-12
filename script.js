// Global variables to keep track of the current page and total number of pages
let currentPage = 1;
const numPages = 20;

// Function to hide all pages and show the welcome screen
function showWelcome() {
  document.getElementById("welcome").style.display = "block";
  document.getElementById("comic").style.display = "none";
}

// Function to hide the welcome screen and show the first page
function startComic() {
  document.getElementById("page" + currentPage).style.display = "none";
  currentPage = 1;
  document.getElementById("welcome").style.display = "none";
  document.getElementById("comic").style.display = "block";
  document.getElementById("page1").style.display = "block";
}

// Function to show the next page
function nextPage() {
  if (currentPage < numPages) {
    currentPage++;
    document.getElementById("page" + currentPage).style.display = "block";
    document.getElementById("page" + (currentPage - 1)).style.display = "none";
  }
  // If we're on the last page, show the end screen
  else {
    showEnd();
  }
}

function goToPage(page) {
  document.getElementById("page" + page).style.display = "block";
  document.getElementById("page" + currentPage).style.display = "none";
  currentPage = page;
}

// Function to show the previous page
function prevPage() {
  if (currentPage > 1) {
    document.getElementById("page" + currentPage).style.display = "none";
    currentPage--;
    document.getElementById("page" + currentPage).style.display = "block";
  }
}

// Function to show the end screen
function showEnd() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("comic").style.display = "none";
  // Hide page 21 elements
  document.getElementById("page20").style.display = "none";
  // Hide all pages
  for (let i = 1; i <= numPages - 1; i++) {
    document.getElementById("page" + i).style.display = "none";
  }
  document.getElementById("end").style.display = "block";
}


// Function to show the end screen
function showEnd() {
  // Hide page 20 elements
  document.getElementById("page20").style.display = "none";
  // Hide all pages
  for (let i = 1; i <= numPages - 1; i++) {
    document.getElementById("page" + i).style.display = "none";
  }
  // Hide the end screen
  document.getElementById("end").style.display = "block";
}

// Function to hide all pages and show the welcome screen
function showWelcome() {
  // Hide all pages
  for (let i = 1; i <= numPages; i++) {
    document.getElementById("page" + i).style.display = "none";
  }
  // Hide the end screen
  document.getElementById("end").style.display = "none";
  // Show the welcome screen
  document.getElementById("welcome").style.display = "block";
}
