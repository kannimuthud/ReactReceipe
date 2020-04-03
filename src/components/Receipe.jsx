import React,{useEffect,useState} from 'react';
import ReceipeList from './ReceipeList'
const Receipe =()=>{
    const APP_ID= "d9a76c39";
    const APP_KEY = "014d108163f12d154ff19e87c998bf3b";
    const [recipes,setRecipes]=useState([]);
    const [search,setSearch]=useState("");
    const[query,setQuery]=useState('chicken');
    useEffect(()=>{
        console.log('it works');
        getRecipes();
        
    },[query]);
    const getRecipes= async()=>{
        const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data=await response.json();
        setRecipes(data.hits)
        console.log(data.hits)
    };
    const updateSearch = e =>{
        setSearch(e.target.value);
        console.log(search);
    };
    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    return(
        <div className="App">
            <form   onSubmit={getSearch} className="searchForm">
                <input type="text" className="searchBar" value={search} onChange={updateSearch} />
                <button className="seacrchButton" type="submit" >
                    search
                </button>

            </form>
            {recipes.map(recipe=>(
                <ReceipeList
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image} />
            ))}
        </div>
    );
};

export default Receipe;