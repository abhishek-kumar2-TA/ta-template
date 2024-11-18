export interface BaseTask {
  name: string;
  description: string;
}

export interface Task extends BaseTask {
  id: string;
  created: string;
}
