import * as React from 'react';
import { InfoItemRow, ThemeDiv} from 'argo-ui/v2';
import { ObjectMeta, TypeMeta, CanaryStatus, CanarySpec } from './models/kubernetes';

export type Canary = TypeMeta & { metadata: ObjectMeta } & {
    status: CanaryStatus;
    spec: CanarySpec;
};

export const CanaryWidget = (props: {
    tree: any;
    resource: Canary;
  }) => {
    JSON.stringify(`Tree: ${props.tree}`);
    JSON.stringify(`Tree: ${props.resource}`);
    const steps =Math.round(props.resource.spec.analysis.maxWeight / props.resource.spec.analysis.stepWeight)
    const currentStep = Math.round(props.resource.spec.analysis.maxWeight / props.resource.status.canaryWeight)
    const stepFormatted = `${currentStep}/${steps}`
    const canaryWeightFormatted = `${props.resource.status.canaryWeight}`
    const canaryMaxWeightFormatted = `${props.resource.spec.analysis.maxWeight}`
    const canaryPhaseFormatted =  `${props.resource.status.phase}`

    return (
        <React.Fragment>
            <div className='rollout__row rollout__row--top'>
                <ThemeDiv className='info rollout__info'>
                    <div className='info__title'>Summary</div>
                    <ThemeDiv className='rollout__info__section'>
                        <React.Fragment>
                            <InfoItemRow items={{content: stepFormatted, icon: 'fa-shoe-prints'}} label='Step' />
                            <InfoItemRow items={{content: canaryWeightFormatted, icon: 'fa-balance-scale-right'}} label='Current Weight' />
                            <InfoItemRow items={{content: canaryMaxWeightFormatted, icon: 'fa-balance-scale'}} label='Max Weight' />
                            <InfoItemRow items={{content: canaryPhaseFormatted, icon: 'fa-regular fa-hourglass-half'}} label='Phase' />
                        </React.Fragment>
                    </ThemeDiv>
                </ThemeDiv>
            </div>
        </React.Fragment>
    );
}


export const component = CanaryWidget;