let bun={
    q:"null",
    kotae:"null",
    a1:"null",
    a2:"null",
    a3:"null",
    a4:"null",
    kaitou:"null",
    k:"null",
    log:"null",
    logcnt:0,
    cnt:0,
    cntans:0,
    renzoku:0,
    max:0
}
let difmin,difmax;


function getrandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
  }

  function main(){
    let q,a,i=0,a1,k=0,tmpq,ql;
    let c=[];
    let cnt=0;

    var m,n;
    bun.k=0;
    m=0;
    n=0;
    difmin=0;
    difmax=0;
    if (document.form31.no2.checked) {
      c[cnt]=2;
      cnt++;
    }
    if (document.form31.no3.checked) {
      c[cnt]=3;
      cnt++;
    }
    if (document.form31.no4.checked) {
      c[cnt]=4;
      cnt++;
    }
    if(cnt===0){
      q=`範囲を選択してね！`;
      btn2.disabled = true;
      btn1.disabled = false;
      bun.k=1;
    }else{
      n=c[getrandom(0,cnt)];
      switch(n){  //q=問題,a=答え
        case 2:   //二次の行列式の問題
          let det2=new Array(2);
          for(let i=0;i<=1;++i){
              det2[i]=new Array(2);
          }
          for(let i=0;i<=1;++i){
            for(let j=0;j<=1;++j){
              det2[i][j]=getrandom(-10,10);
            }
          }
          q=detprint(det2);
          a=twodet(det2);
          break;
        case 3:   //三次の行列式の問題
          let det=new Array(3);
          for(let i=0;i<=2;++i){
              det[i]=new Array(3);
          }
          m=getrandom(1,8);
          console.log(m);
          switch(m){
              case 1:
              case 6:
              case 7:
              case 8:
                det=threedet_t1();    //三次の行列式、出題パターン1(どっかに必ず1がある)
                break;
              case 2:
                det=threedet_t2();    //三次の行列式、出題パターン2(どっかの行がnの倍数)
                break;
              case 3:
                det=threedet_t3();    //三次の行列式、出題パターン3(どっかの列がnの倍数)
                break;
              case 4:
                det=threedet_t4();    //三次の行列式、出題パターン4(行全部足したらnの倍数になるよね的なやつ)
                break;
              case 5:
                det=threedet_t5();    //三次の行列式、出題パターン5(列全部足したらnの倍数になるよね的なやつ)
                break;
          }
          q=detprint(det);      //問題文作成
          a=Sarrusrule(det);    //答え作成(サラスの方法で三次行列式を解いてる)
          break;
        case 4:   //四次の行列式の問題
          let det4=new Array(4);
          for(let i=0;i<=3;++i){
              det4[i]=new Array(4);
          }
          det4=fourdet_t();     //四次の行列式問題生成
          q=detprint(det4);     //問題文作成
          a=fourdet(det4);      //答え作成
          break;
            
          default:
            main();
            break;
      }
    }
  if(q===void 0){
      return;
  }
  bun.q=`${q}`
  bun.kaitou=`(1)<input type="text" class="txt" id="input-message1"><span class="utan" id="output-message1"> </span><br>`;
  bun.kotae= `${q}<br>答えは:${a}`;
  bun.a1=`${a}`;
  bun.k=1;

  bun.cnt++;
  document.getElementById("form1").innerHTML = bun.kaitou;
  let message = `${q}<br><br>`
  var sampleArea = document.getElementById("console");
  sampleArea.innerHTML = message;
  return bun;
}

//二次の正方行列の行列式を解く関数
function twodet(det){
    let result=det[0][0]*det[1][1]-(det[0][1]*det[1][0]);
    //alert(`答えは:${result}`);
    return result;
}

//三次の行列式、出題パターン1(どっかに必ず1がある)
function threedet_t1(){
    //int det[3][3]
    let det=new Array(3);
    for(let i=0;i<=2;++i){
        det[i]=new Array(3);
    }

    let i0=getrandom(0,2);
    let j0=getrandom(0,2);
    for(let i=0;i<3;++i){
        for(let j=0;j<3;++j){
            if(i0==i && j0==j){
                det[i][j]=1;
            }else{
                det[i][j]=getrandom(-10,10);  //ランダムな数字を代入
            }
        }
    }
    return det;
}

