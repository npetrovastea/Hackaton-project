const NEWS_API_KEY = '7d9d45519d2846b3872d7449ee2ddcd8';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const localNewsButton = document.getElementById('local-news-button');
const resultsContainer = document.getElementById('results-container');
const newsContainer = document.getElementById('news-container');

let userLocation = "";

// Event listener for search form submission
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (searchInput.value) {
    searchNews(searchInput.value);
  }
});

// Event listener for local news button click
localNewsButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (userLocation) {
    searchNewsByLocation(userLocation);
  } else {
    getLocation();
  }
});

// Function to get user location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    resultsContainer.innerHTML = "<p>Geolocation is not supported by this browser.</p>";
  }
}

// Function to show user location
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  userLocation = `${latitude},${longitude}`;
  searchNewsByLocation(userLocation);
}

// Function to search for news by keyword
function searchNews(keyword) {
  const url = `https://gnews.io/api/v4/search?q=${keyword}&token=${NEWS_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let news = '';
      if (data.articles) {
        data.articles.forEach((article) => {
          const articleDate = new Date(article.publishedAt);
          news += `
          <div class="article">
            <h2 class="title">${article.title}</h2>
            <p class="description">${article.description}</p>
            <span class="date">${articleDate.toDateString()}</span>
            <a class="read-more" href="${article.url}" target="_blank">Read More</a>
          </div>
          `;
        });
      } else {
        news = '<p>No news found</p>';
      }
      resultsContainer.innerHTML = news;
    })
    .catch((error) => {
      resultsContainer.innerHTML = `<p>${error.message}</p>`;
    });
}

// Function to search for news by location
function searchNewsByLocation(location) {
  const url = `https://gnews.io/api/v4/search?q=location:${location}&token=${NEWS_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let news = '';
      if (data.articles) {
        data.articles.forEach((article) => {
          const articleDate = new Date(article.publishedAt);
          news += `
          <div class="article">
            <h2 class="title">${article.title}</h2>
            <p class="description">${article.description}</p>
            <span class="date">${articleDate.toDateString()}</span>
            <a class="read-more" href="${article.url}" target="_blank">Read More</a>
          </div>
          `;
        });
      } else {
        news = '<p>No news found</p>';
      }
      newsContainer.innerHTML = news;
    })
    .catch((error) => {
      newsContainer.innerHTML = `<p>${error.message}</p>`;
    });
}
