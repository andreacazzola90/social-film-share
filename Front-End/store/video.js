import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  videos: []
})

export const getters = {
  getVideos (state) {
    return state.videos
  },
  getVideosById: (state, getters) => (ID = false) => {
    if(ID){
      return state.videos.filter( video => video.category.name === ID)
    }else{
      return state.videos
    }
  }
}

export const mutations = {
  setVideos(state, payload) {
    state.videos = payload
  }
}

export const actions = {
  fetchVideos (context, payload) {
    axios.get('/videos')
      .then(response => {
        this.videos = response.data
        context.commit('setVideos', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}