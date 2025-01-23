/*
  The Proxy Pattern is a design pattern used to control access to another object. 
  It provides a surrogate or placeholder for the actual object.
*/

class UserAPI {
  constructor() {
    this.users = {
      'id1': { name: 'John' },
      'id2': { name: 'Peter' }
    }
  }

  fetch(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users[id])
      }, 1000)
    })
  }
}

class UserAPIProxy {
  constructor(userAPI) {
    this.userAPI = userAPI
    this.cache = {}
  }

  async fetch(id) {
    if (!this.cache[id]) {
      const user = await this.userAPI.fetch(id)
      this.cache[id] = user
      console.log('The fetched user is cached')
      return user
    }

    console.log('Returning user data from the cache')

    return this.cache[id]
  }
}

(async () => {
  const userAPI = new UserAPIProxy(new UserAPI())
  const user = await userAPI.fetch('id1') // The fetched user is cached'
  const use2 = await userAPI.fetch('id1') // Returning user data from the cache
  console.log(user)
})()