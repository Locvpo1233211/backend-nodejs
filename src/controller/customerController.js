const { uploadSingleFileAPI } = require("../service/fileService");
const {
    createCustomerService,
    createArrayCustomerService,
} = require("../service/customerService");
module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imgUrl = "";

        let sampleFile = req.files.image;
        console.log(">>>>sampleFile", sampleFile);
        // sampleFile processing logic here
        if (!req.files || Object.keys(req.files).length === 0) {
        } else {
            result = await uploadSingleFileAPI(sampleFile);
            imgUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            image: imgUrl,
            description,
        };

        result = await createCustomerService(customerData);
        console.log(">>>>result", result);

        // let customer = await Customer.create(customerData);
        // return res.status(201).json({
        //     errorCode: 0,
        //     data: customer,
        if (result) {
            return res.status(201).json({
                errorCode: 0,
                data: result,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Create customer failed",
                data: result,
            });
        }
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customer);
        console.log(">>>>customers", customers);
        if (customers) {
            return res.status(201).json({
                errorCode: 0,
                data: customers,
            });
        } else {
            return res.status(500).json({
                errorCode: 1,
                message: "Create customer failed",
                data: customers,
            });
        }
    },
};
