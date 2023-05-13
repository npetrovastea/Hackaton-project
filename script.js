let currentPage = 1;
const numPages = 20;

function showWelcome() {
  document.getElementById("welcome").style.display = "block";
  document.getElementById("comic").style.display = "none";
}

function startComic() {
  document.getElementById("page" + currentPage).style.display = "none";
  currentPage = 1;
  document.getElementById("welcome").style.display = "none";
  document.getElementById("comic").style.display = "block";
  document.getElementById("page1").style.display = "block";
}

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
  document.getElementById("page20").style.display = "none";
  for (let i = 1; i <= numPages - 1; i++) {
    document.getElementById("page" + i).style.display = "none";
  }
  document.getElementById("end").style.display = "block";
}


function showEnd() {
  document.getElementById("page20").style.display = "none";
  for (let i = 1; i <= numPages - 1; i++) {
    document.getElementById("page" + i).style.display = "none";
  }
  document.getElementById("end").style.display = "block";
}

function showWelcome() {
  for (let i = 1; i <= numPages; i++) {
    document.getElementById("page" + i).style.display = "none";
  }
  document.getElementById("end").style.display = "none";
  document.getElementById("welcome").style.display = "block";
}

function checkWord() {
  // Get the input element and its value
  const input = document.getElementById('word-input');
  const word = input.value.toLowerCase();

  // Check the word and show the appropriate image or message
  const image = document.getElementById('word-image');
  const message = document.getElementById('message');
  if (word === 'forest') {
    image.src = 'forest.jpg';
    image.alt = 'Forest';
    message.innerText = '';
    setTimeout(nextPage(), 5000);
  } else if (word === 'desert') {
    image.src = 'desert.jpg';
    image.alt = 'Desert';
    message.innerText = '';
    setTimeout(() => goToPage(7), 5000);
  } else {
    image.src = '';
    image.alt = '';
    message.innerText = 'Try again!';
  }
}