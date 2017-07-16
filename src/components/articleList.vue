<template>
    <div id="articleContent">
        <div class="articleItem" v-for="(item,i) in articleList" :key="i">
            <dl>
                <dd @click="toAboutAuthor(item.author.loginname)">
                    <img :src="item.author.avatar_url" alt="">
                </dd>
                <dt>
                    <router-link :to="'/article/'+ item.id" class="routeStyle">
                        <div class="articleName">{{item.title}}</div>
                    </router-link>
                    <div class="articleInfo">
                        <span>回复量:</span>
                        <span>{{item.reply_count}}</span>
                        <span class="click">点击量:</span>
                        <span>{{item.visit_count}}</span>
                        <span class="createTime">创建时间:</span>
                        <span>{{formatTime(item.create_at)}}</span>
                    </div>
                </dt>
            </dl>
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
        getarticleList() {
            this.$store.dispatch("getarticleList");
        },
        formatTime(val) {
            return String(val).split("T")[0];
        },  
        toAboutAuthor(author_id){
            this.$router.push(`/aboutAuthor/${author_id}`);
        }
    },
    computed: {
        ...mapState(['articleList'])
    },
    created() {
        this.getarticleList();
    }
}
</script>
<style scoped lang="scss">
h1,
h2 {
    font-weight: normal;
}

a {
    color: #42b983;
}

#articleContent {
    width: 1095px;
    margin: 10px auto 0;
    background-color: #fff;
    .articleItem {
        width: 100%;
        height: 60px;
        padding: 10px;
        border-bottom: 1px solid #eee;
        img {
            width: 60px;
            height: 60px;
            background-color: #eee;
        }
        dl {
            display: flex;
            height: 60px;
            dd {
                margin-right: 30px;
                &:hover{
                    cursor: pointer;
                }
            }
            dt {
                .routeStyle {
                    color: #333;
                    text-decoration: none;
                }
            }
        }
        .articleName {
            height: 35px;
            line-height: 35px;
            font-size: 22px;
            text-align: left;
        }
        .articleInfo {
            height: 25px;
            line-height: 25px;
            color: #8492a6;
            text-align: left;
            font-size: 14px;
        }
        .click,
        .createTime {
            margin-left: 10px;
        }
    }
}
</style>
