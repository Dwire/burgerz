const BASE_URL = 'http://localhost:3001/burgers/'

const burgerAdapter = {
  getBurgers: () => fetch(BASE_URL).then(res => res.json()),
  patchBurger: (burgerId, category) => fetch(BASE_URL + burgerId , {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({category})
      })
      .then(res => res.json())
}

export default burgerAdapter
