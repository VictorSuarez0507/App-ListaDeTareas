const tasksModels = require("../models/tasksModels")

const createTask = async (req, res) => { 
  const result = new tasksModels(req.body);
  try {
    
    const taskSave = await result.save(); 
    res.status(200).json({mensaje:"tarea creada" , taskSave});
    } catch (error) {
      res.status(500).send("Ocurrio un error al crear la tarea");
    }
};

const getAllTasks = async (req, res) => {
  try {
    const usuarioId = req.params.id; 
    const result = await tasksModels.find({user: usuarioId  });
    res.json(result);
      
  } catch (error) {
    console.error("Error al obtener las tareas del usuario:");
    res.status(500).json({ Error: "Error al obtener las tareas del usuario" });
  }
  
};

const getTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await tasksModels.findOne({"_id": id});
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ Error: `No existe una tarea con el ID indicado (${id})` });
    }
    return result
  } catch (error) {
    res.status(500).json({ Error: "Error al obtener la tarea indicada" });
  }
};

const updateTaskById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const findTask = await tasksModels.findOne({"_id": id});
    if (findTask) {
      const result = await tasksModels.replaceOne({"_id" : id}, 
        {"title": body.title , "description": body.description , "user": body.user} )
      res.status(200).json({message: "Tarea actualizada correctamente", result});
      return result
    } else {
      res.status(404).json({ Error: `No existe una tarea con el ID indicado (${id})` });
    }
  } catch (error) {
    res.status(500).json({ Error: "Error al actualizar la tarea indicada" });
  }
};

const completeTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const findTask = await tasksModels.findById(id);
    if (findTask) {
      if(findTask.completed === false){
        findTask.completed = true;
        const result = await findTask.save();
        res.status(200).json({message: "Tarea completada correctamente"});
        return result
      } else {
        findTask.completed = false;
        const result = await findTask.save();
        res.status(200).json({message: "Tarea marcada como no completada"});
        return result
      }
    } else {
      res.status(404).json({ Error: `No existe una tarea con el ID indicado (${id})` });
    }
  } catch (error) {
    res.status(500).json({ Error: "Error al completar la tarea indicada" });
  }
};

const deleteTaskById = async (req, res) => {
  const id = req.params.id;
  try {
    const findTask = await tasksModels.findOne({"_id": id});
    if (findTask) {
      const result = await tasksModels.deleteOne({"_id": id})
      res.status(200).json({message: "Tarea eliminada correctamente"});
      return result
    } else {
      res.status(404).json({ Error: `No existe una tarea con el ID indicado (${id})` });
    }
  } catch (error) {
    res.status(500).json({ Error: "Error al eliminar la tarea indicada" });
  }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    completeTaskById,
    deleteTaskById
}