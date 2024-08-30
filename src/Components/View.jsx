import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';
import { getAllUploadedVideoApi, getVideoCategoryApi, updateCategoryApi } from '../../services/allAPI';

function View({uploadVideoResponse,setDropVideoResponse}) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideo, setDeleteVideo] = useState(false);

  useEffect(() => {
    getAllVideos();
    setDeleteVideo(false)
  }, [uploadVideoResponse,deleteVideo]);

  const getAllVideos = async () => {
    try {
      const result = await getAllUploadedVideoApi();

      if (result.status === 200) {
        setAllVideos(result.data);
      } else {
        console.error(result.message);
        setAllVideos([]);
        alert("Failed to fetch videos");
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      setAllVideos([]);
      alert("An error occurred while fetching videos");
    }
  };

  const dragOver = ( e )=>{
    e.preventDefault()
  }


  const videoDropped=async (e) => {
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    // console.log(videoId,categoryId)

    const {data} = await getVideoCategoryApi()


    const selectedCategory = data.find(item=>item.id==categoryId)
    const result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
    // console.log(result);
    let {id,categoryName} = selectedCategory
    let newCategory ={id,categoryName,allVideos:result}
    // console.log(newCategory);
    const res = await updateCategoryApi(categoryId,newCategory)
        
    setDropVideoResponse(res)
  }

  return (
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
      {allVideos.length > 0 ? (
        allVideos.map((video) => (
          <Col sm={12} md={4} lg={3} key={video.id}>
            <VideoCard video={video} setDeleteVideo = {setDeleteVideo}/>
          </Col>
        ))
      ) : (
        <p className='text-danger fw-bolder'>Nothing to display</p>
      )}
    </Row>

  );
}

export default View;
