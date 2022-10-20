/**
   * @param {array.Object} data
   * @returns {array.Object} data for LineChart
   */
  export class AverageSessions {
    constructor(data){
      this.data = data; 
    }
  

    get _sessions(){

      let averageSessions = [
        {
          day: "L",
          sessionLength: 0,
        },
        {
          day: "M",
          sessionLength: 0,
        },
        {
          day: "M",
          sessionLength: 0,
        },
        {
          day: "J",
          sessionLength: 0,
        },
        {
          day: "V",
          sessionLength: 0,
        },
        {
          day: "S",
          sessionLength: 0,
        },
        {
          day: "D",
          sessionLength: 0,
        },
      ];   
  
      const average = averageSessions
      for (let i in this.data) {
        average[i].sessionLength = this.data[i].sessionLength;
      }
    
      return average;
    }
   
  }
