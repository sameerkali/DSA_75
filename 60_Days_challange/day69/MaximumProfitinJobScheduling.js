/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    /*
    Approach: 
    We can have a single array jobs with all the information start,end and profit.
    Then sort this array by start time.
    Now, we can use simple backtracking with memoization.
    In each step we can either take the current job or leave it.
    We if take the current job then the next possible index will be the index of the job which is starting after endTime of the current job.  To find the next possible index, we can use binary search. 
    */
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