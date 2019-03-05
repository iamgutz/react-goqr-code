/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import QRCode from '../src/index';
import { QR_DEFAULT_SIZE, CHARSET_OPTIONS, ECC_OPTIONS, DEFAULT_COLOR, DEFAULT_BGCOLOR } from '../src/constants';
import { Content, Title } from './styles';

const dynamicStories = storiesOf('DEMO', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Basic Usage', () => {
  const knobs = {
    data: text('data', 'https://www.google.com'),
    size: number('size (pixels)', QR_DEFAULT_SIZE),
    framed: boolean('framed', false),
    charsetSource: select('charsetSource', CHARSET_OPTIONS, CHARSET_OPTIONS[0]),
    charsetTarget: select('charsetTarget', CHARSET_OPTIONS, CHARSET_OPTIONS[0]),
    ecc: select('ecc', ECC_OPTIONS, ECC_OPTIONS[0]),
    color: text('color (decimal or hex)', DEFAULT_COLOR),
    bgcolor: text('bgcolor (decimal or hex)', DEFAULT_BGCOLOR),
  };

  return (
    <Content>
      <Title>React Go QR code</Title>
      <QRCode
        {...knobs}
      />
    </Content>
  );
});
