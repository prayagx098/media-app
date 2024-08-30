import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { addVideoHisoryApi, deleteVideoApi } from '../../services/allAPI';



function VideoCard({ video,setDeleteVideo,insideCategory }) { 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
    const {name,link} = video
    let today = new Date()

    let timeStamp = new Intl.DateTimeFormat('en-US' , {year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

    let videoHistory = {name,link,timeStamp}

    // Api Calling
   await addVideoHisoryApi(videoHistory)
    
  }

  const removeVideo = async (id) => {
    try {
      const result = await deleteVideoApi(id);

      if(result.status === 200) {
        setDeleteVideo(true)
        console.log("deleted")
      }
    }
    catch (error) {
      console.error("eror deleting video:" , error);
      alert("history not deleted")
      
    }
  }

  const dragStarted=(e,id)=>{

    console.log("drag started" + id);

    e.dataTransfer.setData("videoId", id);

  }

  return (
    <>
      <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)} >
        <Card.Img
          variant="top"
          src={video?.url}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h3>{video?.name}</h3> 
{insideCategory?null:            <button className='btn'>
              <i className='fa-solid fa-trash text-danger'onClick={() => removeVideo(video?.id) }></i>
            </button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe
          width="100%"
          height="315"
          src={`${video?.link}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
        <p>{video?.id}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
