# Knowledge Sink

## scss

### asset path

You could use relative paths to access the assets folder like so:

`background-image: url(../../assets/...);`

But, angular allows you to shortcut to the assets:

`background-image: url(/assets/...);`

## angular.json

### css shortcut

```
"stylePreprocessorOptions": {
    "includePaths": ["apps/reckoning/src/styles", "node_modules"]
},
```

the first entry allows you to import styles from anywhere in your app using just the file name.

the second entry `node_modules` allows you to import styles from node_modules using the package namespace, in our case we're importing:

`@import ~artesgo/style-utils/index;`
