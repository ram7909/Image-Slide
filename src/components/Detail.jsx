import React, { useState } from 'react'
import { movies } from '../data'
import './detail.css'
const Detail = () => {
    const [index, setIndex] = useState(0);
    const next = () => {
        if (index < movies.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0)
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
        else {
            setIndex(movies.length - 1)
        }
    };

    return (
        <>
            <div className="mains row">
                <div className="single col-md-3 col-sm-12">
                    <div className="card text-center" style={{ width: '18rem' }}>
                        <img src={movies[index].poster_path} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{movies[index].title}</h5>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="btn btn-outline-primary mx-5 mt-3" onClick={prev}><i className="fa-solid fa-less-than"></i></div>
                        <div className="btn btn-outline-primary mx-5 mt-3" onClick={next}><i className="fa-solid fa-greater-than"></i></div>
                    </div>
                </div>
                <div className="multiple col-md-9">
                    <div className="row">
                        {movies.map((data) => <div className='col-md-3 my-3' key={data.id}>
                            <div className="cards text-center" style={{ width: '14rem' }}>
                                <img src={data.poster_path} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail