class Utils {
  constructor() {
    this.name = 'Utils';
    this.version = '1.0.0';
  }

  _detectMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  _detactAgentIE (callBack) {
    var agent = navigator.userAgent.toLowerCase();
      if  ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf('msie') != -1)) {
        document.body.classList.add('unsupported-browser');
        document.getElementById('#wrap').innerHTML = '';
    }
  }
}

export default Utils;
