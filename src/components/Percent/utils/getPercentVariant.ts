import theme from '../../../theme';

export enum PercentVariant {
  primary = 'primary',
  secundary = 'secundary',
  tertiary = 'tertiary',
}

export const getPercentVariant = (variant: PercentVariant) =>
  ({
    [PercentVariant.primary]: {
      backgroundColor: theme.COLORS.GREEN_MID,
    },
    [PercentVariant.secundary]: {
      backgroundColor: theme.COLORS.RED_MID,
    },
    [PercentVariant.tertiary]: {
      backgroundColor: theme.COLORS.GRAY_200,
    },
  }[variant]);
