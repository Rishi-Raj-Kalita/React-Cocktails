import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const {isLoading,setIsLoading,cocktails}=useGlobalContext()

  if(isLoading)
  {
    return (
      <Loading/>
    )
  }

  if(cocktails.length===0)
  {
    return <h2 className="section-title">Drink not available, Try something else</h2>
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map((drink)=>{
            const {id}=drink

            return <Cocktail key={id} {...drink}/>
          })
        }
      </div>
    </section >
  )
}

export default CocktailList
