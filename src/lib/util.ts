export const formatNumber = (value?: number, options?: Intl.NumberFormatOptions) => {
  if (value === null || value === undefined) return '';
  return value.toLocaleString('es-ES', options);
};

export const formatNumberDecimals = (value?: number, options?: Intl.NumberFormatOptions) => {
  if (value === null || value === undefined) return '';
  const decimalOptions: Intl.NumberFormatOptions = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    ...options,
  };

  return value.toLocaleString('es-ES', decimalOptions);
};

export const nl2br = (value: string) => {
  if (!value) return '';
  if (value.indexOf('<p>') !== -1) return value;
  if (value.indexOf('<br') !== -1) return value;
  return value.replace(/(\r\n|\n\r|\r|\n)/g, '<br/>$1');
};
