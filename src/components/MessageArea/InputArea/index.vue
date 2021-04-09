<template>
    <div class="input-area-container" ref="inputContainer">
        <div class="nick-name">
            <input
                v-model="info.nickname"
                class="nick-name-input"
                type="text"
                placeholder="用户名称"
            />
            <div class="error">{{ error.nickname }}</div>
            <div class="limit-box">0/10</div>
        </div>
        <div class="content-input">
            <textarea
                v-model="info.content"
                placeholder="输入内容"
                cols="30"
                rows="10"
            ></textarea>
            <div class="error">{{ error.content }}</div>
            <div class="limit-box">0/300</div>
        </div>
        <button class="btn" @click="handleSubmit" :disabled="isSubmit">
            {{ isSubmit ? "提交中……" : "提交" }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSubmit: false,
            error: {
                nickname: "",
                content: "",
            },
            info: {
                nickname: "",
                content: "",
            },
        };
    },
    methods: {
        handleSubmit() {
            this.info.nickname = this.info.nickname.trim();
            this.error.nickname = !this.info.nickname ? "请填写账号" : "";
            this.error.content = !this.info.content ? "请填写内容" : "";
            if (this.error.nickname || this.error.content) {
                return;
            }
            this.isSubmit = true;
            this.$emit("submit", this.info, (message) => {
                this.$showMessage({
                    container: this.$refs.inputContainer,
                    type: "success",
                    message,
                    callback: () => {
                        this.isSubmit = false;
                        this.info.nickname = "";
                        this.info.content = "";
                    },
                });
            });
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.input-area-container {
    width: 100%;
    .nick-name {
        width: 50%;
        position: relative;
        margin-bottom: 40px;
    }
    .content-input {
        width: 100%;
        position: relative;

        textarea {
            resize: none;
            height: 120px;
        }
    }

    .nick-name-input,
    textarea {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        height: 40px;
        padding: 10px 20px;
        outline: none;
        border: 1px dashed @gray;
        color: @words;
        font-size: 14px;
        border-radius: 4px;
    }

    .error {
        position: absolute;
        left: 20px;
        color: lighten(@danger, 10%);
    }

    .limit-box {
        position: absolute;
        right: 5px;
        bottom: 5px;
        font-size: 12px;
        color: @gray;
    }

    .btn {
        width: 100px;
        height: 35px;
        background: darken(@primary, 20%);
        color: #fff;
        cursor: pointer;
        outline: none;
        border: none;
        margin-top: 30px;
        border-radius: 4px;

        &:disabled {
            cursor: not-allowed;
            background: darken(@primary, 10%);
        }
    }
}
</style>