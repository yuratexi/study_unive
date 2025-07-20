let bun={
    bun:"null",
    cnt:0
  }
  
  
  function getrandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
  }
  
  function main(){
    let q,a,i=0;
    let c=[];
    let cnt=0;
    var m,n;
    if (document.form1.no1.checked) {
      c[cnt]=1;
      cnt++;
    } 
    if(cnt===0){
      q=`範囲を選択してね！`;
      btn2.disabled = true;
      btn1.disabled = false;
    }else{
    n=c[getrandom(0,cnt)];
    switch(n){
      case 1:
        m=getrandom(1,10);
        switch(m){
            case 1:q=`ネオテニーとはどのような現象か説明せよ。また、ネオテニーによる進化の例を2つあげよ。`;
                    a=`動物において、性成熟して繁殖可能な体でありながら、非生殖器官が未成熟な状態、幼生や幼体の性質が残る現象。進化の例としては、「チンパンジー的人類の乳児がヒトへの進化」「コーカソイドの幼体がモンゴロイドへの進化」がある`;break;
            case 2:q=`脊椎動物における肺は <br>
                (1)何紀の(時代を答える) <br>
                (2)どのような環境に対する必要性として<br>
                (3)身体のどの部分が発達したものか<br>
                (4)条鰭類において、肺は何に転用されたか<br>
                `;
                    a=`(1)デボン紀<br>
                        (2)空気呼吸の必要性<br>
                        (3)食道<br>
                        (4)浮き袋<br>
                        `;break;
            case 3:q=`顎と耳の進化についてカッコに当てはまる言葉を答えよ<br>
                        顎は無顎類の( A )が転用された器官で、これにより硬いものを菜食することができるようになった。無顎類の咽頭部の両側にはたくさんの( B )が対になって並んでいる。 この( B )のうち、第一、第二、( B )は消失し、第三( B )が前進して口の上下にハマり、顎になる。 第四( B )は( C )骨、と( D )に変形し、顎を補強する。 両生類や爬虫類の耳は、魚類におけるエラや、顎の骨の一部が転用されてできた、えらの穴には膜がはって、( E )となった また、魚類における( C )骨は音を伝える( F )骨になった。哺乳類ではさらに顎の方形骨が( G )骨、関節骨が( H )骨に変形し、聴覚が鋭敏になった。`;
                    a=`A:鰓弓(さいきゅう)<br>
                        B:鰓弓(さいきゅう)<br>
                        C:舌顎<br>
                        D:舌弓<br>
                        E:鼓膜<br>
                        F:あぶみ<br>
                        G:きぬた<br>
                        H:つち<br>
                        `;break;   
            case 4:q=`魚類のある系統から、両生類が分泌進化したが、その際に見られる陸上生活への適用進化を4つ答えよ。`;
                    a=`・水中呼吸から空気呼吸への変更<br>
                        ・陸上の重力への対抗<br>
                        ・水中移動から陸上移動への変更<br>
                        ・水中の音の収集から空中の音の収集への変更<br>
                        `;break;     
            case 5:q=`収斂進化(しゅうれんしんか)とはどのような進化か説明し、事例を2つあげよ。`;
                    a=`異なる系統の生物が、同様の生態的地位に置かれたときに、似た形態に進化する現象<br>
                        事例としては「海洋性脊椎動物は、いわゆる『魚』の形に進化する」「翼竜と鳥とコウモリの羽」がある
                        `;break;   
            case 6:q=`羊膜卵の図を描き、それぞれの特徴を全て書け`;
                    a=`<img src="./images/IMG_2781.webp"/>`;break;   
            case 7:q=`中生代のおよそ1億数千万年の間、より強力な陸生動物であった恐竜の活動時間や生息場所を避けて、哺乳類は夜行性となったり、林床などに潜んで活動をしたりしていたが、 その結果、当時の双弓類と比べて、退化した感覚器官は何か？また、進化した感覚器官は何か？`;
                    a=`退化した感覚器官:視覚器官<br>
                        進化した感覚器官:聴覚器官,嗅覚器官
                        `;break;   
            case 8:q=`大絶滅(あるいは大量絶滅)とはどのような現象か説明せよ。`;
                    a=`生態系の各階層にまたがる広範な生物相が、一度に絶滅してしまう現象`;break; 
            case 9:q=`白亜期末の大絶滅について、犠牲になった動物群の中から3群答えよ`;
                    a=`・アンモナイト族<br>
                        ・有孔虫<br>
                        ・モササウルス類<br>
                        `;break;   
            case 10:q=`ヒトの進化についてカッコに当てはまる言葉を答えよ。(A~Hに当てはまる言葉) <br>
ヒト科の動物は約500万年前にかつて全域が森林であったけれども、乾燥化のために草原が広がりはじめた( A )大陸の東部で誕生した。 陸上生活から地上生活に変わって、( B )するように進化した。 その結果、( C )が大型化して、特に( D )の部分が発達するようになり、( E )能力や( F )的思考力が急速に進化した この急速な進歩により、抽象的な思考の能力、その思考を伝え合うための( G )能力、道具や火を作り、使えるような独創的発想の力が発達した。 そして、情報や思考、知性を集団で共有することにより他の動物と比べても格段に高度な( H )が形成され、( H )を基礎にして文明が発達した。`;
                    a=`A:アフリカ<br>
                        B:直立二足歩行<br>
                        C:脳<br>
                        D:大脳<br>
                        E:学習<br>
                        F:論理<br>
                        G:言語<br>
                        H:文化<br>
                        `;break;     
        }
        break;
        default:
          main();
          return;
  
    }
    bun.bun= `${q}<br>答えは:${a}`;
  }
    let message = `${q}<br><br><br>`
    var sampleArea = document.getElementById("console");
    sampleArea.innerHTML = message;
    bun.cnt++;
    return bun;
  }
  
  // ボタンを押すと、ブロック内のプログラムが実行される
  $("#btn1").on("click", function()  {
    btn1.disabled = true;
    btn2.disabled = false;
    main();
    return;
  });
  
  $("#btn2").on("click", function()  {
    btn2.disabled = true;
    btn1.disabled = false;
    document.getElementById("console").innerHTML = bun.bun;   //printfみたいな奴で答えを吹き出し内に表示してる
    document.getElementById("cnt").innerHTML = `現在解いた問題数:${bun.cnt}問`;   //printfみたいな奴で答えを吹き出し内に表示してる
    return;
  });
  
  window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
      if(btn1.disabled===false){
        btn1.disabled = true;
        btn2.disabled = false;
        main();
      }else{
        btn2.disabled = true;
        btn1.disabled = false;
        document.getElementById("console").innerHTML = bun.bun;   //printfみたいな奴で答えを吹き出し内に表示してる
        document.getElementById("cnt").innerHTML = `現在解いた問題数:${bun.cnt}問`;   //printfみたいな奴で答えを吹き出し内に表示してる
      }
    }
  }
  
  $(function() {
    // 1. 「全選択」する
  
    $('#mall').on('click', function() {
      $("input[name='cbox']").prop('checked', false);
      $("input[name='31box']").prop('checked', false);
    });
  
    $('#all').on('click', function() {
      $("input[name='cbox']").prop('checked', false);
    });
  
    $('#all31').on('click', function() {
      $("input[name='31box']").prop('checked', false);
    });
  
  
    $('#alls').on('click',function(){
      $("input[name='cbox']").prop('checked', true);
    })
  
    $('#malls').on('click',function(){
      $("input[name='cbox']").prop('checked', true);
      $("input[name='31box']").prop('checked', true);
    })
  
    $('#alls31').on('click',function(){
      $("input[name='31box']").prop('checked', true);
    })
    // 2. 「全選択」以外のチェックボックスがクリックされたら、
    $("input[name='cbox']").on('click', function() {
      if ($('#form1 :checked').length == $('#form1 :input').length) {
        // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
        $('#all').prop('checked', false);
      } else {
        // 1つでもチェックが入っていたら、「全選択」 = checked
        $('#all').prop('checked', true);
      }
    });
  });