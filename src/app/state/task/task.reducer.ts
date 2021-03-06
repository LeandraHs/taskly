import { TaskActionTypes, TasksActions } from './task.actions';
import { Task } from 'src/app/task/models/task';
import { ApplicationState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';
import { MembersQuery } from '../member/member.reducer';

export interface TasksState {
  entities: { [id: number]: Task };
  selectedTaskId: number;
  loaded: boolean;
  events: Array<CalendarEvent>;
  eventsLoaded: boolean;
}

const INITIAL_TASKS_STATE = {
  entities: {},
  selectedTaskId: -1,
  loaded: false,
  events: [],
  eventsLoaded: false
};

export function tasksReducer(state: TasksState = INITIAL_TASKS_STATE, action: TasksActions): TasksState {
  switch (action.type) {
    case TaskActionTypes.LOAD_TASKS_SUCCESS:
      return state.loaded ? state : {
        ...state,
        entities: action.payload.reduce(
          (taskEntities, task) => {
            return { ...taskEntities, [task.id]: task };
          },
          { ...state.entities }
        ),
        loaded: true
      };
    case TaskActionTypes.LOAD_TASK_BY_ID_SUCCESS:
    case TaskActionTypes.ADD_TASK_SUCCESS:
      const inStore = state.entities[action.payload.id];

      return {
        ...state,
        entities: !inStore
          ? { ...state.entities, [action.payload.id]: action.payload }
          : state.entities
      };
    case TaskActionTypes.SELECT_TASK:
      return { ...state, selectedTaskId: action.payload };
    case TaskActionTypes.REMOVE_TASK_SUCCESS:
      const { [action.payload]: removedTask, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    case TaskActionTypes.UPDATE_TASK_SUCCESS:
      return {...state, entities: {...state.entities, [action.payload.id]: action.payload}};
    case TaskActionTypes.CALCULATE_EVENTS_SUCCESS:
      return {...state, events: action.payload, eventsLoaded: true};
    default:
      return state;
  }
}

export namespace TasksQuery {
  export const getTaskEntities = (state: ApplicationState) => state.tasks.entities;
  export const getSelectedTaskId = (state: ApplicationState) => state.tasks.selectedTaskId;
  export const getTasksLoaded = (state: ApplicationState) => state.tasks.loaded;

  export const getTasks = createSelector(getTaskEntities, entities => {
    return Object.keys(entities).map(id => entities[id]);
  });

  export const getSelectedTask = createSelector(getTaskEntities, getSelectedTaskId, (tasks, id) => {
    return tasks[id];
  });

  export const getEventsLoaded = (state: ApplicationState) => state.tasks.eventsLoaded;
  export const getEvents = (state: ApplicationState) => state.tasks.events;
  export const getEventsforSelectedMember = createSelector(getEvents, MembersQuery.getSelectedMember, (events, member) => {
    return events.filter(event => event.color && event.color.secondary === member.color);
  });
}
