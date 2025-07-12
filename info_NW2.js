let bun = {
    q: "null",
    kotae: "null",
    a1: "null",
    a2: "null",
    a3: "null",
    a4: "null",
    a5: "null",
    kaitou: "null",
    k: "null",
    log: "null",
    logcnt: 0,
    cnt: 0,
    cntans: 0,
    renzoku: 0,
    max: 0
}


function getrandom(min, max) {
    var random = Math.floor(Math.random() * (max + 1 - min)) + min;

    return random;
}

function main() {
    let q, a, i = 0, a1, k = 0, tmpq, ql;
    let c = [];
    let cnt = 0;
    var m, n;
    bun.k = 0;
    m = 0;
    n = 0;
    if (document.debug.debug.checked) {
        c[cnt] = 5116;
        cnt++;
    }
    if (document.form31.no1.checked) {
        c[cnt] = 1;
        cnt++;
    }
    if (document.form31.no2.checked) {
        c[cnt] = 2;
        cnt++;
    }
    if (cnt == 0) {
        alert("範囲を選択してね！");
        btn2.disabled = true;
        btn1.disabled = false;
        bun.k = 1;
        return;
    } else {
        n = c[getrandom(0, cnt)];
        switch (n) {  //q=問題,a1=答え(1つめ),a2=答え(2つめ)...,k=答えの数
            //答え完全OK
            case 1:
                m = getrandom(1, 20);
                switch (m) {
                    case 1: q = `DNSにおいて「www.example.com → 93.184.216.34」のような変換を何と呼ぶか？<br>A.逆引き<br>B.フォワーディング<br>C.正引き<br>D.トンネリング`; a1 = `C`; k = 1; break;
                    case 2: q = `次のうち「汎用トップドメイン(gTLD)」に分類されるものはどれか？<br>A. .jp<br>B. .edu<br>C. .nagoya <br>D. .com`; a1 = `D`; k = 1; break;
                    case 3: q = `DNSキャッシュボイズニングに関する記述として正しいものはどれか？<br>A. DNSのIPアドレスは暗号化されているため安全である<br>B.偽の応答がキャッシュに保存されることで多数のユーザーが被害に遭う<br>C.キャッシュポイズニングはDoHによって積極的に行われる攻撃である<br>D.TCPのみを使用するDNSでは発生しない`; a1 = `B`; k = 1; break;
                    case 4: q = `「xxxx.local」でアクセスでき、DNSサーバーが不要な名前解決方式は？<br>A.DDNS<br>B.mDNS<br>C.DNSSEC<br>D.DHCP`; a1 = `B`; k = 1; break;
                    case 5: q = `DNSにおいて、以下の説明に当てはまる用語は何か？<br>「www.bank.comへのアクセスに対して偽のDNS応答を送信し、偽サイトに誘導する攻撃」<br>A.DNSリレー<br>B.DNSスプーフィング<br>C.DNS暗号化<br>D.DNSルーティング`; a1 = `B`; k = 1; break;
                    case 6: q = `ルーティングとはどのような仕組みか？<br>A.パケットを圧縮して送信する仕組み<br>B.データの暗号化を行う仕組み<br>C.最適な経路を選んでIPパケットを転送する仕組み<br>D.通信内容を検査してフィルタする仕組み`; a1 = `C`; k = 1; break;
                    case 7: q = `自律システム(AS)の特徴として正しいものは？<br>A.グローバルIPを一括管理している単位<br>B.独自のルールでネットワークを運用できる単位<br>C.暗号化通信の管理単位<br>D.必ず複数のプロバイダを持つ単位`; a1 = `B`; k = 1; break;
                    case 8: q = `RIPルーティングプロトコルの「最適なルート」とはどのように決まるか？<br>A.経路の帯域幅が最大のルート<br>B.ノード数が少ないルート<br>C.パケットのサイズが小さい経路<br>D.ホップ数が最小の経路`; a1 = `B`; k = 1; break;
                    case 9: q = `OSPFの特徴として正しくないものはどれか？<br>A.リンクステート型のルーティングプロトコル<br>B.RIPよりも収束速度が速い<br>C.ホップ数だけで経路を決める<br>D.Dijkstraアルゴリズムを用いて最短経路を決定する`; a1 = `C`; k = 1; break;
                    case 10: q = `ダイナミックルーティングの特徴として正しいものは？<br>A.管理者が手動で設定を行う<br>B.小規模ネットワークに限定される<br>C.自動的にルーティングテーブルを作成・更新する<br>D.ネットワークの状態に関係なく固定経路を使用する`; a1 = `C`; k = 1; break;
                    case 11: q = `TCPとUDPの違いとして正しいものはどれか？<br>A,TCPは速さを重視し、UDPは信頼性を重視する<br>B.TCPは音声通話に適し、UDPはファイル転送に適する<br>C.TCPは順序と信頼性を保証し、UDPは高速性を重視する<br>D.UDPは3ウェイハンドシェイクを行うが、TCPは行わない`; a1 = `C`; k = 1; break;
                    case 12: q = `次のうち、ウェルノウンポート番号に該当するのは？<br>A.12345<br>B.8080<br>C.80<br>D.65000`; a1 = `C`; k = 1; break;
                    case 13: q = `TCPヘッダの「ACKビット」の主な役割は？<br>A.相手の接続要求を拒否するためのフラグ<br>B.ポート番号を暗号化する<br>C.データが届いたことを確認する<br>D.通信を終了する指示を出す`; a1 = `C`; k = 1; break;
                    case 14: q = `ポート番号「443」が使用されるプロトコルはどれか？<br>A.HTTP<br>B.SMTP<br>C.HTTPS<br>D.DNS`; a1 = `C`; k = 1; break;
                    case 15: q = `次のうち、TCPの3ウェイハンドシェイクに含まれる順番として正しいものは？<br>A.SYN→SYN-ACK-FIN<br>B.SYN→ACK→SYN-ACK<br>C.SYN→SYN-ACK→ACK<br>D.ACK→SYN-ACK→SYN`; a1 = `C`; k = 1; break;
                    case 16: q = `クライアントサーバーシステムにおける「クライアント」の役割として正しいものはどれか？<br>A.情報の保存・管理を行う<br>B.リクエストを受けてデータを提供する<br>C.サーバーに対してリクエストを送る<br>D.サーバのポート番号を割り当てる`; a1 = `C`; k = 1; break;
                    case 17: q = `SSH通信の主な特徴として誤っているものはどれか？<br>A.通信内容は暗号化される<br>B.TCPのポート番号23番を使う<br>C.公開鍵認証を利用できる<br>D.サーバのリモート管理に使われる`; a1 = `B`; k = 1; break;
                    case 18: q = `Telnetの欠点は何か？<br>A.データ圧縮ができない<br>B.通信速度が遅い<br>C.認証情報や通信内容が暗号化されず平文で送られる<br>D.サーバ側に設定が不要`; a1 = `C`; k = 1; break;
                    case 19: q = `SSHトンネルの特徴として正しいものはどれか？<br>A.VPNに比べて必ずしも安全ではない<br>B.ファイアウォールを超えて通信できない<br>C.特定のポートに限定される<br>D.別のアプリケーションの通信をSSHのポートで安全に転送できる`; a1 = `D`; k = 1; break;
                    case 20: q = `P2P通信の利点として適切なものは？<br>A.中央サーバを経由するため管理が簡単<br>B.特定ノードに負荷が集中する<br>C.クライアントとサーバを明確に分離できる<br>D.特定の端末に依存しない分散型で障害に強い`; a1 = `D`; k = 1; break;
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

            default:
                main()
                break;
        }
    }
    if (q === void 0) {
        return;
    }
    bun.q = `${q}`
    switch (k) {//解答欄の数を把握して表示するためのswitch-case文
        case 1:
            bun.kaitou = `(1)<input type="text" class="txt" id="input-message1"><span class="utan" id="output-message1"> </span><br>`
            bun.kotae = `${q}<br>答えは:${a1}`;
            bun.a1 = `${a1}`;
            bun.k = 1;
            break;
        case 2:
            bun.kaitou = `(1)<input type="text" class="txt"  id="input-message1"><span class="utan" id="output-message1"> </span><br>
      (2)<input type="text" class="txt"  id="input-message2"><span class="utan" id="output-message2"> </span><br>`;
            bun.kotae = `${q}<br>答えは:(1)${a1},(2)${a2}`;
            bun.a1 = `${a1}`;
            bun.a2 = `${a2}`;
            bun.k = 2;
            break;
        case 3:
            bun.kaitou = `(1)<input type="text" class="txt"  id="input-message1"><span class="utan" id="output-message1"> </span><br>
      (2)<input type="text" class="txt"  id="input-message2"><span class="utan" id="output-message2"> </span><br>
      (3)<input type="text" class="txt"  id="input-message3"><span class="utan" id="output-message3"> </span><br>`;
            bun.kotae = `${q}<br>答えは:(1)${a1},(2)${a2},(3)${a3}`;
            bun.a1 = `${a1}`;
            bun.a2 = `${a2}`;
            bun.a3 = `${a3}`;
            bun.k = 3;
            break;
        case 4:
            bun.kaitou = `(1)<input type="text" class="txt"  id="input-message1"><span class="utan" id="output-message1"> </span><br>
      (2)<input type="text" class="txt"  id="input-message2"><span class="utan" id="output-message2"> </span><br>
      (3)<input type="text" class="txt"  id="input-message3"><span class="utan" id="output-message3"> </span><br>
      (4)<input type="text" class="txt"  id="input-message4"><span class="utan" id="output-message4"> </span><br>`;
            bun.kotae = `${q}<br>答えは:(1)${a1},(2)${a2},(3)${a3},(4)${a4}`;
            bun.a1 = `${a1}`;
            bun.a2 = `${a2}`;
            bun.a3 = `${a3}`;
            bun.a4 = `${a4}`;
            bun.k = 4;
            break;
        case 5:
            bun.kaitou=`(1)<input type="text" class="txt"  id="input-message1"><span class="utan" id="output-message1"> </span><br>
            (2)<input type="text" class="txt"  id="input-message2"><span class="utan" id="output-message2"> </span><br>
            (3)<input type="text" class="txt"  id="input-message3"><span class="utan" id="output-message3"> </span><br>
            (4)<input type="text" class="txt"  id="input-message4"><span class="utan" id="output-message4"> </span><br>
            (5)<input type="text" class="txt"  id="input-message5"><span class="utan" id="output-message5"> </span><br>`;
            bun.kotae= `${q}<br>answers:(1)${a1},(2)${a2},(3)${a3},(4)${a4},(5)${a5}`;
            bun.a1=`${a1}`;
            bun.a2=`${a2}`;
            bun.a3=`${a3}`;
            bun.a4=`${a4}`;
            bun.a5=`${a5}`;
            bun.k=5;
            break;
        case 11:
            var randoms = [];
            bun.kaitou = `(1)<input type="text" class="txt"  id="input-message1"><span class="utan" id="output-message1"> </span><br>`
            bun.a1 = `${a1}`;
            bun.k = 1;
            tmpq = `${q}<br>(`;
            max = qq.length;
            for (i = 0; i <= max; ++i) {
                while (true) {
                    var tmp = getrandom(0, max);
                    if (!randoms.includes(tmp)) {
                        randoms.push(tmp);
                        if (qq[tmp] !== void 0) {
                            tmpq = `${tmpq}${qq[tmp]}/`;
                        }
                        break;
                    }
                }
            }
            q = `${tmpq})`;
            bun.kotae = `${q}<br>答えは:${a1}`;
            break;
        
        default:
            main();
            break;
    }
    bun.cnt++;
    document.getElementById("form1").innerHTML = bun.kaitou;
    let message = `${q}<br><br>`
    var sampleArea = document.getElementById("console");
    sampleArea.innerHTML = message;
    document.getElementById("input-message1").focus();
    return bun;
}

function ans() {
    let utan1, utan2, utan3, utan4, utan5;
    let k1, k2, k3, k4, k5;
    var cntc, cnta, kcnt, anscnt, ansper, ansperp, renzokup, maxup;
    kcnt = 1;
    cnta = 0;
    //scanfみたいなやつ始まり
    const textbox = document.getElementById("input-message1");
    k1 = textbox.value;
    kcnt = 1;
    //scanfみたいなやつ終わり(k1に入力されたものが格納されてる)
    if (bun.k >= 2) {
        const textbox = document.getElementById("input-message2");
        k2 = textbox.value;
        kcnt = 2;
    }
    if (bun.k >= 3) {
        const textbox = document.getElementById("input-message3");
        k3 = textbox.value;
        kcnt = 3;
    }
    if (bun.k >= 4) {
        const textbox = document.getElementById("input-message4");
        k4 = textbox.value;
        kcnt = 4;
    }
    if(bun.k>=5){
        const textbox = document.getElementById("input-message5");
        k5 = textbox.value;
        kcnt=5;
      }
    //ここまでscanfみたいなやつでk1~k4までの値を読み取ってる(k2~k4は答えが複数個ある場合のみ)
    if (k1.replace(/\s+/g, "").toUpperCase() === bun.a1.replace(/\s+/g, "").toUpperCase()) {    //空白とかを無視して判断
        utan1 = `<div class="maru">○</div>`;
        cnta = cnta + 1;
    } else {
        utan1 = `<div class="batu">×</div>`;
    }
    document.getElementById("output-message1").innerHTML = utan1;
    //ここまででk1(1番目の解答欄)に入力されたの正誤判定をしてる
    if (bun.k >= 2) {
        if (k2.replace(/\s+/g, "").toUpperCase() === bun.a2.replace(/\s+/g, "").toUpperCase()) {
            utan2 = `<div class="maru">○</div>`;
            cnta++;
        } else {
            utan2 = `<div class="batu">×</div>`;
        }
        document.getElementById("output-message2").innerHTML = utan2;
    }
    //ここまででk2(2番目の解答欄)に入力されたの正誤判定をしてる
    if (bun.k >= 3) {
        if (k3.replace(/\s+/g, "").toUpperCase() === bun.a3.replace(/\s+/g, "").toUpperCase()) {
            utan3 = `<div class="maru">○</div>`;
            cnta++;
        } else {
            utan3 = `<div class="batu">×</div>`;
        }
        document.getElementById("output-message3").innerHTML = utan3;
    }
    //ここまででk3(3番目の解答欄)に入力されたの正誤判定をしてる
    if (bun.k >= 4) {
        if (k4.replace(/\s+/g, "").toUpperCase() === bun.a4.replace(/\s+/g, "").toUpperCase()) {
            utan4 = `<div class="maru">○</div>`;
            cnta++;
        } else {
            utan4 = `<div class="batu">×</div>`;
        }
        document.getElementById("output-message4").innerHTML = utan4;
    }
    if(bun.k>=5){
        if(k5.replace(/\s+/g, "").toUpperCase()===bun.a5.replace(/\s+/g, "").toUpperCase()){
          utan5 = `<div class="maru">○</div>`;
          cnta++;
        }else{
          utan5 = `<div class="batu">×</div>`;
        }
        document.getElementById("output-message5").innerHTML = utan5;
      }
    console.log(cnta);
    if ((cnta / kcnt) === 1) {
        bun.renzoku++;
    } else {
        if (bun.max < bun.renzoku) {
            bun.max = bun.renzoku;
        }
        bun.renzoku = 0;
    }
    bun.cntans = (cnta / kcnt) + bun.cntans;
    console.log(bun.cntans);
    //bun.cntans=(Math.floor( (cnta/kcnt) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 )) +Number(bun.cntans);     //cnta/kcntを少数第二位まで計算してからbun.cntansに足す
    ansper = Math.floor(((Number(bun.cntans) / bun.cnt) * 100) * Math.pow(10, 1)) / Math.pow(10, 1);       //(bun.cntans/bun.cnt)*100を少数第一位まで計算(正解率の計算)
    ansperp = `正解率:${ansper}%`;
    cntc = `現在解いた問題数:${bun.cnt}問`;
    anscnt = `内正解数:${bun.cntans}問`;
    renzokup = `連続正解数:${bun.renzoku}問`;
    maxup = `最高連続正解数:${bun.max}問!`;

    var strtmp = `${bun.q}`
    bun.q = strtmp.replace(`<br>`, ` `)
    if (bun.log === 'null') {    //過去問表示の設定(bun.log)
        bun.logcnt++
        if (bun.k === 1) {
            bun.log = `${utan1}1:${bun.q} 答えは${bun.a1}<br>`
        } else if (bun.k === 2) {
            bun.log = `${utan1}${utan2}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2}<br>`
        } else if (bun.k === 3) {
            bun.log = `${utan1}${utan2}${utan3}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3}<br>`
        } else if (bun.k === 4) {
            bun.log = `${utan1}${utan2}${utan3}${utan4}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3} 4.${bun.a4}<br>`
        } else if (bun.k === 5) {
            bun.log = `${utan1}${utan2}${utan3}${utan4}${utan5}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3} 4.${bun.a4} 5.${bun.a5}<br>`
        }
    } else {
        bun.logcnt++
        if (bun.k === 1) {
            bun.log = `${bun.log}${utan1}${bun.logcnt}:${bun.q} 答えは${bun.a1}<br>`
        } else if (bun.k === 2) {
            bun.log = `${bun.log}${utan1}${utan2}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2}<br>`
        } else if (bun.k === 3) {
            bun.log = `${bun.log}${utan1}${utan2}${utan3}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3}<br>`
        } else if (bun.k === 4) {
            bun.log = `${bun.log}${utan1}${utan2}${utan3}${utan4}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3} 4.${bun.a4}<br>`
        } else if (bun.k === 5) {
            bun.log = `${bun.log}${utan1}${utan2}${utan3}${utan4}${utan5}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3} 4.${bun.a4} 5.${bun.a5}<br>`
        }
    }
    //ここまででk4(4番目の解答欄)に入力されたの正誤判定をしてる
    document.getElementById("console").innerHTML = bun.kotae;   //printfみたいな奴で答えを吹き出し内に表示してる
    document.getElementById("cnt").innerHTML = cntc;   //printfみたいな奴で解いた問題数を表示してる    
    document.getElementById("cntans").innerHTML = anscnt;   //printfみたいな奴で正解数を表示してる    
    document.getElementById("cntansper").innerHTML = ansperp;   //printfみたいな奴で正解率を表示してる   
    document.getElementById("renzoku").innerHTML = renzokup;   //printfみたいな奴で正解率を表示してる  
    document.getElementById("maxq").innerHTML = maxup;   //printfみたいな奴で正解率を表示してる  
    document.getElementById("log").innerHTML = bun.log;   //printfみたいな奴で今まで出てきた問題を表示してる     
    return bun;
}

/*$("#btn1").on("click", function () {
    btn1.disabled = true;
    btn2.disabled = false;
    main();
    return;
});
$("#btn2").on("click", function () {
    btn2.disabled = true;
    btn1.disabled = false;
    ans();
});
*/
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
btn1.addEventListener("click", () => {
    btn1.disabled = true;
    btn2.disabled = false;
    main();
});

btn2.addEventListener("click",()=>{
    btn2.disabled = true;
    btn1.disabled = false;
    ans();
});



window.document.onkeydown = function (event) {
    if (event.key === 'Enter') {
        if (btn1.disabled === false) {
            btn1.disabled = true;
            btn2.disabled = false;
            main();
        } else {
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

$(function () {
    // 1. 「全選択」する

    $('#mall').on('click', function () {
        $("input[name='cbox']").prop('checked', false);
        $("input[name='31box']").prop('checked', false);
        $("input[name='32box']").prop('checked', false);
        $("input[name='33box']").prop('checked', false);
        $("input[name='34box']").prop('checked', false);
        $("input[name='35box']").prop('checked', false);
    });

    $('#all').on('click', function () {
        $("input[name='cbox']").prop('checked', false);
    });

    $('#all31').on('click', function () {
        $("input[name='31box']").prop('checked', false);
    });

    $('#all32').on('click', function () {
        $("input[name='32box']").prop('checked', false);
    });

    $('#all33').on('click', function () {
        $("input[name='33box']").prop('checked', false);
    });
    $('#all34').on('click', function () {
        $("input[name='34box']").prop('checked', false);
    });

    $('#all35').on('click', function () {
        $("input[name='35box']").prop('checked', false);
    });

    $('#alls').on('click', function () {
        $("input[name='cbox']").prop('checked', true);
    })

    $('#malls').on('click', function () {
        $("input[name='cbox']").prop('checked', true);
        $("input[name='31box']").prop('checked', true);
        $("input[name='32box']").prop('checked', true);
        $("input[name='33box']").prop('checked', true);
        $("input[name='34box']").prop('checked', true);
        $("input[name='35box']").prop('checked', true);
    })

    $('#alls31').on('click', function () {
        $("input[name='31box']").prop('checked', true);
    })

    $('#alls32').on('click', function () {
        $("input[name='32box']").prop('checked', true);
    })

    $('#alls33').on('click', function () {
        $("input[name='33box']").prop('checked', true);
    })
    $('#alls34').on('click', function () {
        $("input[name='34box']").prop('checked', true);
    })

    $('#alls35').on('click', function () {
        $("input[name='35box']").prop('checked', true);
    })

    // 2. 「全選択」以外のチェックボックスがクリックされたら、
    $("input[name='cbox']").on('click', function () {
        if ($('#c1 :checked').length == $('#c1 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#all').prop('checked', false);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#all').prop('checked', true);
        }
    });
});