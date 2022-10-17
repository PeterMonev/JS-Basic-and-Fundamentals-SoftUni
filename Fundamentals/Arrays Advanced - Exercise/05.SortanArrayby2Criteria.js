function sortAnArrayBy2Criteria(array){
 
  console.log(array.sort((a,b) => a.length - b.length || a.localeCompare (b)).join('\n'));
    
 

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);