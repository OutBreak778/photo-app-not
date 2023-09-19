import React from 'react'
import cloudinary from "cloudinary"

type Folder = {
    name: string;
    path: string;
}

const FolderMenu = async () => {
    
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[];
      };
    
    
    return<></>
}

export default FolderMenu
