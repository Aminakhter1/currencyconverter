import "./App.css";
import InputBox from "./components/InputBox.js";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "blackblue",
      }}
    >
      <div className="row">
        <h3
          style={{
            backgroundColor: "purple",
            padding: "10px",
            textAlign: "center",
            color: "white",
          }}
        >
          Currency Converter
        </h3>
      </div>
      <div className="row">
        <div className="col-md-4" style={{ borderRight: "2px solid purple" }}>
          <h1
            style={{
              backgroundColor: "#36454F",
              padding: "5px",
              color: "white",
              boxShadow: "2px 3px 5px 6px gray",
            }}
          >
            Welcome
          </h1>
          <img
            src={
              "https://e7.pngegg.com/pngimages/490/648/png-clipart-100-u-s-dollar-banknote-lot-money-bag-money-saving-gold-coin-thumbnail.png"
            }
          />
        </div>
        <div className="col-md-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(from) => setFrom(from)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            <div
              className="button"
              style={{ textAlign: "center", margin: "10px" }}
            >
              <button type="button" className="btn btn-warning" onClick={swap}>
                swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(to) => setTo(to)}
              selectCurrency={to}
              amountDisable
            />
            <div style={{ textAlign: "center", margin: "10px" }}>
              <button type="submit" className="btn btn-warning">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="row"
        style={{ backgroundColor: "purple", height: "200px" }}
      >
        <h3></h3>
      </div>
    </div>
  );
}

export default App;
