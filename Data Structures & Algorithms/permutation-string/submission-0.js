class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let k = s1.length;
        let n = s2.length;

      if(s2.length<s1.length){
        return false;
      }

        let s1Map = new Array(26).fill(0);
        let windowMap = new Array(26).fill(0);

      for(let i=0; i<k; i++){
        let s1Index = s1.charCodeAt(i) - 'a'.charCodeAt(0);
        let s2Index = s2.charCodeAt(i) - 'a'.charCodeAt(0);

        s1Map[s1Index]++;
        windowMap[s2Index]++
      }

      if(this.areMapsEqual(s1Map, windowMap)){
        return true;
      }

      for(let end = k;end < n; end++){
        let newIndex = s2.charCodeAt(end) - 'a'.charCodeAt(0);
        windowMap[newIndex]++;

        let oldIndex = s2.charCodeAt(end - k) - 'a'.charCodeAt(0);
        windowMap[oldIndex]--;

        if (this.areMapsEqual(s1Map, windowMap)) {
                return true;
        }
      }
      return false;
    }
    areMapsEqual(map1, map2){
        for(let i=0; i<26;i++){
            if(map1[i] !== map2[i]){
                return false;
            }
        }
        return true;
    }
}
