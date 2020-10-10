const Nightmare = require('nightmare')
const axios = require('axios')
require('dotenv').config()

let ipList = require('./ipList.json')

let sp = (ip, target) => {
    return new Promise((resolve, reject) => {
        const nightmare = Nightmare({
            switches: {
                'proxy-server': ip // set the proxy server here ...
            },
            show: true
        })
        let waitTime = 500
        nightmare
            .goto(target)
            // .wait('.article_data')
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
    for (let ip of ipList) {
        for(let i = 0; i < process.env.boostCount; i++){
            try{
                console.log('target : ' + target + '\n By ip: ' + ip + '\n Count: ' + i)
                await sp(ip, target)
            } catch(err){
                console.log(ip)
            }
        }
    }
})()
