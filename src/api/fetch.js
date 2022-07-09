export function fetchUser(newUser,method){


 return fetch(`http://localhost:4020/api/users`, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then((response) => {

      if (response.status === 200 && response.ok) {
        return response.json()
      }
      else {
        throw new Error()
      }
    })
    .catch((reson) => {
      alert(reson)
    }
    )
}
