function lateRide(n) {
  return Math.floor(n / 60 / 10) + Math.floor(n / 60 % 10) + Math.floor(n % 60 / 10) + Math.floor((n % 60) % 10)
}