//三次の行列式、出題パターン2(どっかの行がnの倍数)
function threedet_t2(){
    //int det[3][3]
    let det=new Array(3);
    for(let i=0;i<=2;++i){
        det[i]=new Array(3);
    }

    let n=getrandom(-10,10);    //倍数になる値を抽選
    let nc=getrandom(0,2);      //行を抽選
    for(let i=0;i<3;++i){
        for(let j=0;j<3;++j){
          if(i==nc){
            if(j==0){
              det[i][j]=n;
            }else{
              det[i][j]=n*getrandom(-10,10);
            }
          }
            det[i][j]=getrandom(-10,10);
        }
    }
    return det;
}

//三次の行列式、出題パターン3(どっかの列がnの倍数)
function threedet_t3(){
  //int det[3][3]
  let det=new Array(3);
  for(let i=0;i<=2;++i){
      det[i]=new Array(3);
  }
  det=threedet_t2();  //出題パターン2(どっかの行がnの倍数)の行列を取得
  det=tdet(det);      //detの転置行列を取る
  return det;
}

//三次の行列式、出題パターン4(行全部足したらnの倍数になるよね的なやつ)
function threedet_t4(){
    //int det[3][3]
    let det=new Array(3);
    for(let i=0;i<=2;++i){
        det[i]=new Array(3);
    }

    //とりあえず1行作る
    for(let i=0;i<3;++i){
      det[0][i]=getrandom(-100,100);
    }

    //一つ右にシフトしたやつを2行目に入れる
    for(let i=0;i<3;++i){
      det[1][i]=det[0][(i+1)*Number(i<2)];
    }

    //さらにシフトしたやつを3行目に入れる
    for(let i=0;i<3;++i){
      det[2][i]=det[1][(i+1)*Number(i<2)];
    }

    //n,mに乱数を入れる(n!=m)
    n=getrandom(0,2);
    do{
      m=getrandom(0,2);
    }while(n==m);
    det=rowswap(det,n,m);   //行列のn行目とm行目を入れ替える
    return det;
}

//三次の行列式、出題パターン5(列全部足したらnの倍数になるよね的なやつ)
function threedet_t5(){
  let det=new Array(3);
  for(let i=0;i<=2;++i){
      det[i]=new Array(3);
  }
  det=threedet_t4();    //出題パターン4の行列を取得
  det=tdet(det);        //転置行列を取る
  return det;
}

//四次の行列式の(テストに出るような解きやすい)問題を作る
function fourdet_t(){
    /*
      --問題作成アルゴリズムのイメージ--
      四次の行列式を解くには余因子展開をしないといけない
      →三次の解きやすい行列式を作ってそれを四次にすればええやん
      →じゃあ三次の行列式に余因子展開の逆の操作を加えてあげればいいのでは？
    */ 


    //4*4の二次元配列の作成(最終的に問題が入る)
    let det=new Array(4);
    for(let i=0;i<=3;++i){
        det[i]=new Array(4);
    }  

    //3*3の二次元配列の作成(3*3配列が入る)
    let det3=new Array(3);
    for(let i=0;i<=2;++i){
        det3[i]=new Array(3);
    }

    //三次の解きやすい行列式を作成
    switch(getrandom(1,5)){
      case 1:
        case 4:
        case 5:
          det3=threedet_t1();    //三次の行列式、出題パターン1(どっかに必ず1がある)
          break;
        case 2:
          det3=threedet_t2();    //三次の行列式、出題パターン2(どっかの行がnの倍数)
          break;
        case 3:
          det3=threedet_t3();    //三次の行列式、出題パターン3(どっかの列がnの倍数)
          break;
    }
    
    //|A|=aij|Aij|とした時のaijの値を決める
    let a;
    if(getrandom(0,1)==0){
      do{
        a=getrandom(-3,3);
      }while(a==0)  //aが-3≦a≦3(a≠0)の乱数を作る
    }else{
      a=1;
    }


    //四次の行列式の一つの成分aの場所(ia,ja)を定める
    let ia=getrandom(0,3);
    let ja=getrandom(0,3);

    det[ia][ja]=a;  //aを(ia,ja)に代入

    //(ia,ja)成分を除くia行に、iaの定数倍を代入
    for(let i=0;i<=3;++i){
      if(i!=ja){    //(ia,ja)のときは処理をしない
        det[ia][i]=a*getrandom(-3,3);
      }
    }

    //(ia,ja)成分を除くja行に、適当な数字を代入
    for(let i=0;i<=3;++i){
      if(i!=ia){    //(ia,ja)のときは処理をしない
        det[i][ja]=getrandom(-10,10);
      }
    }

    //今後の処理をしやすくするために、3*3行列(2次元配列)を1次元配列に変換
    let det30=new Array(9);
    let cnt=0;
    for(let i=0;i<=2;++i){
      for(let j=0;j<=2;++j){
        det30[cnt]=det3[i][j];
        cnt++;
      }
    }

    //四次の行列式A(1,1)成分から順に見ていき、開いている成分に3*3行列の要素を(1,1)成分から代入していく
    cnt=0;
    for(let i=0;i<=3;++i){
      for(let j=0;j<=3;++j){
        if(det[i][j]==null){
          det[i][j]=det30[cnt];
          cnt++;
        }
      }
    }

    //50%の確率で転置行列にする
    if(getrandom(0,1)==0){
      det=tdet(det);
    }
    return det;
}

