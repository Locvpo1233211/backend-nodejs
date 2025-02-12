const { uploadSingleFileAPI } = require("../service/fileService");
const { createCustomerService } = require("../service/customerService");
module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        // // name: { String, required: true },
        // address: String,
        // phone: String,
        // email: String,
        // image: String,
        // description: String,
        let { name, address, phone, email, image, description } = req.body;
        let imgUrl = "";

        let sampleFile = req.files.image;
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
        return res.status(201).json({
            errorCode: 0,
            data: result,
        });
    },
};
