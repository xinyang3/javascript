function promise1 () {
  console.log('promise 1')
  return new Promise(function (resove) {
    setTimeout(function () {
      console.log('promise resolve 1')
      resove()
    }, 5000)
  })
}

function promise2 () {
  console.log('promise 2')
  return new Promise(function (resove) {
    console.log('promise resolve 2')
    resove()
  })
}


async function init () {
  var result1 = await promise1();
  var result2 = await promise2()

  console.log('promise over')
  setTimeout(function () {
    console.log(123)
  }, 5000)


}

init()

promise 1
promise resolve 1
promise 2
promise resolve 2
promise over
123
