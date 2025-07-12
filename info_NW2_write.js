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
        m=getrandom(1,35);
        switch(m){
            case 1:q=`HTTPリクエストとレスポンスの構造について、メソッドやステータスコードの例も交えて説明しなさい。`;
                    a=`HTTPリクエストは、メソッド、ヘッダ、ボディから構成される。メソッドには、ページ取得用のGETや、データ送信用のPOSTなどがある。ヘッダは通信の情報を、ボディは送信データを含む。レスポンスには、成功時の200や、ページ未検出の404などのステータスコード、ヘッダ、ボディが含まれる。`;break;
            case 2:q=`メール送信時にセキュリティ上の問題が発生しうるポイントを、プロトコル（SMTP/POP3）、暗号化（TLS/SSL）、認証方式（SMTP-AUTH等）に触れながら具体的に説明しなさい。`;
                    a=`SMTPやPOP3は平文通信のため、盗聴や改ざんの危険がある。TLSやSSLで通信を暗号化することで、これを防止できる。また、SMTP-AUTHなどの認証方式を用いることで、正当な利用者のみが送信できるようにし、不正中継やスパムを防ぐことが重要である。`;break;
            case 3:q=`rcp（Remote Copy Protocol）とは何かを簡潔に説明せよ`;
                    a=`UNIXで使用された古いリモートコピー方式。cpコマンドに似た形式で、コマンドベースの転送。認証・通信ともに暗号化なし。現在では使用されず、scpへ移行`;break;  
            case 4:q=`scp（Secure Copy Protocol）とは何かを簡潔に説明せよ`;
                    a=`rcpの後継であり、安全なファイル転送手段。SSHを利用して暗号化された通信を行う。安全性が高く、広く使用されている`;break; 
            case 5:q=`ftp（File Transfer Protocol）とは何かを簡潔に説明せよ`;
                    a=`初期からある代表的なファイル転送手法。ポート21で制御、ポート20などでデータを転送。対話型でコマンドベースの操作(ログイン不要)。anonymousFTPにより匿名利用も可能。昔はよく使われていたが、暗号化がないため非推奨。`;break;   
            case 6:q=`SMTPとは何かを簡潔に説明せよ`;
                    a=`Simple Mail Transfer Protocolの略で、電子メールを送信するためのプロトコル。TCPのポート番号25を利用する。`;break;   
            case 7:q=`MUAとは何かを簡潔に説明せよ`;
                    a=`SMTPにおけるクライアント側のこと`;break;  
            case 8:q=`MTAとは何かを簡潔に説明せよ`;
                    a=`SMTPにおけるサーバ側のこと`;break;  
            case 9:q=`POP3とは何かを簡潔に説明せよ`;
                    a=`Post Office Protocol version 3の略で、電子メールをメールサーバーからクライアント端末に取り出すための通信プロトコル。ユーザ認証をしてからメールを取り出す`;break;   
            case 10:q=`IMAP4とは何かを簡潔に説明せよ`;
                    a=`Internet MessageAccess Protocol version 4の略で、電子メールをサーバ上で管理・閲覧するプロトコル。メールはサーバに保管されるため、色々な場所から同じメールにアクセスできるが、サーバの負荷が重い。`;break; 
            case 11:q=`MIMEとは何かを簡潔に説明せよ`;
                    a=`Multipurpose Internet Mail Extensionsの略で、様々なフォーマットをASCII文字列に変換するための規格。`;break;         
            case 12:q=`WWWとは何かを簡潔に説明せよ`;
                    a=`World Wide Webの略で、世界中の文書をリンクでつなげる仕組み。`;break;   
            case 13:q=`URLとは何かを簡潔に説明せよ`;
                    a=`Uniform Resource Locatorの略で、インターネット上のリソースの場所を表す「住所」のこと。`;break;      
            case 14:q=`URIとは何かを簡潔に説明せよ`;
                    a=`Uniform Resource Identifierの略で、URLを含むより広い概念(識別子)のこと。`;break;  
            case 15:q=`HTTPとは何かを簡潔に説明せよ`;
                    a=`Hyper Text Transfer Protocolの略で、Webサーバと情報のやり取りを行うための通信プロトコル。ポート番号は80(TCP)`;break;   
            case 16:q=`Cacheとは何かを簡潔に説明せよ`;
                    a=`Webページの情報をブラウザ側に保存して、ブラウザのページの読み込みを早くするためのもの`;break;         
            case 17:q=`HTTPとは何かを簡潔に説明せよ`;
                    a=`Hyper Text Transfer Protocolの略で、Webサーバと情報のやり取りを行うための通信プロトコル。ポート番号は80(TCP)`;break;  
            case 18:q=`Linuxにおいて、自分のIPアドレスを確認するコマンドは？`;
                    a=`ip a`;break;  
            case 19:q=`Linuxにおいて、ルート情報を確認するコマンドは？`;
                    a=`ip r`;break;  
            case 20:q=`Linuxにおいて、通信経路を確認するコマンドは？(google.comを例に)`;
                    a=`traceroute google.com`;break;  
            case 21:q=`Linuxにおいて、TCP/UDPのポートを一覧表示するコマンドは？`;
                    a=`ss -tuln`;break;  
            case 22:q=`Linuxにおいて、HTTPでアクセスしてHTMLを取得するコマンドは？(http://example.comを例に)`;
                    a=`curl http://example.com`;break;  
            case 23:q=`Linuxにおいて、ドメイン名google.comのIPアドレスを取得するコマンドは？`;
                    a=`dig google.com`;break;  
            case 24:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、eth0の役割を簡潔に説明せよ`;
                    a=`仮想的なイーサネットネットワークインターフェースの名前。WSL2ではホストとの通信に使われる。`;break;  
            case 25:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、loの役割を簡潔に説明せよ`;
                    a=`ループバックインターフェースの名前。自分自身との通信（127.0.0.1など）に使用される仮想インターフェース。`;break;   
            case 26:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、BROADCASTの役割を簡潔に説明せよ`;
                    a=`ブロードキャスト通信が可能なインターフェースであることを示す。ネットワーク内の全端末に同時送信できる。`;break;  
            case 27:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、MULTICASTの役割を簡潔に説明せよ`;
                    a=`マルチキャスト通信が可能なインターフェースであることを示す。特定グループの複数端末への同時通信に使われる。`;break;  
            case 28:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、UPの役割を簡潔に説明せよ`;
                    a=`インターフェースが有効（アクティブ）である状態を示す。通信ができる状態。`;break;  
            case 29:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、mtu 1500の役割を簡潔に説明せよ`;
                    a=`MTU（最大転送単位）は一度に送信可能なパケットの最大サイズ。1500バイトは一般的なイーサネットの標準。`;break;  
            case 30:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、link/etherの役割を簡潔に説明せよ`;
                    a=`イーサネットリンクの種類を示す（ここではイーサネット）。後ろにはMACアドレスが続く。`;break; 
            case 31:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、MACアドレスの役割を簡潔に説明せよ`;
                    a=`ネットワークインターフェースの固有の物理アドレス（例:00:1a:2b:3c:4d:5e）。通信機器の識別に使われる。`;break; 
            case 32:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、LOOPBACKの役割を簡潔に説明せよ`;
                    a=`ループバック機能を持つインターフェースであることを示す。外部通信を行わず、自端末内でのテストに使用される。`;break;    
            case 33:q=`WSL2のUbuntuにおいて、ip linkを実行した際に表示される情報に含まれる用語にうち、qlenの役割を簡潔に説明せよ`;
                    a=`キュー長（Queue Length）を示す。送信待ちのパケット数の最大値で、トラフィック制御に関係する。`;break;  
            case 34:q=`次の出力は、WSL2上で ip link を実行したときの一部である。 <br>
                      5: eth0: <BROADCAST,MULTICAST,UP> mtu 1500 group default qlen 1<br>
                          link/ether 00:1c:42:c4:6e:e6 <br>
                      1: lo: <LOOPBACK,UP> mtu 1500 group default qlen 1<br>
                          link/loopback 00:00:00:00:00:00 <br>
                      上記のうち、外部と通信を行うためのインターフェースはどれですか？理由とともに答えなさい。`;
                    a=`外部と通信を行うインターフェース:eth0<br>
                        eth0 は仮想的なイーサネットインターフェースで、<BROADCAST,MULTICAST,UP> と表示されており、外部との通信が可能な状態になっているため。`;break;  
            case 34:q=`次の出力は、WSL2上で ip link を実行したときの一部である。 <br>
                      5: eth0: <BROADCAST,MULTICAST,UP> mtu 1500 group default qlen 1<br>
                          link/ether 00:1c:42:c4:6e:e6 <br>
                      1: lo: <LOOPBACK,UP> mtu 1500 group default qlen 1<br>
                          link/loopback 00:00:00:00:00:00 <br>
                      'mtu 1500' は何を意味しますか？`;
                    a=`「Maximum Transmission Unit（最大転送単位）」を意味し、一度に送信できるパケットの最大サイズが1500バイトであることを示す。`;break; 
            case 35:q=`次の出力は、WSL2上で ip link を実行したときの一部である。 <br>
                      5: eth0: <BROADCAST,MULTICAST,UP> mtu 1500 group default qlen 1<br>
                          link/ether 00:1c:42:c4:6e:e6 <br>
                      1: lo: <LOOPBACK,UP> mtu 1500 group default qlen 1<br>
                          link/loopback 00:00:00:00:00:00 <br>
                      'link/ether' と 'link/loopback' の違いについて説明しなさい。`;
                    a=`link/ether はイーサネットタイプのインターフェースを示し、MACアドレス（例：00:1c:42:c4:6e:e6）を持ち、物理または仮想ネットワークを介した外部通信に使用される。それに対し、link/loopback はループバックインターフェースを示し、MACアドレスは00:00:00:00:00:00のように仮のものが使われ、外部とは通信せず、自端末内での通信（127.0.0.1）専用となっている。`;break; 
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