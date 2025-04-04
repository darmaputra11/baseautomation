module.exports = {
  androidCapabilities: {
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    'appium:app': `${process.cwd()}/apps/delibalidevrebuild.apk`,
    'appium:autoGrantPermissions': true,
    'appium:noReset': true,
    'appium:fullReset': false
  }
};
