import { ImageProps } from 'react-native';

export const BACKGROUND_COLOR = '#F6FAFF'; //old: '#2E2E47'
export const TEXT_COLOR = '#181C3A';
export const TEXT_COLOR_HIGHLIGHT = '#0F1449';
export const TEXT_COLOR_GRAY = '#727173';
export const TINT_COLOR = '#FC5185';

export const MARGIN_OUTER = 24;

export interface PieData {
  y: number;
  label?: string;
}

export interface Coin {
  // eslint-disable-next-line no-undef
  image: ImageProps;
  abbreviation: string;
  fullname: string;
  course: number;
  changePercentage: number;
}

export function currencyFormat(num: number): string {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
