"use client";

import { searchFlight } from "../api/searchApi";
import { useState } from "react";

export default function Search() {
  const [data, setData] = useState({});
  return (
    <>
      {/* Forms and Buttons */}

      <main className="">
        <h1 className="text-3xl font-bold text-center text-white">Search</h1>

        <form
          action={(e) => {
            searchFlight(e).then((res) => {
              console.log(res);
              setData(res);
            });
          }}
          className="flex flex-col gap-5 max-w-xl mx-auto p-5"
        >
          <input
            name="flight_number"
            type="text"
            placeholder="Flight Number (Ex. DAL142; ICAO Format)"
            className="border border-grey-300 p-2 round-md"
            required
            minLength={4}
            maxLength={6}
          />
          <button
            type="submit"
            className="border bg-teal-500 text-white p-2 rounded-md"
          >
            Search
          </button>
        </form>
        <div>
          <h2>API Response:</h2>
          <p>{data.aircraft_icao}</p>
          <p>{data.dep_gate}</p>
          <p>{data.arr_name ? data.arr_name : "No value found"}</p>
        </div>
      </main>
    </>
  );
}
