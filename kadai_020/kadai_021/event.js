const btn = document.getElementById(`btn`);
const text = document.getElementById(`text`);

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener(`click`,() => {
  //２秒後に表示
  setTimeout(() => {
  text.textContent = `ボタンをクリックしました`;
},2000);
});