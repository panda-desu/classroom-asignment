import React from "react";
import Button from "react-bootstrap/esm/Button";

export class DemoClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <Button
        onClick={() => {
          this.increaseCount();
        }}
      >
        Hello {this.state.count}
      </Button>
    );
  }
}
