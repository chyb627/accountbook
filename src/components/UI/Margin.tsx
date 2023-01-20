import React from 'react';
import { View } from 'react-native';

export const Margin: React.FC<{
  height: number;
}> = (porps) => {
  return <View style={{ height: porps.height }} />;
};
