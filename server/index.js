import https from 'https';
import querystring from 'querystring'
class MeiCan {
    loginUrl = 'https://meican.com/account/directlogin'
    loginData = querystring.stringify({
        username: '',
        loginType: 'username',
        password: '',
        remember: true,
        openId: '',
        redirectUrl: '',
    })
    rememberId = ''
    /**
     * @description: 解析cookie 返回当前cookie字符串中有效的kv对
     * @param {String} cookie 需要解析的cookie字符串
     * @return: cookie有效kv对
     */    
    parseCookie(cookie) {
        if (!cookie) return;
        const res = {};
        cookie.split(';').forEach(i => {
            const parts = i.split('=');
            const key = parts.shift().trim();
            const value = decodeURI(parts.join('='))
            res[key] = value;
        });
        return res;
    }
    /**
     * @description: 解析header数组 取出我们要的remember这个cookie字符串
     * @param {Array} headers 请求取到的header数组
     */    
    parseHeader(headers) {
        const rememberCookieRaw = headers['set-cookie'].find(i => i.includes('remember'));
        const rememberCookieObj = this.parseCookie(rememberCookieRaw);
        const rememberId = rememberCookieObj['remember'];
        console.log('remember:', rememberId)
        this.rememberId = rememberId;
    }
    /**
     * @description: 登录逻辑 使用用户名密码去请求登录接口 设rememberId（大概是token的作用）
     */    
    login() {
        const req = https.request(this.loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': this.loginData.length
            }
        });
        req.on('response', res => {
            this.parseHeader(res.headers);
        });
        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
        });
        req.write(this.loginData);
        req.end();
    }
}

const meiCan = new MeiCan();
meiCan.login();