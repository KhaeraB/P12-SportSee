/**
 * @param {array.Object} this.data
 * @returns {array.Object} data for CardInfo
 */
export default class NutriScore {
  constructor(data) {
    this.data = data;
  }
  get _macro() {
    return {
      macroKPI: this.data.data.keyData,
    };
  }
}
