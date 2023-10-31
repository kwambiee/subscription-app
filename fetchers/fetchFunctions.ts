import { Country } from "@/types/globaltypes";
import axios from "axios";

export const fetchCountries = async (): Promise<Country[]> => {
  const options = {
    method: "GET",
    url: "https://restcountries.com/v3.1/all",
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
