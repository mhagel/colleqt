import React from 'react';
import { Container, Row } from 'reactstrap';
import { Quote } from './Quote';

export default function QuoteCollection(props) {

    return (
        <Container>
            <Row>
                {props.quotes.map((q, index) => {
                    return <Quote quoteText={q} key={index} />;
                })}
            </Row>
        </Container>
    )
}