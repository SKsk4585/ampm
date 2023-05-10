class AmpmStoreModel{
    public ampmId:number
    public categoryId:number
    public productName:string
    public timeOfReation:string
    public timeOfExpiration:string
    public price:number

    public constructor(store:AmpmStoreModel){
        this.ampmId = store.ampmId
        this.categoryId = store.categoryId
        this.productName = store.productName
        this.timeOfReation = store.timeOfReation
        this.timeOfExpiration = store.timeOfExpiration
        this.price = store.price
    }
}

export default AmpmStoreModel