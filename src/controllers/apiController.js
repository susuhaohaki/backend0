const User = require('../models/user')
const {uploadSingleFlies, uploadMultipleFiles} = require("../services/fileService")

const getUsersAPI = async (req,res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const postCreateUsersAPI = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log ('email = ',email, 'name = ', name , 'city = ', city );
    let user = await User.create({
        email: email,
        name: name,
        city: city,
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req,res) => {
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city; 
    let UserId  = req.body.userId;
    let user = await User.updateOne({ _id: UserId }, { email: email, name: name, city: city});
    // console.log ('email = ',email, 'name = ', name , 'city = ', city, 'userId: ',userId);
    return res.status(200).json(
        {
        errorCode: 0,
        data: user
    }
    )
    // res.send("Update a user succeed")
}

const deleteUserAPI = async(req,res) => {
    let userId  = req.body.userId;
    // await deleteUserById(userId);
    let result = await User.deleteOne({
        _id:userId
    })
    return res.status(200).json(
        {
        errorCode: 0,
        data: result
        }
    )
    }

    const postUploadSingleFileAPI = async (req, res) => {

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
    
        let result = await uploadSingleFlies(req.files.image);
    
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
    
// Controller xử lý việc tải lên nhiều tệp tin
const postUploadMultipleFilesAPI = async (req, res) => {
    // Kiểm tra xem có tệp tin nào được tải lên không
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Kiểm tra nếu tệp tin được tải lên là một mảng (nhiều tệp tin)
    if (Array.isArray(req.files.image)) {
        // Nếu là nhiều tệp tin, gọi hàm xử lý tải lên nhiều tệp tin
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0, // Mã lỗi, có thể tùy chỉnh theo yêu cầu
            data: result // Dữ liệu kết quả từ quá trình tải lên
        });

    } else {
        // Nếu chỉ có một tệp tin, gọi hàm xử lý tải lên tệp tin đơn
        return await postUploadSingleFileAPI(req, res);
    }
}
module.exports = {
    getUsersAPI,postCreateUsersAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI,postUploadMultipleFilesAPI
}