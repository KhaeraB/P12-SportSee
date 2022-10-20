
/**
 * @param {array.Object} this.data
 * @returns {array.Object} data for DailyActivityChart
 */
export class DaysActivities{
  constructor(data){
    this.data = data
  }

  get _dayActivity(){
    if(this.data) {
      const dailyActivity = [];
  
      for (let item of this.data) {
        // eslint-disable-next-line no-unused-vars
        const [yyyy, mm, dd] = item.day.split("-");
  
        dailyActivity.push({
          day: `${dd.slice(1)}`,
          kilogram: item.kilogram,
          calories: item.calories,
        });
      }
     // console.log(dailyActivity)
      return dailyActivity;
    }
  
    return this.dayActivity();
  }
  
}