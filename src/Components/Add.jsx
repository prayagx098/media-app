import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoApi } from '../../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo]=useState({id:"",name:"",url:"",link:""})

  console.log(uploadVideo);

  const getYoutubeLink = (e) => {
    const { value } = e.target;
    
    if (value.includes("v=")) {
      const VID = value.split("v=")[1].split("&")[0];

      const embedUrl = `https://www.youtube.com/embed/${VID}`;
      console.log(embedUrl);
      

      setUploadVideo({
        ...uploadVideo,
        link: embedUrl
      });
    } else {

      setUploadVideo({
        ...uploadVideo,
        link: ""
      });
    }
  };
  

  const handleAdd = async ()=>{
    const {id,name,url,link} = uploadVideo
    if(!id || !name || !url || !link){
      alert("fill out the missing field to upload");
    }else{
     const result = await uploadVideoApi(uploadVideo)
     console.log(result);
     if(result.status>=200 && result.status<=300){
      
      alert("Video Uploaded");
      handleClose()

      setUploadVideo({id:"",name:"",url:"",link:""})
      setUploadVideoResponse(result.data)
     }else{
      alert(result.messege);
      console.log(result.messege);
      
     }
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-5 mt-5">
        
        <Button className='btn btn-primary' onClick={handleShow}> <i className='fa-solid'><h4>Upload Video</h4></i> </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <FloatingLabel controlId="floatingInput" label="VideoID" className="mb-3">
              <Form.Control type="text" placeholder="VideoID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Video Name" className="mb-3">
              <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Image URL" className="mb-3">
              <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingName" label="Video URL" className='mb-3'>
              <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink}/>
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
