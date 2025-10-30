// const message = 'Hello world';

// console.log(message);
//////
// import path from 'node:path';

// const somePath = path.join('some_folder', 'some_file.txt');
// console.log(somePath);
// на Windows → 'some_folder\\\\some_file.txt'
//////

// абсолютний шлях до робочої директорії
// const pathToWorkDir = path.join(process.cwd());

// додаємо нові частини до шляху
// const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');
// console.log(pathToFile);
// C:\\\\коренева_папка\\\\some_folder\\\\some_file.txt

import path from 'node:path';

// Windows
console.log(path.parse('C:\\\\path\\\\dir\\\\file.txt'));
/*
{
  root: 'C:\\\\',
  dir: 'C:\\\\path\\\\dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
