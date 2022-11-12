import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
      { duration: '1m', target: 100 },
      { duration: '30s', target: 70 },
      { duration: '20s', target: 50 },
      { duration: '10s', target: 15 },      
  ],
};

export default function () {
  const res = http.get('http://localhost:3000/orders');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
