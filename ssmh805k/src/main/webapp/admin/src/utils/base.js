const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmh805k/",
            name: "ssmh805k",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmh805k/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电脑测评系统"
        } 
    }
}
export default base
