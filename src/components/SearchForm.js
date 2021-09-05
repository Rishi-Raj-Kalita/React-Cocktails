import React,{useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setIsLoading,setSearchStr}=useGlobalContext()

  const searchCocktail=()=>{
    setSearchStr(searchValue.current.value)
  }

  const handleSubmit=(e)=>{
    e.prventDefault()
  }

  useEffect(()=>{
    searchValue.current.focus()
  },[])

  const searchValue=useRef('')
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <lable htmlFor="name">Search your favourite Cocktail</lable>
          <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section >
  )
}

export default SearchForm
