const people = [
    {
      name: '小明',
      money: 500
    },
    {
      name: '漂亮阿姨',
      money: 3000
    },
    {
      name: '杰倫',
      money: 60000
    },
    {
      name: '老媽',
      money: Infinity
    }
  ];
  
  var maxMoney = people.reduce(function(max,item,index){
    if(item.name!="老媽"){
      max = Math.max(max,item.money)
    }
    return max
  },0)
  document.write(maxMoney,"1<br>");
  
  // ================範例1=======================
  
  
  var a;
  
  var whoMax = function(maxMoney){
       return people.forEach(function(item,index){
       // people.forEach(function(item,index){
              if(item.money==maxMoney){
                a=item.name;
                document.write(a,"2<br>");
                return item.name;
                // return a
              }
         // return a;
         // return item.name
      })
      
    // return a;
  }
  
  document.write(whoMax(maxMoney),"3<br>")
  document.write(a,"4<br>");