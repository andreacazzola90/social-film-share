import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  categories: []
})

export const getters = {
  getCategories (state) {
    return state.categories
  }
}

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  }
}

export const actions = {
  fetchCategories (context, payload) {
    axios.get('/categories')
      .then(response => {
        this.categories = response.data
        context.commit('setCategories', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}