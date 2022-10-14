export function infoUser(data) {
    return  {
          firstName: data.data.userInfos.firstName,
          macroKPI: data.data.keyData,
          userScore: data.data.todayScore || data.data.score,
        };
  }