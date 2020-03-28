// 获取返回内容
let body = $response.body;
// To JSON
let res = JSON.parse(body);
// 修改返回值
res.data.international = 0;
res.data.inReview = 0;
// To String
body = JSON.stringify(res);
// Callback
$done({ body });
