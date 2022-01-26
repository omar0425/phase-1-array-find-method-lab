function superbowlWin(record) {
  const win = record.find((el) => el.result === "W");
  return win ? win.year : undefined;
}
