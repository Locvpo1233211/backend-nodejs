const { getAllCustomerAPI } = require("../controller/customerController");
const Customer = require("../model/customer");
const aqp = require("api-query-params");

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
    getAllCustomerservice: async (queryString) => {
        try {
            console.log(">>>>queryString", queryString);
            let customers = null;
            if (queryString) {
                customers = await Customer.find(queryString.filter)
                    .skip(queryString.skip)
                    .limit(queryString.limit)
                    .exec();
            } else {
                customers = await Customer.find({}).exec();
            }

            return customers;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    updateCustomerService: async (customerData) => {
        try {
            console.log(">>>>customerData", customerData);
            let result = await Customer.updateOne(
                { _id: customerData.id },
                {
                    name: customerData.name,
                    address: customerData.address,
                    phone: customerData.phone,
                    email: customerData.email,
                    image: customerData.image,
                    description: customerData.description,
                }
            );
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    deleteCustomerService: async (id) => {
        try {
            console.log(">>>>id", id);
            let result = await Customer.deleteById(id);
            console.log(">>>>result", result);
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },

    deleteArrayCustomerService: async (ids) => {
        try {
            console.log(">>>>ids", ids);
            let result = await Customer.delete({ _id: { $in: ids } });
            console.log(">>>>result", result);
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
    deleteAllCustomerService: async () => {
        try {
            let result = await Customer.deleteMany({});
            return result;
        } catch (error) {
            console.log(">>>>errosr", error);
            return null;
        }
    },
};
