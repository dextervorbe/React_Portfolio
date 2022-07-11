import bottomDrawGif from '../Gifs/bottomDraw.gif';
import dndCreationsGif from '../Gifs/dndCreations.gif';
import dailyWeatherGif from '../Gifs/dailyWeather.gif';

const Projects = [
    {
        "id": 1,
        "projectName": "Character Builder",
        "exampleGif" : dndCreationsGif,
        "summary": "Character creation application where the user can manage their characters to use for DnD.",
        "techUsed": "React, GraphQL, Apollo, Mongoose, Express, Node.js, Reactstrap, React-Router-Dom, Bcrpyt, Bootstrap, and this project is deployed with Heroku.",
        "githubLink": "https://github.com/dextervorbe/DnD-Character-Builder",
        "deployedLink": "https://dnd-character-create.herokuapp.com/" 
    },
    {
        "id": 2,
        "projectName": "Bottom Draw",
        "exampleGif" : bottomDrawGif,
        "summary": `Ecommerce website where users can manage, buy, and sell clothing goods that they tend to keep in their "bottom draw"`,
        "techUsed": "Tech Used: Javascript, jQuery, MySQL, Handlebars, Node.js, Bootstrap, Foundation, GoogleFonts, FontAwesome, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/dextervorbe/bottom-draw",
        "deployedLink": "http://bottomdrawermarketplace.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Daily Weather",
        "exampleGif" : dailyWeatherGif,
        "summary": "Weather Application where the user can input a city and the application will return what the weather will be like for the next 5 days using a weather API.",
        "techUsed": "Tech Used: Javascript, A Weather API, CSS, and HTML ",
        "githubLink": "https://github.com/dextervorbe/Weather_Report",
        "deployedLink": "https://dextervorbe.github.io/Weather_Report/"
    }

]

export default Projects;