# @jbrems/logger
A simple Winston logger instance for personal use. Writes logs to the console.

## ♻ Use
1. Add the `@jbrems/logger` package to your npm project
   ```javascript
   yarn add @jbrems/logger
   ```
2. Import the logger instance in your code
   ```typescript
   import { logger } from '@jbrems/logger';
   logger.info('My first info message');
   ```
   will produce `YYYY-MM-DD HH:mm:ss.SSS +ms info My first info message`  
   or provide a label for your logger
   ```javascript
   import { getLogger } from '@jbrems/logger';
   const logger = getLogger('Bookservice 📚');
   logger.debug('Fetching books from series Harry Potter...');
   ```
   will produce `YYYY-MM-DD HH:mm:ss.SSS +ms [Bookservice 📚] debug Fetching books from series Harry Potter...`

## 🎁 Contribute

### 🎀 eslint
This project relies on `eslint` to enforce code quality. It is advised to enable
`Run eslint --fix on save` in `Settings > Language & Frameworks > Javascript > 
Code Quality Tools > ESLint`.

[Read more here](https://github.com/jbrems/docs/blob/master/project-setup.md#-eslint)

### 🏗 Build
To compile the Typescript code to Javascript run the `yarn build` command.
This command will compile all `.ts` files in the `src` folder to `.js` files in the 
`dist` folder and will generate type definitions.

> This command will run eslint before compiling the code.

### 📦 Publish
To publish this package to NPM run `yarn publish`.  

> This command will run the build command before publishing.

> I you are not logged in to npm use `npm login`.

### 🃏 Test
To run the Jest unit tests for this project run `yarn test`.

> The `jest` command will be run with `--verbose` to force Jest to write to stdout.
