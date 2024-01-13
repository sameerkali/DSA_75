
var jobScheduling = function(startTime, endTime, profit) {
   
    let jobs=[],cache=[];
    for(let i=0;i<startTime.length;i++){
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    jobs.sort(function(a,b){return a[0]-b[0]});
    return backtrack(0);
    function backtrack(pos){
        if(cache[pos]!==undefined){
            return cache[pos];
        }
        if(pos===startTime.length || pos==-1){
            return 0;
        }
        let profit1=0,profit2=0;
        let nextPossibleJobIndex = binarySearch(jobs[pos][1],pos+1,startTime.length-1);
            profit1 = +jobs[pos][2]+backtrack(nextPossibleJobIndex);//Take this job
        
        profit2 = backtrack(pos+1);//Don't  take this job
        let res = Math.max(profit1,profit2);
        cache[pos] = res;
        return cache[pos];
    }
    
    function binarySearch(key,left,right){
        let mid,ans=-1;
        while(left<=right){
              mid = Math.floor(left + (right-left)/2);
            if(jobs[mid][0]>=key){
                ans = mid;
                right = mid-1;
            }else{
                left = mid+1;
            }
        }
        return ans;
    }
};