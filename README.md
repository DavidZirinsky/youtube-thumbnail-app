# Youtube Thumbnail App

A simple react webpage to get a high definition thumbnail of a youtube video. This can be ran locally or is available at: http://davidzirinsky.com/youtube/

<br>
<br>

<img src="github_assets/app.png" /> 

<br>


Given a youtube video link like `https://www.youtube.com/watch?v=XqZsoesa55w` (note the video id at the end of the url of `XqZsoesa55w`) this is a glorified UI for the curl:

```
curl https://i3.ytimg.com/vi/XqZsoesa55w/maxresdefault.jpg --output image.jpg
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
