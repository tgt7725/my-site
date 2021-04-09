<template>
    <div class="contact-container">
        <a v-for="item in lists" :key="item.text" :href="getHref(item)" target="_blank" >
            <Icon :type='item.icon' />
            <span class="text">{{item.text}}</span>

            <div class="popup" v-if="item.hover">
                <img :src="item.hover" alt="">
            </div>
        </a>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
import {mapState} from 'vuex'
export default {
    components: {
        Icon,
    },
    data() {
        return {
            // lists: [
            //     {text: 'tgt7725', icon: 'github'},
            //     {text: '2311965299@qq.com', icon: 'mail'},
            //     {text: '2311965299', icon: 'qq', hover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=326662611,1926795193&fm=26&gp=0.jpg'},
            //     {text: 'this.data.weixin', icon: 'weixin', hover: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=326662611,1926795193&fm=26&gp=0.jpg'}
            // ],
        }
    },
    computed: {
        ...mapState('setting', ['data']),
        lists() {
            if(!this.data) {
                return [];
            }
            return [
                {text: this.data.githubName, icon: 'github'},
                {text: this.data.mail, icon: 'mail'},
                {text: this.data.qq, icon: 'qq', hover: this.data.qqQrCode},
                {text: this.data.weixin, icon: 'weixin', hover: this.data.weixinQrCode}
            ]
        }
    },
    methods: {
        toQQ(qq) {
            return `tencent://message/?Menu=yes&uin=${qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        },
        toMail(mail) {
            return `mailto:${mail}`
        },
        getHref(item) {
            if(item.icon === 'qq') {
                return this.toQQ(item.text);
            }else if(item.icon === 'mail') {
                return this.toMail(item.text);
            }else {
                return this.data.github;
            }
        }
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.contact-container {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    color: @gray;

    a {
        display: block;
        position: relative;
        width: 80%;
        height: 45px;
        line-height: 45px;
        font-size: 16px;

        .icon-container {
            padding: 0 8px;
        }

        .popup {
            position: absolute;
            top: -150px;
            border-radius: 8px;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: .5s;
            img {
                width: 150px;
                height: 150px;
                border-radius: 8px;
            }

            &::after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0px;
                left: 50%;
                transform: translateX(-50%);
                border: 10px solid;
                border-color: #fff transparent transparent transparent;
            }
        }

        &:hover {
            .popup {
                transform: scaleY(1)
            }
        }
    }
}
</style>