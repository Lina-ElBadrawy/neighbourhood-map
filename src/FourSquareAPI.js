var clientId = "IURVSO1HQVII1UV5ZAMOCMDXQSMSPQO1LPTTSDC5OSEYAJFG";
var clientSecret = "1NCHE0MDBXS5AUHIFZEWY4O33PF14QEKVSKG1BQB54ZBTA12D";

export function getData(location,query) {
   let locations=[];

 
     return  fetch(`https://api.foursquare.com/v2/venues/explore?near=${location}&query=${query}&limit=10` +
        `&client_id=${clientId}` +
        `&client_secret=${clientSecret}` +
        `&v=20181201`)
        .then(response => response.json())
        .then(data => {
          if (data.meta.code === 200) {
         return(data.response.groups[0].items);
          }
        }).catch(error => {         
          console.log(error);
        })
    
}