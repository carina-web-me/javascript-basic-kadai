// 1~10までのランダムな整数を代入する
let num = Math.floor(Math.random() * 10) + 1; 

//変数numの値が３の倍数であれば、“3の倍数です”という文字列を出力する
if (num % 3 === 0) {
  console.log(`3の倍数です`);
}

//変数numの値が５の倍数であれば、“5の倍数です”という文字列を出力する
else if (num % 5 === 0) {
  console.log(`5の倍数です`);
}

//変数numの値が３かつ５の倍数であれば、“3と5の倍数です”という文字列を出力する
else if (num % 3 === 0 && num % 5 === 0) {
  console.log(`3と5の倍数です`);
}

//それ以外の場合は、変数を出力する
else {
  console.log (num);
}
