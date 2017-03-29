Injectify loader for jest.

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
