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
    let currentStep = Math.round(props.resource.spec.analysis.maxWeight / props.resource.status.canaryWeight)
    if (props.resource.status.canaryWeight == 0) {
        currentStep = 0
    }
    const stepFormatted = `${currentStep}/${steps}`
    const canaryWeightFormatted = `${props.resource.status.canaryWeight}`
    const canaryMaxWeightFormatted = `${props.resource.spec.analysis.maxWeight}`
    const canaryPhaseFormatted =  `${props.resource.status.phase}`

    return (
        <React.Fragment>
           
            <ThemeDiv className='argo-box'>
                    <ThemeDiv className='argo-box__title'>Summary</ThemeDiv>
                    <ThemeDiv className='rollout__info__section'>
                        <React.Fragment>
                            <InfoItemRow items={{content: stepFormatted, icon: 'fa-shoe-prints'}} label='Step' />
                            <InfoItemRow items={{content: canaryWeightFormatted, icon: 'fa-balance-scale-right'}} label='Current Weight' />
                            <InfoItemRow items={{content: canaryMaxWeightFormatted, icon: 'fa-balance-scale'}} label='Max Weight' />
                            <InfoItemRow items={{content: canaryPhaseFormatted, icon: 'fa-regular fa-hourglass-half'}} label='Phase' />
                        </React.Fragment>
                    </ThemeDiv>
                {props.resource.status.phase === "Waiting" &&
                    <div style={{width: '50%', marginBottom: '1em'}}>
                        <button className='argo-button argo-button--base' onClick={async () => {
                        }}>Promote Canary</button>
                    </div>
                }
            </ThemeDiv>
   
        </React.Fragment>
    );
}


export const component = CanaryWidget;