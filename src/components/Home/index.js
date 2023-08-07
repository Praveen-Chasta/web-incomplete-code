import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-cont">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get You Notices</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is a part of the daily heir and it does not quite help that it
          changes all the time . Clothes have always been a maker of the era and
          we are in a revolution . Your fashion makes you being seen and heard
          that way you are. So , celebrate the season new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="show-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)
export default Home
