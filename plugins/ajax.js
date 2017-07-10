class XHR {
    get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304)) {
                        if (xhr.responseText) {
                            try {
                                resolve(JSON.parse(xhr.responseText));
                            } catch (err) {
                                resolve(xhr.responseText);
                            }
                        } else {
                            resolve(xhr.responseText, xhr);
                        }
                    } else {
                        reject(`ajax fail:${xhr.status}`);
                    }
                }
            };
            xhr.open('get', url, true);
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(null);
        });
    }

    post(url, data) {

        let params = [];
        for (let key in data) {
            params[params.length] = encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        }
        let postData = params.join('&').replace(/%20/g, "+");

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304)) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(`ajax fail:${xhr.status}`);
                    }
                }
            };
            xhr.open('post', url, true);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(postData);
        });
    }
}

XHR.install = (Vue) => {
    Vue.prototype.$get = new XHR().get;
    Vue.prototype.$post = new XHR().post;
};
let get = new XHR().get;
let post = new XHR().post;
export {
    get, post
}
export default XHR;

