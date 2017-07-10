<template>
    <div id="articalContent">
        <div class="articalItem" v-for="(item,i) in articalList" :key="i">
            <dl>
                <dd>
                    <img :src="item.author.avatar_url" alt="">
                </dd>
                <dt>
                    <router-link to="/artical" class="routeStyle">
                        <div class="articalName">{{item.title}}</div>
                    </router-link>
                    <div class="articalInfo">
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
        getArticalList() {
            this.$store.dispatch("getArticalList");
        },
        formatTime(val) {
            return String(val).split("T")[0];
        }
    },
    computed: {
        ...mapState(['articalList'])
    },
    created() {
        this.getArticalList();
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

#articalContent {
    width: 1095px;
    margin: 10px auto 0;
    background-color: #fff;
    .articalItem {
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
            }
            dt {
                .routeStyle {
                    color: #333;
                    text-decoration: none;
                }
            }
        }
        .articalName {
            height: 35px;
            line-height: 35px;
            font-size: 22px;
            text-align: left;
        }
        .articalInfo {
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