//四次の正方行列の行列式を解く関数
function fourdet(det){
    //第1行で余因子展開
    //余因子展開した後の行列を入れる配列を作る
    let det0=new Array(3);
    for(let i=0;i<=2;++i){
        det0[i]=new Array(3);
    }

    //(1,1)成分
    for(let i=0;i<=2;++i){
        for(let j=0;j<=2;++j){
            det0[i][j]=det[i+1][j+1];   
        }
    }
    let result0=det[0][0]*Sarrusrule(det0);

    //(1,2)成分
    for(let i=0;i<=2;++i){
        for(let j=0;j<=2;++j){
            det0[i][j]=det[i+1][j+Number(j>=1)];   
        }
    }
    let result1=det[0][1]*Sarrusrule(det0);

    //(1,3)成分
    for(let i=0;i<=2;++i){
        for(let j=0;j<=2;++j){
            det0[i][j]=det[i+1][j+Number(j>=2)];   
        }
    }
    let result2=det[0][2]*Sarrusrule(det0);

    //(1,4)成分
    for(let i=0;i<=2;++i){
        for(let j=0;j<=2;++j){
            det0[i][j]=det[i+1][j];   
        }
    }
    let result3=det[0][3]*Sarrusrule(det0);

    let result=result0-result1+result2-result3;     //(1,1)余因子-(1,2)余因子+(1,3)余因子-(1,4)余因子

    return result;
}


//サラスの方法で3次の正方行列の行列式を解く
function Sarrusrule(det){   //det[3][3]
    let result=det[0][0]*det[1][1]*det[2][2]+det[0][1]*det[1][2]*det[2][0]+det[0][2]*det[1][0]*det[2][1]-
    (det[0][2]*det[1][1]*det[2][0]+det[0][1]*det[1][0]*det[2][2]+det[0][0]*det[2][1]*det[1][2]);        
    return result;
}

//n次の正方行列を出力できる形にする関数
function detprint(det){
  let mprint=``;
  for(let i=0;i<=det.length-1;++i){
      mprint=`${mprint}|`;
      for(let j=0;j<=det.length-1;++j){
        switch(String(det[i][j]).length){
          case 1:   //1文字だったら
            mprint=`${mprint}&nbsp&nbsp${det[i][j]}&nbsp`;  //空白を2つ追加して代入 (&nbsp:半角スペース的なやつ)
            break;
          case 2:   //2文字だったら
            mprint=`${mprint}&nbsp${det[i][j]}&nbsp`;   //空白を1つ追加して代入
            break;
          case 3:
            mprint=`${mprint}${det[i][j]}&nbsp`;    //何もせずに代入
            break;
        }
      }
      mprint=`${mprint}|<br>`;
  }
  return mprint;
  //document.getElementById("console").innerHTML = mprint;
}

//ある行列の転置行列を返す関数
function tdet(det){
    //tdet(転置行列を格納する二次元配列)を宣言
    let tdet=new Array(det.length);   //det.length:detの要素数を返す→つまり、行列detのサイズを返す
    for(let i=0;i<=det.length-1;++i){
        tdet[i]=new Array(det.length);
    }
  
    //転置行列の作成
    for(let i=0;i<=det.length-1;++i){
      for(let j=0;j<=det.length-1;++j){
        tdet[j][i]=det[i][j];
      }
    }
    return tdet;
}

