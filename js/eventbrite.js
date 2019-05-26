class EventBrite {
    /// constructor when instantiate
    constructor() {
        this.auth_token = 'QAIGGDLCXMBMABRYNGJR';
    }

    // get categories API
    async getCategoriesAPI() {
        //query the API
        const categoriesResponse = await fetch
        ('https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}');

        // hold for the response and then return as json
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
}