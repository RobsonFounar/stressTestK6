// k6 run "nomedaclasse".js  
// k6 run k6.js

// k6 run --vus 10 --duration 30s script.js

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test.k6.io');
  sleep(1); // Sleep de 1 segundo entre as chamadas
}


/* Relatorio no Console
Quando visto o AVG significa que é a média do valor
Quando visto o MED significa que no meio do teste obeteve aquele resultado*/
