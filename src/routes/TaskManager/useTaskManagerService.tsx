import { useFetchApi } from '@tiger-analytics/utils/fetchApi';
import React from 'react';

import { getUrl } from '../../utils';
import { BaseTask, Task } from '../../models';

export const useTaskManagerService = () => {
  const { defaultFetch } = useFetchApi();

  const getTasks = async () => {
    let taskList: Task[] = [];
    const response = await defaultFetch({
      url: getUrl('/tasks'),
      fetchRequestInit: {
        credentials: 'include',
      },
    });
    if (response) {
      taskList = await response.json();
    }
    return taskList;
  };

  const postTask = async (task: BaseTask) => {
    const response = await defaultFetch({
      url: getUrl('/tasks'),
      fetchRequestInit: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
        credentials: 'include',
      },
    });
    if (response) {
      return true;
    }
    return false;
  };

  const deleteTask = async (taskId: string) => {
    const response = await defaultFetch({
      url: getUrl(`/tasks/${taskId}`),
      fetchRequestInit: {
        method: 'DELETE',
        credentials: 'include',
      },
    });
    if (response) {
      return true;
    }
    return false;
  };
  return { getTasks, postTask, deleteTask };
};
