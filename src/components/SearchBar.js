import React from 'react';

class SearchBar extends React.Component{

 
    handleFormSubmit=(e)=>{
        e.preventDefault();
    }

    render(){
        return(
         
                <div className="col-4">
                
                        <input onChange={this.props.searchMovieProp} onSubmit={this.handleFormSubmit}
                        type="text" 
                        className="form-control" 
                        placeholder="Search a book"
                        
                        />
             
                </div>
        
        )
    }
}

export default SearchBar;