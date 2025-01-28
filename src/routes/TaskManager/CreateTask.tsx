import { Input, TextArea } from '@tiger-analytics/react/formFields';
import { Drawer, DrawerSlide } from '@tiger-analytics/react/overlay';
import React, { FormEvent, useState } from 'react';

import { Button } from '@tiger-analytics/react/button';

import { ErrorContainer } from './styled';
import { useTaskManagerService } from './useTaskManagerService';
import { Task } from '../../models';

export interface CreateTaskProps {
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const CreateTask = ({ setTaskList }: CreateTaskProps) => {
  const { postTask, getTasks } = useTaskManagerService();

  const [showCreateTaskDrawer, setShowCreateTaskDrawer] = useState(false);
  const [errorMsg, setErrorMessage] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

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
      <Button id="create-task-submit" type="submit" onClick={() => setShowCreateTaskDrawer(true)}>
        Create task
      </Button>
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
    </>
  );
};
