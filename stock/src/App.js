import './App.css';
import { useState } from 'react';
import { Navbar, Container } from "react-bootstrap";
import { PortfolioSummary } from "./portfoliosummary.jsx";
import { CurrentHolding } from './currentholding.jsx';
import { StocksList } from './stockslist.jsx';
import { StockForm } from './stocksform.jsx';

function App() {

  const [portfolioDetails, setPortfoliodetails] = useState({
    portfolioValue: 69000,
    StocksOwned: 25,
    CashBalance: 8000,
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Stock Market Portfolio</Navbar.Brand>
        </Container>
      </Navbar>
      <PortfolioSummary StockPortfolio={portfolioDetails} />
      <CurrentHolding />
      <StocksList />
      <StockForm />
    </div>
  );
}

export default App;
