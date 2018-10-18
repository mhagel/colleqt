import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Quote extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
  
      this.quoteText = props.quoteText;
    }

    render() {
        return (
            <Col md={4} >
                <div className="Quote">
                    {this.quoteText}
                </div>
            </Col>
        )
    }
}