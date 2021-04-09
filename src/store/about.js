import { getAbout } from "@/api/getAbout";

export default {
    namespaced: true,
    state: {
        data: null,
        loading: false
    },

    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        }
    },

    actions: {
        async getData(ctx) {
            if(ctx.state.data) {
                return;
            }
            ctx.commit('setLoading', true);
            const data = await getAbout();
            ctx.commit('setData', data);
            ctx.commit("setLoading", false);
        }
    }
}