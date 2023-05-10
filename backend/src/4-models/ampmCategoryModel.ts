class CategoryModel{
    public categoryId:number
    public categoryName:string

    public constructor (ampm: CategoryModel){
        this.categoryId = ampm.categoryId
        this.categoryName = ampm.categoryName
    }
}

export default CategoryModel