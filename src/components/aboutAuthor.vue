<template>
    <div class="content">
        <div class="userContent">
            <div class="title">
                <span>首页</span>
            </div>
            <div class="info">
                <ul>
                    <li>
                        <img :src="userInfo.avatar_url" alt="">
                        <span class="infoItem">{{userInfo.loginname}}</span>
                    </li>
                    <li>
                        <span>积分:</span>
                        <span class="infoItem">{{userInfo.score}}</span>
                    </li>
                    <li>
                        <span>github:</span>
                        <span class="infoItem">https://github.com/{{userInfo.githubUsername}}</span>
                    </li>
                    <li>
                        <span>注册时间:</span>
                        <span class="infoItem">{{formatData(userInfo.create_at)}}</span>
                    </li>
                </ul>
    
            </div>
        </div>
        <div class="recentCreateTopic">
            <div class="title">
                <span>最新创建的话题</span>
            </div>
            <div class="info" v-for="(item,i) in userInfo.recent_topics" :key="i">
                <ul>
                    <li>
                        <img :src="item.author.avatar_url" alt="" class="portrait">
                        <!-- <span class="count">
                                <span>120</span>
                                <span>/1111</span>
                            </span> -->
                        <!-- <router-link :to="'/article/'+item.id"> -->
                            <span class="articalTitle" @click="toArticle(item.id)">
                                {{item.title}}
                            </span>
                        <!-- </router-link> -->
                    </li>
                </ul>
            </div>
        </div>
        <div class="recentJoinTopic">
            <div class="title">
                <span>最新参与的话题</span>
            </div>
            <div class="info" v-for="(item,i) in userInfo.recent_replies" :key="i">
                <ul>
                    <li>
                        <img :src="item.author.avatar_url" alt="" class="portrait">
                        <!-- <span class="count">
                                <span>120</span>
                                <span>/1111</span>
                            </span> -->
                        <span class="articalTitle">
                            {{item.title}}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
        }
    },
    methods: {
        formatData(val) {
            return String(val).split("T")[0];
        },
        toArticle(id){
            this.$router.push(`/article/${id}`)
        }
    },
    created() {
        let userId = this.$route.params.authorId;
        const url = `https://cnodejs.org/api/v1/user/${userId}`;
        this.$store.dispatch("getUserInfo", url);
    },
    computed: {
        ...mapState(['userInfo'])
    },
    mounted() {
    }
}
</script>
<style scope lang="scss">
body {
    width: 100%;
    height: 100%;
}

.content {
    width: 1095px;
    margin: 0 auto;
    margin-top: 20px;
    .userContent {
        text-align: left;
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
        .title {
            height: 40px;
            padding: 10px;
            box-sizing: border-box;
            background-color: #f6f6f6;
        }

        .info {
            padding: 10px;
            border-top: 1px solid #f0f0f0;
            ul {
                list-style: none;
                li {
                    height: 40px;
                    line-height: 40px;
                    .infoItem {
                        color: #778087;
                    }
                }
                li:first-child {
                    img {
                        width: 40px;
                        height: 40px;
                        background-color: #eee;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
    .recentCreateTopic {
        @extend .userContent;
        .info {
            padding: 0;
            ul {
                li {
                    height: 50px;
                    line-height: 30px;
                    box-sizing: border-box;
                    padding: 10px;
                    img.portrait {
                        width: 30px;
                        height: 30px;
                    }
                    .articalTitle {
                        color: #08c;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .count {
                        display: inline-block;
                        width: 70px;
                        text-align: center;
                        margin-right: 10px;
                        font-size: 14px;
                        >span:first-child {
                            color: #9e78c0;
                        }
                        >span:nth-child(2) {
                            color: #b4b4b4;
                        }
                    }
                }
            }
        }
    }
    .recentJoinTopic {
        @extend .recentCreateTopic;
    }
}
</style>


