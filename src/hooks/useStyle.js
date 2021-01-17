import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context';

const getOppositeValue = (rule) => {
  switch (rule) {
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    case 'margin-right':
      return 'margin-left';
    case 'marginLeft':
      return 'margin-right';
    case 'padding-left':
      return 'padding-right';
    case 'padding-right':
      return 'padding-left';
    case 'border-right':
      return 'border-left';
    case 'border-left':
      return 'border-right';
    default:
      return rule;
  }
};

const useStyle = () => {
  const [{ lang }] = useContext(GlobalContext);

  useStyle.rtl = (rule) => (lang === 'ar' ? getOppositeValue(rule) : rule);

  return useStyle.rtl;
};

export default useStyle;
