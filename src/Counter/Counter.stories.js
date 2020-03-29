import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter'


const counterStart = 0;
const counterMin = -100;
const counterMax = 100;
const counterStep = 1;

storiesOf('Counter', module)
        .add('Counter', () => <Counter
        value={counterStart} min={counterMin} 
        max={counterMax} step={counterStep}
        />)
