import React, {createContext,useContext,useState} from "react";
import axios from 'axios'
 
const ResultContext=createContext();
const baseUrl="https://seo-api.p.rapidapi.com/v1";


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
            'x-rapidapi-host': 'seo-api.p.rapidapi.com',
            'x-rapidapi-key': 'c00b6040f3msh3eadd61ee187dfdp1d6438jsn6c3af8c5c98b',
          },
        });
        const data = await res.json();

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
