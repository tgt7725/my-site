<template>
    <div class="contact-container">
        <a :href="type ? connect : '' ">
            <Icon :type="icon" />
            <span class="text">{{ text }}</span>
            <div
                v-if="hover"
                class="hover"
                :style="{
                    backgroundImage: `url(${hover})`,
                }"
            ></div>
        </a>
    </div>
</template>

<script>
import Icon from "../Icon";
export default {
    components: {
        Icon,
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        hover: {
            type: String
        },
        type: {
            type: String
        }
    },
    computed: {
        qq() {
            return `tencent://message/?Menu=yes&uin=${this.text}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        },
        mail() {
            return `mailto:${this.text}`
        },
        connect() {
            return this[this.type];
        }
    },
    methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.contact-container {
    display: flex;
    align-items: center;
    background: @dark;
    color: @gray;
    width: 100%;
    height: 40px;
    padding: 0 5px;
    position: relative;
    // flex: 1;

    .iconfont {
        margin: 0 10px;
    }

    a {
        display: block;
    }

    a:hover {
        color: @primary;
        cursor: pointer;
        // :parent .iconfont  {
        //     color: @primary;
        // }
        .hover {
            height: 180px;
            &::after {
                display: block;
            }
        }
    }

    .hover {
        width: 90%;
        height: 0px;
        background-size: cover;
        position: absolute;
        top: -180px;
        left: 50%;
        transform: translateX(-50%);
        transition: height 0.3s;

        &::after {
            content: "";
            display: none;
            border: 10px solid;
            border-color: #fff transparent transparent transparent;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            bottom: -20px;
        }
    }
}
</style>