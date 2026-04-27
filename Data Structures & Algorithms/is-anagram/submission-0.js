class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let map1 = new Map();
        let map2 = new Map();
        for(let i =0; i<s.length;i++){
            if(map1.has(s[i])){
                let value = map1.get(s[i]) //retrieving the corresponding value
                map1.set(s[i], ++value);
            }
            else{
                map1.set(s[i], 1);
            }
        }
        console.log(map1)
        for(let j =0; j<t.length;j++){
            if(map2.has(t[j])){
                let value = map2.get(t[j]) //retrieving the corresponding value
                map2.set(t[j], ++value);
            }
            else{
                map2.set(t[j], 1);
            }
        }
        console.log(map2)
         
        for(const [key, value] of map1){
            if(map2.get(key) !== value) return false;
        }
        
        return true;
    }
}
