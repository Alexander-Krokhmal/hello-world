// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));



   //-----------------------------------

   
  // Change this number to fetch different post
// const postId = 5;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));



   //-----------------------------------

// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome",
//   };
  
//   const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
  
//   fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));





    //-----------------------------------

    // Change value of id property to update different post

// const postToUpdate = {
//     id: 1,
//     body: "CRUD is really awesome",
//   };
  
//   const options = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
  
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));






    //-------------------------------------------------
//     const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));




  const url = 'https://pixabay.com/api/';
const options = {
    params: {
        key:'30138739-91917411df1cd3860f7789c37',
        q: 'cat',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 40,
    }
};

fetch(url, options)
    .then(r => r.json())
    .catch(error => console.log(error));