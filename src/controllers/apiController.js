const User = require('../models/user')

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



module.exports = {
    getUsersAPI,postCreateUsersAPI,putUpdateUserAPI
}