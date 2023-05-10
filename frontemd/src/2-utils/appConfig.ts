class AppConfig{
    public getAllStore = "http://localhost:3001/api/ampm-get-all-store/"
    public getAllCategory = "http://localhost:3001/api/ampm-get-all-category"
    public getAllStoreByCategoryId = "http://localhost:3001/api/get-all-store-by-category-id/"
    public addProduct = "http://localhost:3001/api/add-product/"
    public deleteProduct = "http://localhost:3001/api/delete-product/"
}

const appConfig = new AppConfig()


export default appConfig