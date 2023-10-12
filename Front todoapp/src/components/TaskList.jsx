import React, {useState} from "react";
import Header from "./Header";
import Task from "./Task";
import useCustom from "../hooks/useCutom";
import EditTask from "./EditTask";

import { Container, Flex, ListItem, Table, Tbody,
   TableContainer, UnorderedList, VStack, Tr, Th, Td, Text, Button } from "@chakra-ui/react";

const TaskList = () => {
   
  const { tasks, handleDeleteTask, handleCompleteTask} = useCustom();
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };
  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  return (
    <Container bg="purple.100" mt="10" borderRadius="15px">
      <Header />
      <Task  />
      {editingTaskId && (
          <div className="col-12 col-lg-4">
            <EditTask taskId={editingTaskId} onCancelEdit={handleCancelEdit} />
          </div>
        )}
      <VStack  alignItems="left">      
        {tasks.map((task) => (
          <UnorderedList key={task._id}>
            <ListItem            
              listStyleType="none" 
              border=" 1px solid purple" 
              borderRadius="10px"
              p="10px"
              maxH="400px"
            >
              <TableContainer>
                <Table>
                  <Tbody >
                    <Tr >
                      <Th border="0" p="2px" >                                                         
                          <Text textDecoration={task.completed ? 'line-through' : 'none'}
                          color="black"
                          fontSize="15px"
                          >
                            {task.title}
                          </Text>                       
                      </Th>
                    </Tr>
                    <Tr>
                      <Td border="0" p="2px">                      
                        <Text textDecoration={task.completed ? 'line-through' : 'none'}
                            color="black"
                            fontSize="15px"
                        >
                            {task.description}
                        </Text>                 
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>               
              <Flex>                
                  <Button 
                    color="#088A08" 
                    variant='outline' 
                    border="none"
                    onClick={() => handleCompleteTask(task._id)}
                  >
                    <i className="fa-regular fa-circle-check"></i>
                  </Button>
                  <Button 
                    color="#FF0000" 
                    variant='outline' 
                    border="none"
                    onClick={() => handleEditClick(task._id)}
                    isDisabled={task.completed}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Button>
                  <Button 
                    color="#0B2161" 
                    variant='outline' 
                    border="none" 
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>                      
              </Flex>                 
            </ListItem>
          </UnorderedList>        
        ))}                    
      </VStack>
    </Container>
  );
};

export default TaskList;


/**
 * 
        <div className="col-12 col-lg-8">
          <CardGroup className="justify-content-center">
            {filteredTasks.map((task) => (
              <div className="col-12 col-md-4" key={task._id}>
                <Card className={`mx-3 my-3 ${task.complete === 'completada' ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                  <Card.Body>
                    <Card.Title className="text-center">{task.titulo}</Card.Title>
                    <Card.Text>Descripción: {task.descripcion}</Card.Text>
                    <Card.Text>Fecha de Creación: {formatearFecha(task.fecha)}</Card.Text>
                    <Card.Text>Estado: {task.complete === 'completada' ? 'completada' : 'pendiente'}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center bg-light">
                    <button className="btn btn-primary mx-2" onClick={() => handleEditClick(task._id)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => handleDeleteTask(task._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="btn btn-success" onClick={() => handleChangeState(task._id)}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </CardGroup>
        </div>
 */
