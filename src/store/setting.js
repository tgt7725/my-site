import { getSetting } from "@/api/getSetting";
import { titleControl } from '@/utils'
export default {
    namespaced: true,
    state: {
        data: null,
        loading: false,
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
            if (ctx.state.data) {
                return;
            }
            ctx.commit('setLoading', true);
            const data = await getSetting();
            ctx.commit('setData', data);
            ctx.commit("setLoading", false);
            titleControl.setTitle2(data.siteTitle);
            if (data.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = data.favicon;
                document.querySelector("head").appendChild(link);
            }
        }
    }
}