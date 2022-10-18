/**
 * @returns {array.Object} default data for AverageSessionsChart
 */
 export function defaultAverageSessions() {
    const averageSessions = [
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
  
    return averageSessions;
  }
  
  /**
   * @param {array.Object} data
   * @returns {array.Object} data for AverageSessionsChart
   */
  export function AverageSessions(data) {
    let averageSessions = defaultAverageSessions();
  
    for (let i in data) {
      averageSessions[i].sessionLength = data[i].sessionLength;
    }
  
    return averageSessions;
  }