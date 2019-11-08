class Utils {
  _numberFormat(target) {
    let deleteComma = target.value.toString().replace(/\,/g, '');

    if (isFinite(deleteComma) === false) return target.value = '';

    let temp = deleteComma;
    return target.value = temp.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  }
}

export default Utils;
