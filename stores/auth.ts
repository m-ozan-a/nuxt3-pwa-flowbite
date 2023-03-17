// JWT auth store example

import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

interface AuthState {
  loggedIn: boolean
  user: Ref<object>
}

const helpers = {
  clear: async () => {
    const refreshToken = useCookie('auth_refresh_token')
    const token = useCookie('auth_token')
    refreshToken.value = null
    token.value = null
  },
}

export const useAuth = defineStore('auth', {
  state: (): AuthState => ({
    loggedIn: false,
    user: ref({}),
  }),

  getters: {
    isLoggedIn: (state) => state.loggedIn,
    userData: (state) => state.user,
  },

  actions: {
    async login({ email, password, redirect }) {
      const router = useRouter()

      try {
        // Try to login
        const response = await auth.login({
          email,
          password,
        })

        // If login was successful, fetch the users data
        const user = await users.me.read({
          fields: ['*'],
        })

        // Update the auth store with the user data
        this.loggedIn = true
        this.user = user
        this.user.token = useCookie('auth_token')

        // If there's a redirect, send the user there
        if (redirect) {
          router.push(redirect)
        }
      } catch (e) {
        console.log(e)
        throw new Error('Wrong email address or password')
      }
    },
    async logout() {
      const router = useRouter()

      try {
        // Try to logout
        const response = await auth.logout()

        // If logout was successful, reset the auth store
        this.$reset()

        // Send the user back to the home page
        router.push('/login')
      } catch (e) {
        console.log(e)
        throw new Error('Issue logging out')
      }
    },
    async getUser() {

      try {
        // Try to fetch the user data
        const userMe = await users.me.read({
          fields: ['*'],
        })
        // Update the auth store with the user data
        this.loggedIn = true
        this.user = userMe
        this.user.token = useCookie('auth_token')
      } catch (e) {
        console.log(e)
        await helpers.clear()
      }
    },
    async resetState() {
      this.$reset()
      await helpers.clear()
    },
  },
})