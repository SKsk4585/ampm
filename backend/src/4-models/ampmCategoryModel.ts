class AmpmCategoryModel{
    public categoryId:number
    public categoryName:string

    public constructor (ampm: AmpmCategoryModel){
        this.categoryId = ampm.categoryId
        this.categoryName = ampm.categoryName
    }
}

export default AmpmCategoryModel