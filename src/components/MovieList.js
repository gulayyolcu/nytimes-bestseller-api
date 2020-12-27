import React from 'react';


const MovieList=(props)=>{



    return(
        <div className="row mb-4">
            
                {
                    props.movies.map((movie)=>{
                        return(
                            <div className="col-lg-4 mb-4" key={movie.primary_isbn10}>
                                <div className="card shadow-sm">
                                    <div className="card">
                                        <img src={movie.book_image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <h6 className="card-title text-danger">{movie.author}</h6>
                                        <p className="card-text">{movie.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button type="" className="btn btn-md btn-outline-danger">Listede olduğu hafta sayısı</button>
                                            <h2><span className="badge badge-danger">{movie.weeks_on_list}</span></h2>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            
        </div>
    )

}

export default MovieList;