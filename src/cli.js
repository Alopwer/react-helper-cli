import arg from 'arg';
import { createFile } from './main';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--name': String,
      '-n': '--name',
      '--path': String,
      '-p': '--path',
      '--withFolder': Boolean,
      '-f': '--withFolder',
      '--extension': String,
      '-e': '--extension'
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  const argsPath = args['--path'] || process.cwd();
  const actualPath = (argsPath && argsPath.endsWith('/')) ? argsPath : `${argsPath}/`;

  return {
    name: `${args['--name']}` || 'sample',
    path: actualPath,
    hasFolder: args['--withFolder'] || false,
    ext: args['--extension'] || '.jsx'
  };
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  createFile(options);
}