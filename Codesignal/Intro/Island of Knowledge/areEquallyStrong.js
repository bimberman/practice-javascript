function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  yourArm = yourLeft ? yourLeft : yourRight;
  friendsArm = friendsLeft ? friendsLeft : friendsRight;
  if (yourLeft === 0) {
    return yourArm === friendsArm;
  }
  return yourLeft * yourRight === friendsLeft * friendsRight;
}
