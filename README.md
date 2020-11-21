# Common
[![ci](https://gitlab.com/sokkuri/Common/badges/master/pipeline.svg?style=flat)](https://gitlab.com/sokkuri/Common/-/commits/master)
[![npm](https://img.shields.io/npm/v/@sokkuri/common.svg)](https://www.npmjs.com/package/@sokkuri/common)

Common data to work with the Sokkuri API.

**This package includes:**
- Models
- Translations
- Constants

## Setup & Build
Install all dependencies:
```
npm install
```

Build:
```
npm run build
```

## Usage
Import what you need and use it like this for example:
```ts
import { Anime, Constants } from "@sokkuri/common";

let anime: Anime;
let manga = Constants.Adaptions.Manga;
```
