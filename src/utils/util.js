// 生成随机数
export function randomRange(under, over) {
	return Math.ceil(Math.random() * (over - under) + under);
}

// 检测网址
export function checkUrl(urlString){
    if(urlString!=""){
        var reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if(!reg.test(urlString)){
            alert("请输入正确的网址");
            return false;
        }else{
            return true;
        }
    }
}
