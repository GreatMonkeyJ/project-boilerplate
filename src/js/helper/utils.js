class Utils {
  constructor() {
    this.name = 'Utils';
    this.version = '1.0.0';
  }

  _detectMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}

export default Utils;
