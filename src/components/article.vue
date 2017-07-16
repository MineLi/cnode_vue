<template>
    <div>
        <!--文章详情页-->
        <div class="headInfo">
            <div class="articleTitle">
                {{articleMain.title}}
            </div>
            <div class="infos">
                <span> 发布于{{formatTime(articleMain.create_at)}}</span>
                <span> 作者 {{articleMain.author.loginname}}</span>
                <span> {{articleMain.visit_count}}次浏览</span>
                <span> 来自{{articleMain.tab}}</span>
            </div>
        </div>
    
        <div id="content" class="article" v-html="articleMain.content">
    
        </div>
        <div id="content">
            <div id='reply'>
                <div class="replyNum">{{articleMain.reply_count}} 回复</div>
                <div v-for='(reply,i) in articleMain.replies' class='replySec' :key="i">
                    <div class="author-content">
                        <router-link :to='{name: "aboutAuthor",params:{authorId: reply.author.loginname}}'>
                            <img :src='reply.author.avatar_url'>
                        </router-link>
                        <span class='replyName'>{{reply.author.loginname}}</span>
                    </div>
                    <div class="reply-content">
                        <p v-html='reply.content'></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            // articleMain:""
        }
    },
    computed: {
        ...mapState(['articleMain'])
    },
    methods: {
        formatTime(val) {
            return String(val).split("T")[0];
        }
    },
    mounted() {
        let articleId = this.$route.params.articleId;
        let url = 'https://cnodejs.org/api/v1/topic/' + articleId;
        this.$store.dispatch("getarticleMain", url);
    }
}
</script>
<style scoped lang='scss'>
@import '../assets/markdown-github.css';
h1,
h2 {
    font-weight: normal;
}

a {
    color: #42b983;
}

.headInfo {
    background-color: #fff;
    margin: 10px auto 0;
    width: 1095px;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid #ddd;
    .articleTitle {
        font-size: 22px;
        font-weight: 700;
        margin: 8px 0;
    }
    .infos {
        font-size: 12px;
        color: #838383;
        margin-top: 5px;
        >span {
            &:before {
                content: "•"
            }
        }
    }
}

#content {
    margin: 0 auto;
    padding: 10px; // border: 1px solid #ddd;
    line-height: 1.6;
    padding-bottom: 1rem;
    background: #EFF2F7;
    width: 1095px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: left;
    font-size: 15px;
    img {
        max-width: 100%;
        max-height: 100%;
    }
    li {
        text-align: left;
    }
}

#reply {
    display: flex;
    flex-direction: column;
    margin: 10px auto 0;
    width: 1095px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 15px;
    position: relative;
    left: -10px;
}

// #reply img {
//     width: 5rem;
//     height: 5rem;
//     margin-right: 1rem;
// }
.replyNum {
    color: #444;
    padding: 10px;
    background-color: #f6f6f6;
    text-align: left;
}

.replySec {
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    .author-content {
        height: 30px;
        line-height: 30px;
        position: relative;
        text-align: left;
        img {
            width: 30px;
            height: 30px;
            position: absolute;
            left: 0;
            top: 0;
        }
        span {
            margin-left: 40px;
        }
    }
    .reply-content {
        p {
            padding-left: 50px;
            text-align: left;
        }
    }
}
</style>
