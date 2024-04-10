const postsListContainer = document.querySelector(".posts-list-container");

// Fetch using XHR (XML HTTP REQUEST)

/* function fetchUsingXHR() {
  //   1- create XMLHttpRequest instance
  const xhr = new XMLHttpRequest();
  //   2- call the open method - open file and specify request method
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  //  3 - set the response type
  xhr.responseType = "json";
  // 4-  send the request
  xhr.send();
  //5 - Handle the response which we receive
  xhr.onload = () => {
    //check the status
    if (xhr.status === 200) {
      console.log(xhr);
      displayResult(xhr.response);
    } else {
      console.log("Something went wrong..");
    }
  };
} */

// fetch data using fetch method

/* function fetchDataUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResult(result))
    .catch((e) => console.log(e));
}




 */

// fetch data using async await method

/* async function fetchDataUsingAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const data = await response.json();
  displayResult(data);
} */

// fetch data using XMLHttpRequest and async await method

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });

  return promise;
}

async function fetchUsingXHRAndAsyncAwait() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayResult(response);
}

// display data

function displayResult(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (post) => `
    <div class="post-container">
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    </div> 
  `
    )
    .join(" ");
}

// call this function
// fetchUsingXHR();
// fetchDataUsingFetchMethod();
// fetchDataUsingAsyncAwait();
fetchUsingXHRAndAsyncAwait();
