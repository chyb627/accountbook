import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

export type TypeIconName = string;

export const Icon: React.FC<{
  name: TypeIconName;
  size: number;
  color: string | undefined;
}> = (props) => <Ionicons name={props.name} size={props.size} color={props.color} />;