//二次元配列のn行目とm行目を入れ替える(引数 det:配列,n,m)
function rowswap(det,n,m){
    //dettmp(一時的に値を保持する配列)をdet.length(det配列の長さ)で宣言
    let dettmp=new Array(det.length);

    //n行目をdettmpに保持
    for(let i=0;i<=det.length-1;++i){
      dettmp[i]=det[n][i];
    }

    //n行目にm行目を代入
    for(let i=0;i<=det.length-1;++i){
      det[n][i]=det[m][i];
    }

    //m行目に予め保持しておいたn行目(dettmp)を代入
    for(let i=0;i<=det.length-1;++i){
      det[m][i]=dettmp[i];
    }
    return det;
}










  function ans(){
    let utan1,utan2,utan3,utan4;
    let k1,k2,k3,k4;
    var cntc,cnta,kcnt,anscnt,ansper,ansperp,renzokup,maxup;
    kcnt=1;
    cnta=0;
    //scanfみたいなやつ始まり
    const textbox = document.getElementById("input-message1");
      k1 = textbox.value;
      kcnt=1;
    //scanfみたいなやつ終わり(k1に入力されたものが格納されてる)
    if(bun.k>=2){
      const textbox = document.getElementById("input-message2");
      k2 = textbox.value;
      kcnt=2;
    }
    if(bun.k>=3){
      const textbox = document.getElementById("input-message3");
      k3 = textbox.value;
      kcnt=3;
    }
    if(bun.k>=4){
      const textbox = document.getElementById("input-message4");
      k4 = textbox.value;
      kcnt=4;
    }
    //ここまでscanfみたいなやつでk1~k4までの値を読み取ってる(k2~k4は答えが複数個ある場合のみ)
    if(k1.replace(/\s+/g, "")===bun.a1.replace(/\s+/g, "")){    //空白とかを無視して判断
        utan1 = `<div class="maru">○</div>`;
        cnta=cnta+1;
    }else{
        utan1 = `<div class="batu">×</div>`;
    }
    document.getElementById("output-message1").innerHTML = utan1;
    //ここまででk1(1番目の解答欄)に入力されたの正誤判定をしてる
    if(bun.k>=2){
      if(k2.replace(/\s+/g, "")===bun.a2.replace(/\s+/g, "")){
        utan2 = `<div class="maru">○</div>`;
        cnta++;
    }else{
        utan2 = `<div class="batu">×</div>`;
    }
    document.getElementById("output-message2").innerHTML = utan2;
    }
    //ここまででk2(2番目の解答欄)に入力されたの正誤判定をしてる
    if(bun.k>=3){
      if(k3.replace(/\s+/g, "")===bun.a3.replace(/\s+/g, "")){
        utan3 = `<div class="maru">○</div>`;
        cnta++;
    }else{
        utan3 = `<div class="batu">×</div>`;
    }
    document.getElementById("output-message3").innerHTML = utan3;
    }
    //ここまででk3(3番目の解答欄)に入力されたの正誤判定をしてる
    if(bun.k>=4){
      if(k4.replace(/\s+/g, "")===bun.a4.replace(/\s+/g, "")){
        utan4 = `<div class="maru">○</div>`;
        cnta++;
    }else{
        utan4 = `<div class="batu">×</div>`;
    }
    document.getElementById("output-message4").innerHTML = utan4;
    }
    if((cnta/kcnt)===1){
      bun.renzoku++;
    }else{
      if(bun.max<bun.renzoku){
        bun.max=bun.renzoku;
      }
      bun.renzoku=0;
    }
    bun.cntans=(cnta/kcnt)+bun.cntans;  
    //bun.cntans=(Math.floor( (cnta/kcnt) * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 )) +Number(bun.cntans);     //cnta/kcntを少数第二位まで計算してからbun.cntansに足す
    ansper=Math.floor( ((Number(bun.cntans)/bun.cnt)*100) * Math.pow( 10, 1 ) ) / Math.pow( 10, 1 ) ;       //(bun.cntans/bun.cnt)*100を少数第一位まで計算(正解率の計算)
    ansperp=`正解率:${ansper}%`;
    cntc=`現在解いた問題数:${bun.cnt}問`;
    anscnt=`内正解数:${bun.cntans}問`;
    renzokup=`連続正解数:${bun.renzoku}問`;
    maxup=`最高連続正解数:${bun.max}問!`;

    var strtmp=`${bun.q}`
    bun.q=strtmp.replace(`<br>`,` `)
    if(bun.log==='null'){    //過去問表示の設定(bun.log)
      bun.logcnt++
      if(bun.k===1){
        bun.log=`${utan1}1:${bun.q} 答えは${bun.a1}<br>`
      }else if(bun.k===2){
        bun.log=`${utan1}${utan2}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2}<br>`
      }else if(bun.k===3){
        bun.log=`${utan1}${utan2}${utan3}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3}<br>`
      }else if(bun.k===4){
        bun.log=`${utan1}${utan2}${utan3}${utan4}1:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3} 4.${bun.a4}<br>`
      }
    }else{
      bun.logcnt++
      if(bun.k===1){
        bun.log=`${bun.log}${utan1}${bun.logcnt}:${bun.q} 答えは${bun.a1}<br>`
      }else if(bun.k===2){
        bun.log=`${bun.log}${utan1}${utan2}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2}<br>`
      }else if(bun.k===3){
        bun.log=`${bun.log}${utan1}${utan2}${utan3}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3}<br>`
      }else if(bun.k===4){
        bun.log=`${bun.log}${utan1}${utan2}${utan3}${utan4}${bun.logcnt}:${bun.q} 答え 1.${bun.a1} 2.${bun.a2} 3.${bun.a3} 4.${bun.a4}<br>`
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

  $("#btn1").on("click", function()  {
    btn1.disabled = true;
    btn2.disabled = false;
    main();
    return;
  });
  
  $("#btn2").on("click", function()  {
    btn2.disabled = true;
    btn1.disabled = false;
    ans();
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

  $('#mall').on('click', function() {
    $("input[name='cbox']").prop('checked', false);
    $("input[name='31box']").prop('checked', false);
    $("input[name='32box']").prop('checked', false);
    $("input[name='33box']").prop('checked', false);
    $("input[name='34box']").prop('checked', false);
    $("input[name='35box']").prop('checked', false);
  });

  $('#all').on('click', function() {
    $("input[name='cbox']").prop('checked', false);
  });

  $('#all31').on('click', function() {
    $("input[name='31box']").prop('checked', false);
  });

  $('#all32').on('click', function() {
    $("input[name='32box']").prop('checked', false);
  });

  $('#all33').on('click', function() {
    $("input[name='33box']").prop('checked', false);
  });
  $('#all34').on('click', function() {
    $("input[name='34box']").prop('checked', false);
  });

  $('#all35').on('click', function() {
    $("input[name='35box']").prop('checked', false);
  });

  $('#alls').on('click',function(){
    $("input[name='cbox']").prop('checked', true);
  })

  $('#malls').on('click',function(){
    $("input[name='cbox']").prop('checked', true);
    $("input[name='31box']").prop('checked', true);
    $("input[name='32box']").prop('checked', true);
    $("input[name='33box']").prop('checked', true);
    $("input[name='34box']").prop('checked', true);
    $("input[name='35box']").prop('checked', true);
  })

  $('#alls31').on('click',function(){
    $("input[name='31box']").prop('checked', true);
  })

  $('#alls32').on('click',function(){
    $("input[name='32box']").prop('checked', true);
  })

  $('#alls33').on('click',function(){
    $("input[name='33box']").prop('checked', true);
  })
  $('#alls34').on('click',function(){
    $("input[name='34box']").prop('checked', true);
  })

  $('#alls35').on('click',function(){
    $("input[name='35box']").prop('checked', true);
  })

  // 2. 「全選択」以外のチェックボックスがクリックされたら、
  $("input[name='cbox']").on('click', function() {
    if ($('#c1 :checked').length == $('#c1 :input').length) {
      // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
      $('#all').prop('checked', false);
    } else {
      // 1つでもチェックが入っていたら、「全選択」 = checked
      $('#all').prop('checked', true);
    }
  });
});