const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@base-color': '#3CB371',
        '@font-family-base': 'sans-serif',
      },
    },
  })
);

// '@base-color': '#3CB371',
