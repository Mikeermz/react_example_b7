import React from 'react';

import Header from './components/global/header';
import Body from './components/global/body';
import Footer from './components/global/footer'

import './App.css';

const Starwars = 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg';
const Dora = 'http://es.web.img2.acsta.net/c_215_290/pictures/19/07/15/12/18/0447886.jpg'
const pizzaBoy = 'https://pbs.twimg.com/profile_images/378800000421069331/ef0861c733807db71156c7ee378c29e9_400x400.jpeg'

const App = () => (
  <div className="App">
    <Header />
    <Body propImage={Starwars} title="Star Wars" />
    <Body title="Dora" propImage={Dora} />
    <Body title="Chico Pizza" propImage={pizzaBoy} />
    <Footer />
  </div>
);

export default App;
