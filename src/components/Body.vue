<template>
    <div class="fullPage">
        <div class="img_header">
            <img src="../assets/Header_image/Godfather header.jpg" alt="">
        </div>
        <div class="content">
            <div class="left">
                <div class="logo">
                    <img src="../assets/the-godfather.svg" alt="">
                </div>
                <div class="listEmploy">
                    <ul>
                        <li :class="{ active: indexSlide === index }" :style="{ fontSize: item.popularity + 'px' }" v-for="(item, index) in employees" :key="item.id" @click="indexSlide = index" >{{ item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="content_detail" v-for="(item, index) in employees" :key="item.id" v-show="indexSlide === index">
                    <div class="avatar">
                        <img :src="require('../assets/Profile_pics/' + item.image)" alt="">
                    </div>
                    <div class="detail">
                        <h2>{{ item.name }}</h2>
                        <div class="changeSize">
                            <p>Popularity</p>
                            <input class="range" type="range" min="10" max="70" v-model="item.popularity"/>
                        </div>
                        <div class="bio">
                            <h2>Biography</h2>
                            <p>{{ item.biography }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {  },

        data() {
            return {
                employees: [
                    {
                        name: "Vito Corleone",
                        popularity: 5,
                        biography: "Vito Andolini's story starts in Corleone, Sicily. In 1901, the local mafia chieftain, Don Ciccio, murders Vito's father Antonio when he refuses to pay him tribute. Paolo, Vito's older brother, swears revenge, but Ciccio's men kill him too. Ciccio then sends his men to fetch nine-year old Vito. However, Vito's mother insists on going as well and begs Ciccio to spare Vito. Ciccio refuses, reasoning the boy will seek revenge as a grown man. Upon Ciccio's refusal, Vito's mother holds a knife to Ciccio's throat, allowing her son to escape while Ciccio's men kill her. Family friends smuggle Vito out of Sicily, putting him on a ship with immigrants traveling to America. Ellis Island immigration officials rename him Vito Corleone, using his village for his surname. He later uses Andolini as his middle name in acknowledgement of his family heritage.",
                        image: "Vito Corleone.jpg",
                        colleagues: ["Carlo Rizzi", "Luci Mancini"]
                    },
                    {
                        name: "Carmelia Corleone",
                        popularity: 2,
                        biography: "Carmela was born in Sicily Italy in 1897, and emigrated to the United States shortly after the turn of the century. She married Vito Corleone in 1914; they were married for just over 40 years until Vito's death in 1955. They had four children – Sonny, Fredo, Michael and Connie. They also took in Sonny's friend Tom Hagen, who later served as the family consigliere. In the novel, Carmela Corleone is portrayed as a traditional Italian immigrant woman who speaks in very broken English. In the movies, however, she speaks fluent English as an adult, with a marked New York accent. In the novel, she develops a close relationship with Michael's girlfriend and future wife, Kay. She is given more expansive dialogue in The Godfather Part II, notably when she confronts her daughter Connie about her behavior early in the film, and when she discusses family life with Michael, who fears that his role as Don of the Corleone criminal empire will cost him his family. Carmela Corleone dies toward the end of the sequel.",
                        image: "Carmelia Corleone.jpg",
                        colleagues: []
                    },
                    {
                        name: "Carlo Rizzi",
                        popularity: 5,
                        biography: "A half northern Italian, half Sicilian native of Nevada and former labourer, Rizzi migrated to New York City following trouble with the law and became a friend of Sonny Corleone, through whom he met Sonny's sister Connie in 1941 at a surprise birthday party for Sonny's father Vito. They were married on the last Saturday of August 1945 in a traditional Italian wedding at the Corleone mall, a compromise made in order to appease Vito, who was disappointed with his daughter's choice in a husband.",
                        image: "Carlo Rizzi.jpg",
                        colleagues: ["Vito Corleone", "Carmelia Corleone"]
                    },
                    {
                        name: "Luci Mancini",
                        popularity: 5,
                        biography: "In the novel, Lucy is a fairly important supporting character, with several chapters dedicated to her story. After Sonny's death, Vito's consigliere, Tom Hagen sends Lucy to Las Vegas. She is given a small interest (five and later ten) in one of the family's hotels, primarily so that she can keep an eye on Vito's middle son, Fredo, who is learning the hotel and casino business. She also serves as a shareholder-of-record who has no criminal record: several such owners are necessary for a valid gaming license. On paper she is a millionaire, although she does not vote her shares in the casinos.",
                        image: "Luci Mancini.jpg",
                        colleagues: ["Carmelia Corleone"]
                    }
                ],
                indexSlide: 0,

            };
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>
    .fullPage{
        height: 100vh;
        overflow: hidden;
        background: #2E2E36;
        @media (max-width: 768px){
            height: auto;
            min-height: 100vh;
            overflow: auto;
        }
        .img_header{
            img{
                width: 100%;
                height: 35vh;
                object-fit: cover;
                object-position: top;
                opacity: 0.7;
            }
            @media (max-width: 1200px){
                img{
                    height: 15vh;
                }
            }
        }
        .content{
            position: fixed;
            inset: 0;
            display: flex;
            flex-wrap: nowrap;
            gap: 90px;
            .left{
                width: 35%;
                background: rgba(#000, 0.5);
                box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
                .logo{
                    height: 35vh;
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    @media (max-width: 1200px){
                        height: 15vh;
                        img{
                            width: 100px;
                        }
                    }
                }
                .listEmploy{
                    ul{
                        padding: 0;
                        margin: 0;
                        list-style: none;
                        padding-top: 45px;
                        text-align: center;
                        li{
                            color: #3DD2FB;
                            padding: 10px 0;
                            font-weight: 300;
                            transition: all .5s ease;
                            cursor: pointer;
                            &:nth-child(1){
                                font-size: 40px;
                            }
                            &:nth-child(2){
                                font-size: 20px;
                            }
                            &:nth-child(3){
                                font-size: 20px;
                                color: #fff;
                            }
                            &:nth-child(4){
                                font-size: 35px;
                            }
                            &.active, &:hover{
                                background: #404146;
                            }
                        }
                    }
                }
            }
            .right{
                width: 75%;
                position: relative;
                .content_detail{
                    position: absolute;
                    top: 30vh;
                    display: flex;
                    gap: 50px;
                    width: 100%;
                    padding-right: 90px;
                    
                    .avatar{
                        width: 150px;
                        height: 150px;
                        border: 1px solid #717277;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                        img{
                            width: 100%;
                        }
                    }
                    .detail{
                        flex: 1;
                        >h2{
                            font-size: 40px;
                            color: #fff;
                            margin-bottom: 30px;
                            font-weight: 300;
                        }
                        .changeSize{
                            display: flex;
                            gap: 50px;
                            align-items: center;
                            margin-bottom: 20px;
                            @media (max-width: 768px){
                                gap: 20px;
                            }
                            input{
                                flex: 1;
                                &.range {
                                    -webkit-appearance: none;
                                    width: 100%;
                                    height: 4px;
                                    border-radius: 5px;
                                    background: #1A1D24;
                                    outline: none;
                                    opacity: 0.7;
                                    -webkit-transition: .2s;
                                    transition: opacity .2s;
                                }

                                &.range::-webkit-slider-thumb {
                                    -webkit-appearance: none;
                                    appearance: none;
                                    width: 20px;
                                    height: 20px;
                                    border-radius: 50%;
                                    background: #fff;
                                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                                    cursor: pointer;
                                }

                                &.range::-moz-range-thumb {
                                    width: 20px;
                                    height: 4px;
                                    border-radius: 50%;
                                    background: #1A1D24;
                                    cursor: pointer;
                                }
                            }
                            p{
                                font-size: 25px;
                                color: #fff;
                                font-weight: 400;
                                margin-bottom: 0;
                            }
                        }
                        .bio{
                            background: #1A1D24;
                            border-radius: 10px;
                            padding: 20px;
                            width: 100%;
                            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                            >h2{
                                font-size: 25px;
                                color: #fff;
                                font-weight: 400;
                            }
                            p{
                                color: #fff;
                                font-size: 14px;
                                font-weight: 300;
                                line-height: 24px;
                                margin: 0;
                            }
                        }
                    }
                    
                }
            }
        }
        @media (max-width: 1200px){
            .content{
                flex-wrap: wrap;
                flex-direction: column;
                gap: 0;
                top: 0;

                .left{
                    width: 100%;
                    .listEmploy{
                        ul{
                            padding-top: 0;
                        }
                    }
                }
                .right{
                    width: 100%;
                    .content_detail{
                        position: initial;
                        padding-right: 0;
                        padding: 20px;
                        
                    }
                }
            }
        }
        @media (max-width: 768px){
            .content{
                position: initial;
                .left{
                    margin-top: -15vh;
                }
                .right{
                    
                    .content_detail{
                        gap: 20px;
                        flex-direction: column;
                        .avatar{
                            margin: auto;
                        }
                        .detail{
                            >h2{
                                text-align: center;
                                font-size: 38px;
                            }

                        }
                    }
                }
            }
        }
    }
</style>