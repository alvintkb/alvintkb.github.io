import { createStore } from "vuex";

// Initial state
const state = {
  images: [], // Array to store image data
  selectedImage: null, // Store the currently selected image
};

// Mutations
const mutations = {
  // Mutation to set the images in the state
  SET_IMAGES(state, images) {
    state.images = images;
  },
  // Mutation to set the selected image
  SET_SELECTED_IMAGE(state, image) {
    state.selectedImage = image;
  },
};

// Actions
const actions = {
  // Action to fetch images
  async fetchImages({ commit }) {
    try {
      // Assuming you fetch images from an API
      //   const response = await fetch("http://localhost:3000/api/images/");
      const response = await fetch("http://localhost:3000/api/images?folder=eum");

      const data = await response.json();
      commit("SET_IMAGES", data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  },
  // Action to set the selected image
  setSelectedImage({ commit }, image) {
    commit("SET_SELECTED_IMAGE", image);
  },
};

// Getters
const getters = {
  // Getter to get the currently selected image
  selectedImage: (state) => state.selectedImage,
};

// Create Vuex store instance
export default createStore({
  state,
  mutations,
  actions,
  getters,
});
