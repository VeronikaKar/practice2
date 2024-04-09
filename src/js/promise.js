// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });

// const isSuccess = true;

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     if (isSuccess) {
// //       resolve("Success! Value passed to resolve function");
// //     } else {
// //       reject("Error! Error passed to reject function");
// //     }
// //   }, 2000);
// // });

// // console.log(promise);
// // promise.then(onResolve, onReject)
// // const isSuccess = true;

// // // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );
// promise
// 	.then(value => {
// 		// Promise fulfilled
// 	})
// 	.catch(error => {
// 	  // Promise rejected
// 	});
// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch(error => {
//     console.log(error); // "Error! Error passed to reject function"
//   });
// promise
// 	.then(value => {
// 	  // Promise fulfilled
// 	})
// 	.catch(error => {
// 	  // Promise rejected
// 	})
// 	.finally(() => {
// 	  // Promise fulfilled or rejected
// 	});
// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
// //   .finally(() => {
// //     console.log("finally");
// //   });
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
// // const fetchUserFromServer = username => {
// //   return new Promise((resolve, reject) => {
// // 		// ...
// //   });
// // };
//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// fetchUserFromServer(
// 	"Mango",
// 	user => console.log(user),
// 	error => console.error(error)
// );
// const userPromise = fetchUserFromServer("Mango"); // результатом виклику fetchUserFromServer("Mango") буде проміс

// // проміс обробляємо у методах then() i catch()
// userPromise
// 	.then(user => console.log(user))
//     .catch(error => console.error(error));
//   const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
// 		// ...
//   });
// };

// fetchUserFromServer("Mango")  // результатом виклику fetchUserFromServer("Mango") буде проміс
// 	.then(user => console.log(user))  // проміс обробляємо в методі then()
//   .catch(error => console.error(error));  // проміс обробляємо в методі catch()
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error");  // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// //   Before
// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
// 		onSuccess(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting(
//   "Mango",
//   greeting => console.log(greeting),
//   error => console.error(error)
// );
// // After
// const makeGreeting = guestName => {
//   if (!guestName) {
//    return Promise.reject("Guest name must not be empty");
//   } else {
// 		return Promise.resolve(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting("Mango")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));


// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
// 			if(shouldResolve) {
// 				resolve(value)
// 			} else {
// 				reject(value)
// 			}
// 		}, delay);
//   });
// };
// Before
// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
// 	   setTimeout(() => {
// 				if(shouldResolve) {
// 					resolve(value)
// 				} else {
// 					reject(value)
// 				}
// 			}, delay);
//   });
// };

// makePromise({ value: "A", delay: 1000 })
// 	.then(value => console.log(value)) // "A"
// 	.catch(error => console.log(error));

// makePromise({ value: "B", delay: 3000 })
// 	.then(value => console.log(value)) // "B"
// 	.catch(error => console.log(error));

// makePromise({ value: "C", delay: 2000, shouldResolve: false })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error)); // "C"


// // After
//     new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled A');
//   }, 1000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled B');
//   }, 3000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Rejected C');
//   }, 2000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error)); // "Rejected C"




// function greet() {
//     return 'Hello world';
// }

// function greet1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello world");
//         }, 2000);
//     });
// }
// console.log(greet());
// greet1()
//     .then((response) => {
//         console.log(response);
// console.log('then');})
//     .catch((error) => {
//     console.log(error);
//     console.log("catch");
//     });
// const getData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 1;
//       //   console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getNewData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 2;
//       //   console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getAnotherData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 3;
//       //   console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getLastData = () =>
//   new Promise((res) => {
//     setTimeout(() => {
//       const data = 4;
//       //   console.log(data);
//       res(data);
//     }, 1000);
//   });
// const newArray = [];
// getData()
//   .then(response => {
// //     newArray.push(response)
// //     return getNewData()
// //   })
  
// //   .then(response => {
// //     newArray.push(response)
// //     return getAnotherData()
// //   })
 
// //   .then(response => {
// //     newArray.push(response)
// //     return getLastData()
// //   })
// //   .then(response => {
// //     newArray.push(response)
// //     // console.log(newArray);
// //   })


// // Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(response => console.log(response))
  

// function countWithDelay(delay, times, interval) {
//     let count = 0;
//     function logCount() {
//         count += 1;
//         if (count === times) {
//             return;
//         }
//         setTimeout{ logCount, interval };
//         console.log(count);
//     }
//     createPromise(delay, logCount);
// }
// function createPromise(delay, callback) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), delay)
//     }). then(() => callback())
//     }
// // countWithDelay(1000, 5, 2000)

// const value = prompt("Enter number: ");
// function checkValue(value) {
//     return new Promise((resolve, reject) => {
//         if (!value || isNaN(value)) {
//             return reject('error')
//         }
//     if (value % 2 === 0) setTimeout(() => resolve("even"), 1000);
//     setTimeout(() => resolve("odd"), 2000);
// });
// }

// checkValue(value).then(response => {
//     console.log(response);
//     console.log('then');
// }).catch((error) => {
//     console.log(error);
//     console.log("catch");
// });