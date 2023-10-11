type FormatOptions = {
  format?: "slash" | "hyphen" | "ISO";
  has0?: boolean;
  hasTime?: boolean;
};

// Date 型の値を受け取り、指定されたフォーマットで文字列に変換する
// 例:
// format: slash -> 2021/03/09
// format: hyphen -> 2021-03-09
// format: ISO -> 2021-03-09T15:07:01.263Z
export const formatWithTimezone = (
  date: Date,
  { format, has0, hasTime }: FormatOptions = {
    format: "slash",
    has0: false,
    hasTime: false,
  }
) => {
  const padDate = (str: string) => {
    return has0 || format === "ISO" ? ("0" + str).slice(-2) : str;
  };
  const padTime = (str: string) => {
    return ("0" + str).slice(-2);
  };

  const year = date.getFullYear().toString();
  const month = padDate((date.getMonth() + 1).toString());
  const day = padDate(date.getDate().toString());
  const hour = padTime(date.getHours().toString());
  const min = padTime(date.getMinutes().toString());
  const sec = padTime(date.getSeconds().toString());

  const tz = -date.getTimezoneOffset();
  const sign = tz >= 0 ? "+" : "-";
  const tzHour = padTime((tz / 60).toString());
  const tzMin = padTime((tz % 60).toString());

  const separator = format === "slash" ? "/" : "-";

  if (format === "slash" || format === "hyphen") {
    return `${year}${separator}${month}${separator}${day} ${
      hasTime ? hour + ":" + min + ":" + sec : ""
    }`;
  } else if (format === "ISO") {
    return `${year}-${month}-${day}T${hour}:${min}:${sec}${sign}${tzHour}:${tzMin}`;
  } else {
    return "invalid format";
  }
};

// const date = new Date();
// // const date = new Date("2023-03-09T15:07:01.263Z");

// console.log(date.toISOString());
// console.log(formatWithTimezone(date));
// console.log("--------------------");
// console.log(formatWithTimezone(date, { format: "slash" }));
// console.log(formatWithTimezone(date, { format: "slash", has0: true }));
// console.log(formatWithTimezone(date, { format: "slash", hasTime: true }));
// console.log(
//   formatWithTimezone(date, { format: "slash", has0: true, hasTime: true })
// );
// console.log("--------------------");
// console.log(formatWithTimezone(date, { format: "hyphen" }));
// console.log(formatWithTimezone(date, { format: "hyphen", has0: true }));
// console.log(formatWithTimezone(date, { format: "hyphen", hasTime: true }));
// console.log(
//   formatWithTimezone(date, { format: "hyphen", has0: true, hasTime: true })
// );
// console.log("--------------------");
// console.log(formatWithTimezone(date, { format: "ISO" }));
// console.log(formatWithTimezone(date, { format: "ISO", has0: true }));
// console.log(formatWithTimezone(date, { format: "ISO", hasTime: true }));
// console.log(
//   formatWithTimezone(date, { format: "ISO", has0: true, hasTime: true })
// );
