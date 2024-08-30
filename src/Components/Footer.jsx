import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
<MDBFooter style={{marginTop:"250px"}} className='text-center footerDes' color='white' >
      <MDBContainer className='p-4'>
        

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' className='mb-4' placeholder='abc@domain.com'/>
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='white' type='submit' className='mb-4'>
                  GET CONNECTED <i className="fa-regular fa-envelope fa-bounce"></i>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
        <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                MERCURY-SOUNDS &nbsp;
                <MDBIcon color='secondary' fas icon="headphones-alt" />
              </h6>
              <p>
                Worlds First Personal Music Organaisor,Video Played,Mood Setter,Ai Song Generator.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Songs
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Video
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Animation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mercury Imagine
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Other Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Imagify
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Songify
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MercuryGo
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FlyHover
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                NOIDA, INDIA, 630812
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                mercurymusics@moled.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
            
          </MDBRow>
          
        </MDBContainer>

      </section>

      </MDBContainer>
      
      <section className='mb-4'>
          <MDBBtn outline color="white" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="white" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="white" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="white" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn  color="white" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='reddit' />
          </MDBBtn>

          <MDBBtn outline color="white" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='amazon' />
          </MDBBtn>
        </section>

      <div className='text-center p-3 bg-secondary text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MercurySongs.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
