window.onload = function () {
  document.getElementsByTagName('img').forEach(function () {
    this.onclick = function () {
      document.getElementById('focus').src = this.src;
    };
  });
};
