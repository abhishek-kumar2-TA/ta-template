import React, { FormEvent, useEffect, useState } from 'react';

import { ButtonFillStyle, ButtonSize, ButtonVariant } from '@tiger-analytics/ui';

import { GridColumn, GridContainer } from '@tiger-analytics/react/grid';
import { Drawer, DrawerSlide, Modal } from '@tiger-analytics/react/overlay';

import { Button } from '@tiger-analytics/react/button';

import { Input, TextArea } from '@tiger-analytics/react/formFields';

import {
  Card,
  CardListContainer,
  CreateTaskForm,
  CardModalActionItems,
  ErrorContainer,
} from './styled';
import { useTaskManagerService } from './useTaskManagerService';
import { Task } from '../../models';

export const TaskManager = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { getTasks, postTask, deleteTask } = useTaskManagerService();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskIdToDelete, setTaskIdToDelete] = useState('');
  const [showCreateTaskDrawer, setShowCreateTaskDrawer] = useState(false);
  const [errorMsg, setErrorMessage] = useState('');

  useEffect(() => {
    getTasks().then((data) => {
      setTaskList(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const taskNameChangeHandler = (event: FormEvent) => {
    const inputTarget = event.target as HTMLInputElement;
    setTaskName(inputTarget.value);
    setErrorMessage('');
  };

  const taskDescriptionChangeHandler = (event: FormEvent) => {
    const inputTarget = event.target as HTMLTextAreaElement;
    setTaskDescription(inputTarget.value);
    setErrorMessage('');
  };

  const createTaskHandler = async () => {
    const isTaskCreated = await postTask({ name: taskName, description: taskDescription });
    if (isTaskCreated) {
      const newTaskList = await getTasks();
      setTaskList(newTaskList);
      setShowCreateTaskDrawer(false);
    }
  };

  const deleteTaskHandler = async () => {
    const isTaskDeleted = await deleteTask(taskIdToDelete);
    if (isTaskDeleted) {
      const newTaskList = await getTasks();
      setTaskList(newTaskList);
    }
    setTaskIdToDelete('');
  };

  const drawerCloseHandler = () => {
    setTaskName('');
    setTaskDescription('');
    setShowCreateTaskDrawer(false);
    setErrorMessage('');
  };

  const createTaskValidator = (): boolean => {
    if (!taskName || !taskDescription) {
      setErrorMessage('Both name and description are required.');
      return false;
    } else {
      return true;
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
        <GridColumn>
          <Button
            id="create-task-submit"
            type="submit"
            onClick={() => setShowCreateTaskDrawer(true)}>
            Create task
          </Button>
          <h2>All tasks</h2>
          <CardListContainer>
            {taskList.map((task, index) => (
              <Card key={index}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <Button
                  id={`${task.id}-delete`}
                  variant={ButtonVariant.Destruct}
                  size={ButtonSize.Small}
                  style={{ width: '100%' }}
                  onClick={() => setTaskIdToDelete(task.id)}>
                  Delete
                </Button>
              </Card>
            ))}
          </CardListContainer>
        </GridColumn>
        <Drawer
          id="create-task-drawer"
          visible={showCreateTaskDrawer}
          onClose={drawerCloseHandler}
          onSubmit={createTaskHandler}>
          <DrawerSlide id="create-task-slide" title="Create task" validate={createTaskValidator}>
            <Input
              id="create-task-name"
              label="Name"
              value={taskName || ''}
              onInput={taskNameChangeHandler}
            />
            <TextArea
              id="create-task-description"
              label="Description"
              value={taskDescription}
              onInput={taskDescriptionChangeHandler}
              required
            />
            <ErrorContainer>{errorMsg}</ErrorContainer>
          </DrawerSlide>
        </Drawer>
        <Modal
          id="delete-task"
          visible={!!taskIdToDelete}
          title="Confirm deletion"
          onClose={() => setTaskIdToDelete('')}>
          <p>Are you sure you want to delete this task?</p>
          <CardModalActionItems>
            <Button
              id="confirm-delete-task"
              variant={ButtonVariant.Destruct}
              onClick={deleteTaskHandler}>
              Delete
            </Button>
            <Button
              id="confirm-delete-cencel"
              fill={ButtonFillStyle.None}
              onClick={() => setTaskIdToDelete('')}>
              Cancel
            </Button>
          </CardModalActionItems>
        </Modal>
      </GridContainer>
    </>
  );
};

export default TaskManager;
