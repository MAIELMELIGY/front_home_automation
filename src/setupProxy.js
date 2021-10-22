const proxy = require("http-proxy-middleware");
module.exports = function(app){
    app.use(
        proxy("/api/About/",{
            target:"https://apihomeautomation.herokuapp.com",
            changeOrigin:true
        })
    )
};