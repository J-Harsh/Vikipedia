import React, {createContext,useContext,useState} from "react";
import axios from 'axios'
 
const ResultContext=createContext();
const baseUrl="https://google-search3.p.rapidapi.com/api/v1";


export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    const getResults = async (url) => {
        setIsLoading(true);
    
        const res = await fetch(`${baseUrl}${url}`, {
          method: 'GET',
          headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': 'bd51ba88e2mshd408351c12df16ap1f0d21jsnc1a6958747cd',
          },
        });
        const data = await res.json();
        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

  return (
    <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext=()=> useContext(ResultContext);
