import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";

export const StockForm = (props) => {
    const [type, setType] = useState();
    const [symbol, setSymbol] = useState();
    const [quantity, setQuantity] = useState();

    return (
        <div className="d-flex justify-content-center p-5">
            <Card style={{ width: "22rem" }}>
                <Card.Body>
                    <Card.Text>
                        <form>
                            <div>
                                <Form.Label>Buying or Selling:</Form.Label>
                                <Form.Select aria-label="Default Select example">
                                    <option>Buy</option>
                                    <option>Sell</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Stock Symbol:</Form.Label>
                                <Form.Select aria-label="Default Select example">
                                    <option>AAPL</option>
                                    <option>MFST</option>
                                    <option>RELIANCE</option>
                                    <option>NVIDIA</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Quantity:</Form.Label>
                                <Form.Control
                                    type="number"
                                    id="amount"
                                    name="amount"
                                />
                            </div>
                            {/* <div>
                                <Form.Label>Amount:</Form.Label>
                                <props>{AmountCalculated}</props>
                            </div> */}
                            <div className="mt-4">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );

}