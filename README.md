# ReactStack

ReactStack is a React boilerplate for people looking to incorporate more functionality to the already great Create-React-App package. This includes a pathway to building and scaling full-stack apps using MongoDB and Express.

## Getting Started

Clone this repo into a clean folder and **run npm install in both the root folder and the client folder**.

### Development

In order to start-up Create-React-App's development server and run the Express API run this command on the root folder level:

```
npm run dev
```

To reach the express backend the fetch api which is promised based (which is great when handling data from a mongo server or from a web API). Make sure you have nodemon to watch for changes on the server.

The routing is done with react-router and is maintained in the routes/index.jsx file. The documentation is well structured so make sure to have a peak for help
(https://reacttraining.com/react-router/)

In order to work on styling your app make sure to work within the stylesheets folder. the app.css in src contains compiled code and the app.scss in the stylesheets folder contains bootstrap imports so they do not need to be edited unless adding new stylesheets to app.scss.


## Production/Deployment

In deploying and scaling bigger apps Docker is a great way to ship apps for production. is used in order to create an optimum production build for any OS or Server.

 ```
 npm run build
 ```

By running this your app not only creates a build folder with a static version of your clientside code but it also automatically creates a dockercontainer and installs all the dependencies in that container. If you would like to tweak this have a look at the Dockerfile.
(https://docs.docker.com/)

## Built With

* [Create-React-App](https://github.com/facebook/create-react-app) - React Starter Pack.
* [Express](https://expressjs.com/) - Web Framework.
* [react-router](https://reacttraining.com/react-router/) - Routing for React.
* [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar) - Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
* [concurrently](https://www.npmjs.com/package/concurrently) - Run multiple commands concurrently.
* [nodemon](http://nodemon.io/) - Monitor for any changes in your node.js application and automatically restart the server.

## Contributing and Acknowledgments

* A big thank you to the Create-React-App community in coming with multiple solutions to make it even more powerful. It has always been helpful for solving problems and roadblocks in my learning process.
* Big thanks to Esau Silva for the guide on express/node.js backend api
(https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


