function getRandomItemFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
}

const eyeColors = ["green", "yellow", "blue", "brown", "gray"];

const randomEyeColor = getRandomItemFromArray(eyeColors);

function isEmpty(val: any) {
  if (val === undefined) return true;

  if (
    typeof val == "function" ||
    typeof val == "number" ||
    typeof val == "boolean" ||
    Object.prototype.toString.call(val) === "[object Date]"
  )
    return false;

  if (val == null || val.length === 0) return true;

  if (typeof val == "object") {
    var r = true;

    for (var f in val) r = false;

    return r;
  }

  return false;
}

export { randomEyeColor, isEmpty };
