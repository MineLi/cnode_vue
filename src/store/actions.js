import { get } from '../../plugins/ajax.js'
export default {
    getArticalList(context) {
        context.commit("addArticalNumber");
        //经过getter拿到的state；
        let number = context.getters.getArticalNumber;
        console.log(number);
        get(
            'https://cnodejs.org/api/v1/topics', {
                page: 1,
                limit: number,
                mdrender: false,
            }).then((res) => {
                console.log(res);
                context.commit("saveArticalList",res.data)
            }, (err) => {
                console.log(err)
            })
    }
}