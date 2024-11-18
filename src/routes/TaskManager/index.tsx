import React, { FormEvent, useEffect, useState } from 'react';

import { ButtonSize, ButtonVariant } from '@tiger-analytics/ui';

import { Card, CardListContainer, CreateTaskForm } from './styled';
import { TextArea } from '../../components/designSystem/form';
import { useTaskManagerService } from './useTaskManagerService';
import { Task } from '../../models';

export const TaskManager = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { getTasks, postTask, deleteTask } = useTaskManagerService();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const taskNameChangeHandler = (value: string) => {
    setTaskName(value);
  };

  useEffect(() => {
    getTasks().then((data) => {
      setTaskList(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTaskHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isTaskCreated = await postTask({ name: taskName, description: taskDescription });
    if (isTaskCreated) {
      const newTaskList = await getTasks();
      setTaskList(newTaskList);
    }
  };

  const deleteTaskHandler = async (taskId: string) => {
    const isTaskDeleted = await deleteTask(taskId);
    if (isTaskDeleted) {
      const newTaskList = await getTasks();
      setTaskList(newTaskList);
    }
  };

  return (
    <>
      <ta-grid-container>
        <ta-grid-column>
          <h1 className="pageHeader">Task Manager</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </ta-grid-column>
      </ta-grid-container>
      <ta-grid-container>
        <ta-grid-column md={8} lg={8}>
          <h2>All tasks</h2>
          <CardListContainer>
            {taskList.map((task, index) => (
              <Card key={index}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <ta-button
                  variant={ButtonVariant.Destruct}
                  size={ButtonSize.Small}
                  onClickHandler={() => deleteTaskHandler(task.id)}>
                  Delete
                </ta-button>
              </Card>
            ))}
          </CardListContainer>
        </ta-grid-column>
        <ta-grid-column md={4} lg={4}>
          <CreateTaskForm onSubmit={createTaskHandler}>
            <h2>Create task</h2>
            <ta-text-input label="Name" value={taskName} onChangeHandler={taskNameChangeHandler} />
            <TextArea
              id="taskDescription"
              label="Description"
              value={taskDescription}
              onChangeHandler={setTaskDescription}
              required
            />
            <ta-button type="submit">Submit</ta-button>
          </CreateTaskForm>
        </ta-grid-column>
      </ta-grid-container>
    </>
  );
};

export default TaskManager;
