import React from "react";
import { Link } from "react-router-dom";
import "./grade-list.scss";

class GradeList extends React.Component {
  componentDidMount() {}

  render() {
    if (this.props.schoolType === "elementary") {
      return (
        <div className="grade-list">
          <article>
            <Link to={this.props.location.pathname + "/kindergarten"}>
              Kindergarten
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/first-grade"}>
              First Grade
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/second-grade"}>
              Second Grade
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/third-grade"}>
              Third Grade
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/fourth-grade"}>
              Fourth Grade
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/fifth-grade"}>
              Fifth Grade
            </Link>
          </article>
        </div>
      );
    } else if (this.props.schoolType === "middle") {
      return (
        <div className="grade-list">
          <article>
            <Link to={this.props.location.pathname + "/sixth-grade"}>
              Sixth Grade
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/seventh-grade"}>
              Seventh Grade
            </Link>
          </article>
          <article>
            <Link to={this.props.location.pathname + "/eighth-grade"}>
              Eight Grade
            </Link>
          </article>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GradeList;
