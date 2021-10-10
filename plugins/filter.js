import { DateTime } from 'luxon';
import Vue from 'vue';

// 日付のフォーマット
Vue.filter('formatDate', (value) => {
  // APIの日付
  const valueDate = DateTime.fromISO(value);
  return valueDate.toFormat('yyyy.MM.dd');
});
