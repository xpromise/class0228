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

//创建文档
var stu = new Students({
  name: '高阳',
  age: 18,
  address: '花果山',
  hobby: ['玩游戏', '吃香蕉'],
  phone: 18888888888,
  info: '本人男爱好女'
});

stu.save(function (err) {
  if (!err) {
    console.log('数据插入成功~~~');
  }
})
