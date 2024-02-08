<h1>Overview</h1>

It's a one-page application where users can swipe right for liked and left for disliked movies and series like on Tinder. The generated quote reflects preferences based on the most popular genres for both movies and series that the user liked. 
GPT chat creates a random list of suggested movies and series, utilizing the user's stored data. It also compares this data with other users in the database, seeking matches in genre preferences for both movies and series.

<ul>
  <li>App has various components (Instruction, Card, NameInput, Result) dynamically rendered based on the application's state.</li>
  <li>To get the data for the card, we've seamlessly incorporated hooks for data fetching from our backend server.</li>
  <li>Custom hook useFetch is designed to handle data fetching from an API using the fetch function in React components in Result and the matchProvider context</li>
</ul>


