function sortAsc(x,y) {
   if (x.Price< y.Price){
      return -1;
   }
   if (x.Price>y.Price){
      return 1
   }
   return 0
}

 function sortDesc(x,y){
   if (x.Price>y.Price){
      return -1
   }
   if (x.Price<y.Price){
      return 1
   }
   return 0
}
 function sortByModel(x,y) {
   if (x.Model>y.Model){
      return 1
   }
   if (x.Model<y.Model){
      return -1
   }
   return 0
}

test('sort by price ascension', ()=>{
   let myData =[{Price:1, Model: 'a'}, {Price:3, Model: 'c'},{Price: 2, Model: 'b'}]
   myData.sort(sortAsc)
   expect(myData).toStrictEqual([{Price: 1,Model: "a"}, {Price: 2,Model: "b"}, {Price: 3,Model: "c"}]);
});
test('sort by price descension', ()=>{
   let myData =[{Price:1, Model: 'a'}, {Price:3, Model: 'c'},{Price: 2, Model: 'b'}]
   myData.sort(sortDesc)
   expect(myData).toStrictEqual([{Price: 3,Model: "c"}, {Price: 2,Model: "b"}, {Price:1, Model: 'a'}]);
});
test('sort by model name', ()=>{
   let myData =[{Price:1, Model: 'a'}, {Price:3, Model: 'c'},{Price: 2, Model: 'b'}]
   myData.sort(sortAsc)
   expect(myData).toStrictEqual([{Price: 1,Model: "a"}, {Price: 2,Model: "b"}, {Price: 3,Model: "c"}]);
});