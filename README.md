# Node.JS crash course

This is updated version of Node.JS crash course. Sources from this course are moved to src/node_crash_course and rewrite from Javascript to Typescript.

## Defined npm scripts

```bash
npm run start       # node dist/app.js
npm run start_cc    # node dist/node_crash_course/index.js
npm run dev         # nodemon src/app.ts
npm run dev_cc      # nodemon src/node_crash_course/index.ts
npm run build       # tsc -p .
```

## Running Node.JS code

### Compile and then run

```bash
npm run build       # which runs command below
# tsc -p .
node dist/node_crash_course/person.js     # Example script
```

### Direct run .ts files (ts-node)

To run directly .ts file you must install `ts-node` package from npm/yarn:

```bash
npm install -g ts-node
```

Then you can run .ts file e.g.:

```bash
ts-node src/node_crash_course/person.ts   # Example script
```

### Direct run .ts files (nodemon)

```bash
npm run dev   # which runs in this particular case
# nodemon src/app.ts
```
