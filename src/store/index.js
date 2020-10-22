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
      axios.post("https://trace.moe/api/search", data).then((res) => {
        let anime = res.data.docs[0];
        let preview = `https://media.trace.moe/video/${
          anime.anilist_id
        }/${encodeURIComponent(anime.filename)}?t=${anime.at}&token=${
          anime.tokenthumb
        }`;
        context.commit("UPLOAD_FILE", { anime, preview });
      });
    },
  },
  modules: {},
});
