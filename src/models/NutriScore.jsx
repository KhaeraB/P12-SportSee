export class NutriScore {
      constructor(data){
            this.data = data;
      }
      get _macro(){
            return  {
                  macroKPI: this.data.data.keyData,
                };
          }
      }
    
  