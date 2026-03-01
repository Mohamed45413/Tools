;(function (root, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  }
  else {
    root.tools = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  let tools = {
    time_I: (time) => {
      let targetDate = new Date();
      let date = new Date(new Date(time).getTime());
      let target = new Date(targetDate.getTime());
      let years = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
      let diffInSeconds = Math.floor((target.getTime() - date.getTime()) / 1000);
      seconds = diffInSeconds % 60;
      diffInSeconds = Math.floor(diffInSeconds / 60);
      minutes = diffInSeconds % 60;
      diffInSeconds = Math.floor(diffInSeconds / 60);
      hours = diffInSeconds % 24;
      diffInSeconds = Math.floor(diffInSeconds / 24);
      days = diffInSeconds;
      while (
        days >= 365 ||
        target.getFullYear() > date.getFullYear() ||
        (target.getFullYear() === date.getFullYear() &&
          target.getMonth() > date.getMonth())
      ) {
        let nextdate = new Date(date);
        nextdate.setFullYear(date.getFullYear() + 1);
        if (nextdate <= target) {
          years++;
          date.setFullYear(date.getFullYear() + 1);
        } else {
          break;
        }
      }
      days = Math.floor(
        (target.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      );
      return {
        years,
        months: Math.floor(days / 30),
        week: Math.floor(days / 7),
        days,
        hours,
        minutes,
        seconds
      };
    },
    time_D: (time) => {
      const date = new Date();
      const targetDate = new Date(time);
      let years = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
      let diffInSeconds = Math.floor(
        (targetDate.getTime() - date.getTime()) / 1000
      );
      seconds = diffInSeconds % 60;
      diffInSeconds = Math.floor(diffInSeconds / 60);
      minutes = diffInSeconds % 60;
      diffInSeconds = Math.floor(diffInSeconds / 60);
      hours = diffInSeconds % 24;
      diffInSeconds = Math.floor(diffInSeconds / 24);
      days = diffInSeconds;
      while (
        days >= 365 ||
        targetDate.getFullYear() > date.getFullYear() ||
        (targetDate.getFullYear() === date.getFullYear() &&
          targetDate.getMonth() > date.getMonth())
      ) {
        const nextDate = new Date(date);
        nextDate.setFullYear(date.getFullYear() + 1);

        if (nextDate <= targetDate) {
          years++;
          date.setFullYear(date.getFullYear() + 1);
        } else {
          break;
        }
      }
      days = Math.floor(
        (targetDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      );
      return {
        years,
        months: Math.floor(days / 30),
        week: Math.floor(days / 7),
        days,
        hours,
        minutes,
        seconds
      };
    },
    time_B: (start,end) => {
      const date = new Date(start);
      const targetDate = new Date(end);
      let years = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
      let diffInSeconds = Math.floor(
        (targetDate.getTime() - date.getTime()) / 1000
      );
      seconds = diffInSeconds % 60;
      diffInSeconds = Math.floor(diffInSeconds / 60);
      minutes = diffInSeconds % 60;
      diffInSeconds = Math.floor(diffInSeconds / 60);
      hours = diffInSeconds % 24;
      diffInSeconds = Math.floor(diffInSeconds / 24);
      days = diffInSeconds;
      while (
        days >= 365 ||
        targetDate.getFullYear() > date.getFullYear() ||
        (targetDate.getFullYear() === date.getFullYear() &&
          targetDate.getMonth() > date.getMonth())
      ) {
        const nextDate = new Date(date);
        nextDate.setFullYear(date.getFullYear() + 1);

        if (nextDate <= targetDate) {
          years++;
          date.setFullYear(date.getFullYear() + 1);
        } else {
          break;
        }
      }
      days = Math.floor(
        (targetDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      );
      return {
        years,
        months: Math.floor(days / 30),
        week: Math.floor(days / 7),
        days,
        hours,
        minutes,
        seconds
      };
    },
    copy:(el)=>{
      let copying =document.querySelector(el)
      navigator.clipboard.writeText(copying.innerText)
    }
  };
return tools;
});