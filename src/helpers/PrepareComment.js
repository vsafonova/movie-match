export function prepareComment(data, cards, name) {
  const quoteObject = {
    Action: `Buckle up, ${name}, it seems action movies are your jam! Your movie nights are like a one-way ticket to the danger zone. Get ready for some thrilling recommendations to keep your heart racing and your popcorn flying!`,
    Adventure: `It seems adventure movies are right up your alley, ${name}! Your idea of a good time involves more treasure hunts than a pirate's map. Get ready to explore uncharted territories with these adventurous recommendations!`,
    Animation: `Hey, ${name}, it looks like animation is your biggest genre! Cartoons aren't just for kids, they said. You're proof that animated characters speak more sense than most adults. Here are some titles to add to your watchlist!`,
    Comedy: `Well, well, ${name}, it seems you've mastered the art of laughter with comedies as one of your most liked genres! Your sense of humor shines brighter than a stand-up comedian's spotlight. Get ready for some recommendations to keep you grinning from ear to ear!`,
    Crime: `It seems crime-themed movies are your thing, ${name}! You've got a taste for the criminal underworld, or maybe you just appreciate a good heist. Remember, it's only illegal if you get caught! Here are some exciting recommendations to satisfy your need for danger and to keep you out of jail!`,
    Drama: `Oh, ${name}, you're quite the dramatic one, aren't you? Well, watching a drama movie is better than creating it in your own life, right? Here's some more drama to satisfy your chronic under-stimulation.`,
    Family: `Well, ${name}, it seems you're all about the heartwarming family tales. Your movie nights are like a cozy family reunion, minus the awkward conversations.`,
    Fantasy: `Reality is overrated, right, ${name}? You prefer your worlds filled with dragons soaring across crimson skies, magic crackling through ancient forests, and enough mythical creatures to spark wonder. Here are some recommendations to fuel your imagination!`,
    History: `Who needs a time machine when you have historical dramas, ${name}? You're more knowledgeable about ancient empires than some historians. Get ready for some recommendations to satisfy your curiosity!`,
    Horror: `It seems horror is your thing, ${name}! Scaring yourself silly seems to be your good time. You're the reason night lights were invented. Here are some recommendations to keep you on the edge of your seat!`,
    Music: `You march to the beat of your own drum, ${name}, or guitar, or whatever instrument is your favorite. Your playlist is as eclectic as your taste in movies. Here are some recommendations to keep your ears entertained!`,
    Mystery: `It seems mystery is your genre, ${name}! You love a good puzzle, don't you? You're the Sherlock Holmes of moviegoers, always looking for clues and twists. Here are some mysterious recommendations to keep you guessing!`,
    Romance: `It seems romance is your weakness, ${name}! You're a hopeless romantic, aren't you? Your heart melts faster than ice cream on a hot summer day. Here are some romantic recommendations to sweep you off your feet... and maybe make you blush!`,
    SciFi: `Calling all space cadets! It seems like Sci-Fi is your cosmic calling, ${name}! With your hyperdrive engaged and phasers set to stun, you're ready to explore the final frontier. Get ready for recommendations that'll take you on a journey far, far away!`,
    Spiritual: `It seems spirituality is your genre, ${name}! Seeking enlightenment through cinema, are we? Your idea of entertainment involves more soul-searching than a year in a monastery. Here are some insightful recommendations to feed your soul!`,
    Sports: `It seems sports is your genre, ${name}! You live for the thrill of victory and the agony of defeat. Here are some recommendations to keep your competitive spirit alive!`,
    Thriller: `It seems thriller is your thing, ${name}! Hold onto your popcorn, you like your movies tense and your popcorn salty. Your heart rate spikes faster than a roller coaster on a thriller night. Here are some thrilling recommendations to keep you on the edge of your seat!`,
  };

  const genres = extractGenres(data, cards);
  const defaultQuote = `${name}, you are a picky one! You don't seem to like anything, that's a shame… I'm really good at recommending movies maybe for a stubborn one like you I could recommend 'Picky Blinders'. Please try again and be a bit more open-minded next round, I'm ready when you are!`;
  let quote = [];
  quote[0] = quoteObject[genres[0]] || defaultQuote;
  quote[1] = quoteObject[genres[1]] || defaultQuote;
  return quote;
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
  // console.log(countGenres(relatedGenres));
  // console.log(topGenres(countGenres(relatedGenres)));
  const countedGenres = countGenres(relatedGenres);
  const genreArray = topGenres(countedGenres);
  return genreArray;
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
  const genres = Object.entries(data);

  // Sort the array in descending order based on values
  const topGenres = genres.toSorted((a, b) => b[1] - a[1]);

  const finalTopGenres = topGenres.slice(0, 2).map((genre) => genre[0]);

  return finalTopGenres;
}
