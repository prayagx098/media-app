import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addVideoCategoryApi, deleteVideoCategoryApi, getVideoApi, getVideoCategoryApi, updateCategoryApi } from '../../services/allAPI';
import VideoCard from './VideoCard';



function Category(dropVideoResponse) {
  const [categoryName,setCategoryName] = useState("");
  const [allCategories,setAllCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd = async() => {

    if(categoryName){
      const result = await addVideoCategoryApi({categoryName,allVideos:[]})
      if(result.status>199 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        alert(result.messege)
      }
    }else{
      alert("please fill the requiered fields")
    }
  }

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const getCategories = async()=>{
    const {data} = await getVideoCategoryApi()
    setAllCategories(data)
  }

1
  const removeCategory = async (id) => {
    try {
      const result = await deleteVideoCategoryApi(id);

      if(result.status === 200) {
        alert("Category Deleted");
        getCategories()
      }
    }
    catch (error) {
      console.error("eror deleting Category:" , error);
      alert("Category not deleted")
      
    }
  }

  const dragOver = (e)=>{
    // console.log("video caerd Dragged over the cat");
    e.preventDefault()
     
  }

  const videoDropped =async (e,categoryId)=>{

    const videoId = e.dataTransfer.getData("videoId")
    // console.log("video Id" + videoId , "Dropped Into" + categoryId)

    

    const {data} = await getVideoApi(videoId)

    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)

    const resp = await updateCategoryApi(categoryId,selectedCategory)
 
    getCategories()
  }


  const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }


  return (
    <>
      <div className='d-grid'>
        <button className='btn btn-secondary' onClick={handleShow}><h5>ADD CATEGORY</h5></button>
      </div>



      {/* modal */}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <FloatingLabel controlId="floatingInput" label="Category" className="mb-3">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)} />
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

{
  allCategories?.length>0?allCategories.map(category=>(

    <div className="border rounded p-4 m-3" key={category?.id} droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e,category?.id)}>
    <div className="d-flex justify-content-between align-items-center">
      <h5>{category?.categoryName}</h5>
      <button className="btn" onClick={() => removeCategory(category?.id) }><i className="fa-solid fa-trash text-danger"></i></button>
    </div>
    <Row>
    {category && category.allVideos && category.allVideos.length > 0 ? (
        category.allVideos.map(card => (
            <Col sm={12} className="mb-3" key={card.id} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCard video={card}  insideCategory={true}/>
            </Col>
        ))
    ) : (
        <p>No videos available.</p>
    )}
    </Row>
  </div>



  )):<p>Nothing to display</p>

}
    </>
  )
}

export default Category
