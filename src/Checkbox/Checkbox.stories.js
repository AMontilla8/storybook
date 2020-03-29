import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';


storiesOf('Checkbox', module)

.add("Checkbox Black", () => <Checkbox 
    type="checkbox" 
    checkStyle="checkmark" boxColor="container" 
/>)
.add("Checkbox Blue", () => <Checkbox
    type="checkbox"
    checkStyle="checkmarkBlue"
    boxColor="containerBlue"
/>)
.add("Checkbox Black Pop", () => <Checkbox
    type="checkbox"
    checkStyle="checkmark"
    boxColor="container"
    label="Don't show this popup again"
/>)