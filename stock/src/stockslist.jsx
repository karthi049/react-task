import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const StocksList = () => {
    const [stocks, setStocks] = useState([]);

    const fetchStocks = async () => {
        setStocks([
            {
                stocksymbol: "AAPL",
                companyname: "Apple Inc",
                price: 3000000,
            },
            {
                stocksymbol: "MSFT",
                companyname: "Microsoft Corporation",
                price: 2000000,
            },
            {
                stocksymbol: "RELIANCE",
                companyname: "Reliance Industries Ltd",
                price: 4000000,
            },
            {
                stocksymbol: "NVDA",
                companyname: "NVIDIA Corporation",
                price: 7000000,
            },
        ]);
    };

    useEffect(() => {
        fetchStocks();
    }, []);

    return (

        <div className="d-flex justify-content-center mt-5 mb-5">
            <Card style={{ width: "35rem" }}>
                <Card.Body>
                    <div style={{ justifyContent: "space-between", fontWeight: "bold", display: "flex", }}>
                        <div>Stock Symbol</div>
                        <div>Company Name</div>
                        <div>Price</div>
                    </div>
                    <Card.Text>
                        {stocks.map((stock, index) => (
                            <div key={index}>
                                <div className="d-flex justify-content-between">

                                    <div >{stock.stocksymbol}</div>
                                    <div>{stock.companyname}</div>
                                    <div>{stock.price}</div>
                                </div>
                            </div>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}