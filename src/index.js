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

// import path from 'node:path';

// Windows
// console.log(path.parse('C:\\\\path\\\\dir\\\\file.txt'));
/*
{
  root: 'C:\\\\',
  dir: 'C:\\\\path\\\\dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
// import fs from 'node:fs';

// приклад без кодування
// const buffer = fs.readFileSync('./src/file.txt');
// console.log(buffer); // <Buffer 48 65 6c 6c 6f ...>

// приклад із кодуванням
// const data = fs.readFileSync('./src/file.txt', 'utf8');
// console.log('Вміст файлу:', data); // "Hello"
// import fs from 'node:fs';

// import fs from 'node:fs/promises';

// без кодування
// const buffer = await fs.readFile('./src/file.txt');
// console.log(buffer); // <Buffer ... >

// з кодуванням
// const data = await fs.readFile('./src/file.txt', 'utf8');
// console.log('Вміст файлу:', data); // "Hello"
import fs from 'node:fs';

fs.writeFileSync('output.txt', 'Привіт з Node.js!', 'utf8');
