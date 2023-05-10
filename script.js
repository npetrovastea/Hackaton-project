const searchForm = document.querySelector('form');
const searchInput = searchForm.querySelector('input');
const pillsContainer = document.querySelector('#pills-container');
const searchResultsContainer = document.querySelector('#search-results');

// When the search form is submitted, display the search results
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  displaySearchResults(searchTerm);
});

// When a pill is clicked, update the search input with the pill's text and display the search results
pillsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('pill')) {
    const searchTerm = event.target.textContent;
    searchInput.value = searchTerm;
    displaySearchResults(searchTerm);
  }
});

// Display the search results for the given search term
function displaySearchResults(searchTerm) {
  // TODO: Fetch search results from the server using the searchTerm
  // TODO: Render the search results in the searchResultsContainer
  // For now, just log the search term to the console
  console.log(`Searching for: ${searchTerm}`);
}
