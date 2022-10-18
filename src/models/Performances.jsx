const TYPE_0F_ACTIVITY = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
export function Activities() {
    const activities = [];
  
    for (let key in TYPE_0F_ACTIVITY) {
      activities.push({
        activity: TYPE_0F_ACTIVITY[key],
        value: 0,
      });
    }
    return {
      activity: activities.activity, 
      value : activities.value
     }  
  }
  
 export function getAllActivities(data) {
    const activities = [];
  
    if (data) {
      for (let item of data) {
        activities.push({
          activity: TYPE_0F_ACTIVITY[item.kind],
          value: item.value,
        });
      }
  
      return activities;
    }
  
    return Activities();
  }