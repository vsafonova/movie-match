export function usePrepareComment(data, cards) {
  return extractGenres(data, cards);
}

function extractGenres(movieIds, cards) {
  const relatedGenres = [];

  movieIds.map((id) => {
    const movie = cards.find((m) => m.id === id);

    if (movie) {
      relatedGenres.push(...movie.genres);
    }
  });

  // Remove duplicate genres (if any)
  console.log(countGenres(relatedGenres));
  return relatedGenres;
}

function countGenres(arr) {
  // Initialize an empty object to store genre counts
  let genreCounts = {};

  // Loop through the array and count genre occurrences
  arr.map((genre) => {
    // If the genre is already a key, increment the count, otherwise set it to 1
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
  });

  // Create the final object with genre as keys and population as values
  let resultObject = {};
  for (let genre in genreCounts) {
    resultObject[genre] = genreCounts[genre];
  }

  return resultObject;
}

//usage will be variable = usePrepareComment(userData, cardData)

//Input - list of IDS

//match IDs to correct film
//extract genres from entry
//add to list
//go through list and count them

//output - object containing a count of genres
