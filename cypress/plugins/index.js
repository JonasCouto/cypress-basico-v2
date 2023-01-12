module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, args) => {
      if (browser.name === 'chrome') {
        args.push('--disable-gpu');
        args.push(`--window-size=410,860`);
        return args;
      }
    });
  };