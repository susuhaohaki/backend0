const connection = require('../config/database')


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

const getHomePage = (req,res) => {
    return res.render('home.ejs')
}

const getABC = (req,res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req,res) => {
    
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log ('email = ',email, 'name = ', name , 'city = ', city);
    // let {email, name, city} = req.body;

    connection.query(
        `INSERT INTO Users  (EMAIL, NAME , CITY)
         VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, results) {
          console.log(results);
        }
    );
    res.send("create a new user succeed")
}





module.exports = {
    getHomePage, getABC, gettest, postCreateUser
}