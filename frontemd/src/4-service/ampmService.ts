import appConfig from "../2-utils/appConfig"
import AmpmCategoryModel from "../3-models/ampmCategoryModel"
import AmpmStoreModel from "../3-models/ampmStoreModel"
import axios from "axios"


class AmpmService{

 public async getaAllAmpmStore():Promise<AmpmStoreModel[]>{
    const response = await axios.get<AmpmStoreModel[]>(appConfig.getAllStore)
    const ampm = response.data     
    return ampm
}

public async getaAllCategory():Promise<AmpmCategoryModel[]>{
    const response = await axios.get<AmpmCategoryModel[]>(appConfig.getAllCategory)
    const category = response.data     
    return category
}

public async getaAllCategoryByCategoryId (categoryId:number):Promise<AmpmStoreModel[]>{
    const response = await axios.get<AmpmStoreModel[]>(appConfig.getAllStoreByCategoryId + categoryId);
    const ampm = response.data;
    return ampm;
    
}



public async addProduct(product: AmpmStoreModel): Promise<void> {
    await axios.post<AmpmStoreModel>(appConfig.deleteProduct, product);
}


public async deleteProduct(ampmId:number):Promise<void>{
    await axios.delete(appConfig.deleteProduct + ampmId);
}
}
const ampmSrvice = new AmpmService()

export default ampmSrvice


