function validTime(time) {
  time = time.split(":");
  if (time[0] < 0 || time[0] > 23) return false;
  if (time[1] < 0 || time[1] > 59) return false;
  return true;
}
