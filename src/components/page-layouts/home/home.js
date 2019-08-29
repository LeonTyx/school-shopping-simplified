import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import LandingHero from "../../../assets/back-to-school.png";

class MountVernonHigh extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-splash">
          <img src={LandingHero} alt="Child getting dropped of at school" />

          <p>
            School Shopping Simplified helps you get school shopping done with
            ease
          </p>
        </div>

        <div className="school-supply-events">
          <h2>School Supply Drives</h2>

          <p>
            Every year non-profit organizations hold events where you can get
            free school supplies. Below are a list of popular school supply
            drives held in Mount Vernon, Wa
          </p>

          <ul className="events-list">
            <li className="event">
              <Link to="/events/back-to-school-blessing">
                Back to School Blessing{" "}
              </Link>
              <div className="event-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
            <li className="event">
              <Link to="/events/back-to-school-burlington">
                Back to School, Burlington
              </Link>
              <div className="event-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
            <li className="event">
              <Link to="/events/sedro-sends-supplies">
                Sedro Sends Supplies
              </Link>
              <div className="event-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MountVernonHigh;
