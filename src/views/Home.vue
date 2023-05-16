<template>
    <div class="home">
        <!-- <Header /> -->
        <Body />
        <!-- <Footer /> -->
        <!-- <Loading :start="load.val" /> -->
        <!-- <Totop /> -->
    </div>
</template>

<script>
// @ is an alias to /src

// import Header from "@/components/Header.vue";
import Body from "@/components/Body.vue";
// import Footer from "@/components/Footer.vue";
import WOW from "wowjs";
// import Loading from "@/components/Loading.vue";
// import Totop from "@/components/Totop.vue";


export default {
    name: "Home",
    components: {
        // Header,
        Body,
        // Footer,
        // Loading,
        // Totop,
    },
    data() {
        return {
            load: {
                val: false,
            },
        };
    },
    provide() {
        return {
            myLoading: this.load,
        };
    },
    mounted() {
        let wow = new WOW.WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
        });
        wow.init();
    },
};
</script>
