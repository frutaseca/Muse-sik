const searchFormHandler = async (event) => {
  event.preventDefault();
  console.log(event);

  // Collect values from the login form
  const term = document.querySelector("#search").value;

  if (term) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/song/search", {
      method: "POST",
      body: JSON.stringify({ term }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://shazam.p.rapidapi.com/search",
      },
    });
    console.log(response.body);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      // document.location.replace('/api/song/search');
    } else {
      alert(response.statusText);
    }
  }
  //need to call function update DOM
};

document
  .querySelector("#search-form")
  .addEventListener("submit", searchFormHandler);

// const appendSOngs =
