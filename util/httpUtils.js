const { default:axios } = require("axios")

const httpUtil = (method, url, data) => {
    return axios(
        {
            method,
            url,
            data
        }
    ) 
}

module.exports = httpUtil

