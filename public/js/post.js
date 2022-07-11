const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-box').value.trim();
    const post_id = event.target.getAttribute('data-id');
    console.log(content,post_id, "******")
    if (content && post_id) {

      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(content, post_id, "********")
      console.log(response)
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };




function renderComment() {
    console.log("working")
    var x = document.getElementById("comment-writing");
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document
.querySelector('#comment-render')
.addEventListener('click', renderComment);

document
  .querySelector('#testing')
  .addEventListener('click', newFormHandler);