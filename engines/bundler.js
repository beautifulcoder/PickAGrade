var styles = [
  '/styles/base.css',
  '/styles/card.css',
  '/styles/witty.css'
];

function getStyles() {
  const virtualPath = process.env.virtualPath || '';
  const isProduction = process.env.isProduction || '';

  if (isProduction === 'true') {
    return `<link href="${virtualPath}/styles/css-dccaa9ccbadffb8e3567a1206f91862c.css" rel="stylesheet" />`;
  }

  var bundle = '';
  styles.forEach(function(style) {
    bundle += `<link href="${virtualPath}${style}" rel="stylesheet" />`;
  });

  return bundle;
}

module.exports = getStyles;
