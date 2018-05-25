/*
  用来创建模型对象
 */
//引入mongoose模块
var mongoose = require('mongoose');
//获取Schema对象
var Schema = mongoose.Schema;
//用来创建约束对象
var stuSchema = new Schema({
  name: String,
  age: Number,
  sex: {
    type: String,
    default: '男'  //默认值
  },
  address: String,
  hobby: [String],   //类型是数组，并且数组中的值是String类型
  phone: {
    type: Number,
    unique: true,  //唯一的
    required: true  //必须的
  },
  info: Schema.Types.Mixed,  //混合数据类型
  meta: {
    createTime: {
      type: Date,   //时间类型
      default: Date.now()
    },
    updateTime: {
      type: Date,
      default: Date.now()
    }
  }
})

stuSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createTime = this.meta.updateTime = Date.now();
  } else {
    this.meta.updateTime = Date.now();
  }
  next();
})

var Students = mongoose.model('Students', stuSchema);

//暴露出去模型对象
module.exports = Students;