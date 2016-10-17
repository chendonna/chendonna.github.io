var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var productSchema = new mongoose.Schema({
        story: String,
        options: {
                route1: String,
                route2: String,
                route3: String,
                route4: String,
        }
});
module.exports = restful.model('Products', productSchema);