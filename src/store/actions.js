import { get } from '../../plugins/ajax.js'
export default {
    getarticleList(context) {
        context.commit("addarticleNumber");
        //经过getter拿到的state；
        let number = context.getters.getarticleNumber;
        console.log(number);
        get('https://cnodejs.org/api/v1/topics', {
            page: 1,
            limit: number,
            mdrender: 'false',
        }).then((res) => {
            console.log(res);
            context.commit("savearticleList", res.data)
        }, (err) => {
            console.log(err)
        })
    },
    getarticleMain(context,url) {
        get(url).then((res) => {
            console.log(res);
            if (res.success === true) {
                context.commit('addarticle', res.data);
                context.commit('addArticleAuthor', res.data.author.loginname);
            } else {
                console.warn('获取数据出错!');
            }
        }).catch((err) => {
            console.error(err);
        });
    }
}