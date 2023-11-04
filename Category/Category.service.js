
const db = require('../database');
const CategoryModule = require('./Category.module');



module.exports = {
    getAllCategory: async (req, res) => {
        try {
            const allCategory = await CategoryModule.findAll();

            return res.status(200).json({
                success: 1,
                status: 200,
                message: `Data found`,
                data: allCategory
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


    // get by category id 
    getCategoryById: async (req, res)=>{
        try {
           const category_id = req.params.category_id;

           console.log(category_id)
            const one_category = await CategoryModule.findOne({where:{category_id:category_id}});

            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                })
            }

             return res.status(200).json({
                status:200,
                success:1,
                message:`Category  found with category id ${category_id}`,
                data:one_category
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




    // delete by category id 
    deleteCategoryById: async (req, res)=>{
        try {
           const category_id = req.params.category_id;
           const one_category = await CategoryModule.findOne({where:{category_id:category_id}});


            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                })
            }

            const updateServiceQuery = `Update Service set catrgory_id = null where category_id = ${category_id}`;
            await db.query(updateServiceQuery, (error, result)=>{});

          const deleteData = await CategoryModule.destroy({where:{category_id:category_id}});

           if(deleteData)  return res.status(200).json({
                status:200,
                success:1,
                message:`Category was deleted with category id ${category_id}`,
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



    // update by category id 
    updateCategoryById: async (req, res)=>{
        try {
           const category_id = req.params.category_id;
           const updateData = req.body;
           const one_category = await CategoryModule.findOne({where:{category_id:category_id}});

            if(!one_category){
                return res.status(200).json({
                    status:200,
                    success:1,
                    message:`Category is not found with category id ${category_id}`,
                    data:{}
                })
            }

          const updatedData = await CategoryModule.update(
            {
                category_name : updateData.category_name
            }
            ,            
            {where:{category_id:category_id}});

           if(updatedData[0]==1)  return res.status(200).json({
                status:200,
                success:1,
                message:`Category was updated with category id ${category_id}`,
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



     // create a category
     createNewCategory: async (req, res)=>{
        try {
           const rawData = req.body;
       
            const createdData = await CategoryModule.create(rawData);

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

