const genreRecommendations = {
  Action: `Hold onto your seats, \${name}, it seems action is your biggest genre! Your idea of a quiet evening involves more car chases than a rush hour traffic jam. Here's a few title recommendations for the daredevil in you!`,
  Adventure: `Looks like adventure is your biggest genre, \${name}! Your idea of a good time involves more treasure hunts than a pirate's map. Here are some adventurous recommendations to keep your explorer spirit alive... and your pulse pounding!`,
  Animation: `Hey, \${name}, it looks like animation is your biggest genre! Cartoons aren't just for kids, they said. You're proof that animated characters speak more sense than most adults. Here are some animated wonders to add to your watchlist!`,
  Comedy: `Laughing your way through life, huh, \${name}? It seems comedy is your biggest genre! Your motto must be: 'If you can't find the humor in it, you're not looking hard enough.'`,
  Crime: `It seems crime is your biggest genre, \${name}! You've got a taste for the criminal underworld, or maybe you just appreciate a good heist. Remember, it's only illegal if you get caught! Here are some crime-filled recommendations to satisfy you and keep you out of jail!`,
  Drama: `Oh, \${name}, it looks like drama is your biggest genre! You're quite the dramatic one, aren't you? Well, watching a dramatic movie is better than creating it in your own life, right? Here's some more drama to satisfy your understimulation. Get ready to delve into tales of passion, betrayal, and intrigue!`,
  Family: `It seems family is your biggest genre, \${name}! Nothing beats a heartwarming family tale for you. Your movie nights are like a family reunion, minus the awkward conversations. Here are some family-friendly recommendations to enjoy with your loved ones!`,
  Fantasy: `It seems fantasy is your biggest genre, \${name}! Reality is overrated, right? You prefer your worlds filled with dragons soaring across crimson skies, magic crackling through ancient forests, and enough mythical creatures to spark wonder. Here are some fantastical recommendations to fuel your imagination!`,
  History: `It seems history is your biggest genre, \${name}! Who needs a time machine when you have historical dramas? You're more knowledgeable about ancient empires than some historians. Here are some historical recommendations to transport you to different eras!`,
  Horror: `It seems horror is your biggest genre, \${name}! Scaring yourself silly seems to be your good time. You're the reason night lights were invented. Here are some chilling recommendations to keep you on the edge of your seat!`,
  Music: `It seems music is your biggest genre, \${name}! You march to the beat of your own drum, or guitar, or whatever instrument is your favorite. Your playlist is as eclectic as your taste in movies. Here are some musical recommendations to keep your ears entertained!`,
  Mystery: `It seems mystery is your biggest genre, \${name}! You love a good puzzle, don't you? You're the Sherlock Holmes of moviegoers, always looking for clues and twists. Here are some mysterious recommendations to keep you guessing!`,
  Romance: `It seems romance is your biggest genre, \${name}! You're a hopeless romantic, aren't you? Your heart melts faster than ice cream on a hot summer day. Here are some romantic recommendations to sweep you off your feet... and maybe make you blush!`,
  SciFi: `It seems sci-fi is your biggest genre, \${name}! Your hyperdrive is engaged and your phasers are set to stun! You're all about exploring the final frontier and boldly going where no one has gone before. Here are some recommendations to fuel your interstellar journeys and take you to galaxies far, far away!`,
  Spiritual: `It seems spirituality is your biggest genre, \${name}! Seeking enlightenment through cinema, are we? Your idea of entertainment involves more soul-searching than a year in a monastery. Here are some spiritual recommendations to feed your soul!`,
  Sports: `It seems sports is your biggest genre, \${name}! You live for the thrill of victory and the agony of defeat. Your idea of a relaxing evening involves more sweat than a sauna. Here are some sports-themed recommendations to keep your competitive spirit alive!`,
  Thriller: `It seems thriller is your biggest genre, \${name}! Hold onto your popcorn, you like your movies tense and your popcorn salty. Your heart rate spikes faster than a roller coaster on a thriller night. Here are some thrilling recommendations to keep you on the edge of your seat!`,
};

export function usePrepareComment(data, cards, name) {
  const genres = extractGenres(data, cards);
  const quote1 = genreRecommendations[genres];
  return quote1;
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
  console.log(topGenres(countGenres(relatedGenres)));
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

function topGenres(data) {
  // Convert object to array of key-value pairs
  const topGenres = Object.entries(data);

  // Sort the array in descending order based on values
  topGenres.sort((a, b) => b[1] - a[1]);

  const finalTopGenres = topGenres.slice(0, 2).map((genre) => genre[0]);

  return finalTopGenres;
}

//usage will be variable = usePrepareComment(userData, cardData)

//Input - list of IDS

//match IDs to correct film
//extract genres from entry
//add to list
//go through list and count them

//output - object containing a count of genres

// const quotes = { Comedy: "funnyquotahaha", Action:"actioncommenty"}
//const genre ="Comedy"
//console.log(quotes.Comedy)
//console.log(quotes[genre])
