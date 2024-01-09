const uploadSingleFlies = async(fileobject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = __dirname +'/abc/'+ fileobject.name;
    try {
        await fileobject.mv(uploadPath);
        return {
            status: "success",
            path : "link-image",
            error: null
        }
    }
    catch(err) {
        console.log(">>>> check err: ",err)
        return {
            status: "failed",
            path : null,
            error: JSON.stringify(err)
        }
    }
  
}

const uploadMultipleFlies = () =>{

}

module.exports = {
    uploadMultipleFlies,uploadSingleFlies
}