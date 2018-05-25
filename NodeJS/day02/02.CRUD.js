
db.students.find({})

/*
	CRUD
	- create
		db.collection.insert(文档对象)   //向当前数据库指定集合中插入一条/多条文档
		db.collection.insertOne(文档对象)   
		db.collection.insertMany(文档对象) 
*/
db.students.insert([{name: '吴俊杰', age: 20}, {name: '小吴杰', age: 19}])
db.students.insertOne({name: '高阳', age: 22})
db.students.insertMany([{name: '李雪纯', age: 18}, {name: '常顺顺', age: 30}])

/*
	- Read：
		db.collection.find(查询条件)  向当前数据库中指定集合根据查询条件查询所有满足条件的文档
		db.collection.findOne(查询条件)  向当前数据库中指定集合根据查询条件查询满足条件的第一个文档
		db.collection.findMany(查询条件)
		操作符：
			1.操作符： >, >=, <, <=, !=  “$gt", "$gte", "$lt", "$lte", "$ne"与前面一一对应
			2.操作符："$or", "$in"，"$nin" 
			3.正则表达式
			4."$where" 
*/
db.students.find({age: 18})
db.students.findOne({age: 18})

db.students.find({age: {$gte: 18}})

db.students.find({name: {$in: ['吴杰', '小吴杰']}})
db.students.find({$or: [{name: '吴杰'}, {name: '小吴杰'}]})

db.students.find({name: /^吴/})

db.students.find({
  $where: function () {
    return (this.age >= 18 
    && 
    this.name === '吴杰')
    }
  }
)

/*
	update 
		db.collection.update(查询条件，文档对象， 配置选项)  默认更新查询到的第一个文档
		db.collection.updateOne(查询条件，文档对象， 配置选项)
		db.collection.updateMany(查询条件，文档对象， 配置选项)
*/

db.students.update({age: 19}, {$set: {age: 20}}, {multi: true})

/*
	delete:
		- db.collection.remove(查询条件)

*/

db.students.remove({age: {$gt: 25}})
