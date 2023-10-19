import {ReactNode} from 'react';
import {PlaceholderProps} from 'rn-placeholder/lib/Placeholder';
import {PlaceholderLineProps} from 'rn-placeholder/lib/PlaceholderLine';

export interface ISkeletonProps extends PlaceholderProps {
  children?: ReactNode;
  items?: PlaceholderLineProps[];
  type?: 'Fade' | 'Shine' | 'Progressive' | 'ShineOverlay' | 'Loader';
}
