let dsize=3;

//二次の正方行列の行列式を解く関数
function twodet(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    let c=document.getElementById('c').value;
    let d=document.getElementById('d').value;
    let result=a*d-(b*c);
    alert(`答えは:${result}`);
}

//三次の正方行列の行列式を解く関数
function threedet(){
    //int det[3][3]と同じ
    let det=new Array(3);
    for(let i=0;i<=2;++i){
        det[i]=new Array(3);
    }

    //二次元配列detにテキストボックスから読み込んだ値を代入
    let cnt=0;
    for(let i=0;i<=2;++i){
        for(let j=0;j<=2;++j){
            //String.fromCharCode(文字コード):文字コードを数字に変換する
            //97='a'なので、aに1づつ足していけば、b,c,d,e,f...とアルファベットのidの値を取得できる
            det[i][j]=document.getElementById(String.fromCharCode(97+cnt)).value;   
            cnt++;
        }
    }


    let result=Sarrusrule(det);
    alert(`答えは:${result}`);
    console.log(det.length);
    //det=tdet(det);
    //threedetprint(det);
}

//四次の正方行列の行列式を解く関数
function fourdet(){
    //int det[4][4]と同じ
    let det=new Array(4);
    for(let i=0;i<=3;++i){
        det[i]=new Array(4);
    }

    //二次元配列detにテキストボックスから読み込んだ値を代入
    let cnt=0;
    for(let i=0;i<=3;++i){
        for(let j=0;j<=3;++j){
            //String.fromCharCode(文字コード):文字コードを数字に変換する
            //97='a'なので、aに1づつ足していけば、b,c,d,e,f...とアルファベットのidの値を取得できる
            det[i][j]=document.getElementById(String.fromCharCode(97+cnt)).value;   
            cnt++;
        }
    }
    for(i=0;i<=3;++i){
        console.log(det[i][0]+det[i][1]+det[i][2]+det[i][3]);
    }


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

    alert(`答えは:${result}`);
}


//サラスの方法で3次の正方行列の行列式を解く
function Sarrusrule(det){   //det[3][3]
    let result=det[0][0]*det[1][1]*det[2][2]+det[0][1]*det[1][2]*det[2][0]+det[0][2]*det[1][0]*det[2][1]-
    (det[0][2]*det[1][1]*det[2][0]+det[0][1]*det[1][0]*det[2][2]+det[0][0]*det[2][1]*det[1][2]);        
    return result;
}

//ある行列の転置行列を返す関数
function tdet(det){
    //tdet(転置行列を格納する二次元配列)を宣言
    let tdet=new Array(det.length);
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

function threedetprint(det){
    let mprint=``;
    for(let i=0;i<3;++i){
        mprint=`${mprint}|`;
        for(let j=0;j<3;++j){
            mprint=`${mprint}${det[i][j]} `;
        }
        mprint=`${mprint}|<br>`;
    }

    document.getElementById("console").innerHTML = mprint;
}







$("#btn1").on("click", function()  {
    switch(dsize){
        case 2:
            twodet();
            break;
        case 3:
            threedet();
            break;
        case 4:
            fourdet();
            break;
    }
    return;
});

function change(){
    if(document.getElementById("f2").checked){
        document.getElementById("formula").innerHTML = 
        `<input type="number" value="0" class="input" id="a"><input type="number" value="0" class="input" id="b"><br>
         <input type="number" value="0" class="input" id="c"><input type="number" value="0" class="input" id="d"><br><br><br>`;
        dsize=2;
    }else if(document.getElementById("f3").checked){
        document.getElementById("formula").innerHTML = 
        `<input type="number" value="0" class="input" id="a"><input type="number" value="0" class="input" id="b"><input type="number" value="0" class="input" id="c"><br>
         <input type="number" value="0" class="input" id="d"><input type="number" value="0" class="input" id="e"><input type="number" value="0" class="input" id="f"><br>
         <input type="number" value="0" class="input" id="g"><input type="number" value="0" class="input" id="h"><input type="number" value="0" class="input" id="i"><br><br>`;
        dsize=3;
    }else if(document.getElementById("f4").checked){
        document.getElementById("formula").innerHTML = 
        `<input type="number" value="0" class="input" id="a"><input type="number" value="0" class="input" id="b"><input type="number" value="0" class="input" id="c"><input type="number" value="0" class="input" id="d"><br>
         <input type="number" value="0" class="input" id="e"><input type="number" value="0" class="input" id="f"><input type="number" value="0" class="input" id="g"><input type="number" value="0" class="input" id="h"><br>
         <input type="number" value="0" class="input" id="i"><input type="number" value="0" class="input" id="j"><input type="number" value="0" class="input" id="k"><input type="number" value="0" class="input" id="l"><br>
         <input type="number" value="0" class="input" id="m"><input type="number" value="0" class="input" id="n"><input type="number" value="0" class="input" id="o"><input type="number" value="0" class="input" id="p">`;
         dsize=4;
    }

}