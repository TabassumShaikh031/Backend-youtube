//steps are files we will get from server that is already uploaded in server then local files path will be provided
//then uploading that file in cloudinary then removing file from server
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        console.log('File uploaded on cloudinary', response)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //file removed from server
        return null;
    }
}
export { uploadOnCloudinary }