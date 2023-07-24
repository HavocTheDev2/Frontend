export default class Server {
  fetchData() {
    fetch("https://api.example.com/items")
      .then(handleResponse)
      .then((data) => console.log(data))
      .catch(handleError);
  }

  sendData() {
    fetch("https://api.example.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a: 1, b: "Textual content" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch(handleError);
  }

  updateData() {
    fetch("https://api.example.com/items/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a: 1, b: "Textual content" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch(handleError);
  }

  deleteData() {
    fetch("https://api.example.com/items/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch(handleError);
  }
}

export class Handler {
    handleResponse(response) {
        if (response.status === 200) {
        return Promise.resolve(response);
        } else {
        return Promise.reject(new Error(response.statusText));
        }
    }
    
    handleError(error) {
        console.log("Error:", error);
    }
}
