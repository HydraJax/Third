function ThirdGreatest(strArr) { 
  strArr.sort(function(a,b){
   return a.length-b.length;
    
  });
  console.log(strArr);
  console.log(strArr[2]);
}
  
   
         


ThirdGreatest(["one", "three", "fivers", "a", "fivers"]);