/********************Task1:Iterating with Async/Await***************** */

const iterateWithAsyncAwait = async (array) => {
    for (const el of array) {
        console.log(el);
        new Promise((resolve) => setTimeout(() => resolve, 1000))
        console.log(Promise)
    }

};
//iterateWithAsyncAwait(['Apple', 'Banana', 'Cherry',])
/**********************Task2:Awaiting a Call:******************** */
async function getResponse() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
    //const response = await fetch('data/users.json/1');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
}

// getResponse();
/********************************Task 3:Handling Errors with Async/Await:************************ */
async function getResponse() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/4')
    // const response = await fetch('data/users.json/1');
    try {
        if (!response) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {

        console.error('There was a problem with the fetch operation:', error.message);

    }
}
//getResponse();
/*******************************Task3:Chaining Async/Await******************** */
/*const buy = {
    cart: [],
    apple: async function () {
        setTimeout(() => {
            for (const el of array) {
                this.cart.push(array);
                console.log(this.cart);
            }
    }, 1000);
    return this;
}
};*/
/*const buy = {
    cart: [],
    addItem: async function(item) {
      setTimeout(() => {
        this.cart.push(item);
        console.log(this.cart);
      }, 1000);
      return this;
    }
  };

function chain(object, ...asyncMethods) {
    const methods = [...asyncMethods];

    methods.reduce((acc, curr) => {
        // if object is not a promise (first iteration), call the method 
        if (!acc.then) {
            const promise = curr.call(acc);
            return promise;
        } else {
            // if object is a promise, resolve it, then call the method
            return acc.then((d) => curr.call(d));
        }
    }, object);
}*/
/*array = ['Apple', 'Banana', 'Cherry'];
console.log(chain(buy, buy.apple, buy.apple, buy.apple));*/
// ['apple']
// ['apple', 'apple']
// ['apple', 'apple', 'apple']*/
/*const buy = {
    cart: [],
    addItem: async function(item) {
      setTimeout(() => {
        this.cart.push(item);
        console.log(this.cart);
      }, 1000);
      return this;
    }
  };
  
  function chain(object, ...asyncMethods) {
    const methods = [...asyncMethods];
  
    return methods.reduce((acc, curr) => {
      if (!acc.then) {
        return executeMethod(object, curr);
      } else {
        return acc.then(obj => executeMethod(obj, curr));
      }
    }, object);
  }
  
  function executeMethod(obj, method) {
    if (typeof method === 'object') {
      const [[key, value]] = Object.entries(method);
      return obj[key].call(obj, value);
    } else {
      return method.call(obj);
    }
  }
  
  chain(
    buy, 
    { addItem: 'apple' }, 
    { addItem: 'orange' }, 
    buy.addItem.bind(buy, 'banana')
  );
  
  // Expected output:
  // ['apple']
  // ['apple', 'orange']
  // ['apple', 'orange', 'banana']
 */
async function asfunction1() {
    console.log('Async function 1 completed');
    await new Promise((resolve) => setTimeout(() => resolve, 1000));

}
async function asfunction2() {
    console.log('Async function 2 completed');
    await new Promise((resolve) => setTimeout(() => resolve, 1000));

}
async function asfunction3() {
    console.log('Async function 3 completed');
    await new Promise((resolve) => setTimeout(() => resolve, 1000));

}

function chainedAsyncFunctions() {
    console.log("chained async functions started")
    asfunction1()
    asfunction2()
    asfunction3()
    console.log('All async functions completed')

}
//chainedAsyncFunctions()
/*******************Taske4:Awaiting Concurrent Requests****************************** */
async  function concurrentRequests()  {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/4',
        'https://jsonplaceholder.typicode.com/posts/2',
    ];

    const data = [];
  for (url of urls) {
    await fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => data.push(jsonResponse));
  }

  console.log(data);
};
concurrentRequests() 
/*******************Task 05:Awaiting Parallel Calls ********************************* */

async function parallelCalls() {
    urls = [
        'https://jsonplaceholder.typicode.com/posts/4',
        'https://jsonplaceholder.typicode.com/posts/2',
    ];

    const promises = urls.map((url) =>
        fetch(url).then((response) => response.json())
    );

    const data = await Promise.all(promises);

    console.log(data);
};
//parallelCalls()