const NEWS_API_KEY = '7d9d45519d2846b3872d7449ee2ddcd8';
const GNEWS_API_KEY = '95f6ce7b7f9a8f98637ecc031696f6dd';
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
  const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NEWS_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let news = '';
      let count = 0; // initialize count variable
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
          count++; // increment count for each article
        });
      } else {
        news = '<p>No news found</p>';
      }
      resultsContainer.innerHTML = `
        <h2>Results (${count})</h2>
        ${news}
      `; // update resultsContainer to include count
    })
    .catch((error) => {
      resultsContainer.innerHTML = `<p>${error.message}</p>`;
    });
}
//https://newsapi.org/v2/everything?q=location:${location}&apiKey=${NEWS_API_KEY}
//https://newsapi.org/v2/everything?q=&apiKey=${NEWS_API_KEY}&pageSize=100&sortBy=popularity&language=en&lat=LATITUDE&lon=LONGITUDE&radius=10000`;
// Function to search for news by location
function searchNewsByLocation(location) {
  const url = `https://api.gnews.io/v4/search?q='news'&location=${location}&token=${GNEWS_API_KEY}&max=100&lang=bg`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let news = '';
      let count = 0; // initialize count variable
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
          count++; // increment count for each article
        });
      } else {
        news = '<p>No news found</p>';
      }
      newsContainer.innerHTML = `
        <h2>Results (${count})</h2>
        ${news}
      `; // update newsContainer to include count
    })
    .catch((error) => {
      newsContainer.innerHTML = `<p>${error.message}</p>`;
    });
}
