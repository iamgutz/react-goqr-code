import _map from 'lodash/map';
import _compact from 'lodash/compact';
import {
  QR_MAX_SIZE_GRAPHICS_FORMAT,
  QR_MAX_SIZE_VECTORS_FORMAT,
  QR_MIN_SIZE,
  PX_TO_REM,
  SPINNER_DEFAULT_SIZE,
  DEFAULT_QR_FORMAT,
  QR_VECTOR_FORMATS,
  API_URL,
  QR_DEFAULT_SIZE,
  DEFAULT_COLOR,
  DEFAULT_BGCOLOR,
} from './constants';

export const REGEXP_COLOR = /^(([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|((\d{1,3})-(\d{1,3})-(\d{1,3}))))+$/gm;

export const getQrSize = (sizePx, format = DEFAULT_QR_FORMAT) => {
  const maxSize = QR_VECTOR_FORMATS.includes(format)
    ? QR_MAX_SIZE_VECTORS_FORMAT
    : QR_MAX_SIZE_GRAPHICS_FORMAT;

  if (sizePx < QR_MIN_SIZE) {
    return QR_MIN_SIZE;
  }
  if (sizePx > maxSize) {
    return maxSize;
  }
  return sizePx;
};

export const validateColor = color => {
  const regexp = REGEXP_COLOR;
  return regexp.test(color) ? color : DEFAULT_COLOR;
};
export const validateBgcolor = color => {
  const regexp = REGEXP_COLOR;
  return regexp.test(color) ? color : DEFAULT_BGCOLOR;
};

export const stringifyOptions = options => {
  const arr = _compact(_map(options, (value, key) => {
    let keyname = key;
    let paramValue = value;
    switch (key) {
      case 'charsetSource':
        keyname = 'charset-source';
        break;
      case 'charsetTarget':
        keyname = 'charset-target';
        break;
      case 'color':
        paramValue = validateColor(value);
        break;
      case 'bgcolor':
        paramValue = validateBgcolor(value);
        break;
      default:
        keyname = key;
    }

    return value ? `${keyname}=${paramValue}` : null;
  }));
  return arr.join('&');
};

export const getQrImageSrc = ({
  data,
  sizePx = QR_DEFAULT_SIZE,
  format = DEFAULT_QR_FORMAT,
  protocol,
  options,
}) => {
  if (!data) {
    return null;
  }
  const qrSize = getQrSize(sizePx, format);
  const parsedOptions = stringifyOptions(options);
  const params = parsedOptions ? `&${parsedOptions}` : '';
  return `${API_URL(protocol)}?data=${data}&size=${qrSize}x${qrSize}${params}`;
};

export const convertSizeToRem = (sizePx = QR_MIN_SIZE) => getQrSize(sizePx) / PX_TO_REM || null;

export const getSpinnerSize = sizePx => {
  const maxSize = parseInt(SPINNER_DEFAULT_SIZE, 10);
  const convertedSize = convertSizeToRem(sizePx);
  return convertedSize > maxSize ? SPINNER_DEFAULT_SIZE : `${convertedSize}rem`;
};

export const calculateProportion = (size, factor) => convertSizeToRem(size) / factor;
