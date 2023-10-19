// Button.stories.js

import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {Skeleton} from '../../../src';
import {View, Alert} from 'react-native';

storiesOf('Sample Skeleton', module)
  .addDecorator(getStory => <View style={{flex: 1}}>{getStory()}</View>)
  .add('Sample Skeleton Button Story', () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}>
        <Skeleton
          type={'Shine'}
          items={[
            {width: 60},
            {width: 20},
            {width: 100, height: 30, style: {marginTop: 20}},
          ]}
          children={<View style={{width: 50, height: 20}} />}
        />
      </View>
    );
  });
