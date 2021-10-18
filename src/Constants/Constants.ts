export const BACKGROUND_COLOR = '#F6FAFF'; //old: '#2E2E47'
export const TEXT_COLOR = '#181C3A';
export const TEXT_COLOR_HIGHLIGHT = '#0F1449';
export const TEXT_COLOR_GRAY = '#BEBDC0';
export const TINT_COLOR = '#FC5185';

export interface PieData {
  y: number;
  label?: string;
}

export interface Coin {
  image: string;
  abbreviation: string;
  fullname: string;
  course?: number;
  changePercentage?: number;
}
