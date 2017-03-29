[Injectify](https://github.com/ftdebugger/injectify) loader for [jest](https://github.com/facebook/jest).

Put it into your package.json:

    "jest": {
      "moduleFileExtensions": [
        "js",
        "hbs"
      ],
      "transform": {
        "^.+\\.js$": "babel-jest",
        "^.+\\.hbs$": "injectify-jest"
      }
    },
