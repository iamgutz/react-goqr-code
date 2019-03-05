export const BASE_URL = 'api.qrserver.com/v1/create-qr-code/';
export const DEFAULT_PROTOCOL = 'https';
export const API_URL = (protocol = DEFAULT_PROTOCOL) => `${protocol}://${BASE_URL}`;
export const QR_MIN_SIZE = 10;
export const QR_MAX_SIZE_GRAPHICS_FORMAT = 1000;
export const QR_MAX_SIZE_VECTORS_FORMAT = 1000000;
export const QR_FILE_FORMATS = [
  'png',
  'gif',
  'jpeg',
  'jpg',
];
export const QR_VECTOR_FORMATS = [
  'svg',
  'eps',
];
export const QR_FORMATS = [
  ...QR_FILE_FORMATS,
  ...QR_VECTOR_FORMATS,
];
export const DEFAULT_QR_FORMAT = QR_FILE_FORMATS[0];
export const QR_DEFAULT_SIZE = 200;
export const BORDER_RADIUS_FACTOR = 13;
export const PADDING_FACTOR = 5.8;
export const PX_TO_REM = 16;
export const SPINNER_DEFAULT_SIZE = '3rem';
export const CHARSET_OPTIONS = [
  'UTF-8',
  'ISO-8859-1',
];
export const ECC_OPTIONS = ['L', 'M', 'Q', 'H'];
export const DEFAULT_COLOR = '0-0-0';
export const DEFAULT_BGCOLOR = '255-255-255';
