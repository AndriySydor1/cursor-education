async function getRandomChinese(length) {
  let n = 0;
  let mandarinHieroglyphs = "";
  while (n < length) {
    const arbitraryMandarin = new Promise((resolve, reject) => {
      setTimeout(() => {
        const row = Date.now().toString().slice(-5);
        const symbol = String.fromCharCode(row);
        resolve(symbol);
        n++;
      }, 50);
    });
    mandarinHieroglyphs += await arbitraryMandarin;
  }
  return mandarinHieroglyphs;
}
getRandomChinese(50).then(console.log);
