const Nightmare = require('nightmare')
require('dotenv').config()

let sp = (target) => {
    return new Promise((resolve, reject) => {
        const nightmare = Nightmare({
            show: true
        })
        let waitTime = 500
        nightmare
            .goto(target)
            .wait('.isChrome')
            // .wait('.slidedown-button')
            // .wait(waitTime)
            // .click('.slidedown-button')
            // .wait('.mc-closeModal')
            // .wait(waitTime)
            // .click('.mc-closeModal')
            // .wait('.notification-buttons')
            // .wait(waitTime)
            // .click('.notification-buttons')
            .wait(waitTime)
            .scrollTo(500, 0)
            .wait(waitTime)
            .scrollTo(1000, 0)
            .wait(waitTime)
            .scrollTo(1500, 0)
            .wait(waitTime)
            .scrollTo(2000, 0)
            .wait(waitTime)
            .scrollTo(2500, 0)
            .wait(waitTime)
            .scrollTo(3000, 0)
            .wait(waitTime)
            .scrollTo(3500, 0)
            .wait(waitTime)
            .scrollTo(4000, 0)
            .wait(waitTime)
            .scrollTo(4500, 0)
            .wait(waitTime)
            .scrollTo(5000, 0)
            .end()
            .then(() => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

(async () => {
    let target = process.env.targetURL
    try{
        for (let i = 1 ; i < Number(process.env.boostCount) +1; i++) {
            console.log('target : ' + target + '\nCount: ' + i)
            await sp(target)
        }
    } catch(err){
        console.log(err)
    } finally {
        console.log('Boost Complete')
    }
})()
