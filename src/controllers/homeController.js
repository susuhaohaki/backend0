const connection = require('../config/database')
const {getAllUsers} = require('../services/CRUDService')

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

const getHomePage = async (req,res) => {
    let results = await getAllUsers();
    // để check kết quả khi không dùng await, có thể dùng như sau:
    // console.log ('>>>>>check row', connection.query('select * from Users'))
    return res.render('home.ejs', {listUsers: results}) // x <- y

}

const getABC = (req,res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req,res) => {
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log ('email = ',email, 'name = ', name , 'city = ', city);
    // let {email, name, city} = req.body;

    // connection.query(
    //     `INSERT INTO Users  (EMAIL, NAME , CITY)
    //      VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results) {
    //         res.send("create a new user succeed")
    //     }
    // );
    
    let [results,fields] = await connection.query(
        `INSERT INTO Users  (EMAIL, NAME , CITY) VALUES (?, ?, ?)`,[email, name, city]
    );
    console.log('>>>>>>check results', results)
    res.send("create a new user succeed")
    // connection.query(
    // 'SELECT * from USERS',
    // function(err, results, fields) {
    //     console.log('>>>>>RESULTS =',results); // results contains rows returned by server
    //     }
    // );

    // const[results,fields] = await connection.query('select * from Users u')

    }
const getCreatePage = (req,res) => {
    res.render('create.ejs')
}

const getUpdatePage = (req,res) => {
    const userId = req.params.id
    console.log ('>>>>>req.params: ',userId)
    res.render('update.ejs')
}

module.exports = {
    getHomePage, getABC, gettest, postCreateUser,getCreatePage,getUpdatePage
}