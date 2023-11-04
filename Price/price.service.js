
const db = require('../database');
const PriceModule = require('./price.module');
const ServiceModule = require('../Service/Service.module')



module.exports = {
    getAllPriceByServiceId: async (req, res) => {
        try {
            const service_id = req.params.service_id;
            const allPrice = await PriceModule.findAll({where:{service_id:service_id}});

            return res.status(200).json({
                success: 1,
                status: 200,
                message: `Data found`,
                data: allPrice
            })
        } catch (error) {
            return res.status(500).json({
                success: 0,
                status: 500,
                message: `internal server error`,
                error
            })
        }
    },


    // get by Price id 
    getPriceById: async (req, res)=>{
        try {
           const Price_id = req.params.Price_id;
            const one_Price = await PriceModule.findOne({where:{price_id:Price_id}});

            if(!one_Price){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Price is not found with Price id ${Price_id}`,
                    data:{}
                })
            }

             return res.status(200).json({
                status:200,
                success:1,
                message:`Price  found with Price id ${Price_id}`,
                data:one_Price
            })

        } catch (error) {
            return res.status(500).json({
                status:500,
                success:0,
                message:`Internal Server error`,
                error
            })
        }
    },




    // delete by Price id 
    deletePriceById: async (req, res)=>{
        try {
           const Price_id = req.params.Price_id;
           const one_Price = await PriceModule.findOne({where:{price_id:Price_id}});


            if(!one_Price){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Price is not found with Price id ${Price_id}`,
                    data:{}
                })
            }

          const deleteData = await PriceModule.destroy({where:{Price_id:Price_id}});

           if(deleteData)  return res.status(200).json({
                status:200,
                success:1,
                message:`Price was deleted with Price id ${Price_id}`,
                data:deleteData
            })

            else {
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Something is wrong..`,
                    data:deleteData
                })
            }

        } catch (error) {
            return res.status(500).json({
                status:500,
                success:0,
                message:`Internal Server error`,
                error
            })
        }
    },



     // update by Price id 
     updatePriceById: async (req, res)=>{
        try {
           const Price_id = req.params.Price_id;
           const updateData = req.body;
           const one_Price = await PriceModule.findOne({where:{Price_id:Price_id}});

            if(!one_Price){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Price is not found with Price id ${Price_id}`,
                    data:{}
                })
            }

          const updatedData = await PriceModule.update(
            {
                Price_name : updateData.Price_name
            }
            ,            
            {where:{Price_id:Price_id}});

           if(updatedData[0]==1)  return res.status(200).json({
                status:200,
                success:1,
                message:`Price was updated with Price id ${Price_id}`,
                data:updatedData
            })

            else {
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Something is wrong..`,
                    data:updatedData
                })
            }

        } catch (error) {
            return res.status(500).json({
                status:500,
                success:0,
                message:`Internal Server error`,
                error
            })
        }
    },


     // create a Price
     createNewPrice: async (req, res)=>{
        try {


            const service_id = req.params.service_id;

            const one_Service = await ServiceModule.findOne({where:{service_id:service_id}});

            if(!one_Service){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Service is not found with Service id ${Service_id}`,
                    data:{}
                })
            }

           const rawData = req.body;
           rawData['service_id'] = service_id
            const createdData = await PriceModule.create(rawData);

            if(!createdData){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`SomeThing worng`,
                    data:{}
                })
            }

         
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Created new entry successfully..`,
                    data:createdData
                })
            

        } catch (error) {
            return res.status(500).json({
                status:500,
                success:0,
                message:`Internal Server error`,
                error
            })
        }
    },






}

