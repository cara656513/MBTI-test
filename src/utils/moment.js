import moment from "moment-timezone";

moment.locale("ko");
const now = moment.tz("Asia/Seoul").format("LLLL");
console.log(now);
