//今日の日付をdateオブジェクトを使い表示
const today = new Date();

//年・月・日を取得
const year = today.getFullYear();
const month = today.getMonth() +1;
const day = today.getDate();

console.log(year + `年` + month + `月` + day + `日`);