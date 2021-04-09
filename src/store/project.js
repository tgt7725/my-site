import { getProject } from "@/api/getProject";

export default {
    namespaced: true,
    state: {
        data: [],
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
            if(ctx.state.data.length) {
                return;
            }
            ctx.commit('setLoading', true);
            const data = await getProject();
            ctx.commit('setData', data);
            ctx.commit("setLoading", false);
        }
    }
}