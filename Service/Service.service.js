
const db = require('../database');
const ServiceModule = require('./Service.module');
const CategoryModule = require('../Category/Category.module')



module.exports = {
    getAllService: async (req, res) => {
        try {
            const allService = await ServiceModule.findAll();

            return res.status(200).json({
                success: 1,
                status: 200,
                message: `Data found`,
                data: allService
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


    // get by Service id 
    getServiceById: async (req, res)=>{
        try {
           const Service_id = req.params.Service_id;
            const one_Service = await ServiceModule.findOne(Service_id);

            if(!one_Service){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Service is not found with Service id ${Service_id}`,
                    data:{}
                })
            }

             return res.status(200).json({
                status:200,
                success:1,
                message:`Service  found with Service id ${Service_id}`,
                data:one_Service
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




    // delete by Service id 
    deleteServiceById: async (req, res)=>{
        try {


            const category_id = req.params.category_id;

            const one_category = await CategoryModule.findOne({where:{category_id:category_id}});


            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                
                })}


           const Service_id = req.params.service_id;
            const one_Service = await ServiceModule.findOne({where:{service_id:Service_id}});

            if(!one_Service){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Service is not found with Service id ${Service_id}`,
                    data:{}
                })
            }

          const deleteData = await ServiceModule.destroy({where:{Service_id:Service_id}});

           if(deleteData)  return res.status(200).json({
                status:200,
                success:1,
                message:`Service was deleted with Service id ${Service_id}`,
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



     // update by Service id 
     updateServiceById: async (req, res)=>{
        try {

            const category_id = req.params.category_id;

            const one_category = await CategoryModule.findOne({where:{category_id:category_id}});


            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                
                })}

           const Service_id = req.params.service_id;
           const updateData = req.body;
           const one_Service = await ServiceModule.findOne({where:{service_id:Service_id}});

            if(!one_Service){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Service is not found with Service id ${Service_id}`,
                    data:{}
                })
            }

          const updatedData = await ServiceModule.update(
            {
                Service_name : (updateData.service_name) ? updateData.service_name : one_Service.service_name ,
                service_type:(updateData.service_type)?updateData.service_type:one_Service.service_type
            }
            ,            
            {where:{service_id:Service_id}});

           if(updatedData[0]==1)  return res.status(200).json({
                status:200,
                success:1,
                message:`Service was updated with Service id ${Service_id}`,
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



     // create a Service
     createNewService: async (req, res)=>{
        try {

            const category_id = req.params.category_id;

            const one_category = await CategoryModule.findOne({where:{category_id:category_id}});


            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                

                })}


           const rawData = req.body;
           rawData['category_id'] = category_id;
            const createdData = await ServiceModule.create(rawData);

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



    // get all list of service with category id
    getAllListOfService: async (req, res)=>{
        try {
            const category_id = req.params.category_id;

            const one_category = await CategoryModule.findOne({where:{category_id:category_id}});


            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                

                })}



          

            
                const allServiceByCategory = await ServiceModule.findAll({where:{category_id:category_id}});

                const data ={
                    category:one_category,
                    services:allServiceByCategory
                }
                


            return res.status(200).json({
                status:200,
                success:1,
                message:`Data found`,
                data:data
            })
            
        } catch (error) {
            return res.status(500).json({
                status:500,
                success:0,
                message:`Internal Server error`,
                error
            })
        }
    }





}

