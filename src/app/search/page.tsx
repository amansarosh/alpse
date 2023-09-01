"use client";

import { searchFlight } from "../api/searchApi";
import { useState } from "react";

export default function Search() {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false);
  return (
    <>
      <div className="">
        {/* Forms and Buttons */}
        <form
          action={(e) => {
            searchFlight(e).then((res) => {
              console.log(res);
              setData(res);
              setShowData(true);
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
            maxLength={7}
          />
          <button
            type="submit"
            className="border text-slate-200 p-2 rounded-md"
          >
            Get Flight Data
          </button>
        </form>

        {/* Card to show Data */}

        <div className="">
          <div className="p-10 border-gray-200 rounded-lg shadow-md bg-gray-800">
            <h5 className="mb-2 text-2xl font-bold text-slate-200">
              Flight Information for {data.airline_name} {data.flight_number}
            </h5>
            {showData ? (
              <>
                <div className="">
                  <p className="text-slate-200">{data?.airline_name}</p>
                  <p className="text-slate-200">
                    {data?.status
                      ? data.status
                      : "Unable to find flight status"}
                  </p>
                  <p className="text-slate-200">
                    {data?.dep_name
                      ? data.dep_name
                      : "Unable to find Departure Airport"}
                  </p>
                  <p className="text-slate-200">
                    {data?.reg_number
                      ? data.reg_number
                      : "Unable to find Aircraft Registration"}
                  </p>
                  <p className="text-slate-200">
                    {data?.arr_name
                      ? data.arr_name
                      : "Unable to find Arrival Airport"}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-slate-200">
                Search a flight number in the field above to find data about it.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
