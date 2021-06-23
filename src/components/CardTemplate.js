import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardTemplate({ src, title, text, buttonText }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={src}
            />
            <Card.Body>
                <Card.Title className="text-dark">{title}</Card.Title>
                <Card.Text className="text-dark">
                    {text}
                </Card.Text>
                {buttonText &&
                    <Button variant="primary">{buttonText}</Button>
                }
            </Card.Body>
        </Card>
    );
}
