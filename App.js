import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import './App.css';
import HomeSection from './HomeSection';

class App extends Component {
  state = {
    productsList: [],
    upcomingEvents: [],
    isLoading: false,
    loadingUpcoming: false,
    page: 1,
  };

  componentDidMount() {
    this.getProducts();
    this.fetchUpcomingEvents();
    
  }


  getProducts = async () => {
    this.setState({
      isLoading: true,
    });

    const apiUrl =
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco';

    const response = await fetch(apiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.events.map(each => ({
        eventName: each.eventName,
        cityName: each.cityName,
        date: each.date,
        weather: each.weather,
        distanceKm: each.distanceKm,
        imgUrl: each.imgUrl,
      }));
      this.setState({
        productsList: updatedData,
        isLoading: false,
      });
    }
  };

  fetchUpcomingEvents = async () => {
    const { page } = this.state;
    this.setState({
      loadingUpcoming: true,
    });

    const apiUrl = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;

    const response = await fetch(apiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.events.map(each => ({
        eventName: each.eventName,
        cityName: each.cityName,
        date: each.date,
        weather: each.weather,
        distanceKm: each.distanceKm,
        imgUrl: each.imgUrl,
      }));
      this.setState(prevState => ({
        upcomingEvents: updatedData,
        loadingUpcoming: false,
        page: prevState.page + 1,
      }));
    }
  };


  render() {
    const { productsList, upcomingEvents, isLoading, loadingUpcoming } = this.state;

    return (<>
      <HomeSection/>
      <div className='bg'>
          <div className='content'>
            <h1>
              Discover exciting events happening near you stay tuned for updates!
            </h1>
            <p>
            There's something to write to but I don't know what is that but I cannot understand that language read something different that can understand easily but neither understand nor be understand
            </p>
          </div>
        <div className="recommended-events-container">
          <h1>Recommended Events</h1>
          <div className="recommended-events">
            {isLoading ? (
              <div className="loading-spinner">
                <Audio type="TailSpin" color="#CF2D2D" height={50} width={50} />
              </div>
            ) : (
              productsList.map((event, index) => (
                <div key={index} className="event-card">
                  <img src={event.imgUrl} alt={event.eventName} />
                  <h3>{event.eventName}</h3>
                  <p>{event.cityName}</p>
                  <p>{event.date}</p>
                  <p>{event.weather}</p>
                  <p>{event.distanceKm}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="upcoming-events-container">
          <h2>Upcoming Events</h2>
          
          <div className="upcoming-events">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <img src={event.imgUrl} alt={event.eventName} />
                <h3>{event.eventName}</h3>
                <p>{event.cityName}</p>
                <p>{event.date}</p>
                <p>{event.weather}</p>
                <p>{event.distanceKm}</p>
              </div>
            ))}
            {loadingUpcoming && (
              <div className="loading-spinner">
                <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              </div>
            )}
          </div>
          </div>
        </div>
        </>
      
    );
  }
}

export default App;
