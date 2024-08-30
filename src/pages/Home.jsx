import React, { useState } from 'react'
import Add from "../Components/Add"
import View from "../Components/View"
import { Link } from 'react-router-dom'
import Category from '../Components/Category'
function Home() {

  const [uploadVideoResponse,setUploadVideoResponse] = useState({})
  const [dropVideoResponse,setDropVideoResponse] = useState({})
  return (
    <>
      <div className="container mt-5 p-5 mb-5 d-flex justify-content-between">

      </div>  



      <div className='container-fluid mt-5 mb-5 w-100 row'>
        <div className="all-videos col-lg-9">  
          <div className="row">
            <div className="col-4">
            <Add setUploadVideoResponse={setUploadVideoResponse}/>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
            <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}><i className="fa-solid fa-trash"> Watch History </i> </Link> 
            </div>
          </div>


          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    
    </>
  )
}

export default Home
