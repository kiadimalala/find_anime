import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import FormData from "form-data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedFile: null,
    anime: null,
    preview: null,
  },

  mutations: {
    SELECT_FILE(state) {
      state.selectedFile = event.target.files[0];
      state.anime = null;
    },
    UPLOAD_FILE(state, { anime, preview }) {
      state.anime = anime;
      state.preview = preview;
    },
  },
  actions: {
    fileSelect({ commit }) {
      commit("SELECT_FILE");
    },
    uploadFile(context) {
      let image = context.state.selectedFile;
      let data = new FormData();
      data.append("image", image);
    
      axios.post("https://api.trace.moe/search", data).then(async(res) => {
       
        let anime = await res.data.result[0];
        console.log(anime);
        let preview = anime.video
        context.commit("UPLOAD_FILE", { anime, preview });
      });
    },
  },
  modules: {},
});
