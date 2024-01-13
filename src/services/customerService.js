const Customer = require('../models/customer')
module.exports = {
    createCustomerService : async(customerData) => {
        try {
            let result =  await Customer.create({
            name: customerData.name,
            address:customerData.address,
            phone:customerData.phone,
            email:customerData.email,
            image:customerData.image,
            description:customerData.description
            })
            return result
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    createArrayCustomerService : async(arr) => {
        try {
            let result = await Customer.insertMany(arr)
            return result
            
        } catch (error) {
            console.log("error",error);
            return null;
        }
    },
    getAllCustomerService : async() =>{
        try {
            let result = await Customer.find({});
            return result
            
        } catch (error) {
            console.log("error",error);
            return null;
        }
    }
}