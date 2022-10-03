import * as React from 'react';
import { ObjectMeta, TypeMeta, CanaryStatus, CanarySpec } from './models/kubernetes';

export type Canary = TypeMeta & { metadata: ObjectMeta } & {
  status: CanaryStatus;
  spec: CanarySpec;
};

export const Extension = (props: {
  tree: any;
  resource: Canary;
}) => (
  <div>
    <div>Canary: {props.resource.metadata.name}</div>
    <div>Phase {props.resource.status.phase}</div>
    <div>Weight {props.resource.status.canaryWeight}</div>
  </div>
  
);

export const component = Extension;