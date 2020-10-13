goog.provide("goog.labs.userAgent.device");
goog.require("goog.labs.userAgent.util");
goog.labs.userAgent.device.isMobile = function() {
  return !goog.labs.userAgent.device.isTablet() && (goog.labs.userAgent.util.matchUserAgent("iPod") || goog.labs.userAgent.util.matchUserAgent("iPhone") || goog.labs.userAgent.util.matchUserAgent("Android") || goog.labs.userAgent.util.matchUserAgent("IEMobile"));
};
goog.labs.userAgent.device.isTablet = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("Android") && !goog.labs.userAgent.util.matchUserAgent("Mobile") || goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.device.isDesktop = function() {
  return !goog.labs.userAgent.device.isMobile() && !goog.labs.userAgent.device.isTablet();
};

//# sourceMappingURL=goog.labs.useragent.device.js.map
