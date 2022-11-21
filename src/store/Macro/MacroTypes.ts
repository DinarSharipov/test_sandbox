export interface MacroStep {
  id: string;
  tag: 'button' | 'input';
  classList: string;
  actionTimeOut?: number;
  action?: 'click' | 'change';
  valueForChange?: string;
  url: string;
}
