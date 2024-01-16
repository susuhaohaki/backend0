//{key : value}
const {uploadSingleFlies} = require('../services/fileService')
const {createCustomerService,createArrayCustomerService,getAllCustomerService,putUpdateCustomerService} = require('../services/customerService')
module.exports = {
    postCreateCustomer : async (req,res) => {
        let {name,address,phone,email,image,description} = req.body; //let name = req.body.name; let phone = req.body.phone
        
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing;
        }else {
            console.log('check req.files >>>>>>',req.files)
            let result = await uploadSingleFlies(req.files.image);
            imageURL = result.path
        }
        
        let customerData = {
            name,
            address,
            phone,
            email,
            image:imageURL,
            description
        }
       let customer =  await createCustomerService(customerData);
    
        return res.status(200).json (
            {
            EC : 0 ,
            data : customer
            }
        )
    },
    postCreateArrayCustomer: async(req,res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json (
                {
                EC : 0 ,
                data : customers
                }
            )
        }else {
            return res.status(200).json (
                {
                EC : -1 ,
                data : customers
                }
            )
        }
       
    },getAllCustomer : async(req,res) => {
        let results = await getAllCustomerService();
            return res.status(200).json (
                {
                EC : 0 ,
                data : results
                }
            )
    },
    PutUpdateCustomer :async(req,res) => {
        let {id, name,email,address} = req.body;
        let result = await putUpdateCustomerService(id,name,email,address)
        return res.status(200).json  (
            {
            EC : 0 ,
            data : result
            }
        )
    }

}