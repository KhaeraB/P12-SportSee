/**
 * @param {array.Object} this.data
 * @returns {array.Object} data for userInfo
 */
export default class infoUser {
  constructor(data) {
    this.data = data;
  }
  get _info() {
    return {
      firstName: this.data.data.userInfos.firstName,
      macroKPI: this.data.data.keyData,
      userScore: this.data.data.todayScore || this.data.data.score,
    };
  }
}
