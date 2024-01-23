//{key : value}
const {uploadSingleFlies} = require('../services/fileService')
const {createCustomerService,createArrayCustomerService,getAllCustomerService,
    putUpdateCustomerService,deletedCustomerService,deleteCustomersService} = require('../services/customerService')
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
       
    },
    getAllCustomer : async(req,res) => {
        console.log(req.query)
        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let result = null;
        if (limit && page){
            result = await getAllCustomerService(limit,page,name)
        }else {
            result = await getAllCustomerService()
        }

            return res.status(200).json (
                {
                EC : 0 ,
                data : result
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
    },
    deleteACustomer: async(req,res) => {
        let id = req.body.id;
        let result = await deletedCustomerService(id)
        console.log(id)
        return res.status(200).json  (
            {
            EC : 0 ,
            data : result
            }
        )
    },
    deleteCustomers: async(req,res) => {
        let ids = req.body.customerID;
        let result = await deleteCustomersService(ids)
        console.log("req.body.customerID",ids)
        return res.status(200).json  (
            {
            EC : 0 ,
            data : result
            }
        )
    }

}