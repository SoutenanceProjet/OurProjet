import { clsx } from '../../utils';

export type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = '' }: IconProps) {
  return (
    <span className={clsx('material-symbols-rounded', className)}>{name}</span>
  );
}
