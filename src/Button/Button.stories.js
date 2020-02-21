import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const style = {
    backgroundColor: '#0069D9',
    color: 'white',
    borderRadius: '2px',
    padding: '5px 25px',
    border: '#0069D9'
}
const dangerStyle = {
    backgroundColor: 'Red',
    color: 'white',
    borderRadius: '2px',
    padding: '5px 25px',
    border: 'Red'
}

storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
        style={style}
    />) 

storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
        type="primary"
    />)
    .add('Danger', () => <Button
     label="Do Something"
     type="danger"

      />)
      .add('Success', () => <Button
       label="Do Something"
       type="success"
        />)
        .add('Warning', () => <Button
         label="Do Something"
         type="warning"
          />)
          .add('Default', () => <Button
         label="Do Something"
         type="default"
          />)
           .add('Large Primary', () => <Button
              label="Do Something"
              type="primary"
              large
          />)
           .add('Large Danger', () => <Button
              label="Do Something"
              type="danger"
              large
          />)
            .add('Large Success', () => <Button
              label="Do Something"
              type="Success"
              large
          />)
             .add('Large Warning', () => <Button
              label="Do Something"
              type="Warning"
              large
          />)
             .add('Large Default', () => <Button
              label="Do Something"
              type="Default"
              large
          />)
          .add('Large Default', () => <Button
          label="Do Something"
          type="default"
          large
           />)