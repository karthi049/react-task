import Card from 'react-bootstrap/Card';


export const PortfolioSummary = (props) => {
    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        <div>
                            <h3>Portfolio Summary</h3>
                            <p>
                                Total Portfolio Value : <strong>{props.StockPortfolio.portfolioValue}</strong>
                            </p>
                            <p>
                                Total Stocks Owned : <strong>{props.StockPortfolio.StocksOwned}</strong>
                            </p>
                            <p>
                                Cash Balance : <strong>{props.StockPortfolio.CashBalance}</strong>
                            </p>

                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};