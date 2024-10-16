import React, { useState } from 'react';
import currencyOptions from './currency';

function App() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [output, setOutput] = useState(null);

  const getRates = async () => {
    try {
      if (!fromCurrency) {
        throw new Error('fromCurrency is required');
      }
      if (!toCurrency) {
        throw new Error('toCurrency is required');
      }
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.toUpperCase()}`);
      console.log(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.toUpperCase()}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      if (!data || !data.rates) {
        throw new Error('Failed to parse data');
      }
      return data;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  const handleConvert = async () => {
    console.log(fromCurrency)
    console.log(toCurrency)
    console.log(amount)

    const fetchRates = await getRates();
    console.log(fetchRates)

    if (fetchRates && fetchRates.rates) {
      const rate = fetchRates.rates[toCurrency]
      const convertedAmount = parseFloat(amount) * rate
      setOutput(convertedAmount)
    } else {
      setOutput(null)
    }
  };

  const fromCurrencyOnChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const toCurrencyOnChange = (event) => {
    setToCurrency(event.target.value);
  };

  const amountOnChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="container bg-blue-100 h-screen py-10">
      <div className="w-2/4 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Currency Converter</h1>
        <div className="flex-col items-center justify-center">
          {/* from currency */}
          <div>
            <label htmlFor="fromCurrency" className="block text-gray-700">
              From Currency:
            </label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={fromCurrencyOnChange}
              className="w-full border rounded-md px-4 py-2"
            >
              {currencyOptions.map((currency) => (
                <option key={currency.currencyCode} value={(currency.currencyCode).toUpperCase()}>
                  {(currency.currencyCode).toUpperCase()} - {currency.currencyName}
                </option>
              ))}
            </select>
          </div>
          {/* to currency */}
          <div className="mt-4">
            <label htmlFor="toCurrency" className="block text-gray-700">
              To Currency:
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={toCurrencyOnChange}
              className="w-full border rounded-md px-4 py-2"
            >
              {currencyOptions.map((currency) => (
                <option key={currency.currencyCode} value={(currency.currencyCode).toUpperCase()}>
                  {(currency.currencyCode).toUpperCase()} - {currency.currencyName}
                </option>
              ))}
            </select>
          </div>
          {/* amount */}
          <div className="mt-4">
            <label htmlFor="amount" className="block text-gray-700">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={amountOnChange}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          {/* convert button */}
          <div className="mt-4">
            <button
              onClick={handleConvert}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Convert
            </button>
          </div>
          {/* output */}
          {output !== null && (
            <div className="mt-4">
              <p className="text-gray-700">
                {amount} {fromCurrency} = {output.toFixed(2)} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
