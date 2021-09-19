# ![alt_text](https://github.com/f21hackathon/climate-news/blob/main/climate-front/src/Components/styles/earth.png) Climate News
Global news web application  


<!-- ABOUT THE PROJECT -->
## About Climate News

<!-- ![{example use gif}][example-use] -->

Climate News is your one stop to centralize all the climate news from around the globe, combined with jaw-dropping environmental statistics that you'll want to share at that fancy dinner party next week. 

This project was submitted to the [BeaverHacks Fall 2021 Hackathon](https://devpost.com/software/climate-news).

The code that was submitted without any further modification can be found [here](https://github.com/f21hackathon/climate-news).

## Usage
The application is used to share news about climate and environmental statistics from countries across the globe.

No account or authentication is required to view a demonstration of the app, which can be found hosted on Heroku [here](https://global-climate-news.herokuapp.com/).


<!-- A demonstration of the app can be found in the following youtube video: -->

<!-- [![Insert Application Video](link-to-screenshot)](link-to-videa)
 -->


<!-- ### Built With -->
## Built With 
* [MongoDB](https://docs.mongodb.com/): a distributed, document-based NoSQL database system.
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): a cloud database service used to deploy and operate MongoDB databases.
* [Express](https://expressjs.com/en/guide/routing.html): a backend API and web application framework for Node.js
* [React](https://reactjs.org/docs/getting-started.html): a JavaScript library for building user interfaces
* [Node](https://nodejs.org/en/docs/): a backend runtime enviornment that executes JavaScript outside a web browser.
* [Heroku](https://devcenter.heroku.com/): a cloud application platform.



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

In order to make changes locally to the Climate News project, you must first have run the backend api and the frontend web UI using node. If you need to install Node on your system, the latest version can be downloaded [here](https://nodejs.org/en/).

1. Open the command line on your local machine, or a terminal from within your IDE of choice.

2. Enter the following command to use Git to clone this repository to your local machine.
```sh
git clone https://https://github.com/f21hackathon/climate-news.git
```
3. Navigate into the back end folder (api) and install this repository's back end dependencies.
```sh
cd api
npm install 
npm start
```
4. Now, in a new terminal, repeat this process in the frontend folder (climate-front), which will loading the local React front end.
```sh
cd climate-front
npm install 
npm start
```

Woohoo! Now you can open up `http://localhost:3000` in your web browser to see the website in all its glory. Live it! Breathe it! <em>Welcome to Climate News!</em>


<!-- CONTRIBUTING -->
## Open Source Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact Climate News

- Stephen Chow
- Matt Lam
- Mohamed Al-Hussein
- Asa LeHolland



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [othneildrew](https://github.com/othneildrew) for creating the [template README file](https://github.com/othneildrew/Best-README-Template) that was used as the starting point for the README for this project. 
* [zcreativelabs](https://zcreativelabs.com/) for creating [react-simple-maps](https://github.com/zcreativelabs/react-simple-maps) components which were used to build out the globe UI. 
* [Our World in Data](https://github.com/owid/co2-data) for compiling the CO2 and greenhouse gas emissions data referenced by this application.
* [The World Bank](https://www.worldbank.org/en/home) for producing the [energy use dataset](https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE) that was referenced during this project.
* [Flagpedia](https://flagpedia.net/download/icons) for the use of the country flag icons.
* [News API](https://newsapi.org/sources) for curating news headlines for the 54 countries supported with this project.





<!-- LICENSE -->
## License

The MIT License (MIT)

Copyright (c) 2015 David Leonard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
