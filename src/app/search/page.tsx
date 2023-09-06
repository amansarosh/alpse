"use client";

import { searchFlight } from "../api/searchApi";
import { useState } from "react";

export default function Search() {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false); // To replace data

  // Flight Status Colors
  function getStatusColor(status) {
    switch (status.toLowerCase()) {
      case "en-route":
        return "bg-yellow-500"; // Yellow for en route
      case "scheduled":
        return "bg-gray-500"; // Gray for scheduled
      case "landed":
        return "bg-green-500"; // Green for landed
    }
  }

  return (
    <>
      <div className="mx-auto p-5">
        {/* Search and FI Display */}
        <div className="flex flex-col bg-gray-800 p-5 rounded-lg shadow-md gap-6 mt-5">
          <form
            action={(e) => {
              searchFlight(e).then((res) => {
                console.log(res);
                setData(res);
                setShowData(true);
              });
            }}
          >
            <div className="mt-4">
              <input
                name="flight_number"
                type="text"
                placeholder="Flight Number (Ex. DAL142; ICAO Format)"
                className="w-96 bg-gray-700 text-white border border-gray-600 rounded-l-md px-3 py-2 focus:outline-none"
                required
                minLength={4}
                maxLength={7}
              />
              <button
                type="submit"
                className="bg-blue-500 transition hover:bg-blue-600 text-slate-200 rounded-r-md px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex">
            <h1 className="text-2xl font-bold text-slate-200">
              Flight information for {data.airline_name} {data.flight_number}
            </h1>
            {data.status && (
              <div
                className={`ml-2 px-2 py-1 rounded-md text-white ${getStatusColor(
                  data.status
                )}`}
              >
                {data.status}
              </div>
            )}
          </div>
        </div>

        {/* Search and FI Display */}

        {/* Departure Card */}

        <div className="grid grid-cols-2 gap-6 mt-5">
          {/* Departing Information */}
          <div className="p-10 border-gray-200 rounded-lg shadow-md bg-gray-800">
            <h5 className="mb-6 text-2xl font-bold text-slate-200">
              Departure
            </h5>
            {showData ? (
              <div className="">
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">Origin</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.dep_name
                        ? data.dep_name
                        : "Unable to find Departure Airport"}
                    </p>
                    <div className="bg-blue-500 rounded-md p-1">
                      <p className="text-slate-200 text-xs">
                        {data.dep_iata ? data.dep_iata : "Unable to find IATA"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Departure Time */}
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">
                    Scheduled Departure Time (UTC)
                  </p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.dep_time_utc
                        ? data.dep_time_utc
                        : "Unable to find Departure Time"}
                    </p>
                  </div>
                </div>
                {/* Gate Terminal */}
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">Terminal and Gate</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.dep_terminal
                        ? data.dep_terminal
                        : "Unable to find Departure Terminal"}
                    </p>
                    <div className="bg-blue-500 rounded-md p-1">
                      <p className="text-slate-200 text-xs">
                        {data.dep_gate ? data.dep_gate : "Unable to find Gate"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-200">
                Search a flight number in the field above to find data about it.
              </p>
            )}
          </div>
          {/* Departure Card */}

          {/* Arrival Card */}
          <div className="p-10 border-gray-200 rounded-lg shadow-md bg-gray-800">
            <h5 className="mb-6 text-2xl font-bold text-slate-200 underline">
              Arrival
            </h5>
            {showData ? (
              <div className="">
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">Destination</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.arr_name
                        ? data.arr_name
                        : "Unable to find Arrival Airport"}
                    </p>
                    <div className="bg-blue-500 rounded-md p-1">
                      <p className="text-slate-200 text-xs">
                        {data.arr_iata ? data.arr_iata : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Arrival Time */}
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">
                    Scheduled Arrival Time (UTC)
                  </p>
                  <div className="">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.arr_time_utc
                        ? data.arr_time_utc
                        : "Unable to find Arrival Time"}
                    </p>
                  </div>
                </div>
                {/* Gate Terminal */}
                <div className="">
                  <p className="text-slate-200 text-sm">Terminal and Gate</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.arr_terminal
                        ? data.arr_terminal
                        : "Unable to find Arrival Terminal"}
                    </p>
                    <div className="bg-blue-500 rounded-md p-1">
                      <p className="text-slate-200 text-xs">
                        {data.arr_gate ? data.arr_gate : "Unable to find Gate"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
