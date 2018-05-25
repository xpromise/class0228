//引入mongoose模块
var mongoose = require('mongoose');
//连接本地数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test');
//绑定监听事件
mongoose.connection.once('open', function () {
  console.log('数据库连接成功了~~~~~~');
})

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

//创建一个集合
/*
  mongoose.model(集合名, 约束对象);
  集合名： 首字符大写， 是复数形式
 */
var Students = mongoose.model('Students', stuSchema);
/*
  CRUD
    - create   Model.create(文档对象, 回调函数)
    - read     Model.find(查询条件, 回调函数)  返回值是一个数组
    - update   Model.update(查询条件，文档对象，配置对象，回调函数)
    - delete   Model.remove(查询条件， 回调函数)
 */

/*Students.remove({phone: 15555555555}, function (err) {
  if (!err) {
    console.log('数据删除成功');
  }
})*/

/*Students.update({}, {$inc: {age: 1}}, {multi: true}, function (err) {
  if (!err) {
    console.log('数据更新了~~~');
  }
})*/

/*Students.find({age: 18}, function (err, data) {
  if (!err) {
    console.log(data);
  }
})*/

/*
Students.create({
  name: '吴俊杰',
  age: 19,
  hobby: ['吃', '睡'],
  info: '吃吃吃睡睡睡',
  phone: 15555555555,
  address: '流沙河'
}, function (err) {
  if (!err) {
    console.log('数据插入成功~~~~~·');
  } else {
    console.log(err);
  }
})*/
