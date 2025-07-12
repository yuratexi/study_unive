let bun={
    kotae:"null",
    a1:"null",
    a2:"null",
    a3:"null",
    a4:"null",
    kaitou:"null",
    k:"null",
    cnt:0,
    cntans:0,
    renzoku:0
}


function getrandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
  }

  function main(){
    let q,a,i=0,a1,k=0,tmpq,q1;
    let c=[];
    let cnt=0;
    var m,n;
    bun.k=0;
    m=0;
    n=0;
    if (document.debug.debug.checked) {
      c[cnt]=5116;
      cnt++;
    } 
    if (document.c1.no1.checked) {
      c[cnt]=1;
      cnt++;
    } 
    if (document.c1.no2.checked) {
      c[cnt]=2;
      cnt++;
    } 
    if(cnt===0){
      q=`範囲を選択してね！`;
      btn1.disabled = false;
      bun.k=1;
    }else{
    n=c[getrandom(0,cnt)];
    switch(n){  //q=問題,a1=答え(1つめ),a2=答え(2つめ)...,k=答えの数
        case 1:
            m=getrandom(1,20);
            switch(m){
                case 1:q=`DNSにおいて「www.example.com → 93.184.216.34」のような変換を何と呼ぶか？`;a=`正引き`;s1=`逆引き`;s2=`フォワーディング`;s3=`トンネリング`;atxt=``;break;
                case 2:q=`次のうち「汎用トップドメイン(gTLD)」に分類されるものはどれか？`;a=`.com`;s1=`.jp`;s2=`.edu`;s3=`.nagoya`;atxt=``;break;
                case 3:q=`DNSキャッシュボイズニングに関する記述として正しいものはどれか？`;a=`偽の応答がキャッシュに保存されることで多数のユーザーが被害に遭う`;s1=`DNSのIPアドレスは暗号化されているため安全である`;s2=`キャッシュポイズニングはDoHによって積極的に行われる攻撃である`;s3=`TCPのみを使用するDNSでは発生しない`;atxt=``;break;
                case 4:q=`「xxxx.local」でアクセスでき、DNSサーバーが不要な名前解決方式は？`;a=`mDNS`;s1=`DDNS`;s2=`DNSSEC`;s3=`DHCP`;atxt=``;break;
                case 5:q=`DNSにおいて、以下の説明に当てはまる用語は何か？「www.bank.comへのアクセスに対して偽のDNS応答を送信し、偽サイトに誘導する攻撃」`;a=`DNSスプーフィング`;s1=`DNSリレー`;s2=`DNS暗号化`;s3=`DNSルーティング`;atxt=``;break;
                case 6:q=`ルーティングとはどのような仕組みか？`;a=`最適な経路を選んでIPパケットを転送する仕組み`;s1=`パケットを圧縮して送信する仕組み`;s2=`データの暗号化を行う仕組み`;s3=`通信内容を検査してフィルタする仕組み`;atxt=``;break;
                case 7:q=`自律システム(AS)の特徴として正しいものは？`;a=`独自のルールでネットワークを運用できる単位`;s1=`グローバルIPを一括管理している単位`;s2=`暗号化通信の管理単位`;s3=`必ず複数のプロバイダを持つ単位`;atxt=``;break;
                case 8:q=`RIPルーティングプロトコルの「最適なルート」とはどのように決まるか？`;a=`ノード数が少ないルート`;s1=`経路の帯域幅が最大のルート`;s2=`パケットのサイズが小さい経路`;s3=`ホップ数が最小の経路`;atxt=``;break;
                case 9:q=`OSPFの特徴として正しくないものはどれか？`;a=`ホップ数だけで経路を決める`;s1=`リンクステート型のルーティングプロトコル`;s2=`RIPよりも収束速度が速い`;s3=`Dijkstraアルゴリズムを用いて最短経路を決定する`;atxt=``;break;
                case 10:q=`ダイナミックルーティングの特徴として正しいものは？`;a=`自動的にルーティングテーブルを作成・更新する`;s1=`管理者が手動で設定を行う`;s2=`小規模ネットワークに限定される`;s3=`ネットワークの状態に関係なく固定経路を使用する`;atxt=``;break;
                case 11:q=`TCPとUDPの違いとして正しいものはどれか？`;a=`TCPは順序と信頼性を保証し、UDPは高速性を重視する`;s1=`TCPは速さを重視し、UDPは信頼性を重視する`;s2=`TCPは音声通話に適し、UDPはファイル転送に適する`;s3=`UDPは3ウェイハンドシェイクを行うが、TCPは行わない`;atxt=``;break;
                case 12:q=`次のうち、ウェルノウンポート番号に該当するのは？`;a=`80`;s1=`12345`;s2=`8080`;s3=`65000`;atxt=``;break;
                case 13:q=`TCPヘッダの「ACKビット」の主な役割は？`;a=`データが届いたことを確認する`;s1=`相手の接続要求を拒否するためのフラグ`;s2=`ポート番号を暗号化する`;s3=`通信を終了する指示を出す`;atxt=``;break;
                case 14:q=`ポート番号「443」が使用されるプロトコルはどれか？`;a=`HTTPS`;s1=`HTTP`;s2=`SMTP`;s3=`DNS`;atxt=``;break;
                case 15:q=`次のうち、TCPの3ウェイハンドシェイクに含まれる順番として正しいものは？`;a=`SYN→SYN-ACK→ACK`;s1=`SYN→SYN-ACK-FIN`;s2=`SYN→ACK→SYN-ACK`;s3=`ACK→SYN-ACK→SYN`;atxt=``;break;
                case 16:q=`クライアントサーバーシステムにおける「クライアント」の役割として正しいものはどれか？`;a=`サーバーに対してリクエストを送る`;s1=`情報の保存・管理を行う`;s2=`リクエストを受けてデータを提供する`;s3=`サーバのポート番号を割り当てる`;atxt=``;break;
                case 17:q=`SSH通信の主な特徴として誤っているものはどれか？`;a=`TCPのポート番号23番を使う`;s1=`通信内容は暗号化される`;s2=`公開鍵認証を利用できる`;s3=`サーバのリモート管理に使われる`;atxt=``;break;
                case 18:q=`Telnetの欠点は何か？`;a=`認証情報や通信内容が暗号化されず平文で送られる`;s1=`データ圧縮ができない`;s2=`通信速度が遅い`;s3=`サーバ側に設定が不要`;atxt=``;break;
                case 19:q=`SSHトンネルの特徴として正しいものはどれか？`;a=`別のアプリケーションの通信をSSHのポートで安全に転送できる`;s1=`VPNに比べて必ずしも安全ではない`;s2=`ファイアウォールを超えて通信できない`;s3=`特定のポートに限定される`;atxt=``;break;
                case 20:q=`P2P通信の利点として適切なものは？`;a=`特定の端末に依存しない分散型で障害に強い`;s1=`中央サーバを経由するため管理が簡単`;s2=`特定ノードに負荷が集中する`;s3=`クライアントとサーバを明確に分離できる`;atxt=``;break;
            }
            break;
        case 2:
          m = getrandom(1, 20);
          switch (m) {
              case 1: q = `SMTPの特徴として正しいものはどれか？<br>A. メールをサーバからダウンロードしてクライアントで管理するプロトコル<br>B. メールの送信時に使用され、通常TCPのポート25を使用する<br>C. サーバ上でメールを管理し、どこからでもアクセス可能にする<br>D. メールの内容を暗号化するための拡張プロトコル`; a1 = `B`; k = 1; break;
              case 2: q = `POP3の特徴として最も適切なものはどれか？<br>A. メールは常にサーバ上に保管される<br>B. 送信時に使われるプロトコルである<br>C. メールを一度ダウンロードすると、通常はサーバから削除される<br>D. メールクライアントとサーバ間の暗号化が必須である`; a1 = `C`; k = 1; break;
              case 3: q = `IMAP4を使用するメリットとして最も適切なものはどれか？<br>A. メールソフトが不要になる<br>B. すべてのメールがローカルでしか管理できない<br>C. 複数端末から同じメールにアクセスできる<br>D. メールの送信が高速になる`; a1 = `C`; k = 1; break;
              case 4: q = `電子メールのセキュリティに関する説明として誤っているものはどれか？<br>A. SMTPは認証がないため、なりすましが可能<br>B. POP3は暗号化通信を標準で必ず行う<br>C. S/MIMEはメール本体の暗号化に用いられる<br>D. SSL/TLSはクライアントとサーバ間の通信を暗号化する`; a1 = `B`; k = 1; break;
              case 5: q = `Web（WWW）の説明として最も適切なものはどれか？<br>A. インターネットのハードウェアを制御するための仕組み<br>B. クラウドストレージの一種で、ファイル共有を行う仕組み<br>C. インターネット上でハイパーテキストを用いて情報をやり取りする仕組み<br>D. IPアドレスの割り当てを管理するシステム`; a1 = `C`; k = 1; break;
              case 6: q = `HTTPに関する説明として正しいものはどれか？<br>A. メールの送受信のためのプロトコルである<br>B. サーバからのデータ送信を禁止する<br>C. 主にUDPプロトコルを使用する<br>D. クライアントのリクエストに対して、サーバがレスポンスを返す`; a1 = `D`; k = 1; break;
              case 7: q = `HTMLで画像を表示するための記述として最も適切なのはどれか？<br>A. &lt;html image="cat.png"&gt;猫の写真&lt;/html&gt;<br>B. &lt;image src="cat.png"&gt;猫の写真&lt;/image&gt;<br>C. &lt;img src="cat.png" alt="かわいい猫の画像"&gt;<br>D. &lt;pic link="cat.png"&gt;猫の写真&lt;/pic&gt;`; a1 = `C`; k = 1; break;
              case 8: q = `絶対パスの特徴として正しいものはどれか？<br>A. 作業しているフォルダによってパスが変わる<br>B. 現在地からの相対的な道順<br>C. 常に同じ場所を示すパス<br>D. HTMLでは使えない`; a1 = `C`; k = 1; break;
              case 9: q = `Cookieに関する説明として正しいものはどれか？<br>A. Webページの見た目を装飾するための仕組み<br>B. ブラウザがサーバから受け取り、次回のアクセス時に送り返す情報<br>C. ブラウザのキャッシュ情報を暗号化する方式<br>D. サーバのハードウェア構成を保存するための技術`; a1 = `B`; k = 1; break;
              case 10: q = `HTTPS通信で使用されるプロトコルはどれか？<br>A. FTP<br>B. SMTP<br>C. TLS<br>D. POP3`; a1 = `C`; k = 1; break;
              case 11: q = `TLS 1.3 の特徴として適切なものはどれか？<br>A. 通信開始までに4回のやり取りが必要<br>B. 古い暗号技術の互換性を重視している<br>C. 低遅延で安全性の高い通信が可能<br>D. 主に電子メールの送受信に使用される`; a1 = `C`; k = 1; break;
              case 12: q = `電子署名に関する説明として正しいものはどれか？<br>A. 送信者の「公開鍵」で署名を生成する<br>B. 電子署名はパスワードでしか解除できない<br>C. 第三者（認証局）の署名で正当性を保証する<br>D. 電子署名を使うとWebページの表示が早くなる`; a1 = `C`; k = 1; break;
              case 13: q = `WSL（Windows Subsystem for Linux）に関する説明として正しいものはどれか？<br>A. WindowsでLinuxのウィンドウを表示するためのグラフィックソフト<br>B. LinuxのファイルをWindowsに変換するためのアプリケーション<br>C. Windows上でLinux環境を実行するための仕組み<br>D. Windows専用のメール送受信プロトコル`; a1 = `C`; k = 1; break;
              case 14: q = `WSLがネットワーク学習に適している理由として適切でないものはどれか？<br>A. Linuxの定番ネットワークツールが使える<br>B. 仮想マシンよりも高速かつ軽量である<br>C. WindowsとMac間の通信を直接制御できる<br>D. Dockerと仮想ネットワークの基礎を学べる`; a1 = `C`; k = 1; break;
              case 15: q = `vEthernetインターフェースの主な役割として正しいものはどれか？<br>A. LANケーブル接続時に自動でインターネットに接続する<br>B. 仮想マシンとホスト間でのネットワーク通信を中継する<br>C. Webブラウザのキャッシュを管理する<br>D. Bluetooth機器との通信を担当する仮想NIC`; a1 = `B`; k = 1; break;
              case 16: q = `次のコマンドの目的として正しいものはどれか？<br>sudo ip addr add 192.168.1.100/24 dev eth0<br><br>A. eth0 インターフェースに静的IPアドレスを割り当てる<br>B. eth0 インターフェースを削除する<br>C. ルート証明書を追加する<br>D. DNSの設定を初期化する`; a1 = `A`; k = 1; break;
          }
          break;
        case 5116:
            m=1
            switch(m){
                case 1:
                    q=`日本で一番大きい山は？`;     //問題文
                    atxt='';                        //atxt 答えの前に書く何か
                    a=`富士山`;                     //a 答え
                    s1=`岡山`;                      //s1~s3 答えじゃない選択肢
                    s2=`御嶽山`;
                    s3=`キラウエア火山`;
                    break;
            }
            break;
        
          default:
          main();
          break;
    }
}
  if(q===void 0){
    return;
  }
  //k=getrandom(1,10);
    let tcnt=1;
    var randoms=[];
    for(i = 1; i <= 4; i++){
        while(true){
          var tmp = getrandom(1, 4);
          if(!randoms.includes(tmp)){
            randoms.push(tmp);
            break;
          }
        }
      }
      console.log(randoms);
    for(i=0;i<=3;++i){
        tmp=randoms[i];
        switch(tcnt){
            case 1:
                switch(tmp){
                    case 1:
                        tmpq=`<button type="button" id="btn11" class="btna">ア</button>${a}<br>`;
                        bun.answer=1;
                        break;
                    case 2:
                        tmpq=`<button type="button" id="btn11" class="btna">ア</button>${s1}<br>`; 
                        break;
                    case 3:
                        tmpq=`<button type="button" id="btn11" class="btna">ア</button>${s2}<br>`; 
                        break; 
                    case 4:
                        tmpq=`<button type="button" id="btn11" class="btna">ア</button>${s3}<br>`; 
                        break;
                    default:
                        console.log(`1 エラー`);
                }
                break;
            case 2:
                switch(tmp){
                    case 1:
                        tmpq=`${tmpq}<button type="button" id="btn12" class="btna">イ</button>${a}<br>`;
                        bun.answer=2;
                        break;
                    case 2:
                        tmpq=`${tmpq}<button type="button" id="btn12" class="btna">イ</button>${s1}<br>`; 
                        break;
                    case 3:
                        tmpq=`${tmpq}<button type="button" id="btn12" class="btna">イ</button>${s2}<br>`; 
                        break; 
                    case 4:
                        tmpq=`${tmpq}<button type="button" id="btn12" class="btna">イ</button>${s3}<br>`; 
                        break;
                        default:
                            console.log(`2 エラー`);
                }
                break; 
            case 3:
                switch(tmp){
                    case 1:
                        tmpq=`${tmpq}<button type="button" id="btn13" class="btna">ウ</button>${a}<br>`;
                        bun.answer=3;
                        break;
                    case 2:
                        tmpq=`${tmpq}<button type="button" id="btn13" class="btna">ウ</button>${s1}<br>`; 
                        break;
                    case 3:
                        tmpq=`${tmpq}<button type="button" id="btn13" class="btna">ウ</button>${s2}<br>`; 
                        break; 
                    case 4:
                        tmpq=`${tmpq}<button type="button" id="btn13" class="btna">ウ</button>${s3}<br>`; 
                        break;
                        default:
                            console.log(`3 エラー`);
                }
                break; 
            case 4:
                switch(tmp){
                    case 1:
                        tmpq=`${tmpq}<button type="button" id="btn14" class="btna">エ</button>${a}<br>`;
                        bun.answer=4;
                        break;
                    case 2:
                        tmpq=`${tmpq}<button type="button" id="btn14" class="btna">エ</button>${s1}<br>`; 
                        break;
                    case 3:
                        tmpq=`${tmpq}<button type="button" id="btn14" class="btna">エ</button>${s2}<br>`; 
                        break; 
                    case 4:
                        tmpq=`${tmpq}<button type="button" id="btn14" class="btna">エ</button>${s3}<br>`; 
                        break;
                        default:
                            console.log(`4 エラー`);
                }
                break; 
            }
            tcnt++;
        }
    bun.kaitou=`${atxt}<br>${tmpq}`;
    switch(bun.answer){
        case 1:
            bun.kotae= `${q}<br>答えは:ア${a}`;
            break;
        case 2:
            bun.kotae= `${q}<br>答えは:イ${a}`;
            break;     
        case 3:
            bun.kotae= `${q}<br>答えは:ウ${a}`;
            break;  
        case 4:
            bun.kotae= `${q}<br>答えは:エ${a}`;
            break;
        default:
            main();
    }
    bun.a1=`${a}`;
    bun.k=1;
  bun.cnt++;
  document.getElementById("form1").innerHTML = bun.kaitou;
  let message = `${q}<br><br>`
  var sampleArea = document.getElementById("console");
  sampleArea.innerHTML = message;
  return bun;
}

  function ans(){
    var cntc,cnta,kcnt,anscnt,ansper,ansperp,renzokup;
    kcnt=1;
    cnta=0;
    if(bun.answer==bun.kakunin){
        bun.kotae=`${bun.kotae}<br>正解！`;
        bun.renzoku++;
        bun.cntans++;
    }else{
        bun.kotae=`${bun.kotae}<br>不正解... `;
        bun.renzoku=0;
    }
    //bun.cntans=(Math.floor( (cnta/kcnt) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 )) +Number(bun.cntans);     //cnta/kcntを少数第二位まで計算してからbun.cntansに足す
    ansper=Math.floor( ((Number(bun.cntans)/bun.cnt)*100) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;       //(bun.cntans/bun.cnt)*100を少数第一位まで計算(正解率の計算)
    ansperp=`正解率:${ansper}%`;
    cntc=`現在解いた問題数:${bun.cnt}問`;
    anscnt=`内正解数:${bun.cntans}問`;
    renzokup=`連続正解数:${bun.renzoku}問`;
    //ここまででk4(4番目の解答欄)に入力されたの正誤判定をしてる
    document.getElementById("console").innerHTML = bun.kotae;   //printfみたいな奴で答えを吹き出し内に表示してる
    document.getElementById("cnt").innerHTML = cntc;   //printfみたいな奴で解いた問題数を表示してる    
    document.getElementById("cntans").innerHTML = anscnt;   //printfみたいな奴で正解数を表示してる    
    document.getElementById("cntansper").innerHTML = ansperp;   //printfみたいな奴で正解率を表示してる   
    document.getElementById("renzoku").innerHTML = renzokup;   //printfみたいな奴で正解率を表示してる  
    return bun;
  }

$(function (){
    $(document).on('click', '#btn11', function () {
        btn1.disabled = false;
        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn14.disabled = true;
        bun.kakunin=1;
        ans();
    });

    $(document).on('click', '#btn12', function () {
        btn1.disabled = false;
        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn14.disabled = true;
        bun.kakunin=2;
        ans();
    });

    $(document).on('click', '#btn13', function () {
        btn1.disabled = false;
        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn14.disabled = true;
        bun.kakunin=3;
        ans();
    });

    $(document).on('click', '#btn14', function () {
        btn1.disabled = false;
        btn11.disabled = true;
        btn12.disabled = true;
        btn13.disabled = true;
        btn14.disabled = true;
        bun.kakunin=4;
        ans();
    });

  $("#btn1").on("click", function()  {
    btn1.disabled = true;
    main();
  });
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
        ans();
      }
    }
  }

  document.getElementById("form1").onkeypress = (e) => {
  // form1に入力されたキーを取得
  const key = e.keyCode || e.charCode || 0;
  // 13はEnterキーのキーコード
  if (key == 13) {
    // アクションを行わない
    e.preventDefault();
  }
}
  
$(function() {
  // 1. 「全選択」する
  $('#all').on('click', function() {
    $("input[name='pgbox']").prop('checked', false);
  });

  $('#alls').on('click',function(){
    $("input[name='pgbox']").prop('checked', true);
  })

  // 2. 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='pgbox']").on('click', function() {
    if ($('#c1 :checked').length == $('#c1 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#all').prop('checked', false);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#all').prop('checked', true);
    }
  });
});