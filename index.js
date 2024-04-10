const postsListContainer = document.querySelector(".posts-list-container");

// Fetch using XHR (XML HTTP REQUEST)

function fetchUsingXHR() {
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
}

function displayResult(posts) {
  postsListContainer.innerHTML = posts.map(
    (post) => `
    <div class="post-container">
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    </div> 
  `
  ).join(" ");
}

// call this function
fetchUsingXHR();
