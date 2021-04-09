<template>
    <div class="siteAside-container">
        <div class="avatar">
            <Avatar
                :url="url"
                :size='120'
            />
        </div>
        <h2>{{siteTitle}}</h2>
        <div class="menu">
            <Menu />
        </div>

        <div class="contact">
            <Contact />
        </div>
    </div>
</template>

<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import loadingUrl from '@/assets/loading.gif'
import {mapState} from 'vuex'

export default {
    components: {
        Avatar,
        Menu,
        Contact,
    },

    computed: {
        ...mapState('setting', ['data']),

        url() {
            return this.data ? this.data.avatar : loadingUrl;
        },

        siteTitle() {
            return this.data ? this.data.siteTitle : ''
        }
    },
};
</script>

<style lang="less" scoped>
.siteAside-container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    // overflow-x: hidden;
    // overflow: hidden;

    .avatar-container {
        margin: 20px auto;
    }

    h2 {
        font-size: 20px;
        color: #fff;
        text-align: center;
    }

    .menu {
        margin: 0 0 20px 0;
    }
}
</style>