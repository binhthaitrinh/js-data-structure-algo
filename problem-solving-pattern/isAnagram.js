function isAnagram(s1, s2) {
  if (s1.length === 0 && s1.length === 0) {
    return true;
  }

  if (s1.length !== s2.length) {
    return false;
  }
  var obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (!obj[s1[i]]) {
      obj[s1[i]] = 1;
    } else {
      obj[s1[i]]++;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    if (!obj[s2[j]]) {
      return false;
    } else {
      obj[s2[j]]--;
    }
  }

  return true;
}

module.exports = isAnagram;
