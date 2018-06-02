//默认暴露，一个模块只能默认暴露一个内容

var obj = {
  foo1 () {
    console.log('module3 foo1()')
  },
  foo2 () {
    console.log('module3 foo2()')
  }
}

export default obj