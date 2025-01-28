import React, { useEffect, useState } from 'react';

import { ButtonFillStyle, ButtonSize, ButtonVariant } from '@tiger-analytics/ui';

import { GridColumn, GridContainer } from '@tiger-analytics/react/grid';
import { Modal } from '@tiger-analytics/react/overlay';

import { Button } from '@tiger-analytics/react/button';

import { Card, CardListContainer, CardModalActionItems } from './styled';
import { useTaskManagerService } from './useTaskManagerService';
import { Task } from '../../models';
import { CreateTask } from './CreateTask';

export const TaskManager = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { getTasks, deleteTask } = useTaskManagerService();

  const [taskIdToDelete, setTaskIdToDelete] = useState('');

  useEffect(() => {
    getTasks().then((data) => {
      setTaskList(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTaskHandler = async () => {
    const isTaskDeleted = await deleteTask(taskIdToDelete);
    if (isTaskDeleted) {
      const newTaskList = await getTasks();
      setTaskList(newTaskList);
    }
    setTaskIdToDelete('');
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
          <CreateTask setTaskList={setTaskList} />
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
