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
    if (document.form1.no2.checked) {
      c[cnt]=2;
      cnt++;
    } 
    if (document.form1.no3.checked) {
      c[cnt]=2;
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
        m=getrandom(1,20);
        switch(m){
            case 1:q=`FQDN(fully Qualified Domain Name)とは何かを簡潔に説明せよ。`;
                    a=`トップレベルドメインまで指定されたホスト名`;break;
            case 2:q=`なぜ「NAPT」では1つのグローバルIPで複数の端末がインターネットに接続できるのか、仕組みを説明せよ【ヒント:ポート番号】`;
                    a=`送信元IPアドレスだけでなく送信元ポート番号も変換することで、1つのグローバルIPアドレスを複数の端末で共有できる。各端末の通信に異なるポート番号を割り当てることで、どの端末の通信かを識別し、正しく通信を中継できるためである。`;break;
            case 3:q=`RIP(Routing Information Protocol)とは何かを簡潔に説明せよ。`;
                    a=`ネットワーク内のルーターが最適なルート(経路)を選択するために使用するプロトコル`;break;   
            case 4:q=`RIPにおけるホップ数とは何かを簡潔に説明せよ`;
                    a=`データがネットワーク内を移動する際に通過する「ルーターの数」のこと`;break;     
            case 5:q=`RIPの利点を2つあげよ.`;
                    a=`<br>・設定が簡単で管理が比較的容易<br>・小規模なネットワークやシンプルな設定のネットワークに向いている`;break;   
            case 6:q=`RIPの欠点を4つあげよ`;
                    a=`<br>・最大ホップ数が15で大規模なネットワークには向いていない<br>・障害や経路の変化があるとルーティングテーブルが安定するまで時間が必要「最大で180秒×N (Nはホップ数)」<br>・ルーティングループに対する対策が弱く、大規模ネットワークでの安定性に欠ける<br>・回線品質を無視するため、帯域や遅延が劣る経路が選ばれることがある`;break;   
            case 7:q=`ルーティングループとは何かを簡潔に説明せよ`;
                    a=`データがネットワーク内で無限に循環してしまう現象`;break;   
            case 8:q=`リングステートとは何かを簡潔に説明せよ`;
                    a=`ネットワークにおいて、ルータが自分自身に直接接続されているリンク(接続された隣接ルータや回線)の状態情報を管理・共有する仕組み`;break; 
            case 9:q=`OSPFの利点を4つあげよ`;
                    a=`<br>・収束速度が早い<br>・帯域幅(コスト)に基づく正確な経路選択<br>・ネットワーク規模が大きくても安定的な運用が可能<br>・柔軟な負荷分散(等コスト経路のロードバランス)`;break;   
            case 10:q=`OSPFの欠点を2つあげよ`;
                    a=`<br>・設定・運用がやや複雑(エリア設計が必要)<br>・CPU負荷とメモリ使用量が比較的大きい`;break;     
            case 11:q=`ポート番号とは何かを簡潔に説明せよ`;
                    a=`上位のアプリケーションごとに割り当てられる番号`;break;
            case 12:q=`TCPとは何かを簡潔に説明せよ`;
                    a=`インターネットでデータを送るときに使う、「確実に相手に届くようにするルール」のこと`;break;   
            case 13:q=`ウィンドウ制御とは何かを簡潔に説明せよ`;
                    a=`受信側の処理能力に合わせて送信側がどこまでデータを送れるかを制限する仕組み`;break;     
            case 14:q=`SACK(Selective Acknowledgment)とは何かを簡潔に説明せよ`;
                    a=`「届いたパケットだけ教えるACK」で、無駄な再送を防ぐ仕組み`;break; 
            case 15:q=`DMZ(DeMilitarized Zone)とは何かを簡潔に説明せよ`;
                    a=`外部に公開するサーバを内部ネットワークと分けて設置する安全な中間地帯のこと`;break;   
            case 16:q=`QUIC(Quick UDP Internet Connection)とは何かを簡潔に説明せよ`;
                    a=`UDPを用いて高速化しつつ、TCPのような通信の信頼性を提供する通信プロトコル`;break;     
            case 17:q=`ドメイン名とは何かを簡潔に説明せよ`;
                    a=`インターネット上でWebサイトやメールアドレスを特定するために用いられる、識別子のこと`;break;   
            case 18:q=`DNS(Domain Name System)とは何かを簡潔に説明せよ`;
                    a=`ドメイン名とIPアドレスを紐づけて管理するシステム`;break;   
            case 19:q=`クライアントサーバーシステムとは何かを簡潔に説明せよ`;
                    a=`ネットワーク上の役割を明確に分けることで効率的にデータのやり取りを行う仕組み`;break;     
            case 20:q=`クライアントサーバーシステムにおける、「サーバ」の役割を簡潔に説明せよ`;
                    a=`クライアントからの要求に応じてデータを提供する役割`;break; 
        }
        break;
      case 2:
        m=getrandom(1,4);
        switch(m){
            case 1:q=`FQDN(fully Qualified Domain Name)とは何かを簡潔に説明せよ。`;
                    a=`トップレベルドメインまで指定されたホスト名`;break;
            case 2:q=`なぜ「NAPT」では1つのグローバルIPで複数の端末がインターネットに接続できるのか、仕組みを説明せよ【ヒント:ポート番号】`;
                    a=`送信元IPアドレスだけでなく送信元ポート番号も変換することで、1つのグローバルIPアドレスを複数の端末で共有できる。各端末の通信に異なるポート番号を割り当てることで、どの端末の通信かを識別し、正しく通信を中継できるためである。`;break;
            case 3:q=`ドメイン名とは何かを簡潔に説明せよ`;
                    a=`インターネット上でWebサイトやメールアドレスを特定するために用いられる、識別子のこと`;break;  
            case 4:q=`DMZ(DeMilitarized Zone)とは何かを簡潔に説明せよ`;
                    a=`外部に公開するサーバを内部ネットワークと分けて設置する安全な中間地帯のこと`;break;    
        }
        break;
      case 3:
        m=getrandom(1,4);
        switch(m){
            case 1:q=`FQDN(fully Qualified Domain Name)とは何かを簡潔に説明せよ。`;
                    a=`トップレベルドメインまで指定されたホスト名`;break;
            case 2:q=`なぜ「NAPT」では1つのグローバルIPで複数の端末がインターネットに接続できるのか、仕組みを説明せよ【ヒント:ポート番号】`;
                    a=`送信元IPアドレスだけでなく送信元ポート番号も変換することで、1つのグローバルIPアドレスを複数の端末で共有できる。各端末の通信に異なるポート番号を割り当てることで、どの端末の通信かを識別し、正しく通信を中継できるためである。`;break;
            case 3:q=`ドメイン名とは何かを簡潔に説明せよ`;
                    a=`インターネット上でWebサイトやメールアドレスを特定するために用いられる、識別子のこと`;break;  
            case 4:q=`DMZ(DeMilitarized Zone)とは何かを簡潔に説明せよ`;
                    a=`外部に公開するサーバを内部ネットワークと分けて設置する安全な中間地帯のこと`;break;    
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