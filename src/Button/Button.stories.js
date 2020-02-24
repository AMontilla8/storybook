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
        whiteText
    />)
    .add('Danger', () => <Button
     label="Do Something"
     type="danger"
     whiteText
      />)
      .add('Success', () => <Button
       label="Do Something"
       type="success"
       whiteText
        />)
        .add('Warning', () => <Button
         label="Do Something"
         type="warning"
         whiteText
          />)
          .add('Default', () => <Button
         label="Do Something"
         type="default"
         whiteText
          />)
           .add('Large Primary', () => <Button
              label="Do Something"
              type="primary"
              large
              whiteText
          />)
           .add('Large Danger', () => <Button
              label="Do Something"
              type="danger"
              large
              whiteText
          />)
            .add('Large Success', () => <Button
              label="Do Something"
              type="success"
              large
              whiteText
          />)
             .add('Large Warning', () => <Button
              label="Do Something"
              type="warning"
              large
              whiteText
          />)
             .add('Large Default', () => <Button
              label="Do Something"
              type="Default"
              large
              whiteText
          />)
              .add('Large Default', () => <Button
              label="Do Something"
              type="default"
              large
              whiteText
              />)
               .add('Primary Border', () => <Button
               label="Do Something"
               type="primaryBorder"
               primaryText
               />)
                .add('Danger Border', () => <Button
                label="Do Something"
                type="dangerBorder"
                dangerText
                />)
                 .add('Success Border', () => <Button
                 label="Do Something"
                 type="successBorder"
                 successText
                 />)
                  .add('Warning Border', () => <Button
                  label="Do Something"
                  type="warningBorder"
                  warningText
                  />)
                  .add('Default Border', () => <Button
                  label="Do Something"
                  type="defaultBorder"
                  defaultText
                  />)
                   .add('Larger Primary Border', () =>  <Button
                   label="Do Something"
                   type="primaryBorder"
                   large
                   primaryText
                   />)
                    .add('Larger Danger Border', () =>  <Button
                    label="Do Something"
                    type="dangerBorder"
                    large
                    dangerText
                    />)
                     .add('Larger Success Border', () =>  <Button
                     label="Do Something"
                     type="successBorder"
                     large
                     successText
                     />)
                      .add('Larger Warning Border', () =>  <Button
                      label="Do Something"
                      type="warningBorder"
                      large
                      warningText
                      />)
                       .add('Larger Default Border', () =>  <Button
                       label="Do Something"
                       type="defaultBorder"
                       large
                       defaultText
                       />)
                        .add('Opaque Primary', () => <Button
                        label="Do Something"
                        type="opaqueP"
                        primaryText
                        />)
                         .add('Opaque Danger', () => <Button
                         label="Do Something"
                         type="opaqueD"
                         dangerText
                         />)
                          .add('Opaque Success', () => <Button
                          label="Do Something"
                          type="opaqueS"
                          successText
                          />)
                            .add('Opaque Warning', () => <Button
                            label="Do Something"
                            type="opaqueW"
                            warningText
                            />)
                                .add('Opaque Default', () => <Button
                                label="Do Something"
                                type="opaqueDf"
                                defaultText
                                />)
                                    .add('Large Opaque Primary', () => <Button
                                    label="Do Something"
                                    type="opaqueP"
                                    primaryText
                                    large
                                    />)
                                        .add('Large Opaque Danger', () => <Button
                                        label="Do Something"
                                        type="opaqueD"
                                        dangerText
                                        large
                                        />)
                                            .add('Large Opaque Success', () => <Button
                                            label="Do Something"
                                            type="opaqueS"
                                            successText
                                            large
                                            />)
                                                .add('Large Opaque Warning', () => <Button
                                                label="Do Something"
                                                type="opaqueW"
                                                warningText
                                                large
                                                />)
                                                    .add('Large Opaque Default', () => <Button
                                                    label="Do Something"
                                                    type="opaqueDf"
                                                    defaultText
                                                    large
                                                    />)
                                                        .add('Add To Cart', () => <Button
                                                        label="Add To Cart"
                                                        type="addTo"
                                                        primaryText
                                                        />)
                                                            .add('Add To Favorite', () => <Button
                                                            label="Add To Favorite"
                                                            type="favorite"
                                                            primaryText
                                                            />)
                                                             .add('Cart Icon', () => <Button
                                                             type="cart"
                                                             />)
                                                              .add('Heart', () => <Button
                                                              type="heart"
                                                              />)