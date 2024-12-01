import Card from 'react-bootstrap/Card';



export const CurrentHolding = () => {

    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <Card style={{ width: "18rem" }}>
                <h3>Current Holding</h3>
                <Card.Body>
                    <div>
                        <p>Stock Symbol : <strong>MSFT</strong></p>
                        <p>Quantity Owned :<strong>25</strong></p>
                    </div>
                    <div>
                        <p>Current Value :</p>
                    </div>
                </Card.Body>

            </Card>
        </div>
    );

};