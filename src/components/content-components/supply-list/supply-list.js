import React from "react";
import "./supply-list.scss";
import SupplyItem from "./supply-item";

class SupplyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supplies: [
        {
          item: "Crayons",
          desc: "Crayons can be found at any convenience store",
          optional: false
        },
        {
          item: "Scissors",
          desc: "Scissors can be found at any convenience store",
          optional: false
        },
        {
          item: "Backpack",
          desc:
            "Backpacks are often given away at Skagit Valley College two weeks before school begins",
          optional: false
        },
        {
          item: "Pencil Sharpener",
          desc:
            "Most classrooms are already equipped with a pencil sharpener, but owning a seperate one for colored pencils helps keep school pencil sharpeners from being worn down",
          optional: true
        }
      ],
      requiredCompleted: 0,
      requiredTotal: 0,
      optionalCompleted: 0,
      optionalTotal: 0
    };
  }

  componentDidMount() {
    let totalSupplies = this.state.supplies.length;
    let requiredSupplies = 0;

    this.state.supplies.map(supply => !supply.optional && requiredSupplies++);

    this.setState({
      requiredTotal: requiredSupplies,
      optionalTotal: totalSupplies - requiredSupplies
    });
  }

  handleRequiredCompletion = event => {
    let checked = event.target.checked;
    let completed = this.state.requiredCompleted;

    if (checked) {
      completed++;
    } else {
      completed--;
    }
    this.setState({
      requiredCompleted: completed
    });
  };

  handleOptionalCompletion = event => {
    let checked = event.target.checked;
    let completed = this.state.optionalCompleted;

    if (checked) {
      completed++;
    } else {
      completed--;
    }
    this.setState({
      optionalCompleted: completed
    });
  };

  render() {
    return (
      <article className="supply-list">
        <div className="title">
          <h2>First Grade Supply List</h2>
          <div className="completed-items">
            {this.state.requiredCompleted} of {this.state.requiredTotal} items
            found
          </div>
        </div>

        <ul className="required">
          {this.state.supplies.map(
            (supply, i) =>
              !supply.optional && (
                <SupplyItem
                  key={i}
                  item={supply.item}
                  desc={supply.desc}
                  optional={supply.optional}
                  toggleCompletion={this.handleRequiredCompletion}
                />
              )
          )}
        </ul>

        <div className="title">
          <h4>Optional supplies</h4>
          <div className="completed-items">
            {this.state.optionalCompleted} of {this.state.optionalTotal} items
            found
          </div>
        </div>

        <ul className="optional">
          {this.state.supplies.map(
            (supply, i) =>
              supply.optional && (
                <SupplyItem
                  key={i}
                  item={supply.item}
                  desc={supply.desc}
                  optional={supply.optional}
                  toggleCompletion={this.handleOptionalCompletion}
                />
              )
          )}
        </ul>
      </article>
    );
  }
}

export default SupplyList;
