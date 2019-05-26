class UI {
    constructor() {
        //app initialization

        this.init();

    }
    // methos when the app starts
    init() {
        // display categories in <select>
        this.printCategories();
    }
    printCategories(){
        const categoriesList = eventbrite.getCategoriesAPI();
        then(categories => {
            console.log(categories);
        });
    }

}