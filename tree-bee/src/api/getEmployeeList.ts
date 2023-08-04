import axios from "axios";
import { IEmployee } from "../models/IEmployee";
import { URL_API, API_SETTINGS } from "./apiSettings";

export async function getEmloyeesList() {
  try {
    const response = await axios({
      url: `${URL_API}/api/v1/company/${API_SETTINGS.companyID}/staff`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_SETTINGS.bearer}, User ${API_SETTINGS.user}`,
        'Accept': 'application/vnd.api.v2+json'
      },
    });
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(`Error: ${error.response?.data}`);
    } else if (error instanceof Error) {
      alert(error.message);
    }
  }
}