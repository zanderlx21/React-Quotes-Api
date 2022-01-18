import axios from "axios";
import Quote from "../models/quote";

export function fetchQuotes(): Promise<Quote[]> {
    return axios.get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(res => res.data)
}