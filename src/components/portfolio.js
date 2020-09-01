/* eslint-disable react/jsx-no-target-blank */
import React from "react";

//import stock
import stock from "../img/portfolio-1.jpg";
import stock2 from "../img/portfolio-2.jpg";
import stock3 from "../img/portfolio-4.jpg";
import stock5 from "../img/portfolio-5.jpg";
import stock6 from "../img/portfolio-3.jpg";
import stock7 from "../img/emo.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-box text-center">
                <h3 className="title-a">Project</h3>
                <p className="subtitle-a">
                  
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://mauricechouam.github.io/COVID-19-Tracker/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">COVID-19 TRACKER</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/COVID-19-Tracker" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                          A simple COVID-19 tracker application that fetches location based updates,
                          trending global news, and helpful local resources.
                          Powered by HTML, CSS, and JavaScript.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="work-box"> 
                <a href="https://emoji-runner.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img">
                    <img src={stock7} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Emoji-Runner</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/Emoji-Runner"  title="Repository"  target="_blank" >
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                        A fun twist on the classic runner game.with secure user login 
                          User profiles are logged in a database for tracking high scores. Powered by P5JS, Express & MySQL

                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://mauricechouam.github.io/Weather-Dashboard/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock6} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Weather-Dashboard</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/Weather-Dashboard" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                        A weather dashboard with search functionality to find current weather conditions and the future weather outlook for multiple cities.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://workoutracker-maurice.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock2} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Workout-Tracker</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/Workout-Tracker" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                      
                          Web Application Allowing user to view create and track his daily workouts .
                          User should be able to track the name, type, weight, sets, reps, and duration of exercise.
                        
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://maurice-employee-directory.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock3} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Employee-Directory</h2>
                        </div>
                        <a href="https://github.com/mauricechouam/React-Employee-Directory" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                          Web Application where the goal is to make an Employee directory using React.js, 
                          populating it with random employees from an API, and allowing the user to search/sort the results.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="work-box">
                <a href="https://maurice-burger.herokuapp.com/" title="Live Demo" target="_blank" >
                  <div className="work-img ">
                    <img src={stock5} alt="Demo live" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row ">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="w-title">Burger Restaurant </h2>
                        </div>
                        <a href="https://github.com/mauricechouam/Burger" title="Repository" target="_blank">
                          <div className="col-12 w-ctegory w-more">
                            <h6 className="ion-ios-plus-outline w-ctegory"> Github Repository</h6>
                          </div>
                        </a>
                      </div>
                      <div >
                        <p className="subtitle-a ">
                       MVC  application that allows User to create burgers (POST), 
                          view a list of burgers available to eat (GET), devour burgers (PUT), and throw them away after devoured (DELETE).
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
