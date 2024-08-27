import React from 'react'
import './home.css'
import { movies } from '../data'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          {movies.map((data) => <div className='col-lg-4 col-md-3 col-sm-6 col-sm-12 my-3' key={data.id}>
            <div className="card text-center" style={{ width: '18rem' }}>
              <img src={data.backdrop_path} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
              </div>
            </div>
          </div>)}
        </div>
        <div className="buttons">
          <Link to={'/detail'} type="button" className="btn btn-outline-info">Next &gt;</Link>
        </div>
      </div>


    </>
  )
}

export default Home