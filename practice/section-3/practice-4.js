'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  while(collectionA.length){
      var flag=1;
      var x=collectionA.shift();
      if(x.length>1){
          var n=parseInt(x.substring(x.length-1));
          x=x.substring(0,1);
          flag=2;
      }
      for(let i=0;i<collectionC.length;i++){
          if(collectionC[i].key==x){
              collectionC[i].count++;
              flag=0;
          }
      }
      if(flag==1){
          collectionC.push({key:x,count:1});
      }
      if(flag==2){
          collectionC.push({key:x,count:n});
      }
  }
  for(let i=0;i<collectionC.length;i++){
      if(objectB.value.indexOf(collectionC[i].key)>-1){
          let n=collectionC[i].count;
          while(n>=3){
              collectionC[i].count--; 
              n-=3;
          }
      }          
  }
  return collectionC;
}
