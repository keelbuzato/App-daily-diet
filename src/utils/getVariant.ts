import { PercentVariant } from './getPercentVariant';

type GetVariant = 'UP' | 'DOWN';

export const getVariant = (variant: GetVariant) =>
  ({
    ['UP']: PercentVariant.primary,
    ['DOWN']: PercentVariant.secundary,
  }[variant]);
