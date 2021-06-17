import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardTemplate() {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "assets/mobiledev.svg"}
            />
            <Card.Body>
                <Card.Title className="text-dark">Card Title</Card.Title>
                <Card.Text className="text-dark">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
