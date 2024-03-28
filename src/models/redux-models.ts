export interface TodoModel{
    "id": number,
    "title": string,
    "price": number,
    "description": string
}
export interface TodoArrayModel{
    all_todos:TodoModel[],
    particular_todo:TodoModel
}