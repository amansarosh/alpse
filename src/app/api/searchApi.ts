"use server";

export async function searchFlight(e: FormData): Promise<Object> {
  
  const flight_number = e.get("flight_number") as string;

  const res = await fetch(
    `${process.env.API_BASE}flight?flight_icao=${flight_number}&api_key=${process.env.API_KEY}`,
    {
      cache: "no-cache",
    }
  );

  const data = await res.json();
  return data.response;
}