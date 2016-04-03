# emotype2

This repository contains the code for the backend node.js server for our project.

In order to enjoy the experience of using our text editor, please download the chrome extension file in this link:
https://drive.google.com/file/d/0B6nqMP9X1gUiZEdhSzBfUHgzRG8/view?usp=sharing

drag and drop the file into your extension and follow the prompts, then you are all set to use our application!

the repository for the text editor code can be viewed here:
https://github.com/calvinytong/text-app


EmoType is a text editor built as a Chrome extension, with a backend hosted on Heroku and written in Node.js. Styling and color control is completed using CSS, while audio is provided by Spotify. In order to detect emotions, our editor batch puts inputted text (delineated by punctuation) into the AlchemyAPI for natural language processing-based emotion analysis of that text. We then examine the emotion weights in order to determine a dominant sentiment, or choose a neutral one if none emerges.

Once we know the mood of the user, the magic begins to come together. Information about the mood is sent to our CSS file for background coloring as well as to our cloud server for the creation of a custom Spotify playlist. We have a curated database of playlists to choose from, and select one based on the user's current mood. We then randomly select a song from this playlist, and add that song to the active play queue. When it all comes together, EmoType runs smoothly and gracefully, putting a more human face on the technology we use every day.
