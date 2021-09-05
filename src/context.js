import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import Cocktail from './components/Cocktail'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [isLoading,setIsLoading]=useState(true)
  const [cocktails,setCocktails]=useState([])
  const [searchStr,setSearchStr]=useState('a')

  const fetchDrink=async()=>{
    // console.log('fetching drink')
    setIsLoading(true)
    try{

      const response=await fetch(`${url}${searchStr}`)
      const data=await response.json()
      const {drinks}=data
      console.log(drinks)

      const newCockTails=drinks.map((drink)=>{
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
        } =drink

        return {
          id:idDrink,
          name:strDrink,
          image:strDrinkThumb,
          info:strAlcoholic,
          glass:strGlass
        }
      })
      setCocktails(newCockTails)
      setIsLoading(false)
    }
    catch(e)
    {
      console.log(e)
      setIsLoading(false)
    }
    
  }

  useEffect(()=>{
   fetchDrink()
  },[searchStr])

  return <AppContext.Provider value={
    {
      isLoading,
      setIsLoading,
      cocktails,
      setSearchStr
    }
  }>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
