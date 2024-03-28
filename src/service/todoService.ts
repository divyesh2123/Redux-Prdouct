import Api from './Api';
import { TodoModel } from '../models/redux-models';
export default{
    async getAllTodos(){
        var response=await Api().get('products');
        return response.data;
    },
    async getParticularTodo(productid:number){
        var response=await Api().get('products/'+ productid);
        return response.data;
    }
}