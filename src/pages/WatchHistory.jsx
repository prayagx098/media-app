import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../../services/allAPI';


function WatchHistory() {

  const [history,setHistory]=useState([])

  useEffect(() => {
    getAllHistory();
  }, []);

  const getAllHistory = async () => {
    try {
      const result = await getHistoryApi();

      if (result.status === 200) {
        setHistory(result.data);
      
      } else {
        console.error(result.message);
        setHistory([]);
        alert("Failed to fetch history");
      }
    } catch (error) {
      console.error('Error fetching history:', error);
      setHistory([]);
      alert("An error occurred while fetching history");
    }
  };

  const removeHistory = async (id) => {
    try {
      const result = await deleteHistoryApi(id);

      if(result.status === 200) {
        alert("History Deleted");
        getAllHistory()
      }
    }
    catch (error) {
      console.error("eror deleting video:" , error);
      alert("history not deleted")
      
    }
  }

  return (
    <>
     <div className="container-fluid pt-5">
      <div className="container pt-5 mt-5 d-flex justify-content-between">
          <h2>Watch History</h2>
          <Link style={{textDecoration:'none',color:'white',fontSize:'20px'}} to={"/home"}>&#x2302; BACK TO HOME </Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>SI</th>
            <th>Title</th>
            <th>Video Url</th>
            <th>TimeStamb</th>
            <th>Action</th>
          </tr>
        </thead>


        {history.length > 0 ? (
        history.map((his,index) => (

            <tbody>
                <td>{index + 1}</td>
                <td>{his?.name}</td>
                <td><a href="">{his?.link}</a></td>
                <td>{his?.timeStamp}</td>
                <td>
                  <button className='btn' onClick={() => removeHistory(his?.id) }><i className='fa-solid fa-trash text-danger'></i></button>
                </td>
            </tbody>

        ))
      ) : (
        <p className='text-danger fw-bolder'>No WatchHistory</p>
      )}

      </table>
     </div>

    </>
  )
}

export default WatchHistory
