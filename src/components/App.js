import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

import axios from 'axios';
require('dotenv').config()

console.log(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_SESSION_ID);

class App extends React.Component{
    state={
        movies:[],
        searchQuery:""
    }

    //FETCH API GET
/*   async componentDidMount(){
      const baseURL="http://localhost:3002/movies";
      const response=await fetch(baseURL);
      console.log(response);
      const data=await response.json();
      console.log(data);
      this.setState({
        movies:data
      })
    } */

    async componentDidMount(){
      //const response=await axios.get(`https://api.themoviedb.org/3/list/7069515?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      const response=await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`);
      console.log(response.data.results.books);
      this.setState({movies:response.data.results.books})
    }

   /*  deleteMovie=(movie)=>{
      const newMovieList=this.state.movies.filter(
        m=>m.id!==movie.id
      );

      this.setState(state=>({
        movies:newMovieList
      }))//DURUM GÜNCELLENİYOR
    } */


    //FETCH API DELETE
  /*   deleteMovie=async (movie)=>{
      const baseURL=`http://localhost:3004/movies/${movie.id}`;
      await fetch(baseURL,{
        method:"DELETE"
      })

      const newMovieList=this.state.movies.filter(
        m=>m.id!==movie.id
      );

      this.setState(state=>({
        movies:newMovieList
      }))
    }
 */

 deleteMovie=async (movie)=>{
   await axios.post(`https://api.themoviedb.org/3/list/7069515/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`);
   const newMovieList=this.state.movies.filter(
     m=>m.id!==movie.id
   )
   this.setState(state=>({
     movies:newMovieList
   }))
 }

    searchMovie=(event)=>{
      this.setState({
        searchQuery:event.target.value
      })
    }

    //CLASS BASED COMPONENT OLDUĞU İÇİN THİS KULLANIYORUZ
    render(){

        let filteredMovies=this.state.movies.filter(
            (movie)=>{
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1
            }
        )

        return(
            <div className="container mt-4">
               
              
                    <div className="col-lg-12 mt-4 jusify-content-between px-2 mb-4">
                    <div>
                      <nav className="navbar col-lg-12 justify-content-between rounded-lg navbar-expand-xl navbar-dark bg-dark">            
                          <a className="navbar-brand" href="#">New York Times Bestsellers </a>
                          <SearchBar searchMovieProp={this.searchMovie}/>
                      </nav>
                    </div>
                      
                    </div>
                
                <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie}/>
            </div>
        )
        
    }

}

export default App;