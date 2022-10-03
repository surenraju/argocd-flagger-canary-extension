export type Time = string;

export interface ObjectMeta {
    name?: string;
    generateName?: string;
    namespace?: string;
    selfLink?: string;
    uid?: string;
    resourceVersion?: string;
    generation?: number;
    creationTimestamp?: Time;
    deletionTimestamp?: Time;
    deletionGracePeriodSeconds?: number;
    labels?: {[name: string]: string};
    annotations?: {[name: string]: string};
    ownerReferences?: any[];
    initializers?: any;
    finalizers?: string[];
    clusterName?: string;
}

export interface TypeMeta {
    kind?: string;
    apiVersion?: string;
}

export interface CanaryStatus {
  canaryWeight?: number;
  failedChecks?: number;
  iterations?: number;
  lastAppliedSpec?: string;
  lastPromotedSpec?: string;
  lastTransitionTime?: Time;
  phase?: string;
}

export interface CanarySpec {
    analysis: CanaryAnalysis;
    skipAnalysis: boolean
}

export interface CanaryAnalysis {
  interval?: string;
  threshold?: number;
  maxWeight?: number;
  stepWeight?: number;
}