// 1.
// const user = {
//     name: "Sumit",
//     greet(){
//         return `Hello, ${this.name}!`
//     },
//     farewell: ()=>{
//         return `Goodbye, ${this.name}`
//     }
// }
// console.log(user.greet());
// console.log(user.farewell());
// ans:
// Hello, Sumit!
// Goodbye, undefined
// arrow functions do not bind to local this
// simple functions are bound to the local this.

// 2.
// You need to design a cache such that if it has maximum length of 3, means only 3 items can be stored, then when 4th item is stored, the least used item is deleted from the cache.
// name:"Sumit"
// roll : 1,
// mobile: 7840851670, 
// profession: "IT"
// class LRU {
//     constructor(max = 3){
//         this.max = max;
//         this.cache = new Map();
//     }
//     set(key, value)
//     {
//         if(this.cache.has(key)){
//             // if the key is already present in the Map, first delete the key
//             this.cache.delete(key)
//         }else if(this.cache.size === this.max){
//             this.cache.delete(this.first());
//             // if we have reached the maximum size of cache,
//             // we delete the first element of the Map
//             // Means we delete the first inserted element of the Map
//             // at least, we set the key and value.
//         }
//         this.cache.set(key, value);
//     }
//     first()
//     {
//         // this returns the first element inserted in the map
//         return this.cache.keys().next().value;
//     }
//     get(key){
//         let item = this.cache.get(key);
//         if(item){
//             this.cache.delete(key);
//             this.cache.set(key, item)
//         }
//         return item;
//     }
// }

// const LruCache = new LRU(3);
// LruCache.set("name","Sumit");
// LruCache.set("field", "It");
// LruCache.set("location","gurgaon");
// console.log(LruCache.cache);
// LruCache.get("name");
// console.log(LruCache.cache); 
// LruCache.set("state", "Bihar");
// console.log(LruCache.cache); 

// Output: 
// Map(3) { 'name' => 'Sumit', 'field' => 'It', 'location' => 'gurgaon' }
// Map(3) { 'field' => 'It', 'location' => 'gurgaon', 'name' => 'Sumit' }
// Map(3) {
//   'location' => 'gurgaon',
//   'name' => 'Sumit',
//   'state' => 'Bihar'