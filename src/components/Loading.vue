<template>
    <div class="loadding_page" v-if="start">
        <div class="ring">
            <div class="lds-dual-ring"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["start"],
};
</script>

<style lang="scss">
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .loadding_page {
        z-index: 9999999999;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        // background: rgba(0,0,0,0.2);
        .ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    
</style>
