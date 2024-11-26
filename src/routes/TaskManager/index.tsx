import React, { FormEvent, useEffect, useState } from 'react';

import { ButtonSize, ButtonVariant } from '@tiger-analytics/ui';

import { GridColumn, GridContainer } from '@tiger-analytics/react/grid';

import { Button } from '@tiger-analytics/react/button';

import { Input } from '@tiger-analytics/react/formFields';

import { Card, CardListContainer, CreateTaskForm } from './styled';
import { TextArea } from '../../components/designSystem/form';
import { useTaskManagerService } from './useTaskManagerService';
import { Task } from '../../models';

export const TaskManager = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { getTasks, postTask, deleteTask } = useTaskManagerService();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    getTasks().then((data) => {
      setTaskList(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const taskNameChangeHandler = (event: Event) => {
    const inputTarget = event.target as HTMLInputElement;
    setTaskName(inputTarget.value);
  };

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
      <GridContainer>
        <GridColumn>
          <h1 className="pageHeader">Task Manager</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </GridColumn>
      </GridContainer>
      <GridContainer>
        <GridColumn md={8} lg={8}>
          <h2>All tasks</h2>
          <CardListContainer>
            {taskList.map((task, index) => (
              <Card key={index}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <Button
                  id={`${task.id}-delete`}
                  style={{ width: '100%' }}
                  variant={ButtonVariant.Destruct}
                  size={ButtonSize.Small}
                  onClick={() => deleteTaskHandler(task.id)}>
                  Delete
                </Button>
              </Card>
            ))}
          </CardListContainer>
        </GridColumn>
        <GridColumn md={4} lg={4}>
          <CreateTaskForm onSubmit={createTaskHandler}>
            <h2>Create task</h2>
            <Input
              id="create-task-name"
              label="Name"
              value={taskName}
              onInput={taskNameChangeHandler}
            />
            <TextArea
              id="create-task-description"
              label="Description"
              value={taskDescription}
              onChangeHandler={setTaskDescription}
              required
            />
            <Button id="create-task-submit" type="submit">
              Submit
            </Button>
          </CreateTaskForm>
        </GridColumn>
      </GridContainer>
    </>
  );
};

export default TaskManager;
