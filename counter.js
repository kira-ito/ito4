// ページが読み込まれたら実行
window.onload = function() {

    // オブジェクトと変数の準備
    let disp = document.getElementById("disp");  
    let win_button = document.getElementById("win_button");
    let lose_button = document.getElementById("lose_button");
    let count_value = 0;

    // カウントアップボタンクリック処理
    win_button.onclick = function (){
         count_value = count_value + 1;
         disp.innerHTML = count_value;

    };
    // カウントアップボタンのマウスダウン処理
    win_button.onmousedown = function() {
        win_button.style.backgroundColor = "#00FF00";
    }
    // カウントアップボタンのマウスアップ処理
    win_button.onmouseup = function() {
        win_button.style.backgroundColor = "";
    }
    // リセットボタンのクリック処理
    lose_button.onclick = function (){
         count_value = 0; disp.innerHTML = count_value;
    }
    // リセットボタンのマウスダウン処理
    lose_button.onmousedown = function() {
        lose_button.style.backgroundColor = "#00FF00";
    }
    // リセットボタンのマウスアップ処理
    lose_button.onmouseup = function() {
        lose_button.style.backgroundColor = "";
    }
};
