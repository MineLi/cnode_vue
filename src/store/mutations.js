export default {
    addarticleNumber(state) {
        state.articleNumber += 10
    },
    savearticleList(state, obj) {
        state.articleList = obj
    },
    addarticle(state, obj) {
        state.articleMain = obj;
    },
    addArticleAuthor(state, obj) {
        state.articleAuthor = obj;
    }
}