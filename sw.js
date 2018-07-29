/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/css/fonts.css","572384380532f3d033f1c37083492072"],["/css/style.css","6ab4b604699bbd55454508e81ae893c6"],["/images/favicon.png","040f76b41d8e8d2b1cc08eecd3f42447"],["/images/illustrator-raphael-js-guide/import-svg.png","56da4f3c0f4a661069f0f2df66625bdd"],["/images/illustrator-raphael-js-guide/inspect-elements.png","fb8b60061f23732a99d79d2c450a9725"],["/images/illustrator-raphael-js-guide/paste-code-in.png","31462f7b47b3b97bd9d992065955c4cf"],["/images/illustrator-raphael-js-guide/poor-snugug.png","06c1e6d93835deb46c2c7476680ef3c8"],["/images/illustrator-raphael-js-guide/snugug-head.png","fee40dc46394b7b0424ca22d2f818085"],["/images/illustrator-raphael-js-guide/snugug-in-illustrator.png","46f10e2a9ef7379d1cf53fb06f5815c5"],["/images/illustrator-raphael-js-guide/svg-options.png","8c9cb1b2f63cfe9e97230e011a1878d5"],["/images/illustrator-raphael-js-guide/the-whole-shebang.png","3b227e7cb617db754227b5510a6d917f"],["/images/principles-responsive-web-design/the-web.jpg","6fa3446f2b3f41a7b70b9be3f7911630"],["/images/there-is-no-enterprise/no-enterprise.jpg","332b310b7ed1cd8c6fcedfef18b94851"],["/images/utilities-libraries-frameworks-oh-my/shiny-and-chrome.gif","0756cc3a557c71a2f34465bc39bac745"],["/images/what-is-ibm-hackademy/hackademy01.jpg","fded7a0de6b487bd4f9fa9fe5533c7d5"],["/images/what-is-ibm-hackademy/hackademy20.jpg","89767ca0f4b2f89773d4f6f80b4086b1"],["/images/what-is-ibm-hackademy/hackademy49.jpg","8306f4e0b289b77715931243a45d48dc"],["/images/yo-dawg-i-heard-you-like-redesigns/cable.png","13ce2a7fe5b3e87670047126b6d3bf74"],["/images/yo-dawg-i-heard-you-like-redesigns/mobile.png","219ee34b53d7f70c6416c415ba479536"],["/index.html","4258a9667bd9992b4fa68aaa1c54bed5"],["/js/main.js","0b5c4d545275f7552a846baa667d9c47"],["/me/index.html","0ae4bc6f9c1126bf45120e907726084c"],["/musings/a-recipe-for-documentation/index.html","9e3ce852f46a32223bc8b3ec47a25b66"],["/musings/agile-and-github/index.html","b94797732da274df5941319d1a3e6de1"],["/musings/amusing-analytics-december/index.html","2f5fb4f4bce53cd0f1b8d3864b717585"],["/musings/armadillo/index.html","2869c1e61475b23b4395c46431389fa2"],["/musings/aurora-30-magic-birds-and-boars/index.html","e5ce120c818653d5efb616a9fe3c4a12"],["/musings/austin/index.html","0bdeea2b22594264571ed653596c2c3e"],["/musings/bazaar-cathedral/index.html","45bdb5cd16c3d350ca8676e9750ab498"],["/musings/bulletproof-combo-fixed-and-fluid-grids-css3-calc/index.html","43ea23a23eef2f34457c9cd79f98fcf8"],["/musings/css-strategy/index.html","f0eb2d1f9e849d1da5dbe51d7fcd523d"],["/musings/debugging-sass-source-maps/index.html","b057909ae7fbf4707e3ddfdcb547a3e7"],["/musings/do-you-believe-magic/index.html","bbd18ad6223673c95613e4c9de43e81e"],["/musings/drafts/index.html","d4e29199ce137b2b738a97e6cb1c06cd"],["/musings/drupalcon-munich-presentation/index.html","357ce779d5f2534e8c748793f15773fb"],["/musings/dude-wheres-my-modal/index.html","950ca0876113e6124d4b782560a8f8fb"],["/musings/element-queries/index.html","95b494a4d98cd615ed8a8dbfb83454dd"],["/musings/empathy-vs-understanding/index.html","3044a13c9eeff94c7a7cef1eb789f22b"],["/musings/getting-started-with-grid/index.html","9eee7025c1f381eedad937058479cdaf"],["/musings/illustrator-to-raphael-js-guide/index.html","53a8ae3cce2effd942af8de21f1f7fe9"],["/musings/index.html","ef4489af41e369daa064add5034ea416"],["/musings/installing-sass-and-compass-across-all-platform/index.html","36d03f30cbd556e2c8338b8c04a1dfea"],["/musings/introducing-breakpoint-media-queries-made-easy/index.html","a25e7ac3ee28563d7412795f9944de4c"],["/musings/introducing-susy-next/index.html","8068d7077c05ba46254bafb1ae6d871c"],["/musings/it-all-started-our-motion-designer/index.html","6de356536af6f54735f14d240dd426a6"],["/musings/lighthouse-web-performance-architecture-and-you/index.html","03c0e8d7f2c1a027604063b3379d9914"],["/musings/measure-tester/index.html","10bef58c1ed5784fbe405f04aee75bf2"],["/musings/modern-cutting-the-mustard/index.html","7f97cc675aca7c3902eb4af953a86516"],["/musings/nyc-camp-presentation/index.html","e349dd0c6478a00a4b7e2f7553caa1a6"],["/musings/override-theme-functions-drupal-7-module/index.html","cc88d0e4e0e438b29230ef0daa901ad8"],["/musings/performance-sketches/index.html","5887c80d8ddc279c39097bf31e2a555d"],["/musings/persona-alignment/index.html","9c481ab1a83cff0e4ad5c23a2ac29514"],["/musings/principles-responsive-web-design/index.html","e0bc5d1e9a31ada1401368c7d55c6a9a"],["/musings/progressive-enhancement-code-pattern-using-sass-and-modernizr/index.html","451be708a71f0425959180767d638eae"],["/musings/responsive-designs-dirty-little-secret/index.html","5db124c5aa3c5fa667b765640cf7720a"],["/musings/responsive-nirvana/index.html","5650ec4ffb48a8d59fe2e6fb82635b9a"],["/musings/saying-goodbye-to-singularity/index.html","7f7effd95ee70ac51cecfeaf0be7699d"],["/musings/singularity-10/index.html","1eda7c2257d319d4f2a6a10fb3efeac2"],["/musings/site-refresh/index.html","8ac6e0245d58f84cd2a5eaf418c4d513"],["/musings/style-guide-questionnaire-results/index.html","432fd5fc62245e9f3764c020c904f7be"],["/musings/svgs-icon-fonts-and-rasters-oh-my/index.html","bdb4614df197df5f31c87f1cbd090763"],["/musings/target-your-css/index.html","41262f9d5525ba1051f656df70f49694"],["/musings/the-art-of-keeping-up/index.html","43c0d562b47b5929ceaf642137da157f"],["/musings/there-is-no-enterprise/index.html","a5bd25c185d1d3fcb33520c26f1d45f0"],["/musings/unit-testing-gulp-tasks/index.html","f5f456fbcd77ac47de7b1c4ba41fd5c3"],["/musings/utilities-libraries-frameworks-oh-my/index.html","299a6189554b7c04cc794d4e019f1208"],["/musings/what-can-blue-do-you/index.html","470028e5f4c7f3ee9c051e34d619a5df"],["/musings/what-is-ibm-hackademy/index.html","6961a77fb247967e4619912bffceb35b"],["/musings/yo-dawg-i-heard-you-like-redesigns/index.html","649bed70e8e23bfce1a173ff80cb3b65"],["/musings/you-probably-shouldnt-use-javascript-framework/index.html","cf57408ce6a9a0b8cb1f48f8e7bb5675"],["/presentations/index.html","257d4332a9c2879f5cd594460a5160c3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







