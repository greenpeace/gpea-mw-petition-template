const objFilter = (obj, filters, positive = false) => {
  const filtered =  Object.fromEntries(Object.entries(obj).filter(([key]) => {
     // filters array as positive list or negative list
    if(positive){
      return filters.some((filter) => key === filter);
    }else{
      return filters.every((filter) => key !== filter);
    }
    
  }))
  return filtered;
  
}

export default objFilter;