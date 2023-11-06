import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className="row"
      style={{
        backgroundColor: "purple",
        marginTop: "40px",
        padding: "40px",
        borderRadius: "20px 20px 20px 20px",
        color: "white",
        width: "100%",
        boxShadow: "3px 2px 8px 6px gray",
      }}
    >
      <div
        className="col-md-8"
        style={{ padding: "5px", boxShadow: "2px 5px 18px -6px gray" }}
      >
        <div htmlFor={amountInputId} style={{ fontWeight: "bold" }}>
          {label}
        </div>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          style={{ border: "2px solid white", color: "white" }}
        />
      </div>
      <div className="col-md-4" style={{}}>
        <p className="text-black/40 mb-2 w-full">Select Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          style={{ border: "2px solid black" }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
