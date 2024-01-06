const connection = require('../config/database')
const {getAllUsers,getUserById,updateUserById,deleteUserById} = require('../services/CRUDService')

const gettest = (req,res) => {
    let users = []
    connection.query(
        'SELECT * from USERS u',
        function(err, results, fields) {
        users = results
        console.log('>>>>>RESULTS =',results); // results contains rows returned by server
        console.log('check user: ',users)
        res.send(JSON.stringify(users))
        }
      );

}

const User = require('../models/user')

const getHomePage = async (req,res) => {
    let results = await User.find({});
    return res.render('home.ejs', {listUsers: results})

}

const getABC = (req,res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req,res) => {
    
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log ('email = ',email, 'name = ', name , 'city = ', city );
    // let {email, name, city} = req.body;
    // connection.query(
    //     `INSERT INTO Users  (EMAIL, NAME , CITY)
    //      VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results) {
    //         res.send("create a new user succeed")
    //     }
    // );
    
    // let [results,fields] = await connection.query(
    //     `INSERT INTO Users  (EMAIL, NAME , CITY) VALUES (?, ?, ?)`,[email, name, city]
    // );
    await User.create({
        email: email,
        name: name,
        city: city,
    })
    res.send("create a new user succeed")
}

const getCreatePage = (req,res) => {
    res.render('create.ejs')
}

const getUpdatePage = async(req,res) => {
    const userId = req.params.id
    // let user = await getUserById(userId)
    let user = await User.findById(userId).exec();
    res.render('update.ejs', {userEdit : user}) // x < - y
    // let[results,fields] = await connection.query('select * from Users where id = ? ',[userId]);
    // let user = results && results.length > 0 ? results[0] : {}
}

const postUpdateUser = async (req,res) => {
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city; 
    let UserId  = req.body.userId;
    await User.updateOne({ _id: UserId }, { email: email, name: name, city: city});
    // console.log ('email = ',email, 'name = ', name , 'city = ', city, 'userId: ',userId);
    res.redirect('/')
    // res.send("Update a user succeed")
    }

const postDeleteUser = async(req,res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs',{userEdit : user})
    }

const postHandleRemoveUser = async(req,res) => {
    let userId  = req.body.userId;
    await deleteUserById(userId);
    res.redirect('/')
    }
module.exports = {
    getHomePage, getABC, gettest,
    postCreateUser,getCreatePage,
    getUpdatePage,postUpdateUser,
    postDeleteUser, postHandleRemoveUser
}