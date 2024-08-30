import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import bgPhoto from '../assets/girlHead.png'

function Landingpage() {

  
  

  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{color:"grey"}}>Welcome to <span className='text-white mt-5' >Merkury Player</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tempore earum voluptate dolores eos iure consequatur perferendis! Tempore placeat voluptatibus reprehenderit, ipsam commodi vitae ut adipisci nulla odio est ex.
          Harum cumque nemo distinctio nulla consequuntur atque excepturi iure, quae modi. Porro voluptate fuga sunt similique non, veritatis nemo sed tempora quae voluptatibus! Deleniti, eius. Optio esse velit voluptate omnis.</p>
          <Button className='btn btn-warning' onClick={()=>navigateByUrl('./home')}>More here &gt;&gt;&gt;</Button>
        </Col>
        <Col lg={5} className='mt-5'>
          <img className='mt-5' style={{borderRadius:"10px", maxWidth:"650px"}} src={ bgPhoto } alt="Girls Png" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex flex-column align-item-center justify-content-center w-100">
        <h2 className='text-center mt-5 mb-5'>FEATURES</h2>

        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.gifer.com/Nt6v.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img height={200} variant="top" src="https://i.gifer.com/Yzg5.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/256521/screenshots/1144352/equalizer.gif" />
            <Card.Body>
              <Card.Title>Setting Playlist</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-item-center">
      <div className="row">
      <div className="col-lg-6">
          <h2 className='text-white mt-5'>Fast , Capable & Optimised</h2>
          <h6 className='mb-5 mt-5'> <span className='text-warning'>Play EveryThing</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore inventore voluptates commodi voluptatum blanditiis molestias molestiae sapiente eveniet corporis, reprehenderit ut ea ducimus qui assumenda tempora. Doloribus ipsam recusandae ipsum.
          Iure aliquam adipisci nostrum voluptatum laboriosam eaque ullam sequi unde a ad iste, ipsam eius veritatis commodi blanditiis est placeat quam dolor atque perspiciatis ratione exercitationem corrupti voluptates temporibus? Corporis. </h6>

        </div>
        <div className="col-lg-5">
        <iframe width="640" height="415" src="https://www.youtube.com/embed/HhjHYkPQ8F0?si=jv6JmrN41hv0UhAy&amp;start=12" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      </div>
    </>
  )
}

export default Landingpage
