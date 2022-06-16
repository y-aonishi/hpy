$(function () {
  // 上に戻るボタンの初期化
  let topBtn = $('#top');
  topBtn.hide();
  
  // 200ピクセルスクロールされたら、上に戻るボタンを表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn(); // フェードインで表示
    } else {
      topBtn.fadeOut();  // フェードアウトで非表示
    }
  });
  
  // クリックで上に戻るアニメーション
  topBtn.click(function(event) {
    event.preventDefault(); // ページ内リンクの挙動をキャンセル
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });
});