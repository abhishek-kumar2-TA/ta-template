import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

export const reportWebVitals = (onPerfMetricEntry?: (metric: Metric) => void) => {
  if (onPerfMetricEntry && typeof onPerfMetricEntry === 'function') {
    onFCP(onPerfMetricEntry);
    onLCP(onPerfMetricEntry);
    onINP(onPerfMetricEntry);
    onCLS(onPerfMetricEntry);
    onTTFB(onPerfMetricEntry);
  }
};
