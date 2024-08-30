import { commonAPI } from "./commonAPI";

import { SERVER_URL } from "./server_url";


//Upload video

export const uploadVideoApi = async(video)=>{

    return await commonAPI ("POST",`${SERVER_URL}/allVideos`,video)

}

//Get All Uploade

export const getAllUploadedVideoApi = async()=>{

    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

// get a video

export const getVideoApi = async(id)=>{

    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")

}

// delete video

export const deleteVideoApi = async(id)=>{

    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})

}

// Add video History

export const addVideoHisoryApi = async(video)=>{

    return await commonAPI ("POST",`${SERVER_URL}/history`,video)

}

// GEt History

export const getHistoryApi = async()=>{

    return await commonAPI("GET",`${SERVER_URL}/history`,"")

}

// Delete History

export const deleteHistoryApi = async(id)=>{

    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})

}

// Add Categry

export const addVideoCategoryApi = async(category)=>{

    return await commonAPI("POST",`${SERVER_URL}/category`,category)

}

// get Categry

export const getVideoCategoryApi = async()=>{

    return await commonAPI("GET",`${SERVER_URL}/category`,"")

}

// delete Categry

export const deleteVideoCategoryApi = async(id)=>{

    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})

}

// update category


export const updateCategoryApi = async(id,categoryDetails)=>{

    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)

}


