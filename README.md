# Friend Finder Application
This is a fullstack application using HTML, CSS, Bootstrap, Node.js, and Express.js.

# Overview
This application 

## NPM Packages

#### [Dotenv](https://www.npmjs.com/package/dotenv): This package was used to store variables of api keys and passwords that I would like to keep private as I publish my project on GitHub pages, while still having access to the APIs I used in this project. <br> 

<code>npm install dotenv</code> 

## Application Commands and Screenshots

* <code>node app.js</code>
   <p>By running this command, the application will start with a set of instructions letting the user know how to navigate and perform tasks in the application</p>
![Application Start Command](images/liri-start-command.png)

* <code>node app.js movie-this {title given}</code>
![Movie Search with Title](images/movie-this-with-title.png)

* <code>node app.js movie-this {no title given}</code>
      <p>Running this command will automatically default the movie search to the movie "Mr. Nobody"</p>
![Movie Search with No Title](images/movie-this-no-title.png)

* <code>node app.js spotify-this-song {song title given}</code>
      <p>Running this command will send a request to the Spotify API which will return no more than 3 results in case there are multiple matches of that song </p>
![Spotify Song Search with Song Title](images/spotifit-this-song-with-title.png)

* <code>node app.js spotify-this-song {no song title given}</code>
      <p>Running this command with no title given with send a request to Spotify with a default song title value of the song "The Sign"</p>
![Spotify Song Search with No Song Title](images/spotify-this-with-no-title.png)

* <code>node app.js concert-this {Name of Artist}</code>
      <p>Similar to the other requests, this one will return the response from the Bands In Town API with the name of the artist and any past, present, or future dates for upcoming concerts or shows</p>
![Concert Search by Artist Name](images/concert-this-with-title.png)

* <code>node app.js do-what-it-says</code>
      <p>This command will run a function that will send a request to Spotify and search for the song "I Want It That Way" and return no more than three responses with songs that have that title.</p>
![Do What It Says Command](images/do-what-it-says.png)


