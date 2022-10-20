const TYPE_0F_ACTIVITY = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  
export class Activities{
  constructor(data){
    this.data = data; 
  }

  get _activities() {
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
  
  get _getAllActivities() {
    const activities = [];
  
    if (this.data) {
      for (let item of this.data) {
        activities.push({
          activity: TYPE_0F_ACTIVITY[item.kind],
          value: item.value,
        });
      }
  
      return activities;
    }
  
    return this._activities();
  }
}
