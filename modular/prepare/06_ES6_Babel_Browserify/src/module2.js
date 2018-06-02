//统一暴露
function foo1 () {
  console.log('module2  foo1()')
}

function foo2 () {
  console.log('module2  foo2()')
}

export {foo1, foo2}