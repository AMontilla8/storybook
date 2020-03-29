import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

storiesOf('Select', module)

.add('Main Outline Select', () => <Select
label="Select"
outline
/>)
.add('Main Outline Small Select', () => <Select
label="Select"
outline
small
/>)
.add('Main Outline Mini Select', () => <Select
label="Select"
outline
mini
/>)
.add('Main Filled Select', () => <Select
label="Select"
filled
/>)
.add('Main Filled Small Select', () => <Select
label="Select"
filled
small
/>)
.add('Main Filled Mini Select', () => <Select
label="Select"
filled
mini
/>)