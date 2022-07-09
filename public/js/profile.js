const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({name, description}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const editButtonHandler = async (event) => {
  //console.log("working")
  const description = event.target.parentElement.parentElement.nextElementSibling.children[0].value.trim()
  //console.log(description)
  if (event.target.hasAttribute('data-id') && description) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({description}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document //delete
  .querySelector('.post-list')
  .addEventListener('click', editButtonHandler);

// document
//   .querySelector('.post-list')
//   .addEventListener('submit', editButtonHandler);

  //document.querySelector('#testing').parentElement.parentElement.nextElementSibling