import axios from "axios";
import { URL_API, SETTINGS } from "./apiSettings";

export const getEmloyeesList = axios({
  url: `${URL_API}/api/v1/company/${SETTINGS.companyID}/staff`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SETTINGS.bearer}, User ${SETTINGS.user}`,
    'Accept': 'application/vnd.api.v2+json'
  },
});