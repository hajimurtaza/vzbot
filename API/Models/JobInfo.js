var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var JobInfo = new Schema({
job:{
 type:String,
 required:true
},
type:{
 type:String,
 required:true
},
zipcode:{
 type:String,
 required: true
}
});
module.exports = mongoose.model('JobInfo', JobInfo);