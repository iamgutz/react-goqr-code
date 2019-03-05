import React from 'react';
import PropTypes from 'prop-types';
import _pick from 'lodash/pick';
import withImageLoader from 'react-image-loader-hoc';
import { Image, QRCodeWrap } from './styles';
import { getQrImageSrc } from './helpers';
import { QR_DEFAULT_SIZE, CHARSET_OPTIONS, ECC_OPTIONS } from './constants';

const QRImage = withImageLoader(Image);

const QRCode = ({ data, size, ...rest }) => {
  const options = _pick(rest, ['charsetSource', 'charsetTarget', 'ecc', 'color', 'bgcolor']);
  return (
    <QRCodeWrap size={size} {...rest}>
      <QRImage
        src={getQrImageSrc({ data, size, options })}
        size={size}
      />
    </QRCodeWrap>
  );
};

QRCode.propTypes = {
  data: PropTypes.string,
  size: PropTypes.number,
  charsetSource: PropTypes.oneOf(Object.values(CHARSET_OPTIONS)),
  charsetTarget: PropTypes.oneOf(Object.values(CHARSET_OPTIONS)),
  ecc: PropTypes.oneOf(Object.values(ECC_OPTIONS)),
  color: PropTypes.string,
  bgcolor: PropTypes.string,
};

QRCode.defaultProps = {
  data: null,
  size: QR_DEFAULT_SIZE,
  charsetSource: undefined,
  charsetTarget: undefined,
  ecc: undefined,
  color: undefined,
  bgcolor: undefined,
};

export default QRCode;
