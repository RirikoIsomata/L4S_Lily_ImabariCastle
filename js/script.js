function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
  }
  document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
  } );

  $(function () {
      $('.top-wrapper').bgSwitcher({
        images: ['images/index_top_img01.jpg', 'images/index_top_img02.jpg', 'images/index_top_img03.jpg', 'images/index_top_img04.jpg'], // 切り替える背景画像を指定
        interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 1000, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    });
  });