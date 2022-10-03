const takeinputs = () =>{
    document.querySelector('.preload-input').style.display = 'none';
    document.querySelector('.box').style.display = 'block';

    // input money
    let totalMoney = document.getElementsByClassName('input-total-money')[0].value;
    let monSpent = document.getElementsByClassName('input-mon')[0].value;
    let tueSpent = document.getElementsByClassName('input-tue')[0].value;
    let wedSpent = document.getElementsByClassName('input-wed')[0].value;
    let thuSpent = document.getElementsByClassName('input-thu')[0].value;
    let friSpent = document.getElementsByClassName('input-fri')[0].value;
    let satSpent = document.getElementsByClassName('input-sat')[0].value;
    let sunSpent = document.getElementsByClassName('input-sun')[0].value;
    
    // fetch money value
    let balanceMoney = totalMoney;
    let spentMoney = parseInt(monSpent) + parseInt(tueSpent) + parseInt(wedSpent) + parseInt(thuSpent) + parseInt(friSpent) + parseInt(satSpent);

    document.getElementsByClassName('input-balance')[0].value = totalMoney;
    document.getElementsByClassName('input-spent')[0].value = spentMoney;


    yArray[0] = monSpent;
    yArray[1] = tueSpent;
    yArray[2] = wedSpent;
    yArray[3] = thuSpent;
    yArray[4] = friSpent;
    yArray[5] = satSpent;
    yArray[6] = sunSpent;

    console.log(yArray)

    var data = [{
        x:xArray,
        y:yArray,
        type:"bar"
      }];
      
      var layout = {title:"World Wide Wine Production"};
      
      Plotly.newPlot("myPlot", data, layout);
    

}


document.querySelector('.btn-1').addEventListener('click',takeinputs);