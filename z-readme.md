## note

## Compiling your code

$npm i typescript -g
$tsc --version
Version 5.0.3

$npm i ts-node -g
$ts-node -v
v10.9.1

$ts-node Ts-1.ts
$tsc Ts-1.ts
$tsc Ts-1.ts --outDir ./dist

> $`tsc`
> $`tsc --watch`

$npm init -y

```json
  "scripts": {
    "start": "tsc --watch"
  },

```

$npm run start

## tsconfig.json

`tsc --init`

```json
// type one
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "lib": ["ES2015", "DOM"],
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true
  },
  "exclude": ["node_module"]
}

// type two
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}

```
