import React, {useState} from "react";
import Quote from "../models/quote";
import { fetchQuotes } from "../services/QuotesApiService";
import { useEffect } from "react";

function Quotes() {
const [quotes, setQuotes] = useState<Quote[]>([])

useEffect( () =>{
    fetchQuotes().then(
        data => {setQuotes(data);}
    );
} , []);

    return(
        <ul>
            <li>
            {quotes.map( 
                (quote, i) => <li key={i}>{quote.text} - {quote.author}</li>
            )}
            </li>
        </ul>
)
}

export default Quotes;