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

module.exports = {
    getHomePage, getABC, gettest
}