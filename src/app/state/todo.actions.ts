import { Action } from '@ngrx/store';

interface Todo {
    id: number,
    title: String,
    completed: boolean
}


export enum TodoActionTypes {

    GET_TODO = '[GET TODO]',
    GET_TODO_SUCCESS = '[GET TODO] SUCCESS',
    GET_TODO_FAILURE = '[GET TOOD] FAILURE',

    ADD_TODO = '[ADD TODO]',
    ADD_TODO_SUCCESS = '[ADD TODO] SUCCESS',
    ADD_TODO_FAILURE = '[ADD TODO] FAILURE',

    UPDATE_TODO = '[UPDATE TODO]',
    UPDATE_TODO_SUCCESS = '[UPDATE TODO] SUCCESS',
    UPDATE_TODO_FAILURE = '[UPDATE TOOD] FAILURE',

    DELETE_TODO = '[DELETE TODO]',
    DELETE_TODO_SUCCESS = '[DELETE TODO] SUCCESS',
    DELETE_TODO_FAILURE = '[DELETE TOOD] FAILURE',

}

export class GetTodos implements Action {
    readonly type: TodoActionTypes.GET_TODO;
}

export class GetTodoSuccess implements Action {
    readonly type: TodoActionTypes.GET_TODO_SUCCESS
    constructor(
        public payload: {
            todos: Todo[];
        }
    ) { }
}

export class GetTodoFailure implements Action {
    readonly type = TodoActionTypes.GET_TODO_FAILURE
}

export class AddTodo implements Action {
    readonly type: TodoActionTypes.ADD_TODO;
    constructor(
        public playload: {
            toddoTitle: String
        }
    ) { }
}

export class AddTodoSuccess implements Action {
    readonly type = TodoActionTypes.ADD_TODO_SUCCESS
}

export class AddTodoFailure implements Action {
    readonly type = TodoActionTypes.ADD_TODO_FAILURE
}

export class UpdateTodo implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO

    constructor( 
        public payload: {
            todoId: number
        }
    ) {}
}

export class UpdateTodoSuccess implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO_SUCCESS
}

export class UpdateTodoFailure implements Action {
    readonly type = TodoActionTypes.UPDATE_TODO_FAILURE
}

export class DeleteTodo implements Action {
    readonly type = TodoActionTypes.DELETE_TODO;

    constructor(public payload: {
        todoId: number
    }) {}
}

export class DeleteTodoSuccess implements Action {
    readonly type = TodoActionTypes.DELETE_TODO_SUCCESS
}

export class DeleteTodoFailure implements Action {
    readonly type = TodoActionTypes.DELETE_TODO_FAILURE
}

export type TodoAction = 
    | GetTodos
    | GetTodoSuccess
    | GetTodoFailure
    | AddTodo
    | AddTodoSuccess
    | AddTodoFailure
    | UpdateTodo
    | UpdateTodoSuccess
    | UpdateTodoFailure
    | DeleteTodo
    | DeleteTodoSuccess 
    | DeleteTodoFailure