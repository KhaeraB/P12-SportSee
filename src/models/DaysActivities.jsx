
/**
 * @param {array.Object} data
 * @returns {array.Object} data for DailyActivityChart
 */
export function DaysActivities(data) {
  if (data) {
    const dailyActivity = [];

    for (let item of data) {
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

  return DaysActivities();
}