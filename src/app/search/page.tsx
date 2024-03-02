"use client";
// tooltip
// color for dep and arr time

import { searchFlight } from "../api/searchApi";
import { useState } from "react";

export default function Search() {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false); // To replace data

  // Flight Status Colors
  function getStatusColor(status: string) {
    switch (status.toLowerCase()) {
      case "en-route":
        return "bg-yellow-500"; // Yellow for en route
      case "scheduled":
        return "bg-gray-500"; // Gray for scheduled
      case "landed":
        return "bg-green-500"; // Green for landed
      case "cancelled":
        return "bg-red-500"; // Red for cancelled
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
                {/* Scheduled Departure Time */}
                <p className="text-slate-200 text-sm">
                  Scheduled Departure Time (UTC)
                </p>
                <div
                  className={`mb-4 ${
                    data.dep_actual_utc
                      ? "line-through decoration-slate-200"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.dep_time_utc
                        ? data.dep_time_utc
                        : "Unable to find Departure Time"}
                    </p>
                  </div>
                </div>

                {/* Actual Departure Time */}
                {data.dep_actual_utc !== null && (
                  <div className="mb-4">
                    <p className="text-slate-200 text-sm">
                      Actual Departure Time (UTC)
                    </p>
                    <div className="flex items-center space-x-2">
                      <p className="text-slate-200 text-lg font-semibold">
                        {data.dep_actual_utc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Terminal */}
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">Terminal</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.dep_terminal
                        ? data.dep_terminal
                        : "Unable to find Terminal"}
                    </p>
                  </div>
                </div>
                {/* Gate*/}
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">Gate</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.dep_gate
                        ? data.dep_gate
                        : "Unable to find Departure Gate"}
                    </p>
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
            <h5 className="mb-6 text-2xl font-bold text-slate-200">Arrival</h5>
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
                {/* Scheduled Arrival Time */}
                <p className="text-slate-200 text-sm">
                  Scheduled Arrival Time (UTC)
                </p>
                <div
                  className={`mb-4 ${
                    data.arr_actual_utc
                      ? "line-through decoration-slate-200"
                      : ""
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.arr_time_utc
                        ? data.arr_time_utc
                        : "Unable to find Arrival Time"}
                    </p>
                  </div>
                </div>

                {/* Actual Arrival Time */}
                {data.arr_actual_utc !== null && (
                  <div className="mb-4">
                    <p className="text-slate-200 text-sm">
                      Actual Arrival Time (UTC)
                    </p>
                    <div className="flex items-center space-x-2">
                      <p className="text-slate-200 text-lg font-semibold">
                        {data.arr_actual_utc}
                      </p>
                    </div>
                  </div>
                )}
                {/* Gate Terminal */}
                <div className="mb-4">
                  {/* Terminal */}
                  <div className="mb-4">
                    <p className="text-slate-200 text-sm">Terminal</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-slate-200 text-lg font-semibold">
                        {data.dep_terminal
                          ? data.dep_terminal
                          : "Unable to find Terminal"}
                      </p>
                    </div>
                  </div>
                  {/* Gate*/}
                  <div className="mb-4">
                    <p className="text-slate-200 text-sm">Gate</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-slate-200 text-lg font-semibold">
                        {data.arr_gate
                          ? data.arr_gate
                          : "Unable to find Arrival Gate"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Arrival Baggage Claim */}
                <div className="mb-4">
                  <p className="text-slate-200 text-sm">Baggage Claim</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-slate-200 text-lg font-semibold">
                      {data.arr_baggage
                        ? data.arr_baggage
                        : "Unable to find Baggage Claim"}
                    </p>
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
        {/* ATC Routing */}
        {showData ? (
          <div className="flex flex-col bg-gray-800 p-5 rounded-lg shadow-md gap-6 mt-5">
            <div className="flex">
              <h1 className="text-2xl font-bold text-slate-200">
                {data.flight_icao} ATC Route
              </h1>
            </div>

            {/* Waypoints Card */}
            <div className="bg-gray-700 p-3 rounded-md shadow-md">
              <h2 className="text-lg font-semibold text-white mb-3">
                {data.dep_icao} - {data.arr_icao}
              </h2>
              <div className="text-slate-200">
                <code>
                  MONTN2 SEA ALPSE YDC ENDBY YZU 5500N/11500W 5900N/11000W
                  6400N/10000W 6730N/09000W 7000N/08000W 7050N/07000W NADMA
                  7200N/06000W 7200N/04000W 7000N/03000W 6700N/02000W
                  6300N/01000W NALAN EVTAR N96 ROKAN M982 TOPPA
                </code>
              </div>
            </div>
          </div>
        ) : null}

        {/* test */}
        <button className="bg-slate-200" onClick={() => {}}>
          <h1>button</h1>
        </button>
      </div>
    </>
  );
}
