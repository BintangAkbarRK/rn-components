import React from 'react';
import {
  Placeholder,
  PlaceholderLine,
  Fade,
  Loader,
  Progressive,
  Shine,
  ShineOverlay,
  PlaceholderMedia,
} from 'rn-placeholder';
import {ISkeletonProps} from './skeleton.props';
import {PlaceholderLineProps} from 'rn-placeholder/lib/PlaceholderLine';

const Skeleton: React.FC<ISkeletonProps> = props => {
  const animation: any =
    props?.type === 'ShineOverlay'
      ? ShineOverlay
      : props?.type === 'Loader'
      ? Loader
      : props?.type === 'Progressive'
      ? Progressive
      : props?.type === 'Shine'
      ? Shine
      : Fade;

  return (
    <Placeholder {...props} Animation={animation}>
      {props?.items?.map((obj: PlaceholderLineProps) => (
        <PlaceholderLine {...obj} />
      ))}
      {props?.children}
    </Placeholder>
  );
};

export {
  Skeleton,
  Loader,
  PlaceholderLine,
  Shine,
  ShineOverlay,
  Fade,
  Progressive,
  PlaceholderMedia,
};
