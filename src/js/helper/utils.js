class Utils {
  constructor() {
    this.name = 'Utils';
    this.version = '1.0.0';
  }

  _browserUpdate() {
    var browserUpdate = document.createElement('script');
    browserUpdate.src = '//browser-update.org/update.min.js';

    return document.body.appendChild(browserUpdate);
  }

  _detectMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  _detactAgentIE () {
    var agent = navigator.userAgent.toLowerCase();
    var wrapper = document.getElementById('wrap');

    if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf('msie') != -1)) {
      document.body.classList.add('unsupported-browser');
      return wrapper.innerHTML = '';
    }
  }
}

export default Utils;
