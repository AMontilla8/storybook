import React from 'react';
import { storiesOf } from '@storybook/react';
import Voucher from './Voucher'

storiesOf('Voucher', module)

.add('Voucher', () => <Voucher 
grid
/>)
.add('Voucher Large', () => <Voucher 
large
/>)
