<template>
    <div class="scroll-to-top" :class="visible ? 'show-scrollTop' : ''">
        <button type="button" class="goTop" @click="scrollTop">
            <i class="fa fa-chevron-up"></i>
        </button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                visible: false,
            };
        },
        methods: {
            scrollTop: function () {
                this.intervalId = setInterval(() => {
                    if (window.pageYOffset === 0) {
                        clearInterval(this.intervalId);
                    }
                    window.scroll(0, window.pageYOffset - 50);
                }, 20);
            },
            scrollListener: function () {
            this.visible = window.scrollY > 100;
            },
        },
        mounted: function () {
            window.addEventListener("scroll", this.scrollListener);
        },
        beforeDestroy: function () {
            window.removeEventListener("scroll", this.scrollListener);
        },
    };
</script>

<style lang="scss" scoped>
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        button {
            color: #fff;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background: rgb(53 53 53 / 70%);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease;
            outline: none;
            bottom: 0;
            box-shadow: none;
            border: 0;
            @media (min-width: 993px) {
                &:hover {
                    background: rgb(53 53 53);
                }
            }
        }
    }
    .show-scrollTop {
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }
</style>
