const { Console } = require('console');
const path = require('path');
const uploadSingleFlies = async (fileobject) => {
    // The name of the input field (i.e., "sampleFile") is used to retrieve the uploaded file
    let TimeTamp = new Date().getTime();
    let DuoiFile = path.extname(fileobject.name);
    let TenFile = path.basename(fileobject.name,DuoiFile);
    let finalName = TenFile+'-'+TimeTamp + DuoiFile;
    const uploadPath = path.join(__dirname, '../public/images/upload', finalName);
    console.log('FileName>>>>>',TimeTamp)
    try {
        await fileobject.mv(uploadPath);
        return {
            status: "success",
            path : finalName,
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

const uploadMultipleFiles = async (filesArr) => {
    try {

        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        // Mảng để lưu kết quả của quá trình tải lên
        let resultArr = [];
        
        // Biến để đếm số lượng tệp tin tải lên thành công
        let countSuccess = 0;

        // Duyệt qua từng tệp tin trong mảng được chuyển đầu vào
        for (let i = 0; i < filesArr.length; i++) {
            console.log("check i = ", i)

            // Lấy phần mở rộng của tệp tin (ví dụ: ".png", ".jpg")
            let extName = path.extname(filesArr[i].name);

            // Lấy tên cơ bản của tệp tin (không bao gồm phần mở rộng)
            let baseName = path.basename(filesArr[i].name, extName);

            // Tạo tên cuối cùng của tệp tin: ví dụ, "your-image-1631150626827.png"
            
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;
            try {
                // Di chuyển (move) tệp tin vào đường dẫn cuối cùng
                await filesArr[i].mv(finalPath);

                // Ghi lại kết quả thành công của tệp tin tải lên
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                
                // Tăng số lượng tệp tin tải lên thành công
                countSuccess++;
            } catch (err) {
                // Ghi lại kết quả thất bại của tệp tin tải lên, bao gồm lỗi (nếu có)
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        // Trả về thông tin tổng quan về quá trình tải lên
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {
        // Ghi lại bất kỳ lỗi nào xảy ra trong quá trình xử lý tải lên
        console.log(error)
    }
}


module.exports = {
    uploadMultipleFiles,uploadSingleFlies
}