const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  const playlist = async () => {
    const response = await fetch('/api/playlist', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/api/playlist');
    } else {
      alert(response.statusText);
    }
  };

  
  document.querySelector('#logout').addEventListener('click', logout);

  // document.querySelector('#btn-playlist').addEventListener('click', playlist);