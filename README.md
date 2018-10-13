# GIFTastic
Playing with giphy's API:
https://ski14hs.github.io/GIFTastic/

There's an array of topics that the buttons start with. There is an input that will push new topics into this array.
The buttons are created dynamically by emptying the div and appending new buttons by looping through the array and creating them.

The buttons store the topic in a data and pass it into a GIPHY API url call. 

The JSON is used to grab the URL's for them and still images.

Function for clicking the images toggles their state and sets the src from still url to moving gif so you can click to play and stop gifs
