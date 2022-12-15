const newFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#playlist-name').value.trim();
  if (name) {
    const response = await fetch(`/api/playlist`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/playlist');
    } else {
      alert('Failed to create playlist');
    }
  }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/playlist/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/playlist');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  // const abc = async (event) => {
  //   const responce = await fetch(`/api/playlist`, {
  //     method: 'GET',
  //   });

  //   if (responce.ok) {
  //     document.location.replace('/api/playlist')
  //   }
  // };

  document
  .querySelector('.new-playlist-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.playlist')
  .addEventListener('click', delButtonHandler);

  // document
  // .querySelector('.btn-playlist')
  // .addEventListener('click', delButtonHandler);