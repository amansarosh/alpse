"use client";

import { useState, FormEvent } from "react";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://airlabs.co/api/v9/schedules?flight_icao=${inputValue}&api_key=${process.env.api_key}`
      );
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>
        <h1>API Input</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter data"
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>API JSON Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
