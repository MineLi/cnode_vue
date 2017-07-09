<template>
    <div class='about'>
        <!--<span>
                        <strong>作者: &nbsp;&nbsp;</strong>
                    </span>
                    <a href='http://limingyang.xyz' target='_blank'>李明洋</a>
                    </span>
                    <br>
                    <span>
                        <strong>源代码: &nbsp;&nbsp;</strong>
                    </span>
                    <a href='https://github.com/MineLi' target='_blank'>Github</a>
                    <br>
                    <br>
                    <span>
                        <strong>技术栈: </strong>
                    </span>
                    <ul>
                        <li>Vue.js</li>
                        <li>Vue-router</li>
                        <li>Axios</li>
                        <li>Element</li>
                        <li>CnodeJS API</li>
                    </ul>-->
        <ul>
            <li>
                <span class="title">作者:</span>
                <a href="http://limingyang.xyz" target='_blank'>李明洋</a>
            </li>
            <li>
                <span class="title">博客:</span>
                <a href="http://limingyang.xyz" target='_blank'>limingyang.xyz</a>
            </li>
            <li>
                <span class="title">源代码:</span>
                <a href="https://github.com/MineLi" target='_blank'>Github</a>&nbsp;&nbsp;&nbsp;&nbsp;欢迎 star
            </li>
            <li>
                <span class="title">联系我:</span>
                <a href="tencent://message/?uin=740051139&Site=&menu=yes">QQ</a>
            </li>
            <li class="jishu">
                <div>技术栈:</div>
                <ul>
                    <li>Vuejs</li>
                    <li>Vue-router</li>
                    <li>Axios</li>
                    <li>CnodeJS API</li>
                    <li>Vuex</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>
<style scoped lang="scss">
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style: none;
}

a {
    color: #42b983;
}

.about {
    font-size: 25px;
    height: 100%;
    >ul {
        width: 50%;
        margin: auto;
        padding-top: 50px;
        li {
            padding: 10px 0;
            margin: 10px 0;
        }
        .jishu {
            display: flex;
            justify-content: center;
            align-items: center;
            >div{
                margin-right: 60px;
            }
            ul{
                padding-left: 30px;
                // margin-left: 30px;
                border-left: 1px solid #bbb;
            }
        }
    }
}
</style>
