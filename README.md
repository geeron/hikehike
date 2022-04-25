
# HikeHike
### by Geeron

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Running Tests](#test_tube-running-tests)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

  

<!-- About the Project -->
## :star2: About the Project
HikeHike is a fullstack-application that lets users get on hiking-leaderboards, by scanning dynamic qr-codes. No permissions or app-downloads needed!


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
![](https://github.com/geeron/hikehike/blob/main/HikeHike.gif)
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactrouter.com/">React Router</a></li>
    <li><a href="https://www.mapbox.com/">MapBox</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://nodejs.dev/">Node.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>    
    <li><a href="https://mongoosejs.com/">Mongoose ODM</a></li>
  </ul>
</details>


<!-- Features -->
### :dart: Features

- Dynamic QR-codes that contains location-information, the current time, and a link to start your hike.
- Hiking leaderboards for a hike, and it is easy to expand with more hikes, just add another location in the qr-code
- Maps with start and finishpoint, that lets the users easily see where to go


<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager

```bash
 npm install --global npm
```
   
<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command

```bash
  npm test test
```

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/geeron/hikehike.git
```

Go to the project directory

```bash
  cd HikeHike
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```



<!-- Usage -->
## :eyes: Usage

Use this space to tell a little more about your project and how it can be used. Show additional screenshots, code samples, demos or link to other resources.


```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

<!-- Roadmap -->
## :compass: Roadmap

* [ ] Add admin-page
* [ ] Add image-uploads for users


<!-- FAQ -->
## :grey_question: FAQ

- Why did you want to make this project?

  + I wanted to learn more about qr-codes, what information you can store in them, and also the psychological part behind dynamic (moving) qr-codes. It has been an interesting learning-process.



<!-- License -->
## :warning: License

Distributed under MIT License. See LICENSE.txt for more information.


<!-- Contact -->
## :handshake: Contact

Gaute Rongve - [LinkedIn](www.linkedin.com/in/gaute-rongve) - gaute.rongve@gmail.com

Project Link: [https://github.com/geeron/hikehike/](https://github.com/geeron/hikehike/)


<!-- Acknowledgments -->
## :gem: Acknowledgements

These are some of the resources used to make his project happen. 

 - [qrcode-library by soldair](https://www.npmjs.com/package/qrcode)
 - [mapbox](https://www.mapbox.com/)
