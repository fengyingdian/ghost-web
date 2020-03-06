import React from 'react';
import AppSkeleton from '../../cube/AppSkeleton';
import PageSample from '../../cube/PageSample';

export default class App extends AppSkeleton {
  state = {};

  render() {
    return (
      <PageSample title={'pageA'} />
    );
  }
}
