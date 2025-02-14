const { uploadSingleFileAPI } = require("../service/fileService");
const {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerservice,
    updateCustomerService,
    deleteCustomerService,
    deleteArrayCustomerService,
} = require("../service/customerService");
const aqp = require("api-query-params");
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
    getAllCustomerAPI: async (req, res) => {
        const queryString = aqp(req.query);
        let result = null;
        if (queryString.limit || queryString.skip) {
            result = await getAllCustomerservice(queryString);
        } else {
            result = await getAllCustomerservice();
        }

        if (!result) {
            return res.status(500).json({
                errorCode: 1,
                message: "Get all customer failed",
                data: result,
            });
        }
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    },
    updateCustomerAPI: async (req, res) => {
        let { name, address, phone, email, description, id } = req.body;
        console.log(">>>>req.body", req.body);
        let imgUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log("No file uploaded");
        } else {
            result = await uploadSingleFileAPI(req.files.image);
            imgUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            image: imgUrl,
            description,
            id,
        };
        let results = await updateCustomerService(customerData);
        console.log(">>>>results", results);
        if (!results) {
            return res.status(500).json({
                errorCode: 1,
                message: "Update customer failed",
                data: results,
            });
        }
        return res.status(200).json({
            errorCode: 0,
            data: results,
        });
        //
    },
    deleteACustomerAPI: async (req, res) => {
        let { id } = req.body;
        let result = await deleteCustomerService(id);
        if (!result) {
            return res.status(500).json({
                errorCode: 1,
                message: "Delete customer failed",
                data: result,
            });
        }
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    },

    deleteAarrayCustomerAPI: async (req, res) => {
        let ids = req.body.customers;
        console.log(">>>>ids", ids);
        let result = await deleteArrayCustomerService(ids);
        if (!result) {
            return res.status(500).json({
                errorCode: 1,
                message: "Delete customer failed",
                data: result,
            });
        }
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    },
};
