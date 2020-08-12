export default {
  state: {
    content: null, // content
    footer: null
  },
  mutations: {
    setContent(state, content) {
      state.content = content;
    },
    setFooter(state, footer) {
      state.footer = footer;
    }
  },
  actions: {
    setContent(context) {
      context.commit("setContent");
    },
    setFooter(context) {
      context.commit("setFooter");
    }
  },
  getters: {}
};