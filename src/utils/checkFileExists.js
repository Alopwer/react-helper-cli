import { promises as Fs } from 'fs';

export const checkFileExists = async (path) => {  
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}