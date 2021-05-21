let authPromise = null;

function auth(success = true) {
    if (authPromise) {
        return authPromise;
    } else {
        authPromise = new Promise((resolve, reject) => {
            setTimeout(function () {
                if (success) {
                    resolve({
                        name: 'xesam'
                    });
                } else {
                    authPromise = null;
                    reject({
                        msg: 'err'
                    });
                }
            }, 3000);
        });
        return authPromise;
    }
}

async function fn1() {
    try {
        const user = await auth(false);
        console.log('fn1', user, Date.now() / 1000);
    } catch (e) {
        console.log('fn1 err', e);
    }
}

async function fn2(success = true) {
    try {
        const user = await auth(success);
        console.log('fn2', user, Date.now() / 1000);
    } catch (e) {
        console.log('fn2 err', e);
    }
}

fn1();
fn2(false);

setTimeout(function () {
    fn2();
}, 4000);