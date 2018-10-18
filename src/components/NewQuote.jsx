import React, { Component } from 'react';
import { Container, Button, Row, Col, Form, FormGroup, Input } from 'reactstrap';

export class NewQuote extends Component {
    constructor(props) {
      super(props);
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addToCollection = this.props.onAdd;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addToCollection(e.target[0].value);
        e.target[0].value = '';
    }

    render() {
        return (
            <Container>
                <div className="NewQuote">
                    <Col md={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Row>
                                    <Col md={12}>
                                        <div className="quote-text">
                                            <Input type="textarea" name="text"></Input>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={12}>
                                        <Button type="submit" size="sm">Save Quote</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Col>
                </div>
            </Container>
        )
    }
}