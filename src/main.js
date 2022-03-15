import fs from 'fs';
import { checkFileExists } from './utils/checkFileExists';

export const createFile = async ({ name, path, hasFolder, ext }) => {
  const dir = `${path}${name}`;
  if (hasFolder) {
    await fs.mkdir(dir, { recursive: true }, () => {});
  }
  const filePathName = `${dir}/${name}${ext}`;
  const fileExists = await checkFileExists(filePathName);
  if (!fileExists) {
    fs.writeFile(filePathName, 'test2', () => {});
  } else {
    console.log('it exists')
  }
}