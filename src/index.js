import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Routes/Main/Main';

ReactDOM.render(<Main />, document.getElementById('root'));

// /**
//  * Service Worker
//  */

// const swVersion = require('./config').swVersion;

// /**
//  * Register the service worker according to swVersion
//  */
// function registerServiceWorker() {
//   navigator.serviceWorker.register(`./sw-${ swVersion }.js`, { scope: '/' })
//     .then(() => {
//       console.info('SW: Service Worker registered');// eslint-disable-line
//     })
//     .catch((e) => {
//       console.info('SW: Error registering service worker, assets will be served from network');// eslint-disable-line
//       console.info(e); // eslint-disable-line
//     });
// }

// if ('serviceWorker' in navigator && window.navigator.userAgent !== 'ghost') {
//   navigator.serviceWorker.getRegistration().then(
//     (registration) => {
//       if (registration !== undefined && registration.active.scriptURL.indexOf(`sw-${ swVersion }`) < 0) {
//         registration.unregister().then((unregistered) => {
//           if (unregistered) {
//             registerServiceWorker();
//           }
//         });
//       } else if (registration === undefined) {
//         registerServiceWorker();
//       }
//     }
//   );
// }
