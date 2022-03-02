var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content! mynewfile1.txt ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// fs.open('mynewfile2.txt', 'w', function (err) {
//     if (err) throw err;
//     console.log('Saved! mynewfile2.txt')
// })

fs.writeFile('mynewfile3.txt', 'Hello content Im Pranit!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });