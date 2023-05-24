//your code here

const bandNames = ["The Beatles", "Aerosmith", "Red Hot Chili Peppers", "The Rolling Stones", "Anthrax"];

// Function to sort band names in lexicographic order while excluding articles
function sortBandNames(bandNames) {
  const articles = ["a", "an", "the"];

  // Custom sort function to compare band names while ignoring articles
  function compareBandNames(a, b) {
    const bandA = removeArticles(a);
    const bandB = removeArticles(b);
    return bandA.localeCompare(bandB);
  }

  // Function to remove articles from a band name
  function removeArticles(name) {
    const words = name.toLowerCase().split(" ");
    const filteredWords = words.filter(word => !articles.includes(word));
    return filteredWords.join(" ");
  }

  // Sort the band names using the custom compare function
  const sortedBandNames = bandNames.sort(compareBandNames);
  return sortedBandNames;
}

// Sort the band names
const sortedNames = sortBandNames(bandNames);

// Display the sorted band names in an HTML list
const ulElement = document.getElementById("band");

sortedNames.forEach(name => {
  const liElement = document.createElement("li");
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});