const Customer = require("../model/customer");

module.exports = {
    createCustomerService: async (customerData) => {
        // let customer = await Customer.create(customerData);
        // return customer;

        try {
            let result = Customer.create({
                name: customerData.name,
                address: customerData.address,
                phone: customerData.phone,
                email: customerData.email,
                image: customerData.image,
                description: customerData.description,
            });

            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    createArrayCustomerService: async (customersArray) => {
        try {
            let result = await Customer.insertMany(customersArray);
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
};
