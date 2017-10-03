const apiURL    = 'https://stage.skipio.com'
const apiToken  = 'd3ef07cd3fb17859a874b7854c84f0ec'
let data = {}

const headers = {
  'Accept': 'application/json'
}

export const getMe = () => 
  fetch(`${apiURL}/api/v2/users/me?token=${apiToken}`, { headers })
    .then(res => res.json())
    .then(response => response.data)

export const getContacts = () => 
  fetch(`${apiURL}/api/v2/contacts?token=${apiToken}`, { headers })
    .then(res => res.json())
    .then(response => response.data)

export const sendMessage = (message, id) => {
  data = {
    'recipients': [
      `contact-${id}`
    ], 
    'message': {
      'body': message
    }
  }
  console.log(JSON.stringify(data))
  fetch(`${apiURL}/api/v2/messages?token=${apiToken}`, { method: 'POST', body: JSON.stringify(data), headers })
    .then(res => res.status)
}