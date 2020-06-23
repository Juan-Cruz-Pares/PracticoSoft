module.exports = {
    listRestaurant: [],

    addRestaurant: function (name, kindOfRestaurant, specials) {
        if(this.getRestaurantXName(name) == -1){
            this.listRestaurant.push({name: name, kindOfRestaurant: kindOfRestaurant, specials:specials}) 
            return 0;
        }
        return -1;        
    },

    getRestaurantXKindOfRestaurant: function (kindOfRestaurant){
        let auxList = this.listRestaurant.filter(obj => { return obj.kindOfRestaurant == kindOfRestaurant })
        return auxList.length > 0 ? auxList[0] : -1
    },

    getRestaurantXName: function (name) {
        let auxList = this.listRestaurant.filter(obj => { return obj.name == name })
        return auxList.length > 0 ? auxList[0] : -1
    },
}