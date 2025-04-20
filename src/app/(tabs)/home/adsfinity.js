(() => {
  window.adfinityData = {
    params: {
      staticUrl: "https:\/\/cdn.adfinity.pro\/code",
      published_at: "2025-04-16 19:40:24",
      env: "production",
      version: {
        branch: "main",
        revision: "f0e2752370ba024ea9ac0d28f4127490f4d75a22",
      },
      domains: { main: "wamanga.me", mirror: [".*\\.wamanga\\.me"] },
      url_exception: null,
      is_spa: true,
      creativesConfig: {
        adfox: {
          syncPixels: [
            {
              bidder: "betweenDigital",
              pixels: [
                "https:\/\/ads.betweendigital.com\/sspmatch?p=42565&r=${CACHEBUSTER1}",
              ],
            },
            {
              bidder: "sape",
              pixels: ["https:\/\/acint.net\/cmatch\/?dp=14&pi=1628885"],
            },
          ],
          userTimeout: 1500,
          adfoxBiddersMap: {
            adriver: 1910953,
            betweenDigital: 1910961,
            bidvol: 1910989,
            buzzoola: 1910984,
            otm: 1910986,
            hybrid: 1910983,
            myTarget: 1910976,
            sape: 1979190,
            segmento: 1964603,
            Gnezdo: 2182068,
            Kadam: 2253175,
            astralab: 2293076,
            videonow: 2360314,
            solta: 2724158,
            mediasniper: 2838912,
            getintent: 3103523,
            atraffic: 3141880,
            alfasense: 3170532,
            adwile: 3278895,
          },
        },
        moevideoBanner: [],
        experiment: [],
      },
    },
    blocks: {
      14051: {
        params: {
          blockCaption: "M_Content_1_r",
          publishedAt: "2025-04-16 19:36:11",
          urlsAllowed: "",
          urlsForbidden: "",
          mediaFormatType: "M",
          widthWindowToShow: [],
          styles: "",
        },
        format: {
          type: "content",
          params: {
            height: "250",
            unitsMeasurement: "px",
            showPlaceholder: false,
            unitsMeasurementPlaceholder: "px",
            typeEmbedding: "codeHtml",
            cssPosition: "afterBegin",
            stopScrollHeight: 100,
            stopScrollPBwidth: 10,
            stopScrollPBcolor: "#E6E6E6",
            stopScrollPBbgcolor: "#E6E6E6",
            cssPath: ".adfinity_block_14051",
            infinityScroll: true,
            heightPlaceholder: "250",
            alignCenter: true,
          },
          creativeManager: {
            type: "slider",
            params: {
              setCreatives: [
                {
                  timeToNextLoad: "8",
                  percentToNextLoad: 75,
                  cross: "likeFormat",
                  canCloseAfter: 0,
                  id: "22026_0",
                },
                {
                  timeToNextLoad: 0,
                  percentToNextLoad: 75,
                  cross: "likeFormat",
                  canCloseAfter: 0,
                  id: "22185_1",
                },
              ],
              options: { typeWidth: "percent", typeHeight: "px" },
            },
            creatives: {
              "22026_0": {
                type: "adfox",
                params: {
                  containerId: "adfox_174299693411945501",
                  type: "async",
                  reloadTime: 20,
                  ownerId: 689817,
                  params: {
                    pp: "chmb",
                    ps: "jdjv",
                    p2: "jijk",
                    ld: "https:\/\/wamanga.me",
                    dl: "https:\/\/wamanga.me",
                  },
                  adUnit: {
                    bids: [
                      { bidder: "alfasense", params: { placementId: "66870" } },
                      { bidder: "otm", params: { placementId: "98721" } },
                      { bidder: "solta", params: { placementId: "67-Bl4Jh" } },
                      {
                        bidder: "betweenDigital",
                        params: { placementId: "4837201", sendTargetRef: true },
                      },
                      {
                        bidder: "buzzoola",
                        params: { placementId: "1290289", sendTargetRef: true },
                      },
                      {
                        bidder: "mediasniper",
                        params: { placementId: "27913" },
                      },
                      {
                        bidder: "myTarget",
                        params: { placementId: "1800678" },
                      },
                      { bidder: "sape", params: { placementId: "935776" } },
                      { bidder: "segmento", params: { placementId: "10656" } },
                      {
                        bidder: "astralab",
                        params: { placementId: "67e537894e6965fa7b316351" },
                      },
                      {
                        bidder: "getintent",
                        params: {
                          placementId: "215_AF_wamanga.me_M_Inread_300x250",
                        },
                      },
                    ],
                    sizes: [
                      [300, 250],
                      [250, 250],
                      [300, 200],
                      [200, 200],
                      [320, 100],
                      [300, 100],
                      [320, 50],
                      [300, 50],
                    ],
                  },
                  priority: 10,
                },
              },
              "22185_1": {
                type: "moevideoBanner",
                params: {
                  creativeId: 22185,
                  params: {
                    size: "300x250",
                    maxLoadCnt: "2",
                    creative: "moevideoBanner",
                  },
                  priority: 0,
                  slots: {
                    moevideo: {
                      id: 128131,
                      account: null,
                      slot_id: 12033,
                      code: null,
                      hbShow: 0,
                      comment: null,
                    },
                  },
                  margin: [],
                },
              },
            },
          },
        },
      },
      14052: {
        params: {
          blockCaption: "D_Overlay_r",
          publishedAt: "2025-04-16 19:36:11",
          urlsAllowed: "",
          urlsForbidden: "",
          mediaFormatType: "D",
          widthWindowToShow: { min: 1280 },
          styles: "",
        },
        format: {
          type: "overlay",
          params: {
            width: "336",
            height: "300",
            unitsMeasurement: "px",
            position: "right",
            positionPanelClose: "default",
            blur: 8,
            storageLocal: false,
            externalLaunchBan: false,
            canCloseAfter: 6,
            refreshAfterClose: "35",
            hideBottomSubstrate: true,
          },
          creativeManager: {
            type: "grid",
            params: {
              setCreatives: [{ width: 12, height: 300, id: "22027_0" }],
              options: { typeWidth: "percent", typeHeight: "px" },
            },
            creatives: {
              "22027_0": {
                type: "adfox",
                params: {
                  containerId: "adfox_17429971977455501",
                  type: "adaptive",
                  reloadTime: 10,
                  ownerId: 689817,
                  params: {
                    pp: "chlz",
                    ps: "jdjv",
                    p2: "jijk",
                    ld: "https:\/\/wamanga.me",
                    dl: "https:\/\/wamanga.me",
                  },
                  bannerStates: ["tablet", "desktop"],
                  adaptiveOptions: { phoneWidth: 1280 },
                  adUnit: {
                    bids: [
                      { bidder: "alfasense", params: { placementId: "66872" } },
                      { bidder: "otm", params: { placementId: "98722" } },
                      { bidder: "solta", params: { placementId: "67-Qp8Yi" } },
                      {
                        bidder: "betweenDigital",
                        params: { placementId: "4837202", sendTargetRef: true },
                      },
                      {
                        bidder: "buzzoola",
                        params: { placementId: "1290290", sendTargetRef: true },
                      },
                      {
                        bidder: "mediasniper",
                        params: { placementId: "27914" },
                      },
                      {
                        bidder: "myTarget",
                        params: { placementId: "1800680" },
                      },
                      { bidder: "sape", params: { placementId: "935777" } },
                      { bidder: "segmento", params: { placementId: "10657" } },
                      {
                        bidder: "astralab",
                        params: { placementId: "67e5378b4e6965fa7b31636a" },
                      },
                      {
                        bidder: "getintent",
                        params: {
                          placementId: "215_AF_wamanga.me_D_Stiky_336x280",
                        },
                      },
                    ],
                    sizes: [
                      [300, 300],
                      [336, 280],
                      [300, 250],
                      [250, 250],
                      [300, 200],
                      [200, 200],
                    ],
                  },
                  priority: 10,
                },
              },
            },
          },
        },
      },
      14053: {
        params: {
          blockCaption: "M_Overlay_300x250_r",
          publishedAt: "2025-04-16 19:36:11",
          urlsAllowed: "",
          urlsForbidden: "",
          mediaFormatType: "M",
          widthWindowToShow: { max: 900 },
          styles: "",
        },
        format: {
          type: "overlay",
          params: {
            height: "250",
            unitsMeasurement: "px",
            position: "right",
            positionPanelClose: "default",
            blur: 8,
            storageLocal: false,
            externalLaunchBan: false,
            canCloseAfter: "6",
            refreshAfterClose: "35",
            hideBottomSubstrate: false,
            autoClose: false,
          },
          creativeManager: {
            type: "grid",
            params: {
              setCreatives: [{ width: 12, height: 250, id: "22028_0" }],
              options: { typeWidth: "percent", typeHeight: "px" },
            },
            creatives: {
              "22028_0": {
                type: "adfox",
                params: {
                  containerId: "adfox_174299740249985501",
                  type: "adaptive",
                  reloadTime: 10,
                  ownerId: 689817,
                  params: {
                    pp: "chly",
                    ps: "jdjv",
                    p2: "jijk",
                    ld: "https:\/\/wamanga.me",
                    dl: "https:\/\/wamanga.me",
                  },
                  bannerStates: ["phone", "tablet"],
                  adaptiveOptions: { tabletWidth: 900 },
                  adUnit: {
                    bids: [
                      { bidder: "alfasense", params: { placementId: "66874" } },
                      { bidder: "otm", params: { placementId: "98724" } },
                      { bidder: "solta", params: { placementId: "67-Kv2Ni" } },
                      {
                        bidder: "betweenDigital",
                        params: { placementId: "4837203", sendTargetRef: true },
                      },
                      {
                        bidder: "buzzoola",
                        params: { placementId: "1290291", sendTargetRef: true },
                      },
                      {
                        bidder: "mediasniper",
                        params: { placementId: "27915" },
                      },
                      {
                        bidder: "myTarget",
                        params: { placementId: "1800682" },
                      },
                      { bidder: "sape", params: { placementId: "935780" } },
                      { bidder: "segmento", params: { placementId: "10658" } },
                      {
                        bidder: "astralab",
                        params: { placementId: "67e5378d4e6965fa7b316383" },
                      },
                      {
                        bidder: "getintent",
                        params: {
                          placementId: "215_AF_wamanga.me_M_Stiky_300x250",
                        },
                      },
                    ],
                    sizes: [
                      [300, 250],
                      [250, 250],
                      [300, 200],
                      [200, 200],
                      [320, 100],
                      [300, 100],
                      [320, 50],
                      [300, 50],
                    ],
                  },
                  priority: 10,
                },
              },
            },
          },
        },
      },
      14054: {
        params: {
          blockCaption: "M_Fullscreen_r",
          publishedAt: "2025-04-16 19:36:11",
          urlsAllowed: "",
          urlsForbidden: "",
          mediaFormatType: "M",
          widthWindowToShow: { max: 900 },
          styles: "",
        },
        format: {
          type: "fullscreen",
          params: {
            blur: 8,
            externalLaunchBan: false,
            storageLocal: false,
            canCloseAfter: 6,
            height: "600",
            timePageView: "300",
            autoClose: true,
          },
          creativeManager: {
            type: "grid",
            params: {
              setCreatives: [{ width: 12, height: 12, id: "22029_0" }],
              options: { typeWidth: "percent", typeHeight: "percent" },
            },
            creatives: {
              "22029_0": {
                type: "adfox",
                params: {
                  containerId: "adfox_174299759423995501",
                  type: "adaptive",
                  reloadTime: 30,
                  ownerId: 689817,
                  params: {
                    pp: "cjci",
                    ps: "jdjv",
                    p2: "jijk",
                    ld: "https:\/\/wamanga.me",
                    dl: "https:\/\/wamanga.me",
                  },
                  bannerStates: ["phone", "tablet"],
                  adaptiveOptions: { tabletWidth: 900 },
                  adUnit: {
                    bids: [
                      { bidder: "alfasense", params: { placementId: "66876" } },
                      { bidder: "otm", params: { placementId: "98725" } },
                      { bidder: "solta", params: { placementId: "67-Zi4Dt" } },
                      {
                        bidder: "betweenDigital",
                        params: { placementId: "4837204", sendTargetRef: true },
                      },
                      {
                        bidder: "buzzoola",
                        params: { placementId: "1290292", sendTargetRef: true },
                      },
                      {
                        bidder: "mediasniper",
                        params: { placementId: "27916" },
                      },
                      { bidder: "sape", params: { placementId: "935781" } },
                      { bidder: "segmento", params: { placementId: "10659" } },
                      {
                        bidder: "astralab",
                        params: { placementId: "67e5378f4e6965fa7b31639c" },
                      },
                      {
                        bidder: "getintent",
                        params: {
                          placementId: "215_AF_wamanga.me_M_Fullscreen_300x600",
                        },
                      },
                    ],
                    sizes: [
                      [300, 600],
                      [160, 600],
                      [240, 400],
                      [300, 300],
                      [336, 280],
                      [300, 250],
                      [250, 250],
                      [300, 200],
                      [200, 200],
                    ],
                  },
                  priority: 10,
                },
              },
            },
          },
        },
      },
      14063: {
        params: {
          blockCaption: "MV Stick",
          publishedAt: "2025-04-16 19:36:11",
          urlsAllowed: "",
          urlsForbidden: "",
          mediaFormatType: "0",
          widthWindowToShow: [],
          styles: "",
        },
        format: {
          type: "nowrap",
          params: { externalLaunchBan: false },
          creativeManager: {
            type: "nowrap",
            params: {
              setCreatives: [{ id: "22042_0" }],
              options: { typeWidth: "percent", typeHeight: "percent" },
            },
            creatives: {
              "22042_0": {
                type: "experiment",
                params: {
                  typeEmbedding: "pathCss",
                  cssPath: "body",
                  cssPosition: "afterBegin",
                  script_body: [
                    {
                      tag: "script",
                      attributes: { type: "text\/javascript" },
                      content:
                        '\n (\n () => {\n const script = document.createElement("script");\n script.src = "https:\/\/cdn1.moe.video\/player\/mvplayer.min.js";\n script.onload = () => {\n addContentRoll({\n width: \'100%\',\n reloadAfterClose: 5,\n placement: 11951,\n promo: true,\n advertCount: 50,\n slot: \'page\',\n sound: \'onclick\',\n fly:{\n mode: \'stick\',\n animation: \'fly\',\n position: \'bottom-right\',\n positionMobile: "bottom",\n width: 445,\n closeSecOffset: 15,\n },\n playerLoad: () => { console.info("----Player Loaded") },\n adLoad: () => { console.info("----adLoad") },\n adStart: () => { console.info("----Ad Started") },\n adImp: () => { console.info("----Ad Impression") },\n ad25: () => { console.info("----Ad 25") },\n ad50: () => { console.info("----Ad 50") },\n ad75: () => { console.info("----Ad 75") },\n adCompl: () => { console.info("----Ad Completed") },\n adFinish: () => { console.info("----Ad Finished") },\n adError: () => { console.info("----Ad Error") },\n adEmpty: () => { console.info("----Ad Empty") },\n });\n }\n document.body.append(script);\n }\n )()\n',
                    },
                  ],
                  creative: "experiment",
                  script_head: null,
                  embeddingCode: null,
                  slots: [],
                  priority: 0,
                },
              },
            },
          },
        },
      },
      14288: {
        params: {
          blockCaption: "M_Content_2_r",
          publishedAt: "2025-04-16 19:40:24",
          urlsAllowed: "",
          urlsForbidden: "",
          mediaFormatType: "M",
          widthWindowToShow: [],
          styles: "",
        },
        format: {
          type: "content",
          params: {
            height: "250",
            unitsMeasurement: "px",
            showPlaceholder: false,
            unitsMeasurementPlaceholder: "px",
            typeEmbedding: "codeHtml",
            cssPosition: "afterBegin",
            stopScrollHeight: 100,
            stopScrollPBwidth: 10,
            stopScrollPBcolor: "#E6E6E6",
            stopScrollPBbgcolor: "#E6E6E6",
            cssPath: ".adfinity_block_14288",
            infinityScroll: true,
          },
          creativeManager: {
            type: "grid",
            params: {
              setCreatives: [{ width: 12, height: 250, id: "22970_0" }],
              options: { typeWidth: "percent", typeHeight: "px" },
            },
            creatives: {
              "22970_0": {
                type: "adfox",
                params: {
                  containerId: "adfox_17448086760715501",
                  type: "async",
                  reloadTime: 20,
                  ownerId: 689817,
                  params: {
                    pp: "chmc",
                    ps: "jdjv",
                    p2: "jijk",
                    ld: "https:\/\/wamanga.me",
                    dl: "https:\/\/wamanga.me",
                  },
                  adUnit: {
                    bids: [
                      { bidder: "alfasense", params: { placementId: "69184" } },
                      { bidder: "otm", params: { placementId: "100006" } },
                      { bidder: "solta", params: { placementId: "67-Dn6Lp" } },
                      {
                        bidder: "betweenDigital",
                        params: { placementId: "4840579", sendTargetRef: true },
                      },
                      {
                        bidder: "buzzoola",
                        params: { placementId: "1291924", sendTargetRef: true },
                      },
                      {
                        bidder: "mediasniper",
                        params: { placementId: "29095" },
                      },
                      {
                        bidder: "myTarget",
                        params: { placementId: "1812890" },
                      },
                      { bidder: "sape", params: { placementId: "937680" } },
                    ],
                    sizes: [
                      [300, 250],
                      [250, 250],
                      [300, 200],
                      [200, 200],
                      [320, 100],
                      [300, 100],
                      [320, 50],
                      [300, 50],
                    ],
                  },
                  priority: 10,
                },
              },
            },
          },
        },
      },
    },
  };
})(); /*! For license information please see adfinity.js.LICENSE.txt */
(() => {
  "use strict";
  let t,
    e = {
      364: () => {
        const t = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          },
          e = function () {
            return (1e10 * Math.random()).toFixed(0);
          },
          n = function (t) {
            const e = t.getBoundingClientRect(),
              n = document.body,
              r = document.documentElement,
              o = window.scrollY || r.scrollTop || n.scrollTop,
              i = window.scrollX || r.scrollLeft || n.scrollLeft,
              a = r.clientTop || n.clientTop || 0,
              u = r.clientLeft || n.clientLeft || 0;
            return { top: e.top + o - a, left: e.left + i - u };
          },
          r = function (t) {
            const e = t.getBoundingClientRect();
            return {
              top: e.top + window.scrollY,
              left: e.left + window.scrollX,
            };
          },
          o = function (t) {
            const e = t.getBoundingClientRect();
            return { top: e.top, left: e.left };
          },
          i = function (t) {
            return JSON.parse(JSON.stringify(t));
          };
        function a(t) {
          return (
            (a =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            a(t)
          );
        }
        const u = {
            runScheduler: function (t, e, n, r, o) {
              if ("object" !== a(e) || "function" !== typeof r) return !1;
              for (
                var i = !1,
                  u = arguments.length,
                  s = new Array(u > 5 ? u - 5 : 0),
                  c = 5;
                c < u;
                c++
              )
                s[c - 5] = arguments[c];
              return (
                "Interval" == t
                  ? (i = setInterval.apply(void 0, [r, o].concat(s)))
                  : "Timeout" == t &&
                    (i = setTimeout.apply(void 0, [r, o].concat(s))),
                !1 !== i &&
                  ("object" !== a(e.schedulers) && (e.schedulers = {}),
                  "object" === a(e.schedulers[n]) && this.stopScheduler(e, n),
                  (e.schedulers[n] = { schedulerType: t, id: i }),
                  i)
              );
            },
            setInterval: function (t, e, n, r) {
              for (
                var o = arguments.length,
                  i = new Array(o > 4 ? o - 4 : 0),
                  a = 4;
                a < o;
                a++
              )
                i[a - 4] = arguments[a];
              return this.runScheduler.apply(
                this,
                ["Interval", t, e, n, r].concat(i)
              );
            },
            setTimeout: function (t, e, n, r) {
              for (
                var o = arguments.length,
                  i = new Array(o > 4 ? o - 4 : 0),
                  a = 4;
                a < o;
                a++
              )
                i[a - 4] = arguments[a];
              return this.runScheduler.apply(
                this,
                ["Timeout", t, e, n, r].concat(i)
              );
            },
            stopScheduler: function (t, e) {
              let n,
                r =
                  null == t || null === (n = t.schedulers) || void 0 === n
                    ? void 0
                    : n[e];
              return (
                "object" === a(r) &&
                ("Interval" == r.schedulerType
                  ? clearInterval(r.id)
                  : "Timeout" == r.schedulerType && clearTimeout(r.id),
                delete t.schedulers[e],
                !0)
              );
            },
            stopAllSchedulers: function (t) {
              if ("object" !== a(null == t ? void 0 : t.schedulers)) return !1;
              for (const e in t.schedulers) this.stopScheduler(t, e);
              return !0;
            },
            addEventListener: function (t, e, n, r, o) {
              const i =
                arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
              return (
                "object" === a(t) &&
                "object" === a(n) &&
                "function" === typeof o &&
                (!1 === a(i)
                  ? n.addEventListener(r, o)
                  : n.addEventListener(r, o, i),
                "object" !== a(t.eventListeners) && (t.eventListeners = {}),
                (t.eventListeners[e] = {
                  eventObject: n,
                  eventType: r,
                  listener: o,
                  options: i,
                }),
                !0)
              );
            },
            removeEventListener: function (t, e) {
              let n,
                r =
                  null == t || null === (n = t.eventListeners) || void 0 === n
                    ? void 0
                    : n[e];
              return (
                "object" === a(r) &&
                (!1 === a(r.options)
                  ? r.eventObject.removeEventListener(r.eventType, r.listener)
                  : r.eventObject.removeEventListener(
                      r.eventType,
                      r.listener,
                      r.options
                    ),
                !0)
              );
            },
            removeAllEventListeners: function (t) {
              const e = null == t ? void 0 : t.eventListeners;
              if ("object" !== a(e)) return !1;
              for (const n in e) this.removeEventListener(t, n);
              return !0;
            },
          },
          s = {
            pageStorage: {},
            page: function (t, e, n) {
              return this.default(this.pageStorage, t, e, n);
            },
            session: function (t, e, n) {
              return this.default(sessionStorage, t, e, n);
            },
            local: function (t, e, n) {
              return this.default(localStorage, t, e, n);
            },
            default: function (t, e, n, r) {
              let o,
                i = Date.now();
              if (
                (void 0 !== n &&
                  ((o = { val: n }),
                  (r = parseInt(r)),
                  isNaN(r) || (o.time = i + 1e3 * r),
                  (t[e] = JSON.stringify(o))),
                void 0 !== t[e])
              ) {
                if (!(void 0 !== (o = JSON.parse(t[e])).time && o.time < i))
                  return o.val;
                t.removeItem(e);
              }
            },
          };
        function c(t) {
          return (
            (c =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            c(t)
          );
        }
        function l(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return f(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return f(t, e);
              let n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return f(t, e);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function f(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function d(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, h(r.key), r);
          }
        }
        function y(t, e, n) {
          return (
            (e = h(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function h(t) {
          const e = (function (t, e) {
            if ("object" !== c(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== c(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === c(e) ? e : String(e);
        }
        const p = (function () {
          function e(t, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              y(this, "masterFieldName", null),
              y(this, "workersFieldName", null),
              y(this, "id", null),
              y(this, "options", null),
              y(this, "type", null),
              y(this, "params", {}),
              y(this, "howManyWorkers", "one"),
              y(this, "level", 0),
              y(this, "blockId", null),
              y(this, "schedulers", {}),
              y(this, "eventListeners", {}),
              y(this, "state", "Ready"),
              y(this, "status", "Ready"),
              y(this, "style", "color:auto;"),
              y(this, "showLog", !0);
          }
          let n, r, o;
          return (
            (n = e),
            (r = [
              {
                key: "getName",
                value: function () {
                  let t;
                  return null !== (t = this.name) && void 0 !== t
                    ? t
                    : this.constructor.name;
                },
              },
              {
                key: "initManager",
                value: function (t, e) {
                  let n, r;
                  null != t && (this[this.masterFieldName] = t),
                    (this.options = e),
                    e.type && (this.type = e.type),
                    (this.params = e.params),
                    null != t && t.blockId && (this.blockId = t.blockId),
                    (this.level =
                      (null !==
                        (n =
                          null === (r = this[this.masterFieldName]) ||
                          void 0 === r
                            ? void 0
                            : r.level) && void 0 !== n
                        ? n
                        : 0) + 1);
                },
              },
              {
                key: "loadWorkers",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if ("one" === this.howManyWorkers)
                    this[this.workersFieldName] = this.loadWorker(this, t);
                  else if ("many" === this.howManyWorkers)
                    for (const e in t) {
                      const n = this.loadWorker(this, t[e], e);
                      n.setId(e), (this[this.workersFieldName][e] = n);
                    }
                },
              },
              {
                key: "loadWorker",
                value: function (t, e) {
                  return null;
                },
              },
              {
                key: "destroyWorkers",
                value: function () {
                  let t,
                    e,
                    n = this.workersFieldName;
                  if ("one" === this.howManyWorkers)
                    this[n] &&
                      (null === (t = (e = this[n]).destroy) ||
                        void 0 === t ||
                        t.call(e),
                      delete this[n]);
                  else
                    for (const r in this[n]) {
                      var o, i;
                      this[n][r] &&
                        (null === (o = (i = this[n][r]).destroy) ||
                          void 0 === o ||
                          o.call(i),
                        delete this[n][r]);
                    }
                },
              },
              {
                key: "setId",
                value: function (t) {
                  this.id = t;
                },
              },
              {
                key: "sendSignal",
                value: function (e) {
                  const n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    o = this.masterFieldName,
                    i = this[o],
                    a = r ? "[".concat(r, "]") : "";
                  this.log(
                    "".concat(a, " -> %c").concat(i.getName()),
                    "signal",
                    [i.style],
                    e,
                    n,
                    r
                  );
                  const u = "on" + t(e) + "Signal";
                  return "function" !== typeof this[o][u]
                    ? (this.err(
                        "У босса \"" +
                          this[o].getName() +
                          "\" нет обработчика сигнала - " +
                          e
                      ),
                      null)
                    : this[o][u](n, r);
                },
              },
              {
                key: "sendCommand",
                value: function (e) {
                  const n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                  "many" !== this.howManyWorkers ||
                    r ||
                    this.err(
                      "В режиме many для команды " +
                        e +
                        " не передан id ведомого"
                    );
                  const o = this.workersFieldName,
                    i = "one" === this.howManyWorkers ? this[o] : this[o][r],
                    a = r ? "[".concat(r, "]") : "";
                  this.log(
                    " -> %c".concat(i.getName()).concat(a),
                    "command",
                    [i.style],
                    e,
                    n,
                    r
                  );
                  const u = "on" + t(e) + "Command";
                  return "function" !== typeof i[u]
                    ? (this.err(
                        "У подчиненного \"" +
                          i.getName() +
                          "\" нет обработчика команды - " +
                          e
                      ),
                      null)
                    : i[u](n);
                },
              },
              {
                key: "logsSwitch",
                value: function (t) {
                  return this.isLogsOn() ? this.logsOff() : this.logsOn(t);
                },
              },
              {
                key: "logsOn",
                value: function (t) {
                  return (
                    s.session("showLog", !0),
                    t && s.session("showLogBlock", t),
                    this.onLogsOn(t),
                    "Логи включены"
                  );
                },
              },
              {
                key: "logsOff",
                value: function () {
                  return (
                    s.session("showLog", !1),
                    s.session("showLogBlock", !1, 0),
                    this.onLogsOff(),
                    "Логи вЫключены"
                  );
                },
              },
              {
                key: "onLogsOn",
                value: function () {
                  return !1;
                },
              },
              {
                key: "onLogsOff",
                value: function () {
                  return !1;
                },
              },
              {
                key: "isLogsOn",
                value: function () {
                  return !!s.session("showLog");
                },
              },
              {
                key: "isLogsOnForBlock",
                value: function (t) {
                  let e,
                    n =
                      null !== (e = s.session("showLogBlock")) &&
                      void 0 !== e &&
                      e;
                  return !(!this.isLogsOn() || (n && n !== t));
                },
              },
              {
                key: "log",
                value: function (t) {
                  for (
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [],
                      r = arguments.length,
                      o = new Array(r > 3 ? r - 3 : 0),
                      i = 3;
                    i < r;
                    i++
                  )
                    o[i - 3] = arguments[i];
                  this._def.apply(this, ["log", t, e, n].concat(o));
                },
              },
              {
                key: "err",
                value: function (t) {
                  for (
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [],
                      r = arguments.length,
                      o = new Array(r > 3 ? r - 3 : 0),
                      i = 3;
                    i < r;
                    i++
                  )
                    o[i - 3] = arguments[i];
                  this._def.apply(this, ["error", t, e, n].concat(o));
                },
              },
              {
                key: "_def",
                value: function (t, e) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [];
                  if (this.isLogsOnForBlock(this.blockId)) {
                    for (
                      var o,
                        i,
                        a,
                        u,
                        s,
                        c =
                          null !==
                            (o = {
                              command: {
                                title: "Команда",
                                style: "color: blue;",
                              },
                              signal: {
                                title: "Сигнал",
                                style: "color: #157eff;",
                              },
                              stateMachine: {
                                title: "Событие",
                                style: "color: green;",
                              },
                              state: {
                                title: "Состояние",
                                style: "color: orange;",
                              },
                            }[n]) && void 0 !== o
                            ? o
                            : { title: "??", style: "color: auto;" },
                        f = "stateMachine" === n ? "_ " : ". ",
                        d = this.id ? "[".concat(this.id, "]") : "",
                        y = arguments.length,
                        h = new Array(y > 4 ? y - 4 : 0),
                        p = 4;
                      p < y;
                      p++
                    )
                      h[p - 4] = arguments[p];
                    "string" === typeof e
                      ? ((e =
                          (null !== (i = this.blockId) && void 0 !== i
                            ? i
                            : "") +
                          f.repeat(this.level) +
                          d +
                          "%c"
                            .concat(this.getName(), "|%c")
                            .concat(c.title, ": ")
                            .concat(e)),
                        (r = [this.style, c.style].concat(r)),
                        (a = console)[t].apply(a, [e].concat(l(r), h)))
                      : (u = console)[t].apply(
                          u,
                          [
                            (null !== (s = this.blockId) && void 0 !== s
                              ? s
                              : "") + d,
                            e,
                          ].concat(h)
                        );
                  }
                },
              },
              {
                key: "runScheduler",
                value: function (t, e, n, r) {
                  for (
                    var o = arguments.length,
                      i = new Array(o > 4 ? o - 4 : 0),
                      a = 4;
                    a < o;
                    a++
                  )
                    i[a - 4] = arguments[a];
                  return u.runScheduler.apply(u, [t, this, e, n, r].concat(i));
                },
              },
              {
                key: "setInterval",
                value: function (t, e, n) {
                  for (
                    var r = arguments.length,
                      o = new Array(r > 3 ? r - 3 : 0),
                      i = 3;
                    i < r;
                    i++
                  )
                    o[i - 3] = arguments[i];
                  this.runScheduler.apply(
                    this,
                    ["Interval", t, e, n].concat(o)
                  );
                },
              },
              {
                key: "setTimeout",
                value: function (t, e, n) {
                  for (
                    var r = arguments.length,
                      o = new Array(r > 3 ? r - 3 : 0),
                      i = 3;
                    i < r;
                    i++
                  )
                    o[i - 3] = arguments[i];
                  return this.runScheduler.apply(
                    this,
                    ["Timeout", t, e, n].concat(o)
                  );
                },
              },
              {
                key: "stopScheduler",
                value: function (t) {
                  return u.stopScheduler(this, t);
                },
              },
              {
                key: "stopAllSchedulers",
                value: function () {
                  return u.stopAllSchedulers(this);
                },
              },
              {
                key: "addEventListener",
                value: function (t, e, n, r) {
                  const o =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4];
                  return u.addEventListener(this, t, e, n, r, o);
                },
              },
              {
                key: "removeEventListener",
                value: function (t) {
                  return u.removeEventListener(this, t);
                },
              },
              {
                key: "removeAllEventListeners",
                value: function () {
                  return u.removeAllEventListeners(this);
                },
              },
              {
                key: "stateMachine",
                value: function (e) {
                  const n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = "_" + t(this.state) + "_" + e;
                  if (
                    (this.log(r, "stateMachine", [], n),
                    "function" === typeof this[r])
                  )
                    return this[r](n);
                  this.err(
                    ""
                      .concat(
                        this.constructor.name,
                        ": не обработанное событие \""
                      )
                      .concat(e, "\" в состоянии ")
                      .concat(this.getState())
                  );
                },
              },
              {
                key: "setState",
                value: function (t) {
                  this.log(this.state + " -> " + t, "state"), (this.state = t);
                },
              },
              {
                key: "getState",
                value: function () {
                  return this.state;
                },
              },
              {
                key: "setStatus",
                value: function (t) {
                  this.status = t;
                },
              },
              {
                key: "getStatus",
                value: function () {
                  return this.status;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.stopAllSchedulers(),
                    this.removeAllEventListeners(),
                    this.destroyWorkers();
                },
              },
            ]),
            r && d(n.prototype, r),
            o && d(n, o),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })();
        function v(t) {
          return (
            (v =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            v(t)
          );
        }
        function b(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, g(r.key), r);
          }
        }
        function m(t, e, n) {
          return (
            (e = g(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function g(t) {
          const e = (function (t, e) {
            if ("object" !== v(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== v(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === v(e) ? e : String(e);
        }
        const w = (function () {
          function t(e, n, r, o, i) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              m(this, "showPageName", void 0),
              m(this, "storageType", void 0),
              m(this, "countPageView", void 0),
              m(this, "countPageViewOrder", void 0),
              m(this, "timePageView", void 0),
              (this.showPageName = "shown_page_" + e),
              (this.storageType = n ? "local" : "session"),
              (this.countPageView = parseInt(r)),
              (this.countPageViewOrder = parseInt(o)),
              (this.timePageView = parseInt(i));
          }
          let e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "check",
                value: function () {
                  return (
                    this.checkFirstShow() &&
                    this.checkNextShow() &&
                    this.checkTimeBetweenShow()
                  );
                },
              },
              {
                key: "checkFirstShow",
                value: function () {
                  let t;
                  if (
                    null !== (t = !isNaN(this.countPageView)) && void 0 !== t
                      ? t
                      : this.countPageView > 0
                  ) {
                    const e = s[this.storageType](this.showPageName);
                    if (void 0 === e)
                      return (
                        s[this.storageType](
                          this.showPageName,
                          this.countPageView - 1
                        ),
                        !1
                      );
                    if (e > 0)
                      return s[this.storageType](this.showPageName, e - 1), !1;
                  }
                  return !0;
                },
              },
              {
                key: "checkNextShow",
                value: function () {
                  if (!isNaN(this.countPageViewOrder)) {
                    const t = "order_" + this.showPageName,
                      e = s[this.storageType](t);
                    if (void 0 === e)
                      s[this.storageType](t, this.countPageViewOrder);
                    else {
                      if (e > 0) return s[this.storageType](t, e - 1), !1;
                      s[this.storageType](t, this.countPageViewOrder);
                    }
                  }
                  return !0;
                },
              },
              {
                key: "checkTimeBetweenShow",
                value: function () {
                  if (!isNaN(this.timePageView)) {
                    const t = "time_" + this.showPageName,
                      e = s[this.storageType](t),
                      n = Math.trunc(Date.now() / 1e3);
                    if (e) {
                      if (!(n - e >= this.timePageView)) return !1;
                      s[this.storageType](t, n);
                    } else s[this.storageType](t, n);
                  }
                  return !0;
                },
              },
            ]) && b(e.prototype, n),
            r && b(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function S(t) {
          return (
            (S =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            S(t)
          );
        }
        function k(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, O(r.key), r);
          }
        }
        function P(t, e, n) {
          return (
            (e = O(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function O(t) {
          const e = (function (t, e) {
            if ("object" !== S(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== S(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === S(e) ? e : String(e);
        }
        const C = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              P(this, "creative", null),
              P(this, "infoblock", null),
              P(this, "data", []),
              P(this, "checkerId", null),
              (this.creative = e),
              this.checkerOn();
          }
          let e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "setData",
                value: function (t) {
                  this.data = t;
                },
              },
              {
                key: "checkerOn",
                value: function () {
                  const t = this;
                  null === this.checkerId &&
                    (this.checkerId = setInterval(() => {
                      t.isLogsOn() ? t.showInfoBlock() : t.removeInfoBlock();
                    }, 300));
                },
              },
              {
                key: "checkerOff",
                value: function () {
                  null !== this.checkerId &&
                    (clearInterval(this.checkerId), (this.checkerId = null));
                },
              },
              {
                key: "showInfoBlock",
                value: function () {
                  if (this.isLogsOn()) {
                    if ((this.createInfoBlock(), this.infoblock)) {
                      let t,
                        e = this.creative
                          .getInfoData()
                          .concat(this.data)
                          .join(". ");
                      e !==
                        (null === (t = this.infoblock) || void 0 === t
                          ? void 0
                          : t.innerHTML) && (this.infoblock.innerHTML = e);
                    }
                  } else this.removeInfoBlock();
                },
              },
              {
                key: "isLogsOn",
                value: function () {
                  return !!s.session("showLog");
                },
              },
              {
                key: "createInfoBlock",
                value: function () {
                  if (!this.infoblock) {
                    if (!this.creative.container) return;
                    this.creative.container.insertAdjacentHTML(
                      "afterbegin",
                      "<div class=\"adfinity-infoblock-creative\"></div>"
                    ),
                      (this.infoblock = this.creative.container.querySelector(
                        ".adfinity-infoblock-creative"
                      ));
                  }
                },
              },
              {
                key: "removeInfoBlock",
                value: function () {
                  this.infoblock &&
                    (this.infoblock.remove(), (this.infoblock = !1));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.checkerOff(), this.removeInfoBlock();
                },
              },
            ]) && k(e.prototype, n),
            r && k(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function j(t) {
          return (
            (j =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            j(t)
          );
        }
        function R(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, N(r.key), r);
          }
        }
        function _() {
          return (
            (_ =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = L(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            _.apply(this, arguments)
          );
        }
        function x(t, e) {
          return (
            (x = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            x(t, e)
          );
        }
        function T(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = L(t);
            if (e) {
              const o = L(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === j(e) || "function" === typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return I(t);
            })(this, n);
          };
        }
        function I(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function L(t) {
          return (
            (L = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            L(t)
          );
        }
        function E(t, e, n) {
          return (
            (e = N(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function N(t) {
          const e = (function (t, e) {
            if ("object" !== j(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== j(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === j(e) ? e : String(e);
        }
        const B = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && x(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = T(i);
          function i(t, e, n) {
            let r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              E(
                I((r = o.call(this, t, e))),
                "masterFieldName",
                "creativeManager"
              ),
              E(I(r), "creativeManager", null),
              E(I(r), "creativeId", null),
              E(I(r), "container", !1),
              E(I(r), "infoblock", null),
              E(I(r), "isRun", !1),
              E(I(r), "longLoading", !1),
              E(I(r), "status", null),
              E(I(r), "pauseAfterStart", !1),
              E(I(r), "playValues", null),
              E(I(r), "broadcastPercentage", !1),
              E(I(r), "playMode", "autoReload"),
              E(I(r), "possiblePlayModes", ["autoReload", "externalReload"]),
              E(I(r), "placeholderOnCreative", !1),
              r.initManager(t, e),
              (r.creativeId = n),
              r.validParams(r.params),
              r.setPlayMode(e.playMode),
              r.setPlaceholderMode(e.placeholderOnCreative),
              r.setStatus("Ready"),
              (r.infoblock = new C(I(r))),
              r
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "getLastFrameLost",
                value: function () {
                  return !1;
                },
              },
              {
                key: "validParams",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "canRun",
                value: function () {
                  return !0;
                },
              },
              {
                key: "run",
                value: function () {
                  return this.setStatus("Loading"), (this.isRun = !0), !0;
                },
              },
              {
                key: "setContainer",
                value: function (t) {
                  this.container = t;
                },
              },
              {
                key: "getCurrentBidder",
                value: function () {
                  return !1;
                },
              },
              {
                key: "hideCreative",
                value: function () {
                  let t, e;
                  null === (t = this.container) ||
                    void 0 === t ||
                    null === (e = t.classList) ||
                    void 0 === e ||
                    e.add("adfinity-hide-creative");
                },
              },
              {
                key: "showCreative",
                value: function () {
                  let t, e;
                  null === (t = this.container) ||
                    void 0 === t ||
                    null === (e = t.classList) ||
                    void 0 === e ||
                    e.remove("adfinity-hide-creative");
                },
              },
              {
                key: "setState",
                value: function (t) {
                  this.setClassState(t),
                    this.setPlaceholderOnState(t),
                    _(L(i.prototype), "setState", this).call(this, t);
                },
              },
              {
                key: "setClassState",
                value: function (t) {
                  let e, n, r, o;
                  null === (e = this.container) ||
                    void 0 === e ||
                    null === (n = e.classList) ||
                    void 0 === n ||
                    n.remove("adfinity-creative-state-" + this.state),
                    null === (r = this.container) ||
                      void 0 === r ||
                      null === (o = r.classList) ||
                      void 0 === o ||
                      o.add("adfinity-creative-state-" + t);
                },
              },
              {
                key: "getPlayValues",
                value: function () {
                  let t;
                  return null !== (t = this.playValues) && void 0 !== t
                    ? t
                    : {};
                },
              },
              {
                key: "isBroadcastPercentage",
                value: function () {
                  return this.broadcastPercentage;
                },
              },
              {
                key: "getPriority",
                value: function () {
                  let t;
                  return null === (t = this.params) || void 0 === t
                    ? void 0
                    : t.priority;
                },
              },
              {
                key: "stopCreative",
                value: function () {
                  throw new Error("TODO - сделать остановку креатива!!!");
                },
              },
              {
                key: "setPlayMode",
                value: function (t) {
                  -1 === this.possiblePlayModes.indexOf(t)
                    ? this.err("Задан недоступный режим воспроизведения - " + t)
                    : (this.playMode = t);
                },
              },
              {
                key: "getPlayMode",
                value: function () {
                  return this.playMode;
                },
              },
              {
                key: "getInfoData",
                value: function () {
                  const t = [this.id, this.type],
                    e = this.getCurrentBidder();
                  return e && t.push(e), t;
                },
              },
              {
                key: "setPlaceholderMode",
                value: function () {
                  const t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  this.placeholderOnCreative = !!t;
                },
              },
              {
                key: "setPlaceholderOnState",
                value: function (t) {
                  switch (t) {
                    case "Play":
                      this.switchOffPlaceholder();
                      break;
                    case "Ready":
                    case "Loading":
                      this.switchOnPlaceholder();
                  }
                },
              },
              {
                key: "switchOnPlaceholder",
                value: function () {
                  this.placeholderOnCreative &&
                    this.container.classList.add("adfox_placeholder");
                },
              },
              {
                key: "switchOffPlaceholder",
                value: function () {
                  this.placeholderOnCreative &&
                    this.container.classList.remove("adfox_placeholder");
                },
              },
              {
                key: "onRunCommand",
                value: function (t) {
                  return this.run(t), !0;
                },
              },
              {
                key: "onStopCommand",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "onPauseCommand",
                value: function (t) {
                  return !1;
                },
              },
              {
                key: "onUnpauseCommand",
                value: function (t) {
                  return !1;
                },
              },
              {
                key: "onReloadCommand",
                value: function (t) {
                  return !1;
                },
              },
              {
                key: "onGetStatusCommand",
                value: function (t) {
                  return this.getStatus();
                },
              },
              {
                key: "onGetLastFrameLostCommand",
                value: function (t) {
                  return this.getLastFrameLost();
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.infoblock.destroy(),
                    _(L(i.prototype), "destroy", this).call(this);
                },
              },
            ]),
            n && R(e.prototype, n),
            r && R(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function A(t) {
          return (
            (A =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            A(t)
          );
        }
        var W = {
          tmStart: !1,
          styles: {},
          stylesTag: !1,
          currentPage: !1,
          staticUrl: !1,
          init: function (t) {
            this.setTmStart(),
              this.setStaticUrl(t.staticUrl),
              this.insertScriptHead(t.scriptHead),
              this.setCurrentPage();
          },
          setTmStart: function () {
            this.tmStart = this.now();
          },
          now: function () {
            return new Date() / 1e3;
          },
          tmFromStart: function () {
            return this.now() - this.tmStart;
          },
          setStaticUrl: function (t) {
            this.staticUrl = t;
          },
          insertScriptHead: function (t) {
            "object" === A(t) &&
              t instanceof Array &&
              t.forEach((t) => {
                W.addTag(t.tag, t.attributes, null, "beforeEnd", t.content);
              });
          },
          getStaticUrl: function () {
            return this.staticUrl;
          },
          setCurrentPage: function () {
            this.currentPage = this.getPagePath();
          },
          hasChangedCurrentPage: function () {
            return this.currentPage !== this.getPagePath();
          },
          getPagePath: function () {
            return window.location.pathname + window.location.search;
          },
          addTag: function (t, e, n) {
            let r,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "afterend",
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : null,
              a = document.createElement(t);
            for (const u in e) a.setAttribute(u, e[u]);
            return (
              i && (a.innerHTML = i),
              (n =
                null !== (r = n) && void 0 !== r
                  ? r
                  : this.adfinityScriptNode()).insertAdjacentElement(o, a),
              a
            );
          },
          adfinityScriptNode: function () {
            return document.querySelector('script[src*="adfinity."]');
          },
          addStyle: function (t, e) {
            (this.styles[t] = e), this.renderStyles();
          },
          removeStyle: function (t) {
            void 0 !== this.styles[t] && delete this.styles[t],
              this.renderStyles();
          },
          renderStyles: function () {
            !1 === this.stylesTag &&
              (this.stylesTag = this.addTag("style", {
                id: "adfinity_styles",
              }));
            const t = [];
            for (const e in this.styles) t.push(this.styles[e]);
            this.stylesTag.innerHTML = t.join("\n");
          },
          checkDomain: function (t) {
            const e = "www.",
              n = window.location.host;
            if (t.main.replace(e, "") === n.replace(e, "")) return !0;
            for (const r in t.mirror) {
              const o = new RegExp(t.mirror[r]);
              if (n.match(o)) return !0;
            }
            return !1;
          },
          checkUrlForShow: function (t) {
            for (
              let e = null != t ? t : [], n = window.location.pathname, r = 0;
              r < e.length;
              ++r
            ) {
              const o = new RegExp(e[r]);
              if (n.match(o)) return !1;
            }
            return !0;
          },
          getObjectByPath: function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = t.replace(/:nth-child/g, ""),
              r = 1,
              o = 0,
              i = !1,
              a = !0,
              u = n.match(/(.*)\(((\d*)n\+(\d+)|(\d*)n|(\d+))\)(\d*)$/);
            if (
              (u &&
                (void 0 !== u[6]
                  ? ((r = 0), (o = parseInt(u[6])), (i = 1))
                  : void 0 !== u[5]
                    ? ((r = u[5]), (o = 0))
                    : void 0 !== u[3] && void 0 !== u[4]
                      ? ((r = u[3]), (o = parseInt(u[4])))
                      : (a = !1),
                (r = "" == r ? 1 : parseInt(r)),
                (n = u[1].replace(/\(/g, ":nth-child(")),
                u[7].length > 0 &&
                  ((i = parseInt(u[7])), (i = !isNaN(i) && i))),
              !1 === a)
            )
              return !1;
            let s = document.querySelectorAll(n),
              c = [];
            return (
              s.forEach((t, e) => {
                e++;
                for (let n = 0; ; ) {
                  const i = r * n + o;
                  if (i === e) {
                    c.push(t);
                    break;
                  }
                  if (0 === r || i > e) break;
                  n++;
                }
              }),
              !1 !== i && (c = c.slice(0, i)),
              !1 === e ? c : c[e]
            );
          },
          getObjectByXPath: function (t, e) {
            let n,
              r = [],
              o = !0;
            if ((null === t.match(/\//) && (o = !1), !1 === o)) return !1;
            for (let i = 0; null !== n; )
              (n = document
                .evaluate(
                  t,
                  document.body,
                  null,
                  XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                  null
                )
                .snapshotItem(i)),
                i++,
                r.push(n);
            return r.pop(), !1 === e ? r : r[e];
          },
        };
        function M(t) {
          return (
            (M =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            M(t)
          );
        }
        function F(t, e) {
          let n =
            ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" === typeof t) return H(t, e);
                let n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return H(t, e);
              })(t)) ||
              (e && t && "number" === typeof t.length)
            ) {
              n && (t = n);
              let r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          let i,
            a = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              const t = n.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (u = !0), (i = t);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function H(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function D(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, z(r.key), r);
          }
        }
        function V(t, e, n) {
          return (
            (e = z(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function z(t) {
          const e = (function (t, e) {
            if ("object" !== M(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== M(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === M(e) ? e : String(e);
        }
        const U = (function () {
          function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              V(this, "loadData", null),
              V(this, "container", null),
              V(this, "timeline", null),
              V(this, "selectors", {
                yandex: "div[id*=\"yandex_rtb\"]",
                skins: "[data-skinslot],[data-name=\"skin-slot\"]",
                timeline: "[data-name=\"timeline\"]",
              }),
              (this.loadData = e),
              (this.container = n);
          }
          let e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "isReady",
                value: function () {
                  const t = this;
                  return new Promise((e, n) => {
                    t.constructor.isVideoCreative(t.loadData)
                      ? (u.setInterval(
                          t,
                          "whatElement",
                          () => {
                            t.foundTimelineElement() &&
                              (u.stopScheduler(t, "whatElement"), e(!0));
                          },
                          200
                        ),
                        u.setTimeout(
                          t,
                          "whatElementTimeout",
                          () => {
                            u.stopAllSchedulers(t),
                              n("Таймаут - не найдена полоска таймлайна");
                          },
                          2e3
                        ))
                      : n([
                          "Нет this.loadData",
                          t.loadData,
                          t.constructor.isVideoCreative(t.loadData),
                        ]);
                  });
                },
              },
              {
                key: "foundTimelineElement",
                value: function () {
                  if (this.container instanceof HTMLElement) {
                    const t = this.container.querySelector(
                      this.selectors.yandex
                    );
                    if (null !== t && t.children) {
                      let e = this.findShadowRoot(t.children);
                      if (
                        null !== e &&
                        null !== (e = e.querySelector(this.selectors.skins)) &&
                        e.children &&
                        null !==
                          (e = this.findShadowRoot(
                            e.children,
                            this.selectors.timeline
                          )) &&
                        ((this.timeline = e.querySelector(
                          this.selectors.timeline
                        )),
                        null !== this.timeline && this.timeline.firstChild)
                      )
                        return (
                          (this.timeline = this.timeline.firstChild),
                          this.timeline
                        );
                    }
                  }
                  return null;
                },
              },
              {
                key: "findShadowRoot",
                value: function (t) {
                  let e,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    r = F(t);
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      const o = e.value;
                      if (o.shadowRoot) return o.shadowRoot;
                      if (o.children) {
                        var i,
                          a = F(o.children);
                        try {
                          for (a.s(); !(i = a.n()).done; ) {
                            const u = i.value;
                            if (
                              u.shadowRoot &&
                              null !== n &&
                              null !== u.shadowRoot.querySelector(n)
                            )
                              return u.shadowRoot;
                          }
                        } catch (t) {
                          a.e(t);
                        } finally {
                          a.f();
                        }
                      }
                    }
                  } catch (t) {
                    r.e(t);
                  } finally {
                    r.f();
                  }
                  return null;
                },
              },
              {
                key: "getPercentTimeline",
                value: function () {
                  if (this.timeline instanceof HTMLElement) {
                    const t = parseFloat(this.timeline.style.width);
                    return isNaN(t) ? null : t;
                  }
                  return null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this.timeline = null), u.stopAllSchedulers(this);
                },
              },
            ]),
            (r = [
              {
                key: "isVideoCreative",
                value: function (t) {
                  let e, n, r;
                  return (
                    void 0 !==
                    (null == t ||
                    null === (e = t.bundleParams) ||
                    void 0 === e ||
                    null === (n = e.data) ||
                    void 0 === n ||
                    null === (r = n.rtb) ||
                    void 0 === r
                      ? void 0
                      : r.video)
                  );
                },
              },
            ]),
            n && D(e.prototype, n),
            r && D(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function Y(t, e) {
          let n =
            ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" === typeof t) return q(t, e);
                let n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return q(t, e);
              })(t)) ||
              (e && t && "number" === typeof t.length)
            ) {
              n && (t = n);
              let r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          let i,
            a = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              const t = n.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (u = !0), (i = t);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function q(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function Z(t) {
          return (
            (Z =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Z(t)
          );
        }
        function G(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, tt(r.key), r);
          }
        }
        function $(t, e) {
          return (
            ($ = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            $(t, e)
          );
        }
        function K(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = J(t);
            if (e) {
              const o = J(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Z(e) || "function" === typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return X(t);
            })(this, n);
          };
        }
        function X(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function J(t) {
          return (
            (J = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            J(t)
          );
        }
        function Q(t, e, n) {
          return (
            (e = tt(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function tt(t) {
          const e = (function (t, e) {
            if ("object" !== Z(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Z(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Z(e) ? e : String(e);
        }
        const et = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && $(t, e);
          })(a, t);
          let e,
            n,
            r,
            o = K(a);
          function a(t, e, n) {
            let r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              Q(X((r = o.call(this, t, e))), "masterFieldName", "creative"),
              Q(X(r), "creative", null),
              Q(X(r), "loadData", null),
              Q(X(r), "winBidder", null),
              Q(X(r), "bannerOptions", {}),
              Q(X(r), "styles", !1),
              Q(X(r), "container", !1),
              Q(X(r), "containerId", !1),
              Q(X(r), "videoController", null),
              Q(X(r), "name", "Адфокс контроллер"),
              Q(X(r), "style", "color:#fd0;border-bottom:1px dashed blue"),
              r.initManager(t, e),
              (r.containerId = r.params.containerId),
              (r.container = n),
              r.initBannerOptions(r.params),
              r
            );
          }
          return (
            (e = a),
            (r = [
              {
                key: "initBefore",
                value: function (t) {
                  var e = this,
                    n = setInterval(() => {
                      void 0 !== window.yaContextCb &&
                        ((e.yaContextCbInit = !0), clearInterval(n));
                    }, 4);
                  this.hideAdfoxContext =
                    !0 === (null == t ? void 0 : t.hideAdfoxContext);
                },
              },
              {
                key: "initBlock",
                value: function (t, e, n) {
                  this.setUseCreativeOnPage(), this.initStyles(t, e, n);
                },
              },
              {
                key: "setUseCreativeOnPage",
                value: function () {
                  this.useCreativeOnPage = !0;
                },
              },
              {
                key: "initStyles",
                value: function (t, e, n) {
                  if ("adaptive" === n.type) {
                    let r,
                      o,
                      a,
                      u,
                      s = i(n.bannerStates);
                    s.sort();
                    const c =
                        null !==
                          (r = parseInt(
                            null === (o = n.adaptiveOptions) || void 0 === o
                              ? void 0
                              : o.tabletWidth
                          )) && void 0 !== r
                          ? r
                          : 830,
                      l =
                        null !==
                          (a = parseInt(
                            null === (u = n.adaptiveOptions) || void 0 === u
                              ? void 0
                              : u.phoneWidth
                          )) && void 0 !== a
                          ? a
                          : 480,
                      f = c + 1,
                      d = l + 1,
                      y = {
                        "desktop,phone,tablet": "",
                        "desktop,tablet": "(max-width: ".concat(l, "px)"),
                        desktop: "(max-width: ".concat(c, "px)"),
                        "phone,tablet": "(min-width: ".concat(f, "px)"),
                        phone: "(min-width: ".concat(d, "px)"),
                        "desktop,phone": "(max-width: "
                          .concat(c, "px) and (min-width: ")
                          .concat(d, "px)"),
                        tablet: "(min-width: "
                          .concat(f, "px),(max-width: ")
                          .concat(l, "px)"),
                      },
                      h = "#wrap_".concat(t),
                      p = y[s.join(",")],
                      v = p
                        ? "@media ".concat(p, "{").concat(h, "{display:none}}")
                        : "";
                    W.addStyle("adfox_" + t + "_" + e, v);
                  }
                },
              },
              {
                key: "initAfter",
                value: function (t) {
                  if (this.useCreativeOnPage) {
                    let e, n;
                    window.Ya || (window.Ya = {}),
                      (window.yaContextCb = window.yaContextCb || []),
                      window.Ya.adfoxCode || (window.Ya.adfoxCode = {}),
                      window.Ya.adfoxCode.hbCallbacks ||
                        (window.Ya.adfoxCode.hbCallbacks = []);
                    const r =
                      null !==
                        (e =
                          null !== (n = window.srcCONT) && void 0 !== n
                            ? n
                            : s.session("srcCONT")) && void 0 !== e
                        ? e
                        : "//yandex.ru/ads/system/context.js";
                    this.hideAdfoxContext ||
                      document.querySelector("script[src*=\"/context.js\"]") ||
                      W.addTag("script", { src: r, async: !0 });
                  }
                },
              },
              {
                key: "canRun",
                value: function () {
                  return this.yaContextCbInit;
                },
              },
            ]),
            (n = [
              {
                key: "initBannerOptions",
                value: function (t) {
                  const e = this;
                  if (
                    ((this.bannerOptions = {
                      ownerId: t.ownerId,
                      sequentialLoading: !0,
                      containerId: this.containerId,
                      params: t.params,
                      onLoad: function (t) {
                        e.log("Загружен ".concat(e.containerId)),
                          (e.loadData = t),
                          setTimeout(() => {
                            const n = e.getWinBidder(t);
                            e.log("Биддер: ".concat(n));
                          }, 0);
                      },
                      onRender: function (t) {
                        (e.winBidder = e.getWinBidder(e.loadData)),
                          e.log(
                            "Отрисован "
                              .concat(e.containerId, " -> ")
                              .concat(e.winBidder)
                          ),
                          e.stateMachine("render", t);
                      },
                      onError: function (t) {
                        e.err(
                          "Ошибка при загрузке блока ".concat(
                            e.containerId,
                            ": "
                          )
                        ),
                          e.err(t),
                          "adfoxBackend" === t.type &&
                            e.err("Ошибка настройки блока в Adfox"),
                          e.stateMachine("stub", { error: t });
                      },
                      onStub: function () {
                        e.log("Отказ в загрузке блока ".concat(e.containerId)),
                          e.stateMachine("stub");
                      },
                      onClose: function () {
                        e.log("Закрытие блока ".concat(e.containerId));
                      },
                    }),
                    "object" == Z(t.lazyLoad))
                  ) {
                    const n = {};
                    for (const r in t.lazyLoad)
                      ["fetchMargin", "mobileScaling"].indexOf(r) >= 0 &&
                        (n[r] = t.lazyLoad[r]);
                    this.bannerOptions.lazyLoad = n;
                  }
                },
              },
              {
                key: "isYAN",
                value: function () {
                  let t;
                  return (
                    ["banner.direct", "banner.transfer"].indexOf(
                      null === (t = this.loadData) || void 0 === t
                        ? void 0
                        : t.bundleName
                    ) > -1
                  );
                },
              },
              {
                key: "getWinBidder",
                value: function (t) {
                  let e,
                    n = !1;
                  if ("bid" === t.bundleName) {
                    if (
                      null !== (e = t.bundleParams) &&
                      void 0 !== e &&
                      e.bids
                    ) {
                      let r,
                        o = Y(t.bundleParams.bids);
                      try {
                        for (o.s(); !(r = o.n()).done; ) {
                          const i = r.value;
                          if (
                            Number(i.campaign_id) ===
                            Number(t.bundleParams.campaignId)
                          ) {
                            n = i.bidderName;
                            break;
                          }
                        }
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                    }
                  } else
                    "banner.direct" === t.bundleName
                      ? (n = "РСЯ")
                      : "banner.transfer" === t.bundleName
                        ? (n = "mytarget")
                        : "banner.native" === t.bundleName
                          ? (n = "native")
                          : t.bundleName
                            ? ((n = t.bundleName), this.err(t))
                            : this.err(t);
                  return n;
                },
              },
              {
                key: "getLaunchCode",
                value: function () {
                  let t,
                    e = this;
                  return (
                    (this.container.id = this.containerId),
                    "async" === this.params.type
                      ? (t = function () {
                          window.yaContextCb.push(() => {
                            Ya.adfoxCode.create(e.bannerOptions);
                          });
                        })
                      : "adaptive" === this.params.type &&
                        (t = function () {
                          window.yaContextCb.push(() => {
                            Ya.adfoxCode.createAdaptive(
                              e.bannerOptions,
                              e.params.bannerStates,
                              e.params.adaptiveOptions
                            );
                          });
                        }),
                    t
                  );
                },
              },
              {
                key: "getCurrentBidder",
                value: function () {
                  return this.winBidder;
                },
              },
              {
                key: "runWaitingForViewport",
                value: function (t) {
                  const e = this;
                  this.stopAllSchedulers(),
                    this.setState("WaitingViewport"),
                    this.isVisible()
                      ? setTimeout(() => {
                          e.stateMachine("inViewport", { sendPlaySignal: t });
                        }, 0)
                      : this.setInterval(
                          "WaitingViewport",
                          () => {
                            e.isVisible() &&
                              (e.stopScheduler("WaitingViewport"),
                              e.stateMachine("inViewport", {
                                sendPlaySignal: t,
                              }));
                          },
                          50
                        );
                },
              },
              {
                key: "startCheckPlaying",
                value: function () {
                  switch (this.detectCreativeType()) {
                    case "tg":
                      this.onTgPlaying();
                      break;
                    case "video":
                      this.onVideoPlaying();
                      break;
                    default:
                      this.err("Не определен тип креатива Адфокс");
                  }
                },
              },
              {
                key: "detectCreativeType",
                value: function () {
                  return this.loadData
                    ? U.isVideoCreative(this.loadData)
                      ? "video"
                      : "tg"
                    : null;
                },
              },
              {
                key: "onTgPlaying",
                value: function () {
                  const t = this;
                  this.setTimeout(
                    "CheckStateTg",
                    () => {
                      t.stateMachine("complete");
                    },
                    2e3
                  );
                },
              },
              {
                key: "onVideoPlaying",
                value: function () {
                  const t = this;
                  this.videoController = new U(this.loadData, this.container);
                  let e = 0;
                  this.videoController
                    .isReady()
                    .then(() => {
                      t.setInterval(
                        "CheckStateVideo",
                        () => {
                          const n = t.videoController.getPercentTimeline(),
                            r = isNaN(n) ? null : n > 90;
                          null === r &&
                            t.err(
                              "Не определенное состояние воспроизведения видео адфокс"
                            ),
                            e++ % 10 == 0 &&
                              t.sendSignal("percentTimeline", {
                                percentTimeline: n,
                              }),
                            (r || null === r) &&
                              (t.stopScheduler("CheckStateVideo"),
                              t.stateMachine("complete"));
                        },
                        100
                      );
                    })
                    .catch((e) => {
                      t.err(e),
                        t.stopScheduler("CheckStateVideo"),
                        t.stateMachine("complete");
                    });
                },
              },
              {
                key: "isVisible",
                value: function () {
                  if (!this.container) return !1;
                  const t = this.container.getBoundingClientRect();
                  return t.top < window.innerHeight && t.bottom >= 0;
                },
              },
              {
                key: "_Ready_start",
                value: function () {
                  this.setState("Loading"),
                    this.log("Запустить загрузку"),
                    this.getLaunchCode()();
                },
              },
              {
                key: "_Loading_stub",
                value: function () {
                  this.setState("Ready"), this.sendSignal("stub");
                },
              },
              {
                key: "_Loading_render",
                value: function () {
                  this.runWaitingForViewport(!0),
                    this.sendSignal("render", { isYAN: this.isYAN() });
                },
              },
              {
                key: "_WaitingViewport_inViewport",
                value: function (t) {
                  if (t.sendPlaySignal) {
                    const e = { isYAN: this.isYAN() };
                    "video" === this.detectCreativeType() &&
                      (e.waitForPercentage = !0),
                      this.sendSignal("play", e);
                  }
                  this.setState("Play"), this.startCheckPlaying();
                },
              },
              {
                key: "_WaitingViewport_unpause",
                value: function () {
                  this.runWaitingForViewport(!1);
                },
              },
              { key: "_WaitingViewport_reload", value: function () {} },
              {
                key: "_Play_unpause",
                value: function () {
                  this.runWaitingForViewport(!1);
                },
              },
              {
                key: "_Play_complete",
                value: function () {
                  this.setState("LastFrame"), this.sendSignal("complete");
                },
              },
              {
                key: "_LastFrame_reload",
                value: function () {
                  this.setState("Loading"),
                    this.stopAllSchedulers(),
                    this.destroyVideoController(),
                    this.log("Запустить перезагрузку"),
                    Ya.adfoxCode.reload(this.containerId, {
                      onlyIfWasVisible: !0,
                    });
                },
              },
              {
                key: "onRunCommand",
                value: function (t) {
                  return this.stateMachine("start"), !0;
                },
              },
              {
                key: "onUnpauseCommand",
                value: function (t) {
                  return this.stateMachine("unpause"), !0;
                },
              },
              {
                key: "onReloadCommand",
                value: function (t) {
                  return this.stateMachine("reload"), !0;
                },
              },
              {
                key: "destroyVideoController",
                value: function () {
                  this.videoController instanceof U &&
                    (this.videoController.destroy(),
                    (this.videoController = null));
                },
              },
              {
                key: "destroy",
                value: function () {
                  let t, e;
                  "function" ===
                    typeof (null === (t = window.Ya) ||
                    void 0 === t ||
                    null === (e = t.adfoxCode) ||
                    void 0 === e
                      ? void 0
                      : e.destroy) &&
                    (this.log("Дестрой креатива ADFOX"),
                    window.Ya.adfoxCode.destroy(this.containerId)),
                    this.stopAllSchedulers(),
                    this.destroyVideoController(),
                    this.container.remove();
                },
              },
            ]) && G(e.prototype, n),
            r && G(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(p);
        function nt(t, e) {
          let n =
            ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" === typeof t) return rt(t, e);
                let n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return rt(t, e);
              })(t)) ||
              (e && t && "number" === typeof t.length)
            ) {
              n && (t = n);
              let r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          let i,
            a = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              const t = n.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (u = !0), (i = t);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function rt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function ot(t) {
          return (
            (ot =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ot(t)
          );
        }
        function it(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, ut(r.key), r);
          }
        }
        function at(t, e, n) {
          return (
            (e = ut(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function ut(t) {
          const e = (function (t, e) {
            if ("object" !== ot(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== ot(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === ot(e) ? e : String(e);
        }
        Q(et, "useCreativeOnPage", !1),
          Q(et, "yaContextCbInit", !1),
          Q(et, "hideAdfoxContext", !1);
        const st = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          let n, r, o;
          return (
            (n = t),
            (o = [
              {
                key: "initBefore",
                value: function (t) {
                  (this.hideAdfoxHeaderBidding =
                    !0 === (null == t ? void 0 : t.hideAdfoxHeaderBidding)),
                    (this.hideAdfoxContext =
                      !0 === (null == t ? void 0 : t.hideAdfoxContext)),
                    (this.offAdfoxHeaderBidding =
                      !0 === (null == t ? void 0 : t.offAdfoxHeaderBidding));
                },
              },
              {
                key: "initBlock",
                value: function (t, e, n) {
                  (this.useCreativeOnPage = !0), n && this.initHB(t, e);
                },
              },
              {
                key: "initHB",
                value: function (t, e) {
                  let n, r, o, a, u, s;
                  if (this.offAdfoxHeaderBidding) return !1;
                  if (this.containerIds.indexOf(t) > -1) return !0;
                  if (
                    (this.containerIds.push(t),
                    "object" != ot(null == e ? void 0 : e.bids) ||
                      0 === e.bids.length)
                  )
                    return !1;
                  const c = i(e);
                  c.code = t;
                  let l,
                    f = nt(c.bids);
                  try {
                    for (f.s(); !(l = f.n()).done; ) {
                      const d = l.value;
                      -1 === this.bidders.indexOf(d.bidder) &&
                        this.bidders.push(d.bidder);
                    }
                  } catch (t) {
                    f.e(t);
                  } finally {
                    f.f();
                  }
                  if (
                    null !== (n = window.Ya) &&
                    void 0 !== n &&
                    null !== (r = n.headerBidding) &&
                    void 0 !== r &&
                    null !== (o = r.managerForAdfox) &&
                    void 0 !== o &&
                    null !== (a = o.settings) &&
                    void 0 !== a &&
                    a.adUnits
                  ) {
                    let y,
                      h = nt(
                        window.Ya.headerBidding.managerForAdfox.settings.adUnits
                      );
                    try {
                      for (h.s(); !(y = h.n()).done; )
                        if (y.value.code === c.code) return !1;
                    } catch (t) {
                      h.e(t);
                    } finally {
                      h.f();
                    }
                  }
                  return (
                    void 0 ===
                    (null === (u = window.Ya) ||
                    void 0 === u ||
                    null === (s = u.headerBidding) ||
                    void 0 === s
                      ? void 0
                      : s.pr)
                      ? this.adUnits.push(c)
                      : window.Ya.headerBidding.pushAdUnits([c]),
                    !0
                  );
                },
              },
              {
                key: "initAfter",
                value: function (t) {
                  if (this.useCreativeOnPage && !this.offAdfoxHeaderBidding) {
                    let n, r;
                    (window.YaHeaderBiddingSettings = {
                      biddersMap: t.adfoxBiddersMap,
                      timeout: t.userTimeout,
                    }),
                      void 0 !== t.syncPixels &&
                        (window.YaHeaderBiddingSettings.syncPixels =
                          t.syncPixels),
                      this.adUnits.length > 0 &&
                        (window.YaHeaderBiddingSettings.adUnits = this.adUnits);
                    const o =
                      null !==
                        (n =
                          null !== (r = window.srcHB) && void 0 !== r
                            ? r
                            : s.session("srcHB")) && void 0 !== n
                        ? n
                        : "//yandex.ru/ads/system/header-bidding.js";
                    this.hideAdfoxHeaderBidding ||
                      document.querySelector(
                        "script[src*=\"/header-bidding.js\"]"
                      ) ||
                      W.addTag("script", { src: o, async: !0 }),
                      this.bidders.indexOf("betweenDigital") > -1 &&
                        (W.addTag("link", {
                          href: "//ads.betweendigital.com",
                          crossorigin: !0,
                        }),
                        document.addEventListener("DOMContentLoaded", () => {
                          W.addTag(
                            "script",
                            {
                              src:
                                "//ads.betweendigital.com/sspmatch-js?p=42565&randsalt=" +
                                e(),
                              async: !0,
                            },
                            document.body,
                            "beforeend"
                          );
                        }));
                  }
                },
              },
            ]),
            (r = null) && it(n.prototype, r),
            o && it(n, o),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            t
          );
        })();
        function ct(t) {
          return (
            (ct =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ct(t)
          );
        }
        function lt(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, bt(r.key), r);
          }
        }
        function ft() {
          return (
            (ft =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = pt(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            ft.apply(this, arguments)
          );
        }
        function dt(t, e) {
          return (
            (dt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            dt(t, e)
          );
        }
        function yt(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = pt(t);
            if (e) {
              const o = pt(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === ct(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return ht(t);
            })(this, n);
          };
        }
        function ht(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function pt(t) {
          return (
            (pt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            pt(t)
          );
        }
        function vt(t, e, n) {
          return (
            (e = bt(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function bt(t) {
          const e = (function (t, e) {
            if ("object" !== ct(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== ct(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === ct(e) ? e : String(e);
        }
        at(st, "useCreativeOnPage", !1),
          at(st, "adUnits", []),
          at(st, "bidders", []),
          at(st, "hideAdfoxHeaderBidding", !1),
          at(st, "offAdfoxHeaderBidding", !1),
          at(st, "containerIds", []);
        const mt = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && dt(t, e);
          })(a, t);
          let e,
            n,
            r,
            o = yt(a);
          function a() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            vt(ht((t = o.call.apply(o, [this].concat(n)))), "containerId", !1),
              vt(ht(t), "reloadTime", 30),
              vt(ht(t), "tmFromLastLaunch", !1),
              vt(ht(t), "howManyWorkers", "many"),
              vt(ht(t), "workersFieldName", "controllers"),
              vt(ht(t), "controllers", { cur: null, next: null }),
              vt(ht(t), "containerNum", !1),
              vt(ht(t), "firstHadBeenPlayed", !1),
              vt(ht(t), "progressiveRebootDelay", 0),
              vt(ht(t), "name", "Адфокс"),
              vt(ht(t), "style", "color:#fd0;border-bottom:1px solid #000"),
              (t.containerId = t.params.containerId);
            const i = parseInt(t.params.reloadTime);
            i && i > 0
              ? (t.reloadTime = i)
              : t.log(
                  "Не задано время перезагрузки. Установлено значение по умолчанию: " +
                    t.reloadTime
                ),
              et.initBlock(t.blockId, t.creativeId, t.params);
            const u = t.getContainerId(),
              s = t.checkMediaWidth();
            return st.initBlock(u, t.params.adUnit, s), t;
          }
          return (
            (e = a),
            (n = [
              {
                key: "validParams",
                value: function (t) {
                  if (!ft(pt(a.prototype), "validParams", this).call(this, t))
                    return !1;
                  let e = !1;
                  return (
                    "object" != ct(t)
                      ? (e = "Не задан конфиг для adfox")
                      : void 0 === t.containerId
                        ? (e = "Не задан containerId")
                        : void 0 === t.ownerId
                          ? (e = "Не задан ownerId")
                          : void 0 === t.params
                            ? (e = "Не заданы параметры блока")
                            : void 0 === t.type
                              ? (e = "Не задан тип блока type")
                              : -1 === ["async", "adaptive"].indexOf(t.type)
                                ? (e = "Не верный тип блока type")
                                : "adaptive" === t.type &&
                                  ("object" != ct(t.bannerStates)
                                    ? (e =
                                        "Для адаптивного блока не задан обязательный параметр bannerStates")
                                    : "object" != ct(t.adaptiveOptions) &&
                                      (e =
                                        "Для адаптивного блока не задан обязательный параметр adaptiveOptions")),
                    !1 === e || (this.err(e), !1)
                  );
                },
              },
              {
                key: "initHB",
                value: function () {
                  const t = this.getContainerId();
                  st.initHB(t, this.params.adUnit);
                },
              },
              {
                key: "getContainerId",
                value: function () {
                  return (
                    this.containerId +
                    (this.containerNum ? "_" + this.containerNum : "")
                  );
                },
              },
              {
                key: "canRun",
                value: function () {
                  return (
                    ft(pt(a.prototype), "canRun", this).call(this) &&
                    this.checkMediaWidth() &&
                    et.canRun()
                  );
                },
              },
              {
                key: "checkMediaWidth",
                value: function () {
                  const t = window.innerWidth;
                  if ("adaptive" === this.params.type) {
                    let e,
                      n,
                      r,
                      o,
                      i,
                      a =
                        null !==
                          (e = parseInt(
                            null === (n = this.params.adaptiveOptions) ||
                              void 0 === n
                              ? void 0
                              : n.tabletWidth
                          )) && void 0 !== e
                          ? e
                          : 830,
                      u =
                        null !==
                          (r = parseInt(
                            null === (o = this.params.adaptiveOptions) ||
                              void 0 === o
                              ? void 0
                              : o.phoneWidth
                          )) && void 0 !== r
                          ? r
                          : 480;
                    if (t > a) {
                      if (
                        -1 ===
                        (null === (i = this.params.bannerStates) || void 0 === i
                          ? void 0
                          : i.indexOf("desktop"))
                      )
                        return !1;
                    } else if (t > u) {
                      let s;
                      if (
                        -1 ===
                        (null === (s = this.params.bannerStates) || void 0 === s
                          ? void 0
                          : s.indexOf("tablet"))
                      )
                        return !1;
                    } else {
                      let c;
                      if (
                        -1 ===
                        (null === (c = this.params.bannerStates) || void 0 === c
                          ? void 0
                          : c.indexOf("phone"))
                      )
                        return !1;
                    }
                  }
                  return !0;
                },
              },
              {
                key: "run",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  ft(pt(a.prototype), "run", this).call(this, t),
                    this.stateMachine("start", t);
                },
              },
              {
                key: "launchController",
                value: function () {
                  this.setState("Loading"),
                    this.fixContainerHeight(),
                    "reload" === this.getMode()
                      ? this.controllers.cur
                        ? this.sendCommand("reload", {}, "cur")
                        : (this.setCurController(this.createController()),
                          this.sendCommand("run", {}, "cur"))
                      : (this.setNextController(this.createController()),
                        this.hideNext(),
                        this.sendCommand("run", {}, "next")),
                    this.restartReloadTmInterval();
                },
              },
              {
                key: "createController",
                value: function () {
                  this.incContainerNum();
                  const t = this.getContainerId(),
                    e = W.addTag(
                      "div",
                      { id: t, class: "adfinity-adfox-creative" },
                      this.container,
                      "afterBegin"
                    ),
                    n = i(this.params);
                  return (
                    (n.containerId = t),
                    this.initHB(),
                    new et(this, { params: n }, e)
                  );
                },
              },
              {
                key: "setCurController",
                value: function (t) {
                  (this.controllers.cur = t),
                    t && this.controllers.cur.setId(this.id + ".cur");
                },
              },
              {
                key: "setNextController",
                value: function (t) {
                  (this.controllers.next = t),
                    t && this.controllers.next.setId(this.id + ".next");
                },
              },
              {
                key: "incContainerNum",
                value: function () {
                  !1 === this.containerNum
                    ? (this.containerNum = 0)
                    : this.containerNum++;
                },
              },
              {
                key: "restartReloadTmInterval",
                value: function () {
                  const t = this;
                  !1 === this.tmFromLastLaunch &&
                    this.setInterval(
                      "reloadTmInterval",
                      () => {
                        return t.tmFromLastLaunch++;
                      },
                      1e3
                    ),
                    (this.tmFromLastLaunch = 0);
                },
              },
              {
                key: "getMode",
                value: function () {
                  return this.tmFromLastLaunch < 30 ? "recreate" : "reload";
                },
              },
              {
                key: "isBroadcastPercentage",
                value: function () {
                  let t;
                  return (
                    "video" ===
                    (null === (t = this.controllers.cur) || void 0 === t
                      ? void 0
                      : t.detectCreativeType())
                  );
                },
              },
              {
                key: "hideNext",
                value: function () {
                  this.controllers.next.container.classList.add(
                    "adfinity-hide-adfox"
                  );
                },
              },
              {
                key: "showNext",
                value: function () {
                  this.controllers.next.container.classList.remove(
                    "adfinity-hide-adfox"
                  );
                },
              },
              {
                key: "getLastFrameLost",
                value: function () {
                  return !0;
                },
              },
              {
                key: "getCurrentBidder",
                value: function () {
                  let t, e;
                  return null !==
                    (t =
                      null === (e = this.controllers.cur) || void 0 === e
                        ? void 0
                        : e.getCurrentBidder()) && void 0 !== t
                    ? t
                    : "";
                },
              },
              {
                key: "fixContainerHeight",
                value: function () {
                  let t,
                    e,
                    n,
                    r,
                    o = this.container.offsetHeight;
                  o <= 1 &&
                    ((o = parseInt(
                      null === (t = this.params) ||
                        void 0 === t ||
                        null === (e = t.sizes) ||
                        void 0 === e
                        ? void 0
                        : e.height
                    )),
                    isNaN(o) &&
                      (this.err(
                        "Не удалось определить высоту контейнера. "
                          .concat(this.container.offsetHeight, ", ")
                          .concat(
                            null === (n = this.params) ||
                              void 0 === n ||
                              null === (r = n.sizes) ||
                              void 0 === r
                              ? void 0
                              : r.height,
                            ". Установлена дефолтная высота 100"
                          )
                      ),
                      (o = 100)));
                  const i = '[data-adfinity-creative-id="'
                    .concat(
                      this.creativeId,
                      '"]>.adfinity-adfox-creative{min-height:'
                    )
                    .concat(o, "px}");
                  W.addStyle(this.adfoxContainerKey(), i);
                },
              },
              {
                key: "unfixContainerHeight",
                value: function () {
                  this.creativeId && W.removeStyle(this.adfoxContainerKey());
                },
              },
              {
                key: "adfoxContainerKey",
                value: function () {
                  return "creative-adfox-loading-" + this.creativeId;
                },
              },
              {
                key: "onComplete",
                value: function () {
                  const t = this.sendSignal(
                    "creativeComplete",
                    {},
                    this.creativeId
                  );
                  return !(
                    null == t ||
                    !t.stopReloading ||
                    ((this.firstHadBeenPlayed = !1), 0)
                  );
                },
              },
              {
                key: "_Ready_start",
                value: function (t) {
                  t.pauseAfterStart && (this.pauseAfterStart = !0),
                    this.launchController();
                },
              },
              {
                key: "_Ready_unpause",
                value: function (t) {
                  this._Ready_start(t);
                },
              },
              {
                key: "_LastFrame_start",
                value: function (t) {
                  this._Ready_start(t);
                },
              },
              {
                key: "_LastFrame_timer",
                value: function (t) {
                  this._Ready_start(t);
                },
              },
              {
                key: "_Loading_stub",
                value: function (t) {
                  const e = this;
                  this.destroyController("next"),
                    this.progressiveRebootDelay++,
                    this.progressiveRebootDelay <= 2
                      ? this.setTimeout(
                          "progressiveRebootDelay",
                          () => {
                            e.launchController();
                          },
                          1e3 * this.progressiveRebootDelay
                        )
                      : ((this.progressiveRebootDelay = 0),
                        this.err("Adfox - отказ: " + this.creativeId),
                        this.sendSignal("stub", t, this.creativeId),
                        this.returnToReadyState());
                },
              },
              {
                key: "_Loading_render",
                value: function (t) {
                  if (
                    (this.unfixContainerHeight(),
                    (this.progressiveRebootDelay = 0),
                    this.controllers.next instanceof et &&
                      (this.destroyController("cur"),
                      this.showNext(),
                      this.setCurController(this.controllers.next),
                      this.setNextController(null)),
                    !1 === this.firstHadBeenPlayed)
                  )
                    return (
                      (this.firstHadBeenPlayed = !0),
                      (this.playValues = t),
                      this.pauseAfterStart
                        ? ((this.pauseAfterStart = !1),
                          (t.hasBeenPaused = !0),
                          this.setState("Pause"))
                        : this.setState("WaitingForPlayback"),
                      void this.sendSignal("play", t, this.creativeId)
                    );
                  this.setState("WaitingForPlayback");
                },
              },
              {
                key: "_WaitingForPlayback_play",
                value: function (t) {
                  this.runReloadTimer();
                },
              },
              {
                key: "_WaitingForPlayback_unpause",
                value: function (t) {
                  this.runReloadTimer();
                },
              },
              {
                key: "_Pause_unpause",
                value: function () {
                  this.setState("WaitingForPlayback"),
                    this.sendCommand("unpause", {}, "cur"),
                    this.runReloadTimer();
                },
              },
              {
                key: "_Pause_start",
                value: function () {
                  this._Ready_start();
                },
              },
              {
                key: "_PlaybackNTimer_complete",
                value: function () {
                  this.onComplete()
                    ? this.setState("LastFrame")
                    : this.setState("WaitingForTimer");
                },
              },
              {
                key: "_PlaybackNTimer_timer",
                value: function () {
                  this.setState("WaitingComplete");
                },
              },
              { key: "_PlaybackNTimer_unpause", value: function () {} },
              { key: "_PlaybackNTimer_play", value: function () {} },
              {
                key: "_WaitingComplete_complete",
                value: function () {
                  this.onComplete()
                    ? this.setState("LastFrame")
                    : this.launchController();
                },
              },
              {
                key: "_WaitingForTimer_timer",
                value: function () {
                  this.launchController();
                },
              },
              {
                key: "runReloadTimer",
                value: function () {
                  const t = this;
                  this.setState("PlaybackNTimer"),
                    this.stopScheduler("reloadTimer"),
                    this.setTimeout(
                      "reloadTimer",
                      () => {
                        t.stateMachine("timer");
                      },
                      1e3 * this.reloadTime
                    );
                },
              },
              {
                key: "getStatus",
                value: function () {
                  switch (this.getState()) {
                    case "Ready":
                    case "WaitingForTimer":
                    case "LastFrame":
                      return "Ready";
                    case "Loading":
                      return "Loading";
                    case "PlaybackNTimer":
                    case "WaitingComplete":
                      return "Play";
                    case "WaitingForPlayback":
                    case "Pause":
                      return "Pause";
                    default:
                      return !1;
                  }
                },
              },
              {
                key: "returnToReadyState",
                value: function () {
                  this.setState("Ready"),
                    (this.firstHadBeenPlayed = !1),
                    this.destroyAdfoxCreative();
                },
              },
              {
                key: "onRenderSignal",
                value: function (t) {
                  return this.stateMachine("render", t);
                },
              },
              {
                key: "onPlaySignal",
                value: function (t) {
                  return this.stateMachine("play", t);
                },
              },
              {
                key: "onStubSignal",
                value: function (t) {
                  return this.stateMachine("stub", t);
                },
              },
              {
                key: "onCompleteSignal",
                value: function (t) {
                  return this.stateMachine("complete", t);
                },
              },
              {
                key: "onPercentTimelineSignal",
                value: function (t) {
                  return (
                    this.sendSignal("percentTimeline", t, this.creativeId), !0
                  );
                },
              },
              {
                key: "onUnpauseCommand",
                value: function (t) {
                  this.stateMachine("unpause");
                },
              },
              {
                key: "onStopCommand",
                value: function (t) {
                  return this.returnToReadyState(), !0;
                },
              },
              {
                key: "onReloadCommand",
                value: function (t) {
                  return (
                    "Ready" !== this.getState() && this.returnToReadyState(),
                    this.stateMachine("start"),
                    !0
                  );
                },
              },
              {
                key: "destroyAdfoxCreative",
                value: function () {
                  this.stopAllSchedulers(),
                    "recreate" === this.getMode() &&
                      this.destroyController("cur"),
                    this.destroyController("next");
                },
              },
              {
                key: "destroyController",
                value: function (t) {
                  this.controllers[t] instanceof et &&
                    (this.controllers[t].destroy(),
                    (this.controllers[t] = null));
                },
              },
              {
                key: "destroy",
                value: function () {
                  ft(pt(a.prototype), "destroy", this).call(this),
                    this.returnToReadyState(),
                    this.container && (this.container.innerHTML = "");
                },
              },
            ]),
            (r = [
              {
                key: "initBefore",
                value: function (t) {
                  et.initBefore(t), st.initBefore(t);
                },
              },
              {
                key: "initAfter",
                value: function (t) {
                  et.initAfter(t), st.initAfter(t);
                },
              },
            ]),
            n && lt(e.prototype, n),
            r && lt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(B);
        function gt(t) {
          return (
            (gt =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            gt(t)
          );
        }
        function wt(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== gt(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== gt(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === gt(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function St() {
          return (
            (St =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Ot(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            St.apply(this, arguments)
          );
        }
        function kt(t, e) {
          return (
            (kt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            kt(t, e)
          );
        }
        function Pt(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Ot(t);
            if (e) {
              const o = Ot(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === gt(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function Ot(t) {
          return (
            (Ot = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Ot(t)
          );
        }
        const Ct = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && kt(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Pt(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "canRun",
                value: function () {
                  return !(
                    !St(Ot(i.prototype), "canRun", this).call(this) ||
                    (this.params.script_head &&
                      !document.querySelector("head")) ||
                    (this.params.script_body && !this.elToInsert())
                  );
                },
              },
              {
                key: "run",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    !!St(Ot(i.prototype), "run", this).call(this, t) &&
                    (this.params.script_head && this.insertScriptHead(),
                    this.params.script_body && this.insertScriptBody(),
                    !0)
                  );
                },
              },
              {
                key: "insertScriptHead",
                value: function () {
                  this.params.script_head.forEach((t) => {
                    W.addTag(t.tag, t.attributes, null, "beforeEnd", t.content);
                  });
                },
              },
              {
                key: "insertScriptBody",
                value: function () {
                  let t = this,
                    e = this.params.cssPosition;
                  (e = e || "afterbegin"),
                    this.setInterval(
                      "waitObjectByCss",
                      () => {
                        const n = t.elToInsert();
                        n
                          ? (t.stopScheduler("waitObjectByCss"),
                            t.params.script_body.forEach((t) => {
                              W.addTag(t.tag, t.attributes, n, e, t.content);
                            }))
                          : t.err(
                              "Не найден элемент для вставки - " +
                                t.getCssPath()
                            );
                      },
                      50
                    );
                },
              },
              {
                key: "getCssPath",
                value: function () {
                  const t = this.params.cssPath;
                  return t || "body";
                },
              },
              {
                key: "elToInsert",
                value: function () {
                  const t = this.getCssPath();
                  return W.getObjectByPath(t);
                },
              },
            ]),
            n && wt(e.prototype, n),
            r && wt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function jt(t) {
          return (
            (jt =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            jt(t)
          );
        }
        function Rt(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== jt(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== jt(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === jt(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function _t() {
          return (
            (_t =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = It(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            _t.apply(this, arguments)
          );
        }
        function xt(t, e) {
          return (
            (xt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            xt(t, e)
          );
        }
        function Tt(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = It(t);
            if (e) {
              const o = It(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === jt(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function It(t) {
          return (
            (It = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            It(t)
          );
        }
        const Lt = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && xt(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Tt(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "validParams",
                value: function (t) {
                  return (
                    !!_t(It(i.prototype), "validParams", this).call(this, t) &&
                    (void 0 === t.slots.vox
                      ? (this.err("Не задан id слота"), !1)
                      : void 0 !== t.cssPath ||
                        (this.err("Не задан путь к изображению"), !1))
                  );
                },
              },
              {
                key: "canRun",
                value: function () {
                  return (
                    _t(It(i.prototype), "canRun", this).call(this) &&
                    "loading" !== document.readyState
                  );
                },
              },
              {
                key: "run",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if (
                    (_t(It(i.prototype), "run", this).call(this, t),
                    void 0 === window._tx)
                  ) {
                    const e = document.createElement("script");
                    (e.type = "text/javascript"),
                      (e.async = !0),
                      (e.src = "//st.hbrd.io/ssp.js?t=" + new Date().getTime()),
                      (
                        document.getElementsByTagName("head")[0] ||
                        document.getElementsByTagName("body")[0]
                      ).appendChild(e);
                  }
                  (window._tx = window._tx || {}),
                    (window._tx.cmds = window._tx.cmds || []);
                  const n = {
                      placeId: this.params.slots.vox,
                      imageSelector: this.params.cssPath,
                    },
                    r = {};
                  return (
                    this.params.canShowDuplicates && (r.canShowDuplicates = !0),
                    this.params.setDisplayBlock && (r.setDisplayBlock = !0),
                    window._tx.cmds.push(() => {
                      window._tx.integrateInImage(n), window._tx.init(r);
                    }),
                    !0
                  );
                },
              },
            ]),
            n && Rt(e.prototype, n),
            r && Rt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function Et(t) {
          return (
            (Et =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Et(t)
          );
        }
        function Nt(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Dt(r.key), r);
          }
        }
        function Bt() {
          return (
            (Bt =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Ft(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Bt.apply(this, arguments)
          );
        }
        function At(t, e) {
          return (
            (At = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            At(t, e)
          );
        }
        function Wt(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Ft(t);
            if (e) {
              const o = Ft(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return Mt(this, n);
          };
        }
        function Mt(t, e) {
          if (e && ("object" === Et(e) || "function" === typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t);
        }
        function Ft(t) {
          return (
            (Ft = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Ft(t)
          );
        }
        function Ht(t, e, n) {
          return (
            (e = Dt(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Dt(t) {
          const e = (function (t, e) {
            if ("object" !== Et(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Et(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Et(e) ? e : String(e);
        }
        const Vt = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && At(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Wt(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (t = o.call.apply(o, [this].concat(n)))
              ? ((i.useCreativeOnPage = !0), Mt(t))
              : Mt(t, !1);
          }
          return (
            (e = i),
            (n = [
              {
                key: "canRun",
                value: function () {
                  return (
                    Bt(Ft(i.prototype), "canRun", this).call(this) &&
                    i.yaContextCbInit
                  );
                },
              },
              {
                key: "run",
                value: function () {
                  let t,
                    e,
                    n = this,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  Bt(Ft(i.prototype), "run", this).call(this, r),
                    null !== (t = this.params) &&
                    void 0 !== t &&
                    null !== (e = t.params) &&
                    void 0 !== e &&
                    e.blockId
                      ? window.yaContextCb.push(() => {
                          Ya.Context.AdvManager.render({
                            type: "fullscreen",
                            platform: "desktop",
                            blockId: n.params.params.blockId,
                            onError: function (t) {
                              n.err(t);
                            },
                            onRender: function (t) {
                              n.log("onRender", null, null, t);
                            },
                          });
                        })
                      : this.err("Не задан id для блока RTB");
                },
              },
            ]),
            (r = [
              {
                key: "initBefore",
                value: function (t) {
                  i.hideAdfoxContext =
                    !0 === (null == t ? void 0 : t.hideAdfoxContext);
                  var e = setInterval(() => {
                    void 0 !== window.yaContextCb &&
                      ((i.yaContextCbInit = !0), clearInterval(e));
                  }, 4);
                },
              },
              {
                key: "initAfter",
                value: function (t) {
                  if (i.useCreativeOnPage) {
                    let e;
                    window.yaContextCb = window.yaContextCb || [];
                    const n =
                      null !== (e = window.srcCONT) && void 0 !== e
                        ? e
                        : "//yandex.ru/ads/system/context.js";
                    !0 === (null == t ? void 0 : t.hideAdfoxContext) ||
                      document.querySelector("script[src*=\"".concat(n, "\"]")) ||
                      W.addTag("script", { src: n, async: !0 });
                  }
                },
              },
            ]),
            n && Nt(e.prototype, n),
            r && Nt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function zt(t) {
          return (
            (zt =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            zt(t)
          );
        }
        function Ut(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== zt(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== zt(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === zt(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function Yt(t, e) {
          return (
            (Yt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Yt(t, e)
          );
        }
        function qt(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Zt(t);
            if (e) {
              const o = Zt(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === zt(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function Zt(t) {
          return (
            (Zt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Zt(t)
          );
        }
        Ht(Vt, "useCreativeOnPage", !1),
          Ht(Vt, "hideAdfoxContext", !1),
          Ht(Vt, "yaContextCbInit", !1);
        const Gt = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Yt(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = qt(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  return (
                    W.addTag("script", {
                      async: !0,
                      src: "//cdn.al-adtech.com/ssp/sdk.js",
                    }),
                    !0
                  );
                },
              },
            ]) && Ut(e.prototype, n),
            r && Ut(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function $t(t) {
          return (
            ($t =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            $t(t)
          );
        }
        function Kt(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, re(r.key), r);
          }
        }
        function Xt() {
          return (
            (Xt =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = ee(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Xt.apply(this, arguments)
          );
        }
        function Jt(t, e) {
          return (
            (Jt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Jt(t, e)
          );
        }
        function Qt(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = ee(t);
            if (e) {
              const o = ee(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === $t(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return te(t);
            })(this, n);
          };
        }
        function te(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ee(t) {
          return (
            (ee = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ee(t)
          );
        }
        function ne(t, e, n) {
          return (
            (e = re(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function re(t) {
          const e = (function (t, e) {
            if ("object" !== $t(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== $t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === $t(e) ? e : String(e);
        }
        const oe = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Jt(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Qt(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              ne(
                te((t = o.call.apply(o, [this].concat(n)))),
                "moeVideoConfig",
                {}
              ),
              ne(te(t), "relativeBlock", null),
              ne(te(t), "cntStarted", 0),
              (t.relativeBlock = parseInt(t.params.params.relativeBlock)),
              t.relativeBlock || (t.relativeBlock = null),
              (t.moeVideoConfig = t.getConfig()),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  const t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = Xt(ee(i.prototype), "run", this).call(this, t);
                  return (
                    (function (t) {
                      const e = document.createElement("script");
                      (e.src = "//cdn1.moe.video/p/cr.js"),
                        (e.onload = function () {
                          addContentRoll(t);
                        }),
                        document.body.append(e);
                    })(this.moeVideoConfig),
                    e
                  );
                },
              },
              {
                key: "reload",
                value: function () {
                  this.isRun || addContentRoll(this.moeVideoConfig);
                },
              },
              {
                key: "getConfig",
                value: function () {
                  let t,
                    e,
                    n = this,
                    r = this.params.params,
                    o = parseInt(r.closeSecOffset);
                  o = isNaN(o) || o < 1 ? 5 : o;
                  const i = parseInt(
                    null === (t = this.params.slots) ||
                      void 0 === t ||
                      null === (e = t.moevideo) ||
                      void 0 === e
                      ? void 0
                      : e.slot_id
                  );
                  isNaN(i) && this.err("Не задан placementId");
                  const a = {
                      width: "100%",
                      placement: i,
                      promo: !0,
                      advertCount: 15,
                      slot: "page",
                      sound: "onclick",
                      deviceMode: "all",
                      background: r.background,
                      fly: {
                        mode: "stick",
                        width: r.width,
                        position: "bottom-" + r.position,
                        positionMobile: "bottom",
                        animation: "fly",
                        closeSecOffset: o,
                      },
                      playerLoad: function () {
                        console.info("----Player Loaded");
                      },
                      adLoad: function () {
                        console.info("----adLoad");
                      },
                      adStart: function () {
                        console.info("----Ad Started"),
                          n.hideRelativeBlock(),
                          n.cntStarted++;
                      },
                      adImp: function () {
                        console.info("----Ad Impression");
                      },
                      ad25: function () {
                        console.info("----Ad 25");
                      },
                      ad50: function () {
                        console.info("----Ad 50");
                      },
                      ad75: function () {
                        console.info("----Ad 75");
                      },
                      adCompl: function () {
                        console.info("----Ad Completed"),
                          n.cntStarted--,
                          n.showRelativeBlock();
                      },
                      adFinish: function () {
                        console.info("----Ad Finished"),
                          (n.cntStarted = 0),
                          n.showRelativeBlock(),
                          (n.isRun = !1),
                          n.reload();
                      },
                      adError: function (t) {
                        (n.cntStarted = 0),
                          console.info("----Ad Error", t),
                          n.showRelativeBlock(),
                          (n.isRun = !1),
                          n.reload();
                      },
                      adEmpty: function (t) {
                        console.info("----Ad Empty", t),
                          n.cntStarted--,
                          n.showRelativeBlock();
                      },
                      playerClose: function () {
                        console.info("----playerClose");
                      },
                    },
                    u = parseInt(r.reloadAfterClose);
                  return u && (a.reloadAfterClose = u), a;
                },
              },
              {
                key: "hideRelativeBlock",
                value: function () {
                  let t;
                  this.relativeBlock &&
                    (null ===
                      (t = document.getElementById(
                        "wrap_" + this.relativeBlock
                      )) ||
                      void 0 === t ||
                      t.classList.add("adfinity-hide-block"));
                },
              },
              {
                key: "showRelativeBlock",
                value: function () {
                  if (0 === this.cntStarted && this.relativeBlock) {
                    let t,
                      e = window.adfinity.block(this.relativeBlock);
                    e.isRun || e.format.openFormat(),
                      null ===
                        (t = document.getElementById(
                          "wrap_" + this.relativeBlock
                        )) ||
                        void 0 === t ||
                        t.classList.remove("adfinity-hide-block");
                  }
                },
              },
            ]),
            n && Kt(e.prototype, n),
            r && Kt(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function ie(t) {
          return (
            (ie =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ie(t)
          );
        }
        function ae(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, se(r.key), r);
          }
        }
        function ue(t, e, n) {
          return (
            (e = se(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function se(t) {
          const e = (function (t, e) {
            if ("object" !== ie(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== ie(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === ie(e) ? e : String(e);
        }
        const ce = (function () {
          function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ue(this, "sources", []),
              ue(this, "mode", "autoReload"),
              ue(this, "curSource", -1),
              ue(this, "name", "Васт источники"),
              ue(this, "style", "color:violet;border-bottom:1px dashed blue"),
              (this.sources = e),
              (this.mode = n);
          }
          let e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "nextSrc",
                value: function () {
                  if (
                    (this.curSource++, this.curSource > this.sources.length - 1)
                  ) {
                    if ("autoReload" !== this.mode)
                      return (this.curSource = -1), !1;
                    this.curSource = 0;
                  }
                  return this.insertLikMacros(this.getCurrentSrc().link);
                },
              },
              {
                key: "getCurrentSrc",
                value: function () {
                  return this.sources[this.curSource];
                },
              },
              {
                key: "getCurrentSrcInfo",
                value: function () {
                  let t;
                  return (
                    this.curSource +
                    "/" +
                    this.sources.length +
                    " [" +
                    (null === (t = this.getCurrentSrc()) || void 0 === t
                      ? void 0
                      : t.name) +
                    "]"
                  );
                },
              },
              {
                key: "getCurrentSrcName",
                value: function () {
                  let t;
                  return null === (t = this.getCurrentSrc()) || void 0 === t
                    ? void 0
                    : t.name;
                },
              },
              {
                key: "insertLikMacros",
                value: function (t) {
                  return (t = (t = t.replaceAll(
                    "[[url]]",
                    encodeURIComponent(location.toString())
                  )).replaceAll(
                    "[[domain]]",
                    encodeURIComponent(location.hostname)
                  ));
                },
              },
              {
                key: "reset",
                value: function () {
                  (this.sources = []), (this.mode = !1), (this.curSource = -1);
                },
              },
            ]) && ae(e.prototype, n),
            r && ae(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function le(t) {
          return (
            (le =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            le(t)
          );
        }
        function fe(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, me(r.key), r);
          }
        }
        function de() {
          return (
            (de =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = ve(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            de.apply(this, arguments)
          );
        }
        function ye(t, e) {
          return (
            (ye = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            ye(t, e)
          );
        }
        function he(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = ve(t);
            if (e) {
              const o = ve(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === le(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return pe(t);
            })(this, n);
          };
        }
        function pe(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ve(t) {
          return (
            (ve = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ve(t)
          );
        }
        function be(t, e, n) {
          return (
            (e = me(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function me(t) {
          const e = (function (t, e) {
            if ("object" !== le(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== le(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === le(e) ? e : String(e);
        }
        const ge = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ye(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = he(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              be(
                pe((n = o.call(this, t, e))),
                "masterFieldName",
                "vastCreative"
              ),
              be(pe(n), "vastCreative", null),
              be(pe(n), "interval", !1),
              be(pe(n), "isRun", !1),
              be(pe(n), "startTm", !1),
              be(pe(n), "liveIndicator", !1),
              be(pe(n), "name", "Васт таймер"),
              be(
                pe(n),
                "style",
                "color:violet;border-bottom:1px dashed yellow"
              ),
              n.initManager(t, e),
              (n.interval = e),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "onRunCommand",
                value: function (t) {
                  const e = this,
                    n = t.tooLong;
                  this.log("timeControlOn"),
                    (this.isRun = !0),
                    (this.startTm = new Date()),
                    this.setInterval(
                      "vastTimeControl",
                      () => {
                        new Date() - e.startTm > 1e3 * n &&
                          !1 === e.liveIndicator &&
                          e.sendSignal("playbackIsInterrupted"),
                          (e.liveIndicator = !1);
                      },
                      1e3 * this.interval
                    );
                },
              },
              {
                key: "onCheckCommand",
                value: function (t) {
                  const e = t.eventName;
                  this.isRun
                    ? ("AdPodComplete" === e && (this.startTm = !1),
                      (this.liveIndicator = !0))
                    : this.err(
                        "timeControl: событие ".concat(
                          e,
                          " при выключенном контроле времени"
                        )
                      );
                },
              },
              {
                key: "onStopCommand",
                value: function (t) {
                  return (
                    this.isRun &&
                      (this.log("timeControlOff"),
                      (this.isRun = !1),
                      (this.liveIndicator = !1),
                      (this.startTm = !1),
                      this.stopScheduler("vastTimeControl")),
                    !0
                  );
                },
              },
              {
                key: "destroy",
                value: function () {
                  de(ve(i.prototype), "destroy", this).call(this),
                    this.onStopCommand();
                },
              },
            ]) && fe(e.prototype, n),
            r && fe(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function we(t) {
          return (
            (we =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            we(t)
          );
        }
        function Se() {
          Se = function () {
            return t;
          };
          var t = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            r =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            o = "function" === typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            u = o.toStringTag || "@@toStringTag";
          function s(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function c(t, e, n, o) {
            const i = e && e.prototype instanceof d ? e : d,
              a = Object.create(i.prototype),
              u = new C(o || []);
            return r(a, "_invoke", { value: S(t, n, u) }), a;
          }
          function l(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = c;
          const f = {};
          function d() {}
          function y() {}
          function h() {}
          let p = {};
          s(p, i, function () {
            return this;
          });
          const v = Object.getPrototypeOf,
            b = v && v(v(j([])));
          b && b !== e && n.call(b, i) && (p = b);
          const m = (h.prototype = d.prototype = Object.create(p));
          function g(t) {
            ["next", "throw", "return"].forEach((e) => {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function w(t, e) {
            function o(r, i, a, u) {
              const s = l(t[r], t, i);
              if ("throw" !== s.type) {
                const c = s.arg,
                  f = c.value;
                return f && "object" == we(f) && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      (t) => {
                        o("next", t, a, u);
                      },
                      (t) => {
                        o("throw", t, a, u);
                      }
                    )
                  : e.resolve(f).then(
                      (t) => {
                        (c.value = t), a(c);
                      },
                      (t) => {
                        return o("throw", t, a, u);
                      }
                    );
              }
              u(s.arg);
            }
            let i;
            r(this, "_invoke", {
              value: function (t, n) {
                function r() {
                  return new e((e, r) => {
                    o(t, n, e, r);
                  });
                }
                return (i = i ? i.then(r, r) : r());
              },
            });
          }
          function S(t, e, n) {
            let r = "suspendedStart";
            return function (o, i) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return R();
              }
              for (n.method = o, n.arg = i; ; ) {
                const a = n.delegate;
                if (a) {
                  const u = k(a, n);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                const s = l(t, e, n);
                if ("normal" === s.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), s.arg === f)
                  )
                    continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function k(t, e) {
            const n = e.method,
              r = t.iterator[n];
            if (void 0 === r)
              return (
                (e.delegate = null),
                ("throw" === n &&
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  k(t, e),
                  "throw" === e.method)) ||
                  ("return" !== n &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                f
              );
            const o = l(r, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), f
              );
            const i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  f)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                f);
          }
          function P(t) {
            const e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function O(t) {
            const e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(P, this),
              this.reset(!0);
          }
          function j(t) {
            if (t) {
              const e = t[i];
              if (e) return e.call(t);
              if ("function" === typeof t.next) return t;
              if (!isNaN(t.length)) {
                let r = -1,
                  o = function e() {
                    for (; ++r < t.length; )
                      if (n.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: R };
          }
          function R() {
            return { value: void 0, done: !0 };
          }
          return (
            (y.prototype = h),
            r(m, "constructor", { value: h, configurable: !0 }),
            r(h, "constructor", { value: y, configurable: !0 }),
            (y.displayName = s(h, u, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              const e = "function" === typeof t && t.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, h)
                  : ((t.__proto__ = h), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            g(w.prototype),
            s(w.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = w),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              const a = new w(c(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then((t) => {
                    return t.done ? t.value : a.next();
                  });
            }),
            g(m),
            s(m, u, "Generator"),
            s(m, i, function () {
              return this;
            }),
            s(m, "toString", () => {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              const e = Object(t),
                n = [];
              for (const r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    const r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (t.values = j),
            (C.prototype = {
              constructor: C,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (const e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                const t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                const e = this;
                function r(n, r) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = n),
                    r && ((e.method = "next"), (e.arg = void 0)),
                    !!r
                  );
                }
                for (let o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    const u = n.call(i, "catchLoc"),
                      s = n.call(i, "finallyLoc");
                    if (u && s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (u) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (let r = this.tryEntries.length - 1; r >= 0; --r) {
                  const o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                const a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  f
                );
              },
              finish: function (t) {
                for (let e = this.tryEntries.length - 1; e >= 0; --e) {
                  const n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), O(n), f;
                }
              },
              catch: function (t) {
                for (let e = this.tryEntries.length - 1; e >= 0; --e) {
                  const n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    const r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      O(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: j(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  f
                );
              },
            }),
            t
          );
        }
        function ke(t, e, n, r, o, i, a) {
          try {
            var u = t[i](a),
              s = u.value;
          } catch (t) {
            return void n(t);
          }
          u.done ? e(s) : Promise.resolve(s).then(r, o);
        }
        function Pe(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, xe(r.key), r);
          }
        }
        function Oe(t, e) {
          return (
            (Oe = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Oe(t, e)
          );
        }
        function Ce(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Re(t);
            if (e) {
              const o = Re(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === we(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return je(t);
            })(this, n);
          };
        }
        function je(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Re(t) {
          return (
            (Re = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Re(t)
          );
        }
        function _e(t, e, n) {
          return (
            (e = xe(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function xe(t) {
          const e = (function (t, e) {
            if ("object" !== we(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== we(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === we(e) ? e : String(e);
        }
        const Te = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Oe(t, e);
          })(u, t);
          let e,
            n,
            r,
            o,
            i,
            a = Ce(u);
          function u(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              _e(
                je((n = a.call(this, t, e))),
                "masterFieldName",
                "vastCreative"
              ),
              _e(je(n), "vastCreative", null),
              _e(je(n), "bidderName", !1),
              _e(je(n), "source", !1),
              _e(je(n), "container", !1),
              _e(je(n), "params", {}),
              _e(je(n), "adStore", !1),
              _e(je(n), "adPlaybackController", !1),
              _e(je(n), "errorCodes", {}),
              _e(je(n), "name", "Васт контроллер"),
              _e(je(n), "style", "color:violet;border-bottom:1px dashed blue"),
              n.initManager(t, e),
              n
            );
          }
          return (
            (e = u),
            (n = [
              {
                key: "getErrorsDescriptions",
                value:
                  ((o = Se().mark(function t() {
                    let e, n;
                    return Se().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this.isLogsOn()) {
                                t.next = 8;
                                break;
                              }
                              return (
                                (e =
                                  W.getStaticUrl() +
                                  "/additionals/yaSdkErrors.json"),
                                (t.next = 4),
                                fetch(e)
                              );
                            case 4:
                              return (n = t.sent), (t.next = 7), n.json();
                            case 7:
                              this.errorCodes = t.sent;
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })),
                  (i = function () {
                    const t = this,
                      e = arguments;
                    return new Promise((n, r) => {
                      const i = o.apply(t, e);
                      function a(t) {
                        ke(i, n, r, a, u, "next", t);
                      }
                      function u(t) {
                        ke(i, n, r, a, u, "throw", t);
                      }
                      a(void 0);
                    });
                  }),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "canRun",
                value: function () {
                  let t, e;
                  return !(
                    null === (t = window.ya) ||
                    void 0 === t ||
                    null === (e = t.videoAd) ||
                    void 0 === e ||
                    !e.loadModule
                  );
                },
              },
              {
                key: "requestSrc",
                value: function (t, e, n) {
                  const r = this;
                  (this.container = t),
                    (this.source = e),
                    (this.bidderName = n),
                    this.reset(),
                    (this.ya = window.ya),
                    (this.slot = W.addTag(
                      "div",
                      { class: "adfinity-vast-creative" },
                      this.container,
                      "beforeend"
                    )),
                    (this.video = W.addTag(
                      "video",
                      {
                        class: "adfinity-vast-video",
                        playsinline: "playsinline",
                      },
                      this.slot,
                      "beforeend"
                    ));
                  const o = parseInt(this.params.height);
                  isNaN(parseInt(o)) ||
                    (this.container.style.height = this.video.style.height =
                      this.params.height);
                  const i = parseInt(this.params.width);
                  isNaN(parseInt(i)) ||
                    (this.container.style.width = this.video.style.width =
                      this.params.width);
                  const a = { vastUrl: e, adBreakType: "preroll" };
                  this.ya.videoAd
                    .loadModule("AdLoader")
                    .then((t) => {
                      return t.AdLoader.create(a);
                    })
                    .then((t) => {
                      return r.sendSignal("srcLoaded"), t.loadAd();
                    })
                    .then((t) => {
                      return (
                        (r.adStore = t),
                        t
                          .preload({ videoSlot: r.video })
                          .then(() => {
                            return t;
                          })
                          .catch(() => {
                            return t;
                          })
                      );
                    })
                    .then((t) => {
                      (r.adStore = t),
                        (r.adPlaybackController = t.createPlaybackController(
                          r.video,
                          r.slot
                        )),
                        r.playbackContinuesEvents();
                      const e = [
                          "AdClickThru",
                          "AdContentSizeChange",
                          "AdPlayingStateChange",
                          "AdPodClose",
                          "AdPodComplete",
                          "AdPodError",
                          "AdPodImpression",
                          "AdPodSkipped",
                          "AdPodStarted",
                          "AdPodStopped",
                          "AdPodVideoFirstQuartile",
                          "AdPodVideoMidpoint",
                          "AdPodVideoThirdQuartile",
                          "AdRemainingTimeChange",
                          "AdSkippableStateChange",
                          "AdStarted",
                          "AdStartRequest",
                          "AdStartRejected",
                          "AdStopped",
                          "AdVolumeAvailabilityStateChange",
                          "AdVolumeChange",
                          "AllAdPodVideoComplete",
                        ],
                        n = function (t) {
                          r.adPlaybackController.subscribe(e[t], (n) => {
                            r.log(e[t], {}, { vendor: r.bidderName });
                          });
                        };
                      for (const o in e) n(o);
                      r.adPlaybackController.subscribe(
                        "AdContentSizeChange",
                        () => {
                          return r.setHeightContainer();
                        }
                      ),
                        r.adPlaybackController.subscribe("AdPodStarted", () => {
                          return r.setHeightContainer();
                        }),
                        r.adPlaybackController.subscribe(
                          "AllAdPodVideoComplete",
                          () => {
                            r.sendSignal("playbackIsComplete");
                          }
                        ),
                        r.adPlaybackController.subscribe("AdStopped", () => {
                          r.sendSignal("AdStopped");
                        }),
                        r.adPlaybackController.playAd(),
                        r.adPlaybackController.setAdVolume(0);
                    })
                    .catch((t) => {
                      r.err(r.getError(t)), r.sendSignal("playbackIsComplete");
                    });
                },
              },
              {
                key: "setHeightContainer",
                value: function () {
                  let t = !1;
                  if (this.adPlaybackController) {
                    let e,
                      n,
                      r = this.adPlaybackController.getAdContentSize();
                    null != r && r.height
                      ? (t = parseInt(r.height) + "px")
                      : null !== (e = this.video) &&
                        void 0 !== e &&
                        null !== (n = e.style) &&
                        void 0 !== n &&
                        n.height &&
                        (t = parseInt(this.video.style.height) + "px");
                  }
                  (isNaN(parseInt(t)) ||
                    parseInt(t) > parseInt(this.checkVh(this.params.height))) &&
                    (t = this.params.height),
                    this.container.style.minHeight !== t &&
                      (this.log(
                        "Установить высоту проигрывателя: "
                          .concat(this.container.style.minHeight, " -> ")
                          .concat(t)
                      ),
                      (this.container.style.minHeight = t));
                },
              },
              {
                key: "checkVh",
                value: function (t) {
                  return t.indexOf("vh") > -1 ? this.convertVhToPx(t) : t;
                },
              },
              {
                key: "convertVhToPx",
                value: function (t) {
                  return String(
                    Math.round(0.01 * window.innerHeight * parseInt(t))
                  );
                },
              },
              {
                key: "getError",
                value: function (t) {
                  return this.errorCodes[null == t ? void 0 : t.code]
                    ? "[".concat(t.code, "] ") + this.errorCodes[t.code]
                    : t;
                },
              },
              {
                key: "playbackContinuesEvents",
                value: function () {
                  const t = this,
                    e = [
                      "AdPodStarted",
                      "AdRemainingTimeChange",
                      "AdPodVideoFirstQuartile",
                      "AdPodVideoMidpoint",
                      "AdPodVideoThirdQuartile",
                    ],
                    n = function () {
                      const n = e[r];
                      t.adPlaybackController.subscribe(n, (e) => {
                        t.setHeightContainer(),
                          t.sendSignal("playbackContinues", {
                            eventName: n,
                            e,
                            vendor: t.bidderName,
                          });
                      });
                    };
                  for (var r in e) n();
                },
              },
              {
                key: "getState",
                value: function () {
                  let t, e, n;
                  return null !==
                    (t =
                      null === (e = this.adPlaybackController) ||
                      void 0 === e ||
                      null === (n = e.getAdPlayingState) ||
                      void 0 === n
                        ? void 0
                        : n.call(e)) && void 0 !== t
                    ? t
                    : "ready";
                },
              },
              {
                key: "isPlaying",
                value: function () {
                  return "play" === this.getState();
                },
              },
              {
                key: "isPaused",
                value: function () {
                  return "pause" === this.getState();
                },
              },
              {
                key: "isFinished",
                value: function () {
                  return "end" === this.getState();
                },
              },
              {
                key: "onRequestSrcCommand",
                value: function (t) {
                  return this.requestSrc(t.container, t.source, t.bidderName);
                },
              },
              {
                key: "onPauseCommand",
                value: function () {
                  return this.adPlaybackController
                    ? (this.adPlaybackController.pauseAd(), this.isPaused())
                    : (this.err(
                        "При постановке на паузу не инициирован контроллер васт"
                      ),
                      !1);
                },
              },
              {
                key: "onUnpauseCommand",
                value: function () {
                  let t, e;
                  return this.adPlaybackController
                    ? (null ===
                        (t = (e = this.adPlaybackController).resumeAd) ||
                        void 0 === t ||
                        t.call(e),
                      this.isPlaying())
                    : (this.err(
                        "При снятии с паузы не инициирован контроллер васт"
                      ),
                      !1);
                },
              },
              {
                key: "onResetCommand",
                value: function () {
                  return this.reset();
                },
              },
              {
                key: "reset",
                value: function () {
                  let t, e, n;
                  this.adPlaybackController &&
                    (this.adPlaybackController.stopAd(),
                    (this.adPlaybackController = !1)),
                    this.adStore &&
                      (null === (n = this.adStore) ||
                        void 0 === n ||
                        n.destroy(),
                      (this.adStore = !1)),
                    null === (t = this.slot) || void 0 === t || t.remove(),
                    null === (e = this.video) || void 0 === e || e.remove();
                },
              },
            ]),
            (r = [
              {
                key: "init",
                value: function () {
                  const t = "https://yandex.ru/ads/system/adsdk.js";
                  He.useCreativeOnPage &&
                    !document.querySelector("script[src=\"".concat(t, "\"]")) &&
                    W.addTag("script", { src: t, async: !0 });
                },
              },
            ]),
            n && Pe(e.prototype, n),
            r && Pe(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            u
          );
        })(p);
        function Ie(t) {
          return (
            (Ie =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ie(t)
          );
        }
        function Le(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Fe(r.key), r);
          }
        }
        function Ee() {
          return (
            (Ee =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = We(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Ee.apply(this, arguments)
          );
        }
        function Ne(t, e) {
          return (
            (Ne = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Ne(t, e)
          );
        }
        function Be(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = We(t);
            if (e) {
              const o = We(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Ie(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Ae(t);
            })(this, n);
          };
        }
        function Ae(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function We(t) {
          return (
            (We = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            We(t)
          );
        }
        function Me(t, e, n) {
          return (
            (e = Fe(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Fe(t) {
          const e = (function (t, e) {
            if ("object" !== Ie(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Ie(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Ie(e) ? e : String(e);
        }
        var He = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ne(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Be(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              Me(
                Ae((t = o.call.apply(o, [this].concat(n)))),
                "workersFieldName",
                "controllers"
              ),
              Me(Ae(t), "howManyWorkers", "many"),
              Me(Ae(t), "controllers", {
                src: null,
                checkingPlayback: null,
                vastSdk: null,
              }),
              Me(Ae(t), "isInit", !1),
              Me(Ae(t), "sources", []),
              Me(Ae(t), "longLoading", !0),
              Me(Ae(t), "playbackHasStarted", !1),
              Me(Ae(t), "name", "Васт"),
              Me(Ae(t), "style", "color:violet;border-bottom:1px solid #000"),
              t.init(),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "init",
                value: function () {
                  let t, e;
                  if (
                    ((this.constructor.useCreativeOnPage = !0),
                    (this.sources = this.params.vastSrcs),
                    this.setMode(this.creativeManager.type),
                    !this.isInit)
                  ) {
                    (this.isInit = !0),
                      (this.controllers.src = new ce(
                        this.params.vastSrcs,
                        this.playMode
                      ));
                    const n =
                      null === (t = this.params.sizes) || void 0 === t
                        ? void 0
                        : t.height;
                    (isNaN(parseInt(n)) || 0 === parseInt(n)) &&
                      this.err("Не задана высота видеоплейера");
                    const r = {
                      height: null != n ? n : "auto",
                      width:
                        void 0 !==
                        (null === (e = this.params.sizes) || void 0 === e
                          ? void 0
                          : e.width)
                          ? this.params.sizes.width
                          : "100%",
                    };
                    (this.controllers.vastSdk = new Te(this, { params: r })),
                      (this.controllers.checkingPlayback = new ge(this, 5));
                  }
                },
              },
              {
                key: "setMode",
                value: function (t) {
                  const e = { grid: "autoReload", slider: "externalReload" };
                  "string" === typeof e[t]
                    ? (this.playMode = e[t])
                    : this.err(
                        "Не зада режим креатива vast для менеджера креативов: " +
                          t
                      );
                },
              },
              {
                key: "validParams",
                value: function (t) {
                  return (
                    !!Ee(We(i.prototype), "validParams", this).call(this, t) &&
                    (("object" == Ie(t.vastSrcs) && 0 !== t.vastSrcs.length) ||
                      (this.err("Не задан список источников VAST"), !1))
                  );
                },
              },
              {
                key: "canRun",
                value: function () {
                  return (
                    Ee(We(i.prototype), "canRun", this).call(this) &&
                    this.controllers.vastSdk.canRun()
                  );
                },
              },
              {
                key: "run",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  Ee(We(i.prototype), "run", this).call(this, t),
                    this.stateMachine("start", t);
                },
              },
              {
                key: "_Ready_start",
                value: function (t) {
                  t.pauseAfterStart && (this.pauseAfterStart = !0),
                    (this.playbackHasStarted = !1),
                    this.requestNextSrc();
                },
              },
              {
                key: "_Ready_srcFinished",
                value: function (t) {
                  this.sendCommand("stop", {}, "checkingPlayback");
                },
              },
              {
                key: "_Ready_pause",
                value: function () {
                  this.setState("Ready");
                },
              },
              {
                key: "_SrcWaiting_srcLoaded",
                value: function () {
                  this.setState("WaitingFirst"),
                    this.sendCommand(
                      "run",
                      { tooLong: 15 },
                      "checkingPlayback"
                    );
                },
              },
              {
                key: "_SrcWaiting_srcError",
                value: function (t) {
                  this.err(
                    "При запросе источника VAST возникла ошибка: " +
                      t.adErrorEvent.getError()
                  ),
                    this.requestNextSrc();
                },
              },
              {
                key: "_SrcWaiting_pause",
                value: function () {
                  this.stopPlayback(), this.setState("Ready");
                },
              },
              { key: "_SrcWaiting_srcFinished", value: function () {} },
              {
                key: "_WaitingFirst_playbackContinues",
                value: function (t) {
                  this.setState("Playing"),
                    (this.playbackHasStarted = !0),
                    this.sendCommand("stop", {}, "checkingPlayback"),
                    this.sendCommand(
                      "run",
                      { tooLong: 30 },
                      "checkingPlayback"
                    ),
                    this.pauseAfterStart &&
                      ((this.pauseAfterStart = !1),
                      this.onPauseCommand(),
                      "Pause" === this.getState() && (t.hasBeenPaused = !0)),
                    this.sendSignal("play", t, this.creativeId);
                },
              },
              {
                key: "_WaitingFirst_srcFinished",
                value: function (t) {
                  this.onStatePlaybackIsComplete(t);
                },
              },
              { key: "_WaitingFirst_srcLoaded", value: function () {} },
              { key: "_WaitingFirst_start", value: function () {} },
              {
                key: "_WaitingFirst_pause",
                value: function () {
                  this.stopPlayback(), this.setState("Ready");
                },
              },
              {
                key: "_Playing_playbackContinues",
                value: function (t) {
                  this.sendCommand(
                    "check",
                    { eventName: t.eventName },
                    "checkingPlayback"
                  );
                },
              },
              {
                key: "_Playing_srcFinished",
                value: function (t) {
                  this.onStatePlaybackIsComplete(t);
                },
              },
              {
                key: "_Playing_pause",
                value: function () {
                  this.sendCommand("pause", {}, "vastSdk")
                    ? this.setState("Pause")
                    : this.setState("Ready");
                },
              },
              {
                key: "_Pause_srcLoaded",
                value: function () {
                  this.pauseEvents();
                },
              },
              { key: "_Pause_playbackContinues", value: function () {} },
              {
                key: "_Pause_srcFinished",
                value: function () {
                  this.pauseEvents();
                },
              },
              {
                key: "_Pause_unpause",
                value: function () {
                  return this.controllers.vastSdk.isPaused()
                    ? (this.setState("Playing"),
                      (this.playbackHasStarted = !0),
                      this.sendCommand("unpause", {}, "vastSdk"),
                      this.sendCommand(
                        "run",
                        { tooLong: 30 },
                        "checkingPlayback"
                      ),
                      !0)
                    : ((this.playbackHasStarted = !1),
                      this.setState("Ready"),
                      !1);
                },
              },
              {
                key: "getStatus",
                value: function () {
                  switch (this.getState()) {
                    case "Ready":
                      return "Ready";
                    case "SrcWaiting":
                    case "WaitingFirst":
                      return "Loading";
                    case "Playing":
                      return "Play";
                    case "Pause":
                      return "Pause";
                    default:
                      return !1;
                  }
                },
              },
              {
                key: "requestNextSrc",
                value: function () {
                  const t = this.controllers.src.nextSrc();
                  if (!t)
                    return (
                      this.log("Закончился список источников"),
                      this.setState("Ready"),
                      this.sendSignal("stub", {}, this.creativeId),
                      !1
                    );
                  this.setState("SrcWaiting"),
                    this.log(
                      "vast. Запрос источника " +
                        this.controllers.src.getCurrentSrcInfo()
                    );
                  const e = {
                    container: this.container,
                    source: t,
                    bidderName: this.controllers.src.getCurrentSrcName(),
                  };
                  return this.sendCommand("requestSrc", e, "vastSdk"), !0;
                },
              },
              {
                key: "getCurrentBidder",
                value: function () {
                  return this.controllers.src.getCurrentSrcName();
                },
              },
              {
                key: "stopPlayback",
                value: function () {
                  this.sendCommand("stop", {}, "checkingPlayback"),
                    this.sendCommand("reset", {}, "vastSdk");
                },
              },
              {
                key: "onStatePlaybackIsComplete",
                value: function (t) {
                  this.stopPlayback(),
                    "autoReload" === this.playMode
                      ? (this.requestNextSrc(),
                        this.sendSignal(
                          "creativeComplete",
                          {},
                          this.creativeId
                        ))
                      : "externalReload" === this.playMode &&
                        (this.playbackHasStarted
                          ? (this.setState("Ready"),
                            this.sendSignal(
                              "creativeComplete",
                              {},
                              this.creativeId
                            ),
                            (this.playbackHasStarted = !1))
                          : this.requestNextSrc());
                },
              },
              {
                key: "pauseEvents",
                value: function () {
                  this.stopPlayback(),
                    (this.playbackHasStarted = !1),
                    this.setState("Ready");
                },
              },
              {
                key: "hideCreative",
                value: function () {
                  this.container.classList.add("adfinity-hide-vast-creative");
                },
              },
              {
                key: "showCreative",
                value: function () {
                  this.container.classList.remove(
                    "adfinity-hide-vast-creative"
                  );
                },
              },
              {
                key: "onSrcLoadedSignal",
                value: function () {
                  this.stateMachine("srcLoaded");
                },
              },
              {
                key: "onPlaybackIsInterruptedSignal",
                value: function () {
                  this.log(
                    "Источник завис - [" + this.getCurrentBidder() + "]"
                  ),
                    this.stateMachine("srcFinished");
                },
              },
              {
                key: "onPlaybackIsCompleteSignal",
                value: function () {
                  this.log(
                    "Воспроизведение источника завершено - [" +
                      this.getCurrentBidder() +
                      "]"
                  ),
                    this.stateMachine("srcFinished");
                },
              },
              {
                key: "onAdStoppedSignal",
                value: function () {
                  this.log(
                    "Источник неожиданно остановлен - [" +
                      this.getCurrentBidder() +
                      "]"
                  ),
                    this.stateMachine("srcFinished");
                },
              },
              {
                key: "onPlaybackContinuesSignal",
                value: function (t) {
                  this.stateMachine("playbackContinues", t);
                },
              },
              {
                key: "onPauseCommand",
                value: function () {
                  return this.stateMachine("pause");
                },
              },
              {
                key: "onUnpauseCommand",
                value: function (t) {
                  return this.stateMachine("unpause");
                },
              },
              {
                key: "onStopCommand",
                value: function (t) {
                  return this.stopPlayback(), this.setState("Ready"), !0;
                },
              },
              {
                key: "onReloadCommand",
                value: function (t) {
                  return this.requestNextSrc();
                },
              },
            ]),
            (r = [
              {
                key: "initAfter",
                value: function () {
                  Te.init();
                },
              },
            ]),
            n && Le(e.prototype, n),
            r && Le(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function De(t) {
          return (
            (De =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            De(t)
          );
        }
        function Ve(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== De(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== De(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === De(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function ze() {
          return (
            (ze =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = qe(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            ze.apply(this, arguments)
          );
        }
        function Ue(t, e) {
          return (
            (Ue = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Ue(t, e)
          );
        }
        function Ye(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = qe(t);
            if (e) {
              const o = qe(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === De(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function qe(t) {
          return (
            (qe = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            qe(t)
          );
        }
        Me(He, "useCreativeOnPage", !1);
        const Ze = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ue(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Ye(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    !!ze(qe(i.prototype), "run", this).call(this, t) &&
                    (this.params.script_body
                      ? (this.insertScriptBody(this.params.script_body),
                        this.sendSignal("play", {}, this.creativeId))
                      : this.sendSignal("stub", {}, this.creativeId),
                    !0)
                  );
                },
              },
              {
                key: "insertScriptBody",
                value: function (t) {
                  const e = this;
                  this.setInterval(
                    "waitObjectByCss",
                    () => {
                      const n = e.container;
                      n &&
                        (e.stopScheduler("waitObjectByCss"),
                        t.forEach((t) => {
                          W.addTag(
                            t.tag,
                            t.attributes,
                            n,
                            "afterbegin",
                            t.content
                          );
                        }));
                    },
                    50
                  );
                },
              },
              {
                key: "getStatus",
                value: function () {
                  return "Play";
                },
              },
            ]),
            n && Ve(e.prototype, n),
            r && Ve(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function Ge(t) {
          return (
            (Ge =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ge(t)
          );
        }
        function $e(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, nn(r.key), r);
          }
        }
        function Ke() {
          return (
            (Ke =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = tn(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Ke.apply(this, arguments)
          );
        }
        function Xe(t, e) {
          return (
            (Xe = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Xe(t, e)
          );
        }
        function Je(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = tn(t);
            if (e) {
              const o = tn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Ge(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Qe(t);
            })(this, n);
          };
        }
        function Qe(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function tn(t) {
          return (
            (tn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            tn(t)
          );
        }
        function en(t, e, n) {
          return (
            (e = nn(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function nn(t) {
          const e = (function (t, e) {
            if ("object" !== Ge(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Ge(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Ge(e) ? e : String(e);
        }
        const rn = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Xe(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Je(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              en(Qe((n = o.call(this, t, e))), "masterFieldName", "creative"),
              en(Qe(n), "creative", null),
              en(Qe(n), "name", "Moe.Video.Controller"),
              en(
                Qe(n),
                "style",
                "color:rgb(92, 119, 255);border-bottom:1px dashed blue"
              ),
              en(Qe(n), "slotId", void 0),
              en(Qe(n), "container", void 0),
              en(Qe(n), "mvContainer", void 0),
              en(Qe(n), "mvId", void 0),
              en(Qe(n), "active", !0),
              en(Qe(n), "maxLoadCnt", 10),
              n.initManager(t, e),
              n.setSlotId(e.slotId),
              (n.maxLoadCnt = e.maxLoadCnt),
              (n.container = e.container),
              n.run(),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "setSlotId",
                value: function (t) {
                  (t = parseInt(t)),
                    isNaN(t) && this.err("Не задан slotId"),
                    (this.slotId = t),
                    (this.mvId = "mv_" + t);
                },
              },
              {
                key: "run",
                value: function () {
                  (this.state = "Loading"),
                    this.createMvContainer(),
                    this.launchPlayer();
                },
              },
              {
                key: "createMvContainer",
                value: function () {
                  this.mvContainer ||
                    (this.mvContainer = W.addTag(
                      "div",
                      { id: this.mvId },
                      this.container,
                      "afterBegin"
                    ));
                },
              },
              {
                key: "launchPlayer",
                value: function () {
                  let t, e;
                  (t = this.getConfig()),
                    ((e = document.createElement("script")).src =
                      "https://cdn1.moe.video/p/cr.js"),
                    (e.onload = function () {
                      addContentRoll(t);
                    }),
                    document.body.append(e);
                },
              },
              {
                key: "getConfig",
                value: function () {
                  const t = this;
                  return {
                    element: "#" + this.mvId,
                    placement: this.slotId,
                    width: "100%",
                    promo: !0,
                    advertCount: 0,
                    slot: "page",
                    sound: "onclick",
                    deviceMode: "all",
                    background: "none",
                    fly: {
                      mode: "always",
                      animation: "fly",
                      width: 445,
                      closeSecOffset: 5,
                      position: "bottom-right",
                      indent: { left: 0, right: 0, top: 0, bottom: 0 },
                      positionMobile: "bottom",
                    },
                    playerLoad: function () {
                      console.info("----Player Loaded");
                    },
                    adLoad: function () {
                      console.info("----adLoad");
                    },
                    adStart: function () {
                      console.info("----Ad Started"), t.onStart();
                    },
                    adImp: function () {
                      console.info("----Ad Impression");
                    },
                    ad25: function () {
                      console.info("----Ad 25");
                    },
                    ad50: function () {
                      console.info("----Ad 50");
                    },
                    ad75: function () {
                      console.info("----Ad 75");
                    },
                    adCompl: function () {
                      console.info("----Ad Completed"), t.onComplete();
                    },
                    adFinish: function () {
                      console.info("----Ad Finished - Такого быть не должно"),
                        t.err("Ad Finished - Такого быть не должно");
                    },
                    adError: function (e) {
                      (t.cntStarted = 0),
                        console.info("----Ad Error", e),
                        t.onStub();
                    },
                    adEmpty: function (e) {
                      console.info("----Ad Empty", e), t.onStub();
                    },
                    playerClose: function () {
                      console.info("----playerClose"),
                        t.err("Не обработано закрытие плеера");
                    },
                  };
                },
              },
              {
                key: "onStart",
                value: function () {
                  this.active &&
                    ((this.state = "Play"), this.sendSignal("play"));
                },
              },
              {
                key: "onComplete",
                value: function () {
                  this.active &&
                    ((this.state = "Ready"), this.sendSignal("complete"));
                },
              },
              {
                key: "onStub",
                value: function () {
                  this.active && this.sendSignal("stub");
                },
              },
              {
                key: "pause",
                value: function () {
                  (this.state = "Pause"),
                    this.container.classList.add(
                      "adfinity-moevideo-hide-creative"
                    );
                },
              },
              {
                key: "unpause",
                value: function () {
                  (this.state = "Play"),
                    this.container.classList.remove(
                      "adfinity-moevideo-hide-creative"
                    );
                },
              },
              {
                key: "destroy",
                value: function () {
                  Ke(tn(i.prototype), "destroy", this).call(this),
                    this.mvContainer.remove(),
                    (this.active = !1);
                },
              },
            ]) && $e(e.prototype, n),
            r && $e(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function on(t) {
          return (
            (on =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            on(t)
          );
        }
        function an(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, yn(r.key), r);
          }
        }
        function un() {
          return (
            (un =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = fn(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            un.apply(this, arguments)
          );
        }
        function sn(t, e) {
          return (
            (sn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            sn(t, e)
          );
        }
        function cn(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = fn(t);
            if (e) {
              const o = fn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === on(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return ln(t);
            })(this, n);
          };
        }
        function ln(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function fn(t) {
          return (
            (fn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            fn(t)
          );
        }
        function dn(t, e, n) {
          return (
            (e = yn(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function yn(t) {
          const e = (function (t, e) {
            if ("object" !== on(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== on(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === on(e) ? e : String(e);
        }
        const hn = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && sn(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = cn(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              dn(
                ln((t = o.call.apply(o, [this].concat(n)))),
                "howManyWorkers",
                "one"
              ),
              dn(ln(t), "workersFieldName", "controller"),
              dn(ln(t), "controller", null),
              dn(ln(t), "broadcastPercentage", !0),
              dn(ln(t), "longLoading", !0),
              dn(ln(t), "name", "Moe.Video"),
              dn(
                ln(t),
                "style",
                "color:rgb(92, 119, 255);border-bottom:1px solid #000"
              ),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    this.createController(),
                    this.showCreative(),
                    this.setState("Loading"),
                    this.setPlaceholder(),
                    un(fn(i.prototype), "run", this).call(this, t)
                  );
                },
              },
              {
                key: "createController",
                value: function () {
                  let t,
                    e,
                    n,
                    r = parseInt(
                      null === (t = this.params.slots) ||
                        void 0 === t ||
                        null === (e = t.moevideo) ||
                        void 0 === e
                        ? void 0
                        : e.slot_id
                    ),
                    o = parseInt(
                      null === (n = this.params.params) || void 0 === n
                        ? void 0
                        : n.maxLoadCnt
                    );
                  (o = isNaN(o) || o <= 0 ? 10 : o),
                    (o = "autoReload" === this.getPlayMode() ? 0 : o);
                  const i = {
                    container: this.container,
                    slotId: r,
                    params: this.params.params,
                    maxLoadCnt: o,
                  };
                  this.controller = new rn(this, i);
                },
              },
              {
                key: "destroyController",
                value: function () {
                  let t;
                  null === (t = this.controller) || void 0 === t || t.destroy(),
                    (this.controller = null);
                },
              },
              {
                key: "getStatus",
                value: function () {
                  return this.getState();
                },
              },
              {
                key: "setPlaceholder",
                value: function () {
                  this.container.classList.add("adfox_placeholder");
                },
              },
              {
                key: "removePlaceholder",
                value: function () {
                  this.container.classList.remove("adfox_placeholder");
                },
              },
              {
                key: "onPlaySignal",
                value: function () {
                  const t = this.getState();
                  (this.isRun = !0),
                    this.setState("Play"),
                    this.removePlaceholder(),
                    "Loading" === t
                      ? this.sendSignal("play", {}, this.creativeId)
                      : this.err("Получен сигнал Play в состоянии " + t);
                },
              },
              {
                key: "onStubSignal",
                value: function () {
                  const t = this.getState();
                  (this.isRun = !1),
                    this.setState("Ready"),
                    "Loading" !== t &&
                      this.err("Получен сигнал Stub в состоянии " + t),
                    this.sendSignal("stub", {}, this.creativeId),
                    this.setPlaceholder(),
                    "externalReload" === this.getPlayMode() &&
                      this.destroyController();
                },
              },
              {
                key: "onCompleteSignal",
                value: function () {
                  const t = this.getState();
                  (this.isRun = !1),
                    this.setState("Ready"),
                    this.setPlaceholder(),
                    "externalReload" === this.getPlayMode() &&
                      this.destroyController(),
                    "Play" !== t &&
                      this.err("Получен сигнал Complete в состоянии " + t),
                    this.sendSignal("creativeComplete", {}, this.creativeId);
                },
              },
              {
                key: "onStopCommand",
                value: function (t) {
                  return this.destroyController(), this.setState("Ready"), !0;
                },
              },
              {
                key: "onPauseCommand",
                value: function (t) {
                  let e;
                  return (
                    null === (e = this.controller) || void 0 === e || e.pause(),
                    this.setState("Pause"),
                    !0
                  );
                },
              },
              {
                key: "onUnpauseCommand",
                value: function (t) {
                  let e;
                  null === (e = this.controller) || void 0 === e || e.unpause(),
                    this.setState("Play");
                },
              },
              {
                key: "onReloadCommand",
                value: function (t) {
                  if ("externalReload" === this.getPlayMode())
                    return this.destroyController(), this.run();
                },
              },
              {
                key: "destroy",
                value: function () {
                  un(fn(i.prototype), "destroy", this).call(this),
                    this.destroyController();
                },
              },
            ]),
            n && an(e.prototype, n),
            r && an(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function pn(t) {
          return (
            (pn =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            pn(t)
          );
        }
        function vn(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              let n =
                null == t
                  ? null
                  : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                let r,
                  o,
                  i,
                  a,
                  u = [],
                  s = !0,
                  c = !1;
                try {
                  if (((i = (n = n.call(t)).next), 0 === e)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = i.call(n)).done) &&
                      (u.push(r.value), u.length !== e);
                      s = !0
                    );
                } catch (t) {
                  (c = !0), (o = t);
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (c) throw o;
                  }
                }
                return u;
              }
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return bn(t, e);
              let n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return bn(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function bn(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function mn(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Cn(r.key), r);
          }
        }
        function gn() {
          return (
            (gn =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Pn(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            gn.apply(this, arguments)
          );
        }
        function wn(t, e) {
          return (
            (wn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            wn(t, e)
          );
        }
        function Sn(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Pn(t);
            if (e) {
              const o = Pn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === pn(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return kn(t);
            })(this, n);
          };
        }
        function kn(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Pn(t) {
          return (
            (Pn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Pn(t)
          );
        }
        function On(t, e, n) {
          return (
            (e = Cn(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Cn(t) {
          const e = (function (t, e) {
            if ("object" !== pn(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== pn(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === pn(e) ? e : String(e);
        }
        const jn = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && wn(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Sn(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              On(kn((n = o.call(this, t, e))), "masterFieldName", "creative"),
              On(kn(n), "creative", null),
              On(kn(n), "name", "Moe.Video.Controller"),
              On(
                kn(n),
                "style",
                "color:rgb(92, 119, 255);border-bottom:1px dashed blue"
              ),
              On(kn(n), "slotId", void 0),
              On(kn(n), "container", void 0),
              On(kn(n), "mvContainer", void 0),
              On(kn(n), "mvId", void 0),
              On(kn(n), "script", void 0),
              On(kn(n), "hasPlayerLaunched", !1),
              On(kn(n), "loadCnt", 0),
              On(kn(n), "maxLoadCnt", 10),
              On(kn(n), "width", 300),
              On(kn(n), "height", 600),
              n.initManager(t, e),
              n.setContainer(e.container),
              n.setSlotId(e.slotId),
              (n.maxLoadCnt = e.maxLoadCnt),
              n.setSize(e.size),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "setContainer",
                value: function (t) {
                  this.container = t;
                },
              },
              {
                key: "setSlotId",
                value: function (t) {
                  (t = parseInt(t)),
                    isNaN(t) && this.err("Не задан slotId"),
                    (this.slotId = t),
                    (this.mvId =
                      "mv_" + t + Math.random().toString(36).substr(2));
                },
              },
              {
                key: "setSize",
                value: function (t) {
                  let e,
                    n,
                    r = vn(t.split("x"), 2);
                  (e = r[0]),
                    (n = r[1]),
                    (e = parseInt(e)),
                    (n = parseInt(n)),
                    isNaN(e) || isNaN(n)
                      ? this.err("Не верно заданы размеры")
                      : ((this.width = e), (this.height = n));
                },
              },
              {
                key: "run",
                value: function () {
                  (this.state = "Loading"),
                    this.createMvContainer(),
                    this.launchPlayer();
                },
              },
              {
                key: "createMvContainer",
                value: function () {
                  (this.mvContainer = W.addTag(
                    "div",
                    { id: this.mvId },
                    this.container,
                    "afterBegin"
                  )),
                    this.mvContainer.classList.add(
                      "adfinity-moevide-banner-creative"
                    );
                },
              },
              {
                key: "launchPlayer",
                value: function () {
                  const t = this.getConfig();
                  this.script = (function (t) {
                    const e = document.createElement("script");
                    return (
                      (e.src = "https://cdn1.moe.video/p/b.js"),
                      (e.onload = function () {
                        return addBanner(t);
                      }),
                      document.body.append(e),
                      e
                    );
                  })(t);
                },
              },
              {
                key: "getConfig",
                value: function () {
                  const t = this;
                  return {
                    element: "#" + this.mvId,
                    placement: this.slotId,
                    width: this.width + "px",
                    height: this.height + "px",
                    advertCount: this.maxLoadCnt,
                    background: "none",
                    deviceMode: "all",
                    adLoad: function () {
                      console.info("Ad Loaded");
                    },
                    adStart: function () {
                      console.info("Ad Started"), t.onStart();
                    },
                    adEmpty: function () {
                      console.error("Ad Empty"), t.onStub();
                    },
                    adImp: function () {
                      console.info("Ad Imp");
                    },
                    adFinish: function () {
                      console.info("Ad Fin"), t.onComplete();
                    },
                    adError: function (e) {
                      console.error("Ad Err", e), t.onStub();
                    },
                  };
                },
              },
              {
                key: "onStart",
                value: function () {
                  (this.state = "Play"), this.sendSignal("play");
                },
              },
              {
                key: "onComplete",
                value: function () {
                  (this.state = "Ready"),
                    (this.mvContainer.innerHTML = ""),
                    this.sendSignal("complete");
                },
              },
              {
                key: "onStub",
                value: function () {
                  this.sendSignal("stub");
                },
              },
              {
                key: "destroy",
                value: function () {
                  gn(Pn(i.prototype), "destroy", this).call(this),
                    this.mvContainer.remove(),
                    this.script.remove();
                },
              },
            ]) && mn(e.prototype, n),
            r && mn(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function Rn(t) {
          return (
            (Rn =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Rn(t)
          );
        }
        function _n(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Bn(r.key), r);
          }
        }
        function xn() {
          return (
            (xn =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = En(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            xn.apply(this, arguments)
          );
        }
        function Tn(t, e) {
          return (
            (Tn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Tn(t, e)
          );
        }
        function In(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = En(t);
            if (e) {
              const o = En(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Rn(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Ln(t);
            })(this, n);
          };
        }
        function Ln(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function En(t) {
          return (
            (En = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            En(t)
          );
        }
        function Nn(t, e, n) {
          return (
            (e = Bn(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Bn(t) {
          const e = (function (t, e) {
            if ("object" !== Rn(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Rn(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Rn(e) ? e : String(e);
        }
        const An = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Tn(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = In(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              Nn(
                Ln((t = o.call.apply(o, [this].concat(n)))),
                "howManyWorkers",
                "one"
              ),
              Nn(Ln(t), "workersFieldName", "controller"),
              Nn(Ln(t), "controller", null),
              Nn(Ln(t), "name", "Moe.Video"),
              Nn(
                Ln(t),
                "style",
                "color:rgb(92, 119, 255);border-bottom:1px solid #000"
              ),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  let t,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return (
                    null === (t = this.controller) ||
                      void 0 === t ||
                      t.destroy(),
                    this.setState("Loading"),
                    this.loadController(),
                    this.controller.run(),
                    xn(En(i.prototype), "run", this).call(this, e)
                  );
                },
              },
              {
                key: "loadController",
                value: function () {
                  let t,
                    e,
                    n,
                    r,
                    o = parseInt(
                      null === (t = this.params.slots) ||
                        void 0 === t ||
                        null === (e = t.moevideo) ||
                        void 0 === e
                        ? void 0
                        : e.slot_id
                    ),
                    i = parseInt(
                      null === (n = this.params.params) || void 0 === n
                        ? void 0
                        : n.maxLoadCnt
                    );
                  (i = isNaN(i) || i <= 0 ? 10 : i),
                    (i = "autoReload" === this.playMode ? 0 : i);
                  const a =
                      null === (r = this.params.params) || void 0 === r
                        ? void 0
                        : r.size,
                    u = {
                      container: this.container,
                      slotId: o,
                      params: this.params.params,
                      maxLoadCnt: i,
                      size: a,
                    };
                  this.controller = new jn(this, u);
                },
              },
              {
                key: "getStatus",
                value: function () {
                  return this.getState();
                },
              },
              {
                key: "getLastFrameLost",
                value: function () {
                  return !0;
                },
              },
              {
                key: "onPlaySignal",
                value: function () {
                  const t = this.getState();
                  (this.isRun = !0),
                    this.setState("Play"),
                    "Loading" === t
                      ? this.sendSignal("play", {}, this.creativeId)
                      : "Play" !== t &&
                        this.err("Получен сигнал Play в состоянии " + t);
                },
              },
              {
                key: "onStubSignal",
                value: function () {
                  const t = this.getState();
                  (this.isRun = !1),
                    this.setState("Ready"),
                    "Loading" !== t &&
                      this.err("Получен сигнал Stub в состоянии " + t),
                    this.sendSignal("stub", {}, this.creativeId),
                    "autoReload" === this.getPlayMode() && this.run();
                },
              },
              {
                key: "onCompleteSignal",
                value: function () {
                  const t = this.getState();
                  (this.isRun = !1),
                    this.setState("Ready"),
                    "Play" !== t &&
                      this.err("Получен сигнал Complete в состоянии " + t),
                    this.sendSignal("creativeComplete", {}, this.creativeId);
                },
              },
              {
                key: "onStopCommand",
                value: function (t) {
                  let e;
                  return (
                    this.setState("Ready"),
                    null === (e = this.controller) ||
                      void 0 === e ||
                      e.destroy(),
                    !0
                  );
                },
              },
              {
                key: "onPauseCommand",
                value: function (t) {
                  return this.setState("Pause"), !0;
                },
              },
              {
                key: "onUnpauseCommand",
                value: function (t) {
                  return "Play" === this.getState() || this.run();
                },
              },
              {
                key: "onReloadCommand",
                value: function (t) {
                  return this.run();
                },
              },
            ]),
            n && _n(e.prototype, n),
            r && _n(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(B);
        function Wn(t) {
          return (
            (Wn =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Wn(t)
          );
        }
        function Mn(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Un(r.key), r);
          }
        }
        function Fn(t, e) {
          return (
            (Fn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Fn(t, e)
          );
        }
        function Hn(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Vn(t);
            if (e) {
              const o = Vn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Wn(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Dn(t);
            })(this, n);
          };
        }
        function Dn(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Vn(t) {
          return (
            (Vn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Vn(t)
          );
        }
        function zn(t, e, n) {
          return (
            (e = Un(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Un(t) {
          const e = (function (t, e) {
            if ("object" !== Wn(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Wn(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Wn(e) ? e : String(e);
        }
        const Yn = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Fn(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Hn(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              zn(Dn((n = o.call(this, t, e))), "masterFieldName", "creative"),
              zn(Dn(n), "creative", null),
              zn(Dn(n), "name", "VKInPage.Controller"),
              zn(Dn(n), "style", "color:#2d81e0;border-bottom:1px dashed blue"),
              zn(Dn(n), "slotId", void 0),
              zn(Dn(n), "container", void 0),
              zn(Dn(n), "vkContainer", void 0),
              zn(Dn(n), "sizes", {}),
              zn(Dn(n), "libSrc", "https://ad.mail.ru/static/vk-adman.js"),
              n.initManager(t, e),
              n.setSlotId(e.slotId),
              (n.sizes = e.sizes),
              n.loadLib(),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "setContainer",
                value: function (t) {
                  this.container = t;
                },
              },
              {
                key: "setSlotId",
                value: function (t) {
                  (t = parseInt(t)),
                    isNaN(t) && this.err("Не задан slotId"),
                    (this.slotId = t),
                    (this.vkId = "vk_" + t);
                },
              },
              {
                key: "loadLib",
                value: function () {
                  document.querySelector(
                    "script[src*=\"".concat(this.libSrc, "\"]")
                  ) ||
                    (function (t, e, n, r, o, i, a, u) {
                      ((a = e.createElement(n)).src = r),
                        (a.async = !0),
                        (u =
                          e.getElementsByTagName(n)[0]).parentNode.insertBefore(
                          a,
                          u
                        );
                      for (
                        let s = function () {
                            this.push(Array.prototype.slice.apply(arguments));
                          },
                          c = i.length;
                        c--;

                      )
                        t[o[c]] = s.bind((t[i[c]] = []));
                    })(
                      window,
                      document,
                      "script",
                      this.libSrc,
                      ["AdManPlayer", "AdManSDK"],
                      ["_AdManPlayerInit", "_AdManSDKInit"]
                    );
                },
              },
              {
                key: "isLibLoaded",
                value: function () {
                  return !!document.querySelector(
                    "script[src*=\"".concat(this.libSrc, "\"]")
                  );
                },
              },
              {
                key: "canRun",
                value: function () {
                  return this.isLibLoaded();
                },
              },
              {
                key: "run",
                value: function () {
                  (this.state = "Loading"),
                    this.createVkContainer(),
                    this.launchPlayer();
                },
              },
              {
                key: "createVkContainer",
                value: function () {
                  this.vkContainer
                    ? (this.vkContainer.innerHTML = "")
                    : ((this.vkContainer = W.addTag(
                        "div",
                        { id: this.vkId },
                        this.container,
                        "afterBegin"
                      )),
                      (this.vkContainer.style.height = this.sizes.height));
                },
              },
              {
                key: "launchPlayer",
                value: function () {
                  "function" === typeof window.AdManPlayer
                    ? window.AdManPlayer(this.getConfig())
                    : this.err("Нет AdManPlayer");
                },
              },
              {
                key: "getConfig",
                value: function () {
                  const t = this;
                  return {
                    container: "#" + this.vkId,
                    slot: this.slotId,
                    iframe: !!this.params.iframe,
                    onReady: function () {
                      t.log("AdMan ready"), t.onReady();
                    },
                    onError: function (e) {
                      t.log("AdMan error:", null, [], e), t.onStub();
                    },
                    onStarted: function (e) {
                      t.log("AdMan started", null, [], e);
                    },
                    onPlayed: function () {
                      t.log("AdMan played");
                    },
                    onCompleted: function () {
                      t.log("AdMan completed"), t.onComplete();
                    },
                    onPaused: function () {
                      t.log("AdMan paused"), t.onComplete();
                    },
                    onSkipped: function () {
                      t.log("AdMan skipped");
                    },
                    onClosed: function () {
                      t.err("Не обработано закрытие плеера");
                    },
                    onClicked: function (e) {
                      t.log("AdMan clicked", null, [], e);
                    },
                  };
                },
              },
              {
                key: "onReady",
                value: function () {
                  (this.state = "Play"), this.sendSignal("ready");
                },
              },
              {
                key: "onComplete",
                value: function () {
                  (this.state = "Ready"), this.sendSignal("complete");
                },
              },
              {
                key: "onStub",
                value: function () {
                  (this.state = "Ready"), this.sendSignal("stub");
                },
              },
            ]),
            n && Mn(e.prototype, n),
            r && Mn(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function qn(t) {
          return (
            (qn =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            qn(t)
          );
        }
        function Zn(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, tr(r.key), r);
          }
        }
        function Gn() {
          return (
            (Gn =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Jn(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Gn.apply(this, arguments)
          );
        }
        function $n(t, e) {
          return (
            ($n = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            $n(t, e)
          );
        }
        function Kn(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Jn(t);
            if (e) {
              const o = Jn(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === qn(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Xn(t);
            })(this, n);
          };
        }
        function Xn(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Jn(t) {
          return (
            (Jn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Jn(t)
          );
        }
        function Qn(t, e, n) {
          return (
            (e = tr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function tr(t) {
          const e = (function (t, e) {
            if ("object" !== qn(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== qn(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === qn(e) ? e : String(e);
        }
        const er = {
          creatives: {
            _empty: B,
            adfox: mt,
            experiment: Ct,
            experimentBlock: Ze,
            descktopFullscreen: Vt,
            astralab: Gt,
            moevideo: oe,
            moevideoInPage: hn,
            moevideoBanner: An,
            vast: He,
            vkInPage: (function (t) {
              !(function (t, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && $n(t, e);
              })(i, t);
              let e,
                n,
                r,
                o = Kn(i);
              function i() {
                let t, e, n;
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, a = new Array(r), u = 0;
                  u < r;
                  u++
                )
                  a[u] = arguments[u];
                Qn(
                  Xn((n = o.call.apply(o, [this].concat(a)))),
                  "howManyWorkers",
                  "one"
                ),
                  Qn(Xn(n), "workersFieldName", "controller"),
                  Qn(Xn(n), "controller", null),
                  Qn(Xn(n), "broadcastPercentage", !0),
                  Qn(Xn(n), "longLoading", !0),
                  Qn(Xn(n), "name", "VK InPage"),
                  Qn(
                    Xn(n),
                    "style",
                    "color:#2d81e0;border-bottom:1px solid #000"
                  );
                const s = {
                  slotId: parseInt(
                    null === (t = n.params.slots) ||
                      void 0 === t ||
                      null === (e = t.mytarget) ||
                      void 0 === e
                      ? void 0
                      : e.slot_id
                  ),
                  params: n.params.params,
                  sizes: n.params.sizes,
                };
                return (n.controller = new Yn(Xn(n), s)), n;
              }
              return (
                (e = i),
                (n = [
                  {
                    key: "setContainer",
                    value: function (t) {
                      Gn(Jn(i.prototype), "setContainer", this).call(this, t),
                        this.controller.setContainer(t);
                    },
                  },
                  {
                    key: "canRun",
                    value: function () {
                      let t;
                      return (
                        Gn(Jn(i.prototype), "canRun", this).call(this) &&
                        (null === (t = this.controller) || void 0 === t
                          ? void 0
                          : t.canRun())
                      );
                    },
                  },
                  {
                    key: "run",
                    value: function () {
                      const t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return (
                        this.controller.run(),
                        this.setState("Loading"),
                        Gn(Jn(i.prototype), "run", this).call(this, t)
                      );
                    },
                  },
                  {
                    key: "getStatus",
                    value: function () {
                      return this.getState();
                    },
                  },
                  {
                    key: "onReadySignal",
                    value: function () {
                      const t = this.getState();
                      (this.isRun = !0),
                        this.setState("Play"),
                        "Loading" === t
                          ? this.sendSignal("play", {}, this.creativeId)
                          : this.err("Получен сигнал Play в состоянии " + t);
                    },
                  },
                  {
                    key: "onStubSignal",
                    value: function () {
                      const t = this.getState();
                      (this.isRun = !1),
                        this.setState("Ready"),
                        "Loading" !== t &&
                          this.err("Получен сигнал Stub в состоянии " + t),
                        this.sendSignal("stub", {}, this.creativeId),
                        "autoReload" === this.getPlayMode() && this.run();
                    },
                  },
                  {
                    key: "onCompleteSignal",
                    value: function () {
                      const t = this.getState();
                      (this.isRun = !1),
                        this.setState("Ready"),
                        this.getPlayMode(),
                        "Play" !== t &&
                          this.err("Получен сигнал Complete в состоянии " + t),
                        this.sendSignal(
                          "creativeComplete",
                          {},
                          this.creativeId
                        ),
                        "autoReload" === this.getPlayMode() && this.run();
                    },
                  },
                  {
                    key: "onStopCommand",
                    value: function (t) {
                      return this.hideCreative(), this.setState("Ready"), !0;
                    },
                  },
                  {
                    key: "onPauseCommand",
                    value: function (t) {
                      return this.hideCreative(), this.setState("Pause"), !0;
                    },
                  },
                  { key: "onUnpauseCommand", value: function (t) {} },
                  {
                    key: "onReloadCommand",
                    value: function (t) {
                      return this.run();
                    },
                  },
                ]),
                n && Zn(e.prototype, n),
                r && Zn(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                i
              );
            })(B),
            vox: Lt,
          },
          create: function (t, e, n) {
            let r,
              o = e.type;
            return (
              "function" === typeof this.creatives[o]
                ? (r = new this.creatives[o](t, e, n))
                : ((r = null), console.error("Нет креатива " + o)),
              r
            );
          },
          initBefore: function (t) {
            for (const e in this.creatives) {
              var n, r;
              null === (n = (r = this.creatives[e]).initBefore) ||
                void 0 === n ||
                n.call(r, t[e]);
            }
          },
          initAfter: function (t) {
            for (const e in this.creatives) {
              var n, r;
              null === (n = (r = this.creatives[e]).initAfter) ||
                void 0 === n ||
                n.call(r, t[e]);
            }
          },
        };
        function nr(t) {
          return (
            (nr =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            nr(t)
          );
        }
        function rr(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, lr(r.key), r);
          }
        }
        function or() {
          return (
            (or =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = sr(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            or.apply(this, arguments)
          );
        }
        function ir(t, e) {
          return (
            (ir = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            ir(t, e)
          );
        }
        function ar(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = sr(t);
            if (e) {
              const o = sr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === nr(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return ur(t);
            })(this, n);
          };
        }
        function ur(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function sr(t) {
          return (
            (sr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            sr(t)
          );
        }
        function cr(t, e, n) {
          return (
            (e = lr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function lr(t) {
          const e = (function (t, e) {
            if ("object" !== nr(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== nr(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === nr(e) ? e : String(e);
        }
        const fr = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ir(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = ar(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              cr(ur((n = o.call(this, t, e))), "masterFieldName", "format"),
              cr(ur(n), "workersFieldName", "creatives"),
              cr(ur(n), "format", null),
              cr(ur(n), "body", null),
              cr(ur(n), "bodySize", {}),
              cr(ur(n), "disableLazyLoad", !1),
              cr(ur(n), "creatives", {}),
              cr(ur(n), "creativeSettingsById", {}),
              cr(ur(n), "howManyWorkers", "many"),
              cr(ur(n), "resizeCreativesObserver", null),
              n.initManager(t, e),
              (n.bodySize = e.bodySize),
              (n.disableLazyLoad = e.disableLazyLoad),
              n.loadCreativeSettings(),
              n.loadWorkers(e.creatives),
              n.initResizeCreativesObserver(),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "loadCreativeSettings",
                value: function () {
                  for (const t in this.params.setCreatives) {
                    const e = this.params.setCreatives[t];
                    this.creativeSettingsById[e.id] = e;
                  }
                },
              },
              {
                key: "loadWorker",
                value: function (t, e, n) {
                  return (
                    (e.params.lazyLoad = this.getLazyLoadParams()),
                    er.create(t, e, n)
                  );
                },
              },
              {
                key: "initResizeCreativesObserver",
                value: function () {
                  const t = this;
                  this.resizeCreativesObserver = new ResizeObserver((e) => {
                    e.forEach((e) => {
                      const n = e.target.dataset.adfinityCreativeId,
                        r = e.contentRect.width,
                        o = e.contentRect.height;
                      t.onCreativeResize(n, r, o);
                    });
                  });
                },
              },
              { key: "onCreativeResize", value: function (t, e, n) {} },
              {
                key: "addToPage",
                value: function () {
                  const t = {};
                  for (const e in this.creatives) {
                    var n,
                      r,
                      o,
                      i =
                        null !==
                          (n =
                            null === (r = (o = this.creatives[e]).addToPage) ||
                            void 0 === r
                              ? void 0
                              : r.call(o)) && void 0 !== n
                          ? n
                          : {};
                    for (const a in i) t[a] = i[a];
                  }
                  return t;
                },
              },
              {
                key: "canRun",
                value: function () {
                  for (const t in this.creatives) {
                    var e, n;
                    if (
                      null === (e = (n = this.creatives[t]).canRun) ||
                      void 0 === e ||
                      !e.call(n)
                    )
                      return !1;
                  }
                  return !0;
                },
              },
              {
                key: "setBody",
                value: function (t) {
                  this.body = t;
                },
              },
              {
                key: "createContainers",
                value: function () {
                  if (this.body)
                    for (const t in (this.body.insertAdjacentHTML(
                      "afterbegin",
                      this.htmlContainers()
                    ),
                    this.creatives)) {
                      let e = this.body.querySelector(
                        "[data-adfinity-creative-id=\"".concat(t, "\"]")
                      );
                      (e = this.setStyleCreativesContainers(e)),
                        this.resizeCreativesObserver.observe(e),
                        this.creatives[t].setContainer(e);
                    }
                },
              },
              {
                key: "setStyleCreativesContainers",
                value: function (t) {
                  return t;
                },
              },
              {
                key: "htmlContainers",
                value: function () {
                  let t = "";
                  for (const e in this.creatives)
                    t +=
                      "<div class=\"adfinity-container\" data-adfinity-creative-id=\""
                        .concat(e, "\" data-adfinity-creative-type=\"")
                        .concat(this.creatives[e].type, "\"></div>");
                  return t;
                },
              },
              {
                key: "launch",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  for (const e in this.creatives) this.creatives[e].run(t);
                  return !0;
                },
              },
              {
                key: "getCreativeSettings",
                value: function (t) {
                  let e;
                  return null !== (e = this.params.setCreatives[t]) &&
                    void 0 !== e
                    ? e
                    : null;
                },
              },
              {
                key: "getCreativeSettingsById",
                value: function (t) {
                  let e;
                  return null !== (e = this.creativeSettingsById[t]) &&
                    void 0 !== e
                    ? e
                    : null;
                },
              },
              {
                key: "toShowPlaceholder",
                value: function () {
                  let t;
                  return null === (t = this.format) || void 0 === t
                    ? void 0
                    : t.toShowPlaceholder();
                },
              },
              {
                key: "launchWaitingForLazyLoadingZone",
                value: function () {
                  const t = this;
                  this.setInterval(
                    "WaitingForLazyLoadingZone",
                    () => {
                      t.isInLazyLoadingZone() &&
                        t.stateMachine("appearedInLazyLoadingZone");
                    },
                    50
                  );
                },
              },
              {
                key: "stopWaitingForLazyLoadingZone",
                value: function () {
                  this.stopScheduler("WaitingForLazyLoadingZone");
                },
              },
              {
                key: "isInLazyLoadingZone",
                value: function () {
                  if (!this.body) return !1;
                  let t = window.innerHeight,
                    e = this.getLazyLoadParams(),
                    n = e.fetchMargin,
                    r = e.mobileScaling,
                    o = e.mobileWidth,
                    i = Math.round((t * n) / 100);
                  window.innerWidth <= o && (i = Math.round(i * r));
                  const a = this.body.getBoundingClientRect();
                  return a.top <= t + i && a.bottom >= -i;
                },
              },
              {
                key: "getLazyLoadParams",
                value: function () {
                  let t, e, n, r, o, i;
                  return {
                    fetchMargin: this.checkingLazyLoadParams(
                      null === (t = this.params) ||
                        void 0 === t ||
                        null === (e = t.options) ||
                        void 0 === e
                        ? void 0
                        : e.fetchMargin,
                      150
                    ),
                    mobileScaling: this.checkingLazyLoadParams(
                      null === (n = this.params) ||
                        void 0 === n ||
                        null === (r = n.options) ||
                        void 0 === r
                        ? void 0
                        : r.mobileScaling,
                      1.5,
                      !1
                    ),
                    mobileWidth: this.checkingLazyLoadParams(
                      null === (o = this.params) ||
                        void 0 === o ||
                        null === (i = o.options) ||
                        void 0 === i
                        ? void 0
                        : i.mobileWidth,
                      480
                    ),
                  };
                },
              },
              {
                key: "checkingLazyLoadParams",
                value: function (t, e) {
                  const n =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2];
                  return void 0 === t ||
                    null == t ||
                    (!0 === n ? parseInt(t) <= 0 : parseFloat(t) <= 0)
                    ? e
                    : n
                      ? parseInt(t)
                      : parseFloat(t);
                },
              },
              {
                key: "isInViewport",
                value: function () {
                  if (!this.body) return !1;
                  const t = this.body.getBoundingClientRect();
                  return t.top <= window.innerHeight && t.bottom >= 0;
                },
              },
              {
                key: "launchWaitingForViewport",
                value: function () {
                  const t = this;
                  this.setInterval(
                    "WaitingForViewport",
                    () => {
                      t.isInViewport() && t.stateMachine("appearedInViewport");
                    },
                    50
                  );
                },
              },
              {
                key: "stopWaitingForViewport",
                value: function () {
                  this.stopScheduler("WaitingForViewport");
                },
              },
              {
                key: "onPauseWorkCommand",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "onUnpauseWorkCommand",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "onPlaySignal",
                value: function (t, e) {
                  return !0;
                },
              },
              {
                key: "onStubSignal",
                value: function (t, e) {
                  return !0;
                },
              },
              {
                key: "onCreativeCompleteSignal",
                value: function (t, e) {
                  return !0;
                },
              },
              {
                key: "onPercentTimelineSignal",
                value: function (t, e) {
                  return !0;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.resizeCreativesObserver.disconnect(),
                    or(sr(i.prototype), "destroy", this).call(this);
                },
              },
            ]),
            n && rr(e.prototype, n),
            r && rr(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function dr(t) {
          return (
            (dr =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            dr(t)
          );
        }
        function yr(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, wr(r.key), r);
          }
        }
        function hr() {
          return (
            (hr =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = mr(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            hr.apply(this, arguments)
          );
        }
        function pr(t, e) {
          return (
            (pr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            pr(t, e)
          );
        }
        function vr(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = mr(t);
            if (e) {
              const o = mr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === dr(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return br(t);
            })(this, n);
          };
        }
        function br(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function mr(t) {
          return (
            (mr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            mr(t)
          );
        }
        function gr(t, e, n) {
          return (
            (e = wr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function wr(t) {
          const e = (function (t, e) {
            if ("object" !== dr(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== dr(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === dr(e) ? e : String(e);
        }
        function Sr(t) {
          return (
            (Sr =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Sr(t)
          );
        }
        function kr(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, xr(r.key), r);
          }
        }
        function Pr() {
          return (
            (Pr =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Rr(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Pr.apply(this, arguments)
          );
        }
        function Or(t, e) {
          return (
            (Or = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Or(t, e)
          );
        }
        function Cr(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Rr(t);
            if (e) {
              const o = Rr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Sr(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return jr(t);
            })(this, n);
          };
        }
        function jr(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Rr(t) {
          return (
            (Rr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Rr(t)
          );
        }
        function _r(t, e, n) {
          return (
            (e = xr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function xr(t) {
          const e = (function (t, e) {
            if ("object" !== Sr(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Sr(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Sr(e) ? e : String(e);
        }
        function Tr(t) {
          return (
            (Tr =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Tr(t)
          );
        }
        function Ir(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Tr(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== Tr(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Tr(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function Lr(t, e) {
          return (
            (Lr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Lr(t, e)
          );
        }
        function Er(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Nr(t);
            if (e) {
              const o = Nr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Tr(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function Nr(t) {
          return (
            (Nr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Nr(t)
          );
        }
        const Br = {
          creativeManagers: {
            grid: (function (t) {
              !(function (t, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && pr(t, e);
              })(i, t);
              let e,
                n,
                r,
                o = vr(i);
              function i() {
                let t;
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return (
                  gr(
                    br((t = o.call.apply(o, [this].concat(n)))),
                    "gridWidth",
                    t.format.params.width
                      ? t.format.params.width
                      : window.innerWidth
                  ),
                  gr(
                    br(t),
                    "gridHeight",
                    t.format.params.height ? t.format.params.height : null
                  ),
                  gr(
                    br(t),
                    "gridHeightUnits",
                    t.format.params.unitsMeasurement
                      ? t.format.params.unitsMeasurement
                      : "px"
                  ),
                  gr(
                    br(t),
                    "gridTypeWidth",
                    t.params.options.typeWidth
                      ? t.params.options.typeWidth
                      : "px"
                  ),
                  gr(
                    br(t),
                    "gridTypeHeight",
                    t.params.options.typeHeight
                      ? t.params.options.typeHeight
                      : "px"
                  ),
                  gr(
                    br(t),
                    "gridContainerWidth",
                    "percent" === t.gridTypeWidth
                      ? "100%"
                      : Math.round(t.gridWidth) + "px"
                  ),
                  gr(
                    br(t),
                    "gridColumns",
                    "percent" === t.gridTypeWidth
                      ? 12
                      : Math.round(t.gridWidth / 10)
                  ),
                  gr(br(t), "showBtnClose", !0),
                  gr(br(t), "vastHidden", []),
                  t
                );
              }
              return (
                (e = i),
                (n = [
                  {
                    key: "loadWorker",
                    value: function (t, e, n) {
                      const r = this.getCreativeSettingsById(n);
                      return (
                        (e.params.sizes = { width: r.width, height: r.height }),
                        (e.playMode = "autoReload"),
                        this.toShowPlaceholder() &&
                          (e.placeholderOnCreative = !0),
                        hr(mr(i.prototype), "loadWorker", this).call(
                          this,
                          t,
                          e,
                          n
                        )
                      );
                    },
                  },
                  {
                    key: "htmlContainers",
                    value: function () {
                      this.params.setCreatives.sort((t, e) => {
                        return t.order - e.order;
                      });
                      for (
                        var t =
                            "<div class=\"adfinity-grid-container\" style=\"".concat(
                              this.getStyleGridContainer(),
                              "\">"
                            ),
                          e = 0;
                        e < this.params.setCreatives.length;
                        e++
                      )
                        t += "<div data-adfinity-creative-id=\""
                          .concat(
                            this.params.setCreatives[e].id,
                            "\"\n                                data-adfinity-creative-type=\""
                          )
                          .concat(
                            this.creatives[this.params.setCreatives[e].id].type,
                            "\"\n                                class=\""
                          )
                          .concat(
                            this.getClassGridElements(
                              this.params.setCreatives[e],
                              this.creatives[this.params.setCreatives[e].id]
                                .type
                            ),
                            "\"\n                                style=\""
                          )
                          .concat(
                            this.getStyleGridElements(
                              this.params.setCreatives[e]
                            ),
                            "\"\n                            ></div>"
                          );
                      return (t += "</div>");
                    },
                  },
                  {
                    key: "getStyleGridContainer",
                    value: function () {
                      let t = "";
                      return (
                        (t += "width: ".concat(this.gridContainerWidth, ";")),
                        (t += "grid-template-columns: repeat(".concat(
                          this.gridColumns,
                          ", minmax(0, 1fr));"
                        )),
                        null !== this.gridHeight &&
                          (t += "max-height: "
                            .concat(this.gridHeight)
                            .concat(this.gridHeightUnits, ";")),
                        "percent" === this.gridTypeHeight &&
                          (t +=
                            "grid-template-rows: repeat(12, minmax(0, 1fr));"),
                        t
                      );
                    },
                  },
                  {
                    key: "getStyleGridElements",
                    value: function (t) {
                      let e = "";
                      return (
                        "px" === this.gridTypeWidth &&
                          (e += "grid-column: span calc("
                            .concat(t.width, " / 10) / span calc(")
                            .concat(t.width, " / 10); max-width: ")
                            .concat(t.width, "px;")),
                        "px" === this.gridTypeHeight &&
                          ((e += "grid-row: span calc("
                            .concat(t.height, " / 10) / span calc(")
                            .concat(t.height, " / 10);")),
                          (e += "max-height: ".concat(t.height, "px;"))),
                        e
                      );
                    },
                  },
                  {
                    key: "getClassGridElements",
                    value: function (t, e) {
                      let n = "adfinity-container";
                      return (
                        "vast" === e &&
                          (this.vastHidden.push(t.id),
                          (n += " grid-vast-load")),
                        "percent" === this.gridTypeWidth &&
                          (n += " adf-grid-w-".concat(t.width)),
                        "percent" === this.gridTypeHeight &&
                          (n += " adf-grid-h-".concat(t.height)),
                        n
                      );
                    },
                  },
                  {
                    key: "onPauseWorkCommand",
                    value: function (t) {
                      for (const e in this.creatives)
                        this.sendCommand(
                          "pause",
                          {},
                          this.creatives[e].creativeId
                        ),
                          "Pause" !== this.creatives[e].getStatus() &&
                            this.sendCommand(
                              "stop",
                              {},
                              this.creatives[e].creativeId
                            );
                      this.showBtnClose = !0;
                    },
                  },
                  {
                    key: "onUnpauseWorkCommand",
                    value: function (t) {
                      for (const e in this.creatives)
                        "Pause" === this.creatives[e].getStatus()
                          ? this.sendCommand(
                              "unpause",
                              {},
                              this.creatives[e].creativeId
                            )
                          : this.sendCommand(
                              "run",
                              {},
                              this.creatives[e].creativeId
                            );
                    },
                  },
                  {
                    key: "onCreativeCompleteSignal",
                    value: function (t, e) {
                      let n;
                      return (
                        "vast" === this.creatives[e].type &&
                          (this.vastHidden.push(e),
                          null ===
                            (n = this.creatives[e].container.classList) ||
                            void 0 === n ||
                            n.add("grid-vast-load")),
                        hr(
                          mr(i.prototype),
                          "onCreativeCompleteSignal",
                          this
                        ).call(this, t, e)
                      );
                    },
                  },
                  {
                    key: "onPlaySignal",
                    value: function (t, e) {
                      let n;
                      return (
                        this.isInViewport()
                          ? (this.log("onPlaySignal isInViewport " + e),
                            this.showBtnClose &&
                              (this.sendSignal("firstCreativeStarted", t),
                              this.sendSignal("creativeRun", t),
                              (this.showBtnClose = !1)),
                            this.vastHidden.includes(e) &&
                              ((this.vastHidden = this.vastHidden.filter(
                                (t) => {
                                  return t !== e;
                                }
                              )),
                              null ===
                                (n = this.creatives[e].container.classList) ||
                                void 0 === n ||
                                n.remove("grid-vast-load")))
                          : (this.log("onPlaySignal NO isInViewport " + e),
                            this.sendCommand("pause", {}, e)),
                        !0
                      );
                    },
                  },
                  {
                    key: "launch",
                    value: function () {
                      return this.stateMachine("start"), !0;
                    },
                  },
                  {
                    key: "loadCreatives",
                    value: function () {
                      for (const t in (this.log(
                        "loadCreatives " + this.blockId
                      ),
                      this.creatives))
                        this.creatives[t].run();
                    },
                  },
                  {
                    key: "_Ready_start",
                    value: function () {
                      if (!0 === this.disableLazyLoad || this.isInViewport())
                        for (const t in (this.log(
                          "isInViewport " + this.blockId
                        ),
                        this.setState("InViewport"),
                        this.creatives))
                          this.creatives[t].run();
                      else
                        this.isInLazyLoadingZone()
                          ? (this.log("LazyLoadingZone " + this.blockId),
                            this.setState("LazyLoadingZone"),
                            this.loadCreatives(),
                            this.launchWaitingForViewport())
                          : (this.log("OutLazyLoadingZone " + this.blockId),
                            this.setState("OutLazyLoadingZone"),
                            this.launchWaitingForLazyLoadingZone());
                    },
                  },
                  {
                    key: "_LazyLoadingZone_appearedInViewport",
                    value: function () {
                      for (const t in (this.log(
                        "appearedInViewport " + this.blockId
                      ),
                      this.stopWaitingForViewport(),
                      this.setState("InViewport"),
                      this.creatives))
                        "Pause" === this.creatives[t].getStatus() &&
                          this.sendCommand("unpause", {}, t);
                    },
                  },
                  {
                    key: "_OutLazyLoadingZone_appearedInLazyLoadingZone",
                    value: function () {
                      this.log("appearedInLazyLoadingZone " + this.blockId),
                        this.stopWaitingForLazyLoadingZone(),
                        this.setState("LazyLoadingZone"),
                        this.loadCreatives();
                    },
                  },
                ]) && yr(e.prototype, n),
                r && yr(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                i
              );
            })(fr),
            slider: (function (t) {
              !(function (t, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && Or(t, e);
              })(i, t);
              let e,
                n,
                r,
                o = Cr(i);
              function i() {
                let t;
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return (
                  _r(
                    jr((t = o.call.apply(o, [this].concat(n)))),
                    "curCreativeIndex",
                    -1
                  ),
                  _r(jr(t), "nextCreativeIndex", -1),
                  _r(jr(t), "firstHadBeenPlayed", !1),
                  _r(jr(t), "creativeStatuses", {}),
                  _r(jr(t), "sliderContainer", null),
                  _r(jr(t), "name", "Слайдер"),
                  _r(
                    jr(t),
                    "style",
                    "color:blue;border-bottom:1px double blue"
                  ),
                  t.validParams(),
                  t.resetCreativeStates(),
                  t
                );
              }
              return (
                (e = i),
                (n = [
                  {
                    key: "validParams",
                    value: function () {
                      let t, e;
                      this.params.setCreatives &&
                      0 !==
                        (null === (t = this.params.setCreatives) || void 0 === t
                          ? void 0
                          : t.length)
                        ? 1 ===
                            (null === (e = this.params.setCreatives) ||
                            void 0 === e
                              ? void 0
                              : e.length) &&
                          this.err(
                            "В слайдере только 1 креатив. Рекомендуем использовать сетку."
                          )
                        : this.err("Не заданы креативы слайдера.");
                    },
                  },
                  {
                    key: "loadWorker",
                    value: function (t, e, n) {
                      const r = { height: this.getBodyHeight() };
                      return (
                        isNaN(parseInt(this.bodySize.width)) ||
                          (r.width = this.bodySize.width + "px"),
                        (e.params.sizes = r),
                        (e.playMode = "externalReload"),
                        Pr(Rr(i.prototype), "loadWorker", this).call(
                          this,
                          t,
                          e,
                          n
                        )
                      );
                    },
                  },
                  {
                    key: "htmlContainers",
                    value: function () {
                      const t = Pr(
                        Rr(i.prototype),
                        "htmlContainers",
                        this
                      ).call(this);
                      return "<div class=\"adfinity-slider-container\">".concat(
                        t,
                        "</div>"
                      );
                    },
                  },
                  {
                    key: "onCreativeResize",
                    value: function (t, e, n) {
                      let r;
                      (null === (r = this.getCurCreative()) || void 0 === r
                        ? void 0
                        : r.creativeId) === t &&
                        n > 1 &&
                        (this.sliderContainer.style.minHeight = n + "px");
                    },
                  },
                  {
                    key: "launch",
                    value: function () {
                      for (const t in ((this.sliderContainer =
                        this.body.querySelector(".adfinity-slider-container")),
                      this.creatives))
                        this.creatives[t].hideCreative();
                      return this.stateMachine("start"), !0;
                    },
                  },
                  {
                    key: "getCurCreative",
                    value: function () {
                      let t,
                        e,
                        n =
                          null ===
                            (t = this.getCreativeSettings(
                              this.curCreativeIndex
                            )) || void 0 === t
                            ? void 0
                            : t.id;
                      return null !== (e = this.creatives[n]) && void 0 !== e
                        ? e
                        : null;
                    },
                  },
                  {
                    key: "getNextCreative",
                    value: function () {
                      let t,
                        e,
                        n =
                          null ===
                            (t = this.getCreativeSettings(
                              this.nextCreativeIndex
                            )) || void 0 === t
                            ? void 0
                            : t.id;
                      return null !== (e = this.creatives[n]) && void 0 !== e
                        ? e
                        : null;
                    },
                  },
                  {
                    key: "incrNextCreativeIndex",
                    value: function () {
                      return (
                        this.nextCreativeIndex++,
                        this.nextCreativeIndex >=
                          this.params.setCreatives.length &&
                          (this.nextCreativeIndex = 0),
                        this.getNextCreative()
                      );
                    },
                  },
                  {
                    key: "setCurCreativeIndexFromNext",
                    value: function () {
                      this.curCreativeIndex = this.nextCreativeIndex;
                    },
                  },
                  {
                    key: "resetCreativeStates",
                    value: function () {
                      for (const t in this.params.setCreatives)
                        this.creativeStatuses[t] = {};
                    },
                  },
                  {
                    key: "setStyleCreativesContainers",
                    value: function (t) {
                      let e, n, r, o, i, a, u;
                      if (
                        ((t.style.maxHeight = this.getBodyHeight()),
                        null !== (e = this.options) &&
                          void 0 !== e &&
                          null !== (n = e.sizeParams) &&
                          void 0 !== n &&
                          n.fixWidth)
                      )
                        if (
                          (null === (r = this.body) || void 0 === r
                            ? void 0
                            : r.getBoundingClientRect().width) > 0
                        )
                          t.style.width =
                            (null === (u = this.body) || void 0 === u
                              ? void 0
                              : u.getBoundingClientRect().width) + "px";
                        else if (
                          (null === (o = this.body) ||
                          void 0 === o ||
                          null === (i = o.parentElement) ||
                          void 0 === i ||
                          null === (a = i.parentElement) ||
                          void 0 === a
                            ? void 0
                            : a.getBoundingClientRect().width) > 0
                        ) {
                          let s, c, l;
                          t.style.width =
                            (null === (s = this.body) ||
                            void 0 === s ||
                            null === (c = s.parentElement) ||
                            void 0 === c ||
                            null === (l = c.parentElement) ||
                            void 0 === l
                              ? void 0
                              : l.getBoundingClientRect().width) + "px";
                        }
                      return t;
                    },
                  },
                  {
                    key: "getBodyHeight",
                    value: function () {
                      let t;
                      return (
                        parseInt(this.bodySize.height) +
                        (null !== (t = this.bodySize.unitsMeasurement) &&
                        void 0 !== t
                          ? t
                          : "px")
                      );
                    },
                  },
                  {
                    key: "_Ready_start",
                    value: function () {
                      this.switchOnPlaceholder(),
                        this.incrNextCreativeIndex(),
                        this.loadCreativeIfInLazyLoadingZone();
                    },
                  },
                  {
                    key: "_WaitingForLazyLoading_appearedInLazyLoadingZone",
                    value: function () {
                      this.stopWaitingForLazyLoadingZone(),
                        this.runLoadingNextCreative();
                    },
                  },
                  {
                    key: "_WaitingForLazyLoading_pauseWork",
                    value: function () {
                      this.stopWaitingForLazyLoadingZone(), this.onPauseWork();
                    },
                  },
                  {
                    key: "_WaitingForCreative_stub",
                    value: function (t) {
                      let e;
                      t.creativeId ===
                      (null === (e = this.getCurCreative()) || void 0 === e
                        ? void 0
                        : e.creativeId)
                        ? this.err(
                            "Неожиданный stub текущего креатива в состоянии WaitingForCreative"
                          )
                        : this.onCreativeStub();
                    },
                  },
                  {
                    key: "_WaitingForCreative_play",
                    value: function (t) {
                      let e;
                      return (
                        this.switchOffPlaceholder(),
                        this.onCreativeRun(
                          null !== (e = t.params) && void 0 !== e ? e : {}
                        )
                      );
                    },
                  },
                  {
                    key: "_WaitingForCreative_creativeComplete",
                    value: function (t) {
                      let e;
                      return (
                        (null == t ? void 0 : t.creativeId) ===
                          (null === (e = this.getNextCreative()) || void 0 === e
                            ? void 0
                            : e.creativeId) &&
                          this.err(
                            "Неожиданное завершение следующего креатива в состоянии WaitingForCreative - игнорировать"
                          ),
                        this.returnStopReloadingByNextCreative()
                      );
                    },
                  },
                  {
                    key: "_WaitingForCreative_pauseWork",
                    value: function () {
                      this.onPauseWork();
                    },
                  },
                  {
                    key: "_WaitingForViewport_appearedInViewport",
                    value: function () {
                      this.stopWaitingForViewport(), this.onUnpauseWork();
                    },
                  },
                  {
                    key: "_WaitingForViewport_pauseWork",
                    value: function () {
                      this.stopWaitingForViewport(), this.onPauseWork();
                    },
                  },
                  {
                    key: "_WaitingForFinishCurCreative_creativeComplete",
                    value: function () {
                      return (
                        this.switchToNextCreativeIfVisibility(),
                        { stopReloading: !0 }
                      );
                    },
                  },
                  {
                    key: "_WaitingForFinishCurCreative_pauseWork",
                    value: function () {
                      this.onPauseWork();
                    },
                  },
                  {
                    key: "_WaitingForTimerToNextCreative_creativeComplete",
                    value: function () {
                      let t;
                      return (
                        (null !== (t = this.getCurCreative()) &&
                          void 0 !== t &&
                          t.getLastFrameLost()) ||
                          this.switchOnPlaceholder(),
                        this.creativeCompleteOnTimer(),
                        this.returnStopReloadingByNextCreative()
                      );
                    },
                  },
                  {
                    key: "_WaitingForTimerToNextCreative_stub",
                    value: function () {
                      this._WaitingForTimerToNextCreative_creativeComplete();
                    },
                  },
                  {
                    key: "_WaitingForTimerToNextCreative_timerNextCreative",
                    value: function () {
                      this.loadCreativeIfInLazyLoadingZone();
                    },
                  },
                  {
                    key: "_WaitingForTimerToNextCreative_pauseWork",
                    value: function () {
                      this.onPauseWork();
                    },
                  },
                  {
                    key: "_WaitingForTimerToNextCreative_play",
                    value: function (t) {
                      let e;
                      (null === (e = this.getCurCreative()) || void 0 === e
                        ? void 0
                        : e.creativeId) !== t.creativeId &&
                        this.err(
                          "Не обрабатываемое событие _WaitingForTimerToNextCreative_play",
                          t
                        );
                    },
                  },
                  {
                    key: "_WaitingForPercentToNextCreative_creativeComplete",
                    value: function () {
                      this.loadCreativeIfInLazyLoadingZone(),
                        this.isNextCreativeLongLoading() ||
                          this.stopCurCreative(),
                        this.incrNextCreativeIndex();
                    },
                  },
                  {
                    key: "_WaitingForPercentToNextCreative_pauseWork",
                    value: function () {
                      this.onPauseWork();
                    },
                  },
                  {
                    key: "_WaitingForPercentToNextCreative_play",
                    value: function (t) {
                      let e;
                      (null === (e = this.getCurCreative()) || void 0 === e
                        ? void 0
                        : e.creativeId) !== t.creativeId &&
                        this.err(
                          "Не обрабатываемое событие _WaitingForPercentToNextCreative_play",
                          t
                        );
                    },
                  },
                  {
                    key: "_ManagerPause_unpauseWork",
                    value: function () {
                      this.onUnpauseWork();
                    },
                  },
                  {
                    key: "loadCreativeIfInLazyLoadingZone",
                    value: function () {
                      this.disableLazyLoad || this.isInLazyLoadingZone()
                        ? this.runLoadingNextCreative()
                        : (this.setState("WaitingForLazyLoading"),
                          this.launchWaitingForLazyLoadingZone());
                    },
                  },
                  {
                    key: "runLoadingNextCreative",
                    value: function () {
                      this.setState("WaitingForCreative");
                      const t = this.getNextCreative();
                      this.sendCommand("run", { pauseAfterStart: !0 }, t.id);
                    },
                  },
                  {
                    key: "isNextCreativeLongLoading",
                    value: function () {
                      let t;
                      return !(
                        null === (t = this.getNextCreative()) ||
                        void 0 === t ||
                        !t.longLoading
                      );
                    },
                  },
                  {
                    key: "returnStopReloadingByNextCreative",
                    value: function () {
                      return {
                        stopReloading: !this.isNextCreativeLongLoading(),
                      };
                    },
                  },
                  {
                    key: "onCreativeStub",
                    value: function () {
                      const t = this.getCurCreative(),
                        e = this.incrNextCreativeIndex();
                      (null == t ? void 0 : t.creativeId) === e.creativeId
                        ? (this.runTimerNextCreative(),
                          this.incrNextCreativeIndex(),
                          "Play" !== this.getStatusCurCreative() &&
                            this.sendCommand("reload", {}, t.id))
                        : this.loadCreativeIfInLazyLoadingZone();
                    },
                  },
                  {
                    key: "onCreativeRun",
                    value: function (t) {
                      const e = this.getCurCreative(),
                        n = this.getNextCreative(),
                        r = !!t.hasBeenPaused;
                      if (
                        (delete t.hasBeenPaused,
                        this.firstHadBeenPlayed ||
                          (this.sendSignal("firstCreativeStarted", t),
                          (this.firstHadBeenPlayed = !0)),
                        null != e &&
                          e.creativeId &&
                          "Play" === this.getStatusCurCreative())
                      ) {
                        if (e.creativeId === t.creativeId) return !1;
                        r || e.getPriority() >= n.getPriority()
                          ? this.setState("WaitingForFinishCurCreative")
                          : this.switchToNextCreativeIfVisibility();
                      } else this.switchToNextCreativeIfVisibility();
                    },
                  },
                  {
                    key: "switchToNextCreativeIfVisibility",
                    value: function () {
                      this.disableLazyLoad || this.isInViewport()
                        ? ["Pause", "Play"].indexOf(
                            this.getStatusNextCreative()
                          ) > -1
                          ? this.switchToNextCreative()
                          : this.switchToNextFastCreative()
                        : (this.stopPlayingCreatives(),
                          this.setState("WaitingForViewport"),
                          this.launchWaitingForViewport());
                    },
                  },
                  {
                    key: "switchToNextCreative",
                    value: function () {
                      const t = this.getCurCreative(),
                        e = this.getNextCreativePlayValues();
                      this.firstHadBeenPlayed ||
                        ((this.firstHadBeenPlayed = !0),
                        this.sendSignal("firstCreativeStarted", e)),
                        this.switchOffPlaceholder(),
                        t && (this.stopCurCreative(), this.hideCurCreative()),
                        this.showNewCreative(),
                        this.unpauseNewCreative(),
                        this.setCurCreativeIndexFromNext(),
                        this.incrNextCreativeIndex(),
                        this.runCheckerToNextCreative(e);
                      const n = this.prepareParamsToShowHeader();
                      this.sendSignal("creativeRun", n);
                    },
                  },
                  {
                    key: "getNextCreativePlayValues",
                    value: function () {
                      let t, e;
                      return null !==
                        (t =
                          null === (e = this.getNextCreative()) || void 0 === e
                            ? void 0
                            : e.getPlayValues()) && void 0 !== t
                        ? t
                        : {};
                    },
                  },
                  {
                    key: "prepareParamsToShowHeader",
                    value: function () {
                      const t = {},
                        e = this.getCreativeSettings(this.curCreativeIndex);
                      if (e) {
                        let n,
                          r,
                          o = null !== (n = e.cross) && void 0 !== n ? n : null,
                          i =
                            null !== (r = e.canCloseAfter) && void 0 !== r
                              ? r
                              : null;
                        if (o)
                          if ("hide" === o) t.hideHeader = !0;
                          else if ("withTimer" === o)
                            (t.showHeader = !0),
                              (t.canCloseAfter = parseInt(i));
                          else if ("likeFormat" === o) {
                            let a, u;
                            !0 !==
                            (null === (a = this.creativeStatuses) ||
                            void 0 === a ||
                            null === (u = a[this.curCreativeIndex]) ||
                            void 0 === u
                              ? void 0
                              : u.firstShow)
                              ? ((this.creativeStatuses[
                                  this.curCreativeIndex
                                ].firstShow = !0),
                                (t.showHeader = !0),
                                (t.canCloseAfter = parseInt(
                                  this.format.params.canCloseAfter
                                )))
                              : ((t.showHeader = !0), (t.canCloseAfter = 0));
                          }
                      }
                      return t;
                    },
                  },
                  {
                    key: "stopCurCreative",
                    value: function () {
                      const t = this.getCurCreative();
                      this.stopCreative(t.id);
                    },
                  },
                  {
                    key: "stopCreative",
                    value: function (t) {
                      this.sendCommand("stop", {}, t);
                    },
                  },
                  {
                    key: "hideCurCreative",
                    value: function () {
                      this.getCurCreative().hideCreative();
                    },
                  },
                  {
                    key: "showNewCreative",
                    value: function () {
                      this.getNextCreative().showCreative();
                    },
                  },
                  {
                    key: "unpauseNewCreative",
                    value: function () {
                      const t = this.getNextCreative();
                      this.sendCommand("unpause", {}, t.id);
                    },
                  },
                  {
                    key: "runCheckerToNextCreative",
                    value: function (t) {
                      const e = this.getPercentToNextLoad();
                      !isNaN(e) && null != t && t.waitForPercentage
                        ? this.setState("WaitingForPercentToNextCreative")
                        : this.runTimerNextCreative();
                    },
                  },
                  {
                    key: "getPercentToNextLoad",
                    value: function () {
                      const t = this.getCreativeSettings(this.curCreativeIndex);
                      return parseInt(t.percentToNextLoad);
                    },
                  },
                  {
                    key: "runTimerNextCreative",
                    value: function () {
                      const t = this;
                      this.setState("WaitingForTimerToNextCreative");
                      const e = this.getTimeToNextLoad();
                      e &&
                        this.setTimeout(
                          "waitingForTimerToNextCreative",
                          () => {
                            return t.stateMachine("timerNextCreative");
                          },
                          1e3 * e
                        );
                    },
                  },
                  {
                    key: "getTimeToNextLoad",
                    value: function () {
                      const t = this.getCreativeSettings(this.curCreativeIndex),
                        e = parseInt(t.timeToNextLoad);
                      return isNaN(e) || e <= 0 ? null : e;
                    },
                  },
                  {
                    key: "creativeCompleteOnTimer",
                    value: function () {
                      this.getTimeToNextLoad()
                        ? this.sendCommand(
                            "getLastFrameLost",
                            {},
                            this.getCurCreative().id
                          ) ||
                          (this.stopTimerNextCreative(),
                          this.loadCreativeIfInLazyLoadingZone())
                        : this.loadCreativeIfInLazyLoadingZone();
                    },
                  },
                  {
                    key: "stopTimerNextCreative",
                    value: function () {
                      this.stopScheduler("waitingForTimerToNextCreative");
                    },
                  },
                  {
                    key: "onPauseWork",
                    value: function () {
                      this.setState("ManagerPause"),
                        this.stopPlayingCreatives(),
                        this.stopTimerNextCreative(),
                        (this.firstHadBeenPlayed = !1),
                        this.resetCreativeStates();
                    },
                  },
                  {
                    key: "stopPlayingCreatives",
                    value: function () {
                      for (const t in this.creatives)
                        -1 ===
                          ["Pause"].indexOf(this.creatives[t].getStatus()) &&
                          this.stopCreative(this.creatives[t].id);
                    },
                  },
                  {
                    key: "onUnpauseWork",
                    value: function () {
                      "Pause" === this.getStatusNextCreative()
                        ? this.switchToNextCreativeIfVisibility()
                        : this.switchToNextFastCreative();
                    },
                  },
                  {
                    key: "switchToNextFastCreative",
                    value: function () {
                      const t = this.nextCreativeIndex;
                      do {
                        if (!this.getNextCreative().longLoading) break;
                      } while (this.nextCreativeIndex !== t);
                      this.loadCreativeIfInLazyLoadingZone();
                    },
                  },
                  {
                    key: "getStatusCurCreative",
                    value: function () {
                      const t = this.getCurCreative(),
                        e = null == t ? void 0 : t.getStatus();
                      return (
                        this.log(
                          "Статус текущего креатива ["
                            .concat(t.creativeId, "] : ")
                            .concat(e)
                        ),
                        e
                      );
                    },
                  },
                  {
                    key: "getStatusNextCreative",
                    value: function () {
                      const t = this.getNextCreative(),
                        e = null == t ? void 0 : t.getStatus();
                      return (
                        this.log(
                          "Статус следующего креатива ["
                            .concat(t.creativeId, "] : ")
                            .concat(e)
                        ),
                        e
                      );
                    },
                  },
                  {
                    key: "switchOnPlaceholder",
                    value: function () {
                      this.toShowPlaceholder() &&
                        this.sliderContainer.classList.add("adfox_placeholder");
                    },
                  },
                  {
                    key: "switchOffPlaceholder",
                    value: function () {
                      this.toShowPlaceholder() &&
                        this.sliderContainer.classList.remove(
                          "adfox_placeholder"
                        );
                    },
                  },
                  {
                    key: "onPauseWorkCommand",
                    value: function (t) {
                      return this.stateMachine("pauseWork"), !0;
                    },
                  },
                  {
                    key: "onUnpauseWorkCommand",
                    value: function (t) {
                      return this.stateMachine("unpauseWork"), !0;
                    },
                  },
                  {
                    key: "onPlaySignal",
                    value: function (t, e) {
                      return this.stateMachine("play", {
                        params: t,
                        creativeId: e,
                      });
                    },
                  },
                  {
                    key: "onCreativeCompleteSignal",
                    value: function (t, e) {
                      return this.stateMachine("creativeComplete", {
                        params: t,
                        creativeId: e,
                      });
                    },
                  },
                  {
                    key: "onStubSignal",
                    value: function (t, e) {
                      return this.stateMachine("stub", { creativeId: e }), !0;
                    },
                  },
                  {
                    key: "onPercentTimelineSignal",
                    value: function (t, e) {
                      const n = this.getPercentToNextLoad();
                      return (
                        "WaitingForPercentToNextCreative" === this.getState() &&
                          "number" === typeof n &&
                          "number" === typeof t.percentTimeline &&
                          t.percentTimeline >= n &&
                          this.stateMachine("creativeComplete"),
                        !0
                      );
                    },
                  },
                ]) && kr(e.prototype, n),
                r && kr(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                i
              );
            })(fr),
            nowrap: (function (t) {
              !(function (t, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && Lr(t, e);
              })(i, t);
              let e,
                n,
                r,
                o = Er(i);
              function i() {
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, i),
                  o.apply(this, arguments)
                );
              }
              return (
                (e = i),
                n && Ir(e.prototype, n),
                r && Ir(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
              );
            })(fr),
          },
          create: function (t, e) {
            let n,
              r = e.type;
            return (
              "function" === typeof this.creativeManagers[r]
                ? (n = new this.creativeManagers[r](t, e))
                : ((n = null), console.error("Нет менеджера креатива " + r)),
              n
            );
          },
        };
        function Ar(t) {
          return (
            (Ar =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ar(t)
          );
        }
        function Wr(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, zr(r.key), r);
          }
        }
        function Mr(t, e) {
          return (
            (Mr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Mr(t, e)
          );
        }
        function Fr(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Dr(t);
            if (e) {
              const o = Dr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Ar(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Hr(t);
            })(this, n);
          };
        }
        function Hr(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Dr(t) {
          return (
            (Dr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Dr(t)
          );
        }
        function Vr(t, e, n) {
          return (
            (e = zr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function zr(t) {
          const e = (function (t, e) {
            if ("object" !== Ar(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Ar(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Ar(e) ? e : String(e);
        }
        const Ur = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Mr(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Fr(i);
          function i(t, e) {
            let n;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              Vr(Hr((n = o.call(this, t, e))), "masterFieldName", "block"),
              Vr(Hr(n), "workersFieldName", "creativeManager"),
              Vr(Hr(n), "block", null),
              Vr(Hr(n), "creativeManager", null),
              Vr(Hr(n), "isRun", !1),
              Vr(Hr(n), "launchPermissions", {}),
              n.initManager(t, e);
            const r = n.params;
            return (
              new w(
                n.blockId,
                r.storageLocal,
                r.countPageView,
                r.countPageViewOrder,
                r.timePageView
              ).check() || (n.launchPermissions.storedDisplayBanOnPage = !1),
              n.params.externalLaunchBan && n.switchOnExternalLaunch(),
              n.loadWorkers(e.creativeManager),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "loadWorker",
                value: function (t, e) {
                  return Br.create(t, e);
                },
              },
              {
                key: "addToPage",
                value: function () {
                  return this.creativeManager.addToPage();
                },
              },
              {
                key: "canRun",
                value: function () {
                  for (const t in this.launchPermissions)
                    if (!1 === this.launchPermissions[t]) return !1;
                  return this.creativeManager.canRun();
                },
              },
              {
                key: "switchOnExternalLaunch",
                value: function () {
                  this.launchPermissions.externalLaunchBan = !1;
                },
              },
              {
                key: "run",
                value: function () {
                  return !this.isRun && ((this.isRun = !0), !0);
                },
              },
              {
                key: "launchCreativeManager",
                value: function () {
                  return this.creativeManager.launch();
                },
              },
              {
                key: "onExternalLaunchCommand",
                value: function () {
                  this.launchPermissions.externalLaunchBan = !0;
                },
              },
            ]) && Wr(e.prototype, n),
            r && Wr(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function Yr(t) {
          return (
            (Yr =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Yr(t)
          );
        }
        function qr(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Qr(r.key), r);
          }
        }
        function Zr() {
          return (
            (Zr =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Xr(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Zr.apply(this, arguments)
          );
        }
        function Gr(t, e) {
          return (
            (Gr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Gr(t, e)
          );
        }
        function $r(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Xr(t);
            if (e) {
              const o = Xr(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Yr(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Kr(t);
            })(this, n);
          };
        }
        function Kr(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Xr(t) {
          return (
            (Xr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Xr(t)
          );
        }
        function Jr(t, e, n) {
          return (
            (e = Qr(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Qr(t) {
          const e = (function (t, e) {
            if ("object" !== Yr(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Yr(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Yr(e) ? e : String(e);
        }
        const to = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Gr(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = $r(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              Jr(Kr((n = o.call(this, t, e))), "wrapper", !1),
              Jr(Kr(n), "wrapperComplit", !1),
              Jr(Kr(n), "body", !1),
              Jr(Kr(n), "infoblock", !1),
              Jr(Kr(n), "signal", !1),
              n.setPlaceholderStyle(),
              n
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "setPlaceholderStyle",
                value: function () {
                  if (this.toShowPlaceholder()) {
                    const t = "placeholderBlock" + this.blockId,
                      e = "#"
                        .concat(
                          this.getWrapId(),
                          " .adfox_placeholder{min-height:"
                        )
                        .concat(this.getHeightPlaceholder(), "}");
                    W.addStyle(t, e);
                  }
                },
              },
              {
                key: "loadWorker",
                value: function (t, e) {
                  let n;
                  return (
                    (e.bodySize = {
                      height: this.params.height,
                      width:
                        null !== (n = this.params.width) && void 0 !== n
                          ? n
                          : null,
                      unitsMeasurement: this.params.unitsMeasurement,
                    }),
                    (e.disableLazyLoad = !!this.constructor.disableLazyLoad),
                    Zr(Xr(i.prototype), "loadWorker", this).call(this, t, e)
                  );
                },
              },
              {
                key: "run",
                value: function () {
                  const t = this;
                  if (!Zr(Xr(i.prototype), "run", this).call(this)) return !1;
                  const e = "shown_" + this.blockId;
                  if (this.params.dontShowTill) {
                    if (s.session(e)) return !1;
                    s.session(e, !0, this.params.dontShowTill);
                  }
                  if (this.params.closeWhenAppears) {
                    const n = document.querySelector(
                      this.params.closeWhenAppears
                    );
                    n &&
                      this.addEventListener(
                        "closeWhenAppears",
                        document,
                        "scroll",
                        () => {
                          const e =
                            n.getBoundingClientRect().top - window.innerHeight;
                          t.isRun &&
                            e < 0 &&
                            (t.stopScheduler("closeWhenAppears"),
                            t.closeForever());
                        }
                      );
                  }
                  return (
                    this.createWrapper(),
                    (this.isRun = !0),
                    this.launchCreativeManager(),
                    !0
                  );
                },
              },
              {
                key: "createWrapper",
                value: function () {
                  let t,
                    e = this.getObjectToInsert();
                  return (
                    !!e &&
                    (e.insertAdjacentHTML(
                      this.getInsertPosition(),
                      this.htmlWrapper()
                    ),
                    (this.wrapper = document.getElementById(this.getWrapId())),
                    (this.body = this.getBody()),
                    this.creativeManager.setBody(this.body),
                    this.creativeManager.createContainers(),
                    this.params.blockCaption &&
                      (null === (t = this.wrapper.classList) ||
                        void 0 === t ||
                        t.add(this.params.blockCaption)),
                    this.params.width &&
                      ((this.wrapper.style.maxWidth = this.params.width + "px"),
                      (this.wrapper.style.width = this.params.width + "px")),
                    this.params.minWidth &&
                      (this.wrapper.style.minWidth =
                        this.params.minWidth + "px"),
                    this.insertInfoBlock(),
                    this.wrapper)
                  );
                },
              },
              {
                key: "getBody",
                value: function () {
                  return this.wrapper.querySelector(".adfinity-body");
                },
              },
              {
                key: "getObjectToInsert",
                value: function () {
                  return document.body;
                },
              },
              {
                key: "insertInfoBlock",
                value: function () {
                  const t = this;
                  this.setInterval(
                    "updateInfoBlock",
                    () => {
                      if (t.isLogsOn()) {
                        if (!t.infoblock) {
                          if (!t.body) return;
                          t.body.insertAdjacentHTML(
                            "afterbegin",
                            "<div class=\"adfinity-infoblock-format\"></div>"
                          ),
                            (t.infoblock = t.body.querySelector(
                              ".adfinity-infoblock-format"
                            ));
                        }
                        const e = [t.blockId, t.params.blockCaption].join(". ");
                        e !== t.infoblock.innerHTML &&
                          (t.infoblock.innerHTML = e);
                      } else
                        t.infoblock &&
                          (t.infoblock.remove(), (t.infoblock = !1));
                    },
                    300
                  );
                },
              },
              {
                key: "getInsertPosition",
                value: function () {
                  return "afterbegin";
                },
              },
              {
                key: "getWrapId",
                value: function () {
                  return "wrap_" + this.blockId;
                },
              },
              {
                key: "getWrapAttributes",
                value: function () {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    e = ["adfinity-wrap", "adfinity-".concat(this.type)].concat(
                      t
                    );
                  return (
                    this.params.mediaFormatType &&
                      e.push(
                        "adfinity-media-format-type-".concat(
                          this.params.mediaFormatType
                        )
                      ),
                    (e = e.join(" ")),
                    "id=\"".concat(this.getWrapId(), "\" class=\"").concat(e, "\"")
                  );
                },
              },
              {
                key: "htmlWrapper",
                value: function () {
                  return (
                    "<div " +
                    this.getWrapAttributes() +
                    "><div class=\"adfinity-body\"></div></div>"
                  );
                },
              },
              {
                key: "toShowPlaceholder",
                value: function () {
                  let t;
                  return (
                    !0 ===
                    (null === (t = this.params) || void 0 === t
                      ? void 0
                      : t.showPlaceholder)
                  );
                },
              },
              {
                key: "getHeightPlaceholder",
                value: function () {
                  let t,
                    e,
                    n =
                      null === (t = this.params) || void 0 === t
                        ? void 0
                        : t.heightPlaceholder;
                  return !isNaN(n) && n > 0
                    ? n +
                        (null !==
                          (e = this.params.unitsMeasurementPlaceholder) &&
                        void 0 !== e
                          ? e
                          : "px")
                    : null;
                },
              },
              {
                key: "onFirstCreativeStartedSignal",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "onCreativeRunSignal",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "removeWrapper",
                value: function () {
                  this.wrapper && this.wrapper.remove(),
                    (this.wrapper = !1),
                    delete this.isWrap;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.removeWrapper(),
                    Zr(Xr(i.prototype), "destroy", this).call(this);
                },
              },
            ]),
            n && qr(e.prototype, n),
            r && qr(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(Ur);
        function eo(t, e) {
          let n =
            ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" === typeof t) return no(t, e);
                let n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return no(t, e);
              })(t)) ||
              (e && t && "number" === typeof t.length)
            ) {
              n && (t = n);
              let r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          let i,
            a = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              const t = n.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (u = !0), (i = t);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function no(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function ro(t) {
          return (
            (ro =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ro(t)
          );
        }
        function oo(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, lo(r.key), r);
          }
        }
        function io() {
          return (
            (io =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = co(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            io.apply(this, arguments)
          );
        }
        function ao(t, e) {
          return (
            (ao = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            ao(t, e)
          );
        }
        function uo(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = co(t);
            if (e) {
              const o = co(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === ro(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return so(t);
            })(this, n);
          };
        }
        function so(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function co(t) {
          return (
            (co = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            co(t)
          );
        }
        function lo(t) {
          const e = (function (t, e) {
            if ("object" !== ro(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== ro(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === ro(e) ? e : String(e);
        }
        Jr(to, "disableLazyLoad", !1);
        const fo = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ao(t, e);
          })(a, t);
          let e,
            n,
            r,
            o = uo(a);
          function a() {
            let t, e, n, r;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var i = arguments.length, u = new Array(i), s = 0; s < i; s++)
              u[s] = arguments[s];
            return (
              (t = o.call.apply(o, [this].concat(u))),
              (e = so(t)),
              (r = !0),
              (n = lo((n = "finishWrappingImmediately"))) in e
                ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = r),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "canRun",
                value: function () {
                  return (
                    io(co(a.prototype), "canRun", this).call(this) &&
                    "object" == ro(this.getObjectToInsert())
                  );
                },
              },
              {
                key: "createWrapper",
                value: function () {
                  const t = io(co(a.prototype), "createWrapper", this).call(
                    this
                  );
                  return (
                    !!t && (this.params.infinityScroll && this.cycleInsert(), t)
                  );
                },
              },
              {
                key: "getObjectToInsert",
                value: function () {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return "object" === ro(this.params.objectToInsert)
                    ? !1 === t
                      ? [this.params.objectToInsert]
                      : this.params.objectToInsert
                    : "xPath" === this.params.typeEmbedding
                      ? W.getObjectByXPath(this.params.cssPath, t)
                      : W.getObjectByPath(this.params.cssPath, t);
                },
              },
              {
                key: "getInsertPosition",
                value: function () {
                  return this.params.cssPosition;
                },
              },
              {
                key: "loadWorker",
                value: function (t, e) {
                  return (
                    void 0 === e.sizeParams && (e.sizeParams = {}),
                    (e.sizeParams.fixWidth = !0),
                    io(co(a.prototype), "loadWorker", this).call(this, t, e)
                  );
                },
              },
              {
                key: "cycleInsert",
                value: function () {
                  const t = this;
                  (this.listAditionalBlocks = new Set()),
                    (this.chainInfinityScroll = [this]),
                    this.setInterval(
                      "infinityScrollClone",
                      () => {
                        if (t.isRun) {
                          let e,
                            n = window.adfinity.block(t.blockId),
                            r = eo(t.getObjectToInsert(!1));
                          try {
                            for (r.s(); !(e = r.n()).done; ) {
                              const o = e.value;
                              if (
                                (0 === t.listAditionalBlocks.size &&
                                  t.listAditionalBlocks.add(o),
                                !t.listAditionalBlocks.has(o))
                              ) {
                                t.listAditionalBlocks.add(o);
                                const a = i(n.options),
                                  u =
                                    t.blockId +
                                    "-" +
                                    (t.listAditionalBlocks.size + 1);
                                for (const s in a.format.creativeManager
                                  .creatives)
                                  "string" ===
                                    typeof a.format.creativeManager.creatives[s]
                                      .params.containerId &&
                                    (a.format.creativeManager.creatives[
                                      s
                                    ].params.containerId +=
                                      "-" + (t.listAditionalBlocks.size + 1));
                                delete a.format.params.cssPath,
                                  delete a.format.params.infinityScroll,
                                  (a.format.params.objectToInsert = o);
                                const c = window.adfinity.loadBlock(a, u);
                                c &&
                                  (t.chainInfinityScroll.push(c.format),
                                  (c.format.chainInfinityScroll =
                                    t.chainInfinityScroll));
                              }
                            }
                          } catch (t) {
                            r.e(t);
                          } finally {
                            r.f();
                          }
                        }
                      },
                      200
                    );
                },
              },
            ]),
            n && oo(e.prototype, n),
            r && oo(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(to);
        function yo(t) {
          return (
            (yo =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            yo(t)
          );
        }
        function ho(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== yo(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== yo(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === yo(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function po() {
          return (
            (po =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = mo(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            po.apply(this, arguments)
          );
        }
        function vo(t, e) {
          return (
            (vo = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            vo(t, e)
          );
        }
        function bo(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = mo(t);
            if (e) {
              const o = mo(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === yo(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function mo(t) {
          return (
            (mo = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            mo(t)
          );
        }
        const go = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && vo(t, e);
          })(a, t);
          let e,
            r,
            o,
            i = bo(a);
          function a() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              i.apply(this, arguments)
            );
          }
          return (
            (e = a),
            (r = [
              {
                key: "createWrapper",
                value: function (t) {
                  const e = this,
                    r = po(mo(a.prototype), "createWrapper", this).call(this);
                  if (r) {
                    let o = parseInt(this.params.topStickToTop);
                    (o = o || 0),
                      (r.style.position = "static"),
                      this.addEventListener(
                        "setStickPoint",
                        window,
                        "DOMContentLoaded",
                        () => {
                          return n(r).top;
                        }
                      );
                    let i = !1;
                    this.addEventListener(
                      "changeStateTopsticky",
                      window,
                      "scroll",
                      () => {
                        if (!i) {
                          const t = n(r).top,
                            a = window.scrollY,
                            u = "fixed" === r.style.position;
                          t - a < o &&
                            !u &&
                            ((i = !0),
                            (r.style.width = r.clientWidth + "px"),
                            (r.style.position = "fixed"),
                            (r.style.top = o + "px"),
                            e.setTimeout(
                              "setTopStickyStatic",
                              () => {
                                r.style.position = "static";
                              },
                              1e3 * e.params.topStickTime
                            ));
                        }
                      }
                    );
                  }
                  return r;
                },
              },
            ]) && ho(e.prototype, r),
            o && ho(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(fo);
        function wo(t) {
          return (
            (wo =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            wo(t)
          );
        }
        function So(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, _o(r.key), r);
          }
        }
        function ko() {
          return (
            (ko =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = jo(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            ko.apply(this, arguments)
          );
        }
        function Po(t, e) {
          return (
            (Po = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Po(t, e)
          );
        }
        function Oo(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = jo(t);
            if (e) {
              const o = jo(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === wo(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Co(t);
            })(this, n);
          };
        }
        function Co(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function jo(t) {
          return (
            (jo = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            jo(t)
          );
        }
        function Ro(t, e, n) {
          return (
            (e = _o(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function _o(t) {
          const e = (function (t, e) {
            if ("object" !== wo(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== wo(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === wo(e) ? e : String(e);
        }
        const xo = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Po(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Oo(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              Ro(
                Co((t = o.call.apply(o, [this].concat(n)))),
                "stopScrollStatus",
                1
              ),
              Ro(Co(t), "scrollProgress", 0),
              Ro(Co(t), "lastCoordScrollY", !1),
              Ro(Co(t), "deltaTouchMove", 0),
              Ro(Co(t), "wasTouch", !1),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  return (
                    !!ko(jo(i.prototype), "run", this).call(this) &&
                    (void 0 !== this.params.stopScroll &&
                      !0 === this.params.stopScroll &&
                      this.initStopScroll(),
                    !0)
                  );
                },
              },
              {
                key: "htmlWrapper",
                value: function () {
                  return void 0 !== this.params.stopScroll &&
                    !0 === this.params.stopScroll
                    ? "<div ".concat(this.getWrapAttributes(), ">") +
                        "<div class=\"adfinity-shell-progressbar\"><div class=\"adfinity-stopScroll-progressbar\"></div></div><div class=\"adfinity-body\"></div></div>"
                    : ko(jo(i.prototype), "htmlWrapper", this).call(this);
                },
              },
              {
                key: "initStopScroll",
                value: function () {
                  (this.shellProgressbar = this.wrapper.querySelector(
                    ".adfinity-shell-progressbar"
                  )),
                    (this.progressbar = this.wrapper.querySelector(
                      ".adfinity-stopScroll-progressbar"
                    )),
                    this.getTopDelta() < 0 && this.setStatus(3),
                    this.initEvents(),
                    this.initStyles();
                },
              },
              {
                key: "initEvents",
                value: function () {
                  const t = this;
                  this.addEventListener(
                    "touchstart",
                    window,
                    "touchstart",
                    (e) => {
                      (t.lastCoordScrollY = e.touches[0].clientY),
                        (t.wasTouch = !0);
                    }
                  ),
                    this.addEventListener(
                      "touchmove",
                      window,
                      "touchmove",
                      (e) => {
                        !1 !== t.lastCoordScrollY
                          ? ((t.deltaTouchMove =
                              e.touches[0].clientY - t.lastCoordScrollY),
                            (t.lastCoordScrollY = e.touches[0].clientY),
                            t.statusProcessing())
                          : (t.lastCoordScrollY = e.touches[0].clientY);
                      }
                    ),
                    this.addEventListener(
                      "touchend",
                      window,
                      "touchend",
                      () => {
                        return (t.lastCoordScrollY = !1);
                      }
                    ),
                    this.addEventListener(
                      "touchcancel",
                      window,
                      "touchcancel",
                      () => {
                        return (t.lastCoordScrollY = !1);
                      }
                    ),
                    this.addEventListener("scroll", window, "scroll", () => {
                      return t.onScrollWindow();
                    }),
                    this.setInterval(
                      "updateHeigthProgressBar",
                      () => {
                        return t.renderProgressBar();
                      },
                      50
                    );
                },
              },
              {
                key: "createWrapper",
                value: function () {
                  const t = ko(jo(i.prototype), "createWrapper", this).call(
                    this
                  );
                  if (t) {
                    void 0 !== this.params.alignCenter &&
                      !0 === this.params.alignCenter &&
                      ((this.body.style.display = "flex"),
                      (this.body.style.justifyContent = "center"),
                      (this.body.style.alignItems = "center"));
                    const e = this.getHeightPlaceholder();
                    e && (this.body.style.minHeight = e);
                  }
                  return t;
                },
              },
              {
                key: "initStyles",
                value: function () {
                  const t = [],
                    e = [];
                  this.params.stopScrollPBbgcolor &&
                    e.push(
                      "background-color:".concat(
                        this.params.stopScrollPBbgcolor
                      )
                    ),
                    this.params.stopScrollPBwidth &&
                      e.push(
                        "width:".concat(this.params.stopScrollPBwidth, "px")
                      ),
                    e.length > 0 &&
                      t.push(
                        "#"
                          .concat(
                            this.getWrapId(),
                            " .adfinity-shell-progressbar{"
                          )
                          .concat(e.join(";"), "}")
                      ),
                    this.params.stopScrollPBcolor &&
                      t.push(
                        "#"
                          .concat(
                            this.getWrapId(),
                            " .adfinity-stopScroll-progressbar{background-color:"
                          )
                          .concat(this.params.stopScrollPBcolor, "}")
                      ),
                    t.length > 0 &&
                      W.addStyle("stopScroll" + this.blockId, t.join(""));
                },
              },
              {
                key: "statusProcessing",
                value: function () {
                  let t = this.getTopDelta(),
                    e = 1;
                  switch (this.stopScrollStatus) {
                    case 1:
                      t <= 0 && (e = 2);
                      break;
                    case 2:
                      this.processProgress(),
                        (e =
                          0 === this.scrollProgress
                            ? 1
                            : 1 === this.scrollProgress
                              ? 3
                              : 2);
                      break;
                    case 3:
                      e = t > 0 ? 2 : 3;
                  }
                  e !== this.stopScrollStatus && this.setStatus(e),
                    2 == e && this.scrollToTop();
                },
              },
              {
                key: "getTopDelta",
                value: function () {
                  return Math.round(this.wrapper.getBoundingClientRect().top);
                },
              },
              {
                key: "setStatus",
                value: function (t) {
                  (this.wrapper.dataset.stopScrollStatus = t),
                    (this.stopScrollStatus = t),
                    2 == t
                      ? (document.body.classList.add("adfinity-stopScrollBody"),
                        this.scrollToTop())
                      : document.body.classList.remove(
                          "adfinity-stopScrollBody"
                        ),
                    1 === t
                      ? (this.scrollProgress = 0)
                      : 3 === t && (this.scrollProgress = 1),
                    this.processProgress();
                },
              },
              {
                key: "processProgress",
                value: function () {
                  (this.scrollProgress =
                    this.scrollProgress -
                    this.deltaTouchMove /
                      ((window.innerHeight * this.params.stopScrollHeight) /
                        100)),
                    this.scrollProgress > 1 && (this.scrollProgress = 1),
                    this.scrollProgress < 0 && (this.scrollProgress = 0),
                    this.renderProgressBar();
                },
              },
              {
                key: "renderProgressBar",
                value: function () {
                  (this.progressbar.style.height =
                    this.scrollProgress * this.body.offsetHeight + "px"),
                    (this.shellProgressbar.style.height =
                      this.wrapper.offsetHeight + "px");
                },
              },
              {
                key: "scrollToTop",
                value: function () {
                  const t = this.getTopDelta();
                  0 != t && window.scrollTo(0, t + window.scrollY);
                },
              },
              {
                key: "onScrollWindow",
                value: function () {
                  if (this.wasTouch && !1 === this.lastCoordScrollY) {
                    const t = this.getTopDelta();
                    ((3 === this.stopScrollStatus && t > 0) ||
                      (1 === this.stopScrollStatus && t < 0)) &&
                      this.setStatus(2);
                  }
                },
              },
            ]) && So(e.prototype, n),
            r && So(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(fo);
        function To(t) {
          return (
            (To =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            To(t)
          );
        }
        function Io(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Mo(r.key), r);
          }
        }
        function Lo() {
          return (
            (Lo =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Ao(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Lo.apply(this, arguments)
          );
        }
        function Eo(t, e) {
          return (
            (Eo = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Eo(t, e)
          );
        }
        function No(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Ao(t);
            if (e) {
              const o = Ao(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === To(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Bo(t);
            })(this, n);
          };
        }
        function Bo(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Ao(t) {
          return (
            (Ao = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Ao(t)
          );
        }
        function Wo(t, e, n) {
          return (
            (e = Mo(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Mo(t) {
          const e = (function (t, e) {
            if ("object" !== To(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== To(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === To(e) ? e : String(e);
        }
        const Fo = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Eo(t, e);
          })(u, t);
          let e,
            n,
            i,
            a = No(u);
          function u() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, u);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              Wo(Bo((t = a.call.apply(a, [this].concat(n)))), "blockNext", !1),
              Wo(Bo(t), "stateBlock", "stateFirst"),
              t
            );
          }
          return (
            (e = u),
            (n = [
              {
                key: "createWrapper",
                value: function () {
                  let t,
                    e = Lo(Ao(u.prototype), "createWrapper", this).call(this);
                  return (
                    this.params.topStick && this.elStickyTop(e),
                    e &&
                      void 0 !== this.params.heightPlaceholder &&
                      this.params.heightPlaceholder > 0 &&
                      (this.body.style.minHeight =
                        parseInt(this.params.heightPlaceholder) +
                        (null !==
                          (t = this.params.unitsMeasurementPlaceholder) &&
                        void 0 !== t
                          ? t
                          : "px")),
                    e
                  );
                },
              },
              {
                key: "htmlWrapper",
                value: function () {
                  return (
                    "<div ".concat(this.getWrapAttributes(), ">") +
                    "<div id=\"stick_"
                      .concat(this.blockId, "\" class=\"adfinity-inner-")
                      .concat(
                        this.type,
                        "\"><div class=\"adfinity-body\"></div></div>"
                      ) +
                    "</div>"
                  );
                },
              },
              {
                key: "elStickyTop",
                value: function (t) {
                  let e = this,
                    n = this.wrapper.firstChild,
                    o = parseInt(this.params.topStickToTop);
                  o = o || 0;
                  let i = !1;
                  (t.style.position = "static"),
                    (t.style.background = "#F5FCFF00"),
                    (n.style.position = "static"),
                    this.setInterval(
                      "placeholderHeight",
                      () => {
                        (t.style.height =
                          t.querySelector(".adfinity-body").clientHeight +
                          "px"),
                          (i = r(t).top);
                      },
                      50
                    ),
                    this.addEventListener(
                      "changeStateSidebar",
                      document,
                      "scroll",
                      () => {
                        const t = e.getStateBlock(o);
                        if (
                          ("stateFirst" === t &&
                            ((n.style.position = "static"),
                            (n.style.top = "0px")),
                          "stateSecond" === t &&
                            ((n.style.width = n.clientWidth + "px"),
                            (n.style.position = "fixed"),
                            (n.style.zIndex = 1e3),
                            (n.style.top = o + "px")),
                          "stateThird" === t)
                        ) {
                          n.style.position = "relative";
                          let a = !1,
                            u = e.getBlockNext();
                          u
                            ? (a = r(u.wrapper).top - i - n.clientHeight - o)
                            : e.params.stopStick &&
                              null !==
                                document.querySelector(e.params.stopStick) &&
                              (a =
                                r(document.querySelector(e.params.stopStick))
                                  .top -
                                o -
                                i -
                                n.clientHeight),
                            (n.style.top = a + "px");
                        }
                      }
                    );
                },
              },
              {
                key: "getStateBlock",
                value: function (t) {
                  if (o(this.wrapper).top > 0) return "stateFirst";
                  const e = this.getBlockNext(),
                    n = this.wrapper.clientHeight;
                  return e || this.params.stopStick
                    ? !e && this.params.stopStick
                      ? null !==
                          document.querySelector(this.params.stopStick) &&
                        r(document.querySelector(this.params.stopStick)).top -
                          t -
                          window.scrollY <=
                          n
                        ? "stateThird"
                        : "stateSecond"
                      : e
                        ? o(e.wrapper).top - 2 * t > n
                          ? "stateSecond"
                          : "stateThird"
                        : void 0
                    : "stateSecond";
                },
              },
              {
                key: "getBlockNext",
                value: function () {
                  if (this.blockNext) return this.blockNext;
                  if (!this.chainInfinityScroll)
                    return (this.blockNext = !1), this.blockNext;
                  const t = this.chainInfinityScroll.length;
                  for (const e in this.chainInfinityScroll)
                    if (
                      this.chainInfinityScroll[e].blockId === this.blockId &&
                      e <= t - 2
                    )
                      return (
                        (this.blockNext =
                          this.chainInfinityScroll[Number(e) + 1]),
                        this.blockNext
                      );
                },
              },
            ]) && Io(e.prototype, n),
            i && Io(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            u
          );
        })(fo);
        function Ho(t) {
          return (
            (Ho =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ho(t)
          );
        }
        function Do(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Go(r.key), r);
          }
        }
        function Vo() {
          return (
            (Vo =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = qo(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Vo.apply(this, arguments)
          );
        }
        function zo(t, e) {
          return (
            (zo = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            zo(t, e)
          );
        }
        function Uo(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = qo(t);
            if (e) {
              const o = qo(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Ho(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Yo(t);
            })(this, n);
          };
        }
        function Yo(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function qo(t) {
          return (
            (qo = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            qo(t)
          );
        }
        function Zo(t, e, n) {
          return (
            (e = Go(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Go(t) {
          const e = (function (t, e) {
            if ("object" !== Ho(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Ho(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Ho(e) ? e : String(e);
        }
        const $o = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && zo(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Uo(i);
          function i() {
            let t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            Zo(Yo((t = o.call.apply(o, [this].concat(n)))), "countdown", !1);
            const a = parseInt(t.params.startTime),
              u = parseInt(t.params.startScrollTop);
            return (
              (isNaN(a) && isNaN(u)) ||
                ((t.launchPermissions.allowWhenPageEvent = !1),
                isNaN(a) ||
                  t.setTimeout(
                    "delayedLaunch",
                    () => {
                      return (t.launchPermissions.allowWhenPageEvent = !0);
                    },
                    1e3 * a
                  ),
                isNaN(u) ||
                  t.addEventListener(
                    "startScrollTop",
                    document,
                    "scroll",
                    () => {
                      window.scrollY >= u &&
                        (t.launchPermissions.allowWhenPageEvent = !0);
                    }
                  )),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "addStyle",
                value: function () {
                  const t = "#"
                    .concat(
                      this.wrapper.id,
                      ' .adfinity-blur::before {\n                                    content: "";\n                                    backdrop-filter: blur('
                    )
                    .concat(
                      this.params.blur,
                      "px);\n                                    -webkit-backdrop-filter: blur("
                    )
                    .concat(
                      this.params.blur,
                      "px);\n                                    width: 100%;\n                                    height: 100%;\n                                    display: block;\n                                    position: absolute;\n                                    top: 0;\n                                }"
                    );
                  W.addStyle("blur-" + this.blockId, t);
                },
              },
              {
                key: "removeStyle",
                value: function () {
                  W.removeStyle("blur-" + this.blockId);
                },
              },
              {
                key: "canRun",
                value: function () {
                  return (
                    ("interactive" === document.readyState ||
                      "complete" === document.readyState) &&
                    Vo(qo(i.prototype), "canRun", this).call(this)
                  );
                },
              },
              {
                key: "run",
                value: function () {
                  const t = Vo(qo(i.prototype), "run", this).call(this);
                  return this.addStyle(), t;
                },
              },
              {
                key: "getInsertPosition",
                value: function () {
                  let t = "afterbegin";
                  return (
                    void 0 !== this.params.positionInBody && (t = "beforeEnd"),
                    t
                  );
                },
              },
              {
                key: "htmlWrapper",
                value: function () {
                  return (
                    "<div " +
                    this.getWrapAttributes() +
                    ">" +
                    this.htmlHeader() +
                    "<div class=\"adfinity-body\"></div></div>"
                  );
                },
              },
              {
                key: "htmlHeader",
                value: function () {
                  return "";
                },
              },
              {
                key: "createWrapper",
                value: function () {
                  const t = this,
                    e = Vo(qo(i.prototype), "createWrapper", this).call(this);
                  if (e) {
                    this.hideHeader();
                    let n,
                      r = this.wrapper.querySelector(".adfinity-close");
                    r &&
                      this.addEventListener("onCloseClick", r, "click", () => {
                        return t.close();
                      }),
                      !1 !== this.params.blur &&
                        (null === (n = this.turnOnBlur) ||
                          void 0 === n ||
                          n.call(this));
                  }
                  return e;
                },
              },
              {
                key: "turnOnBlur",
                value: function () {
                  void 0 !== this.wrapper.id &&
                    this.body.classList.add("adfinity-blur");
                },
              },
              {
                key: "hideHeader",
                value: function () {
                  let t;
                  this.stopScheduler("timerToClose"),
                    (this.countdown = !1),
                    null === (t = this.wrapper.classList) ||
                      void 0 === t ||
                      t.add("adfinity-hide-header");
                },
              },
              {
                key: "showHeader",
                value: function (t) {
                  let e,
                    n = this.getHeaderStartParams(t),
                    r = n.showHead,
                    o = n.time;
                  return r
                    ? (o > 0 && this.startTimer(o),
                      null === (e = this.wrapper.classList) ||
                        void 0 === e ||
                        e.remove("adfinity-hide-header"),
                      !0)
                    : (this.hideHeader(), !1);
                },
              },
              {
                key: "getHeaderStartParams",
                value: function (t) {
                  let e, n;
                  if (t.hideHeader) e = !1;
                  else if (t.showHeader) {
                    let r;
                    (e = !0),
                      (n =
                        null !== (r = t.canCloseAfter) && void 0 !== r ? r : 0);
                  } else {
                    let o;
                    (e = !0),
                      (n =
                        null !== (o = this.params.canCloseAfter) && void 0 !== o
                          ? o
                          : 0);
                  }
                  return { showHead: e, time: (n = n < 0 ? 0 : n) };
                },
              },
              {
                key: "close",
                value: function () {
                  this.closeFormat(), this.reloadAfterClose();
                },
              },
              {
                key: "closeForever",
                value: function () {
                  this.closeFormat(),
                    (this.launchPermissions.allowedAfterClose = !1),
                    (this.isRun = !1);
                },
              },
              {
                key: "closeFormat",
                value: function () {
                  this.hideWrapper(), this.sendCommand("pauseWork");
                },
              },
              {
                key: "openFormat",
                value: function () {
                  this.sendCommand("unpauseWork");
                },
              },
              {
                key: "hideWrapper",
                value: function () {
                  let t;
                  null === (t = this.wrapper.classList) ||
                    void 0 === t ||
                    t.add("adfinity-hide-block");
                },
              },
              {
                key: "showWrapper",
                value: function () {
                  let t;
                  null === (t = this.wrapper.classList) ||
                    void 0 === t ||
                    t.remove("adfinity-hide-block");
                },
              },
              {
                key: "reloadAfterClose",
                value: function () {
                  const t = this,
                    e = parseInt(this.params.refreshAfterClose);
                  isNaN(e) ||
                    this.setTimeout(
                      "reloadAfterClose",
                      () => {
                        t.openFormat(), t.showWrapper();
                      },
                      1e3 * e
                    );
                },
              },
              {
                key: "onFirstCreativeStartedSignal",
                value: function (t) {
                  this.showWrapper();
                },
              },
              {
                key: "onCreativeRunSignal",
                value: function (t) {
                  this.showHeader(t);
                },
              },
              {
                key: "startTimer",
                value: function (t) {
                  const e = this;
                  if (
                    ((this.timeToClose = parseInt(t)),
                    !this.countdown && !isNaN(this.timeToClose))
                  ) {
                    this.wrapper.classList.add("adfinity-show-to-close");
                    const n = this.wrapper.querySelector(
                      ".adfinity-to-close-num"
                    );
                    n && (n.innerText = this.timeToClose.toString()),
                      this.setInterval(
                        "timerToClose",
                        () => {
                          --e.timeToClose < 0
                            ? (e.stopScheduler("timerToClose"),
                              e.wrapper.classList.remove(
                                "adfinity-show-to-close"
                              ),
                              (e.countdown = !1),
                              e.params.autoClose && e.close())
                            : n &&
                              ((n.innerText = e.timeToClose.toString()),
                              (e.countdown = !0));
                        },
                        1e3
                      );
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.removeStyle(),
                    Vo(qo(i.prototype), "destroy", this).call(this);
                },
              },
            ]) && Do(e.prototype, n),
            r && Do(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(to);
        function Ko(t) {
          return (
            (Ko =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ko(t)
          );
        }
        function Xo(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Ko(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== Ko(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Ko(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function Jo() {
          return (
            (Jo =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = ei(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Jo.apply(this, arguments)
          );
        }
        function Qo(t, e) {
          return (
            (Qo = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Qo(t, e)
          );
        }
        function ti(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = ei(t);
            if (e) {
              const o = ei(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Ko(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function ei(t) {
          return (
            (ei = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ei(t)
          );
        }
        Zo($o, "disableLazyLoad", !0);
        const ni = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Qo(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = ti(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "htmlHeader",
                value: function () {
                  return "<div class=\"adfinity-header\"><div class=\"adfinity-to-close\"><span>До закрытия блока </span><div class=\"adfinity-to-close-num\"></div></div><div class=\"adfinity-progress-line\"></div><div class=\"adfinity-close\"></div></div>";
                },
              },
              {
                key: "showHeader",
                value: function (t) {
                  Jo(ei(i.prototype), "showHeader", this).call(this, t)
                    ? (this.wrapper.classList.add("adfinity-z-index"),
                      document
                        .querySelector("body")
                        .classList.add("adfinity-overflow-hidden"),
                      this.getBody().classList.remove(
                        "adfinity-body-no-shadow"
                      ))
                    : this.getBody().classList.add("adfinity-body-no-shadow");
                },
              },
              {
                key: "getHeaderStartParams",
                value: function (t) {
                  return (
                    !0 === t.isYAN &&
                      !0 !== this.params.wrapForever &&
                      (t.hideHeader = !0),
                    Jo(ei(i.prototype), "getHeaderStartParams", this).call(
                      this,
                      t
                    )
                  );
                },
              },
              {
                key: "hideHeader",
                value: function () {
                  this.stopScheduler("timerLine"),
                    Jo(ei(i.prototype), "hideHeader", this).call(this),
                    this.wrapper.classList.remove("adfinity-z-index"),
                    document
                      .querySelector("body")
                      .classList.remove("adfinity-overflow-hidden");
                },
              },
              {
                key: "startTimer",
                value: function (t) {
                  const e = this;
                  if (
                    (Jo(ei(i.prototype), "startTimer", this).call(this, t),
                    !isNaN(this.timeToClose))
                  ) {
                    const n = this.wrapper.querySelector(
                      ".adfinity-progress-line"
                    );
                    if (n) {
                      const r = 10 / this.timeToClose;
                      this.setInterval(
                        "timerLine",
                        () => {
                          (n.style.width =
                            Number(n.style.width.replace("%", "")) + r + "%"),
                            e.timeToClose < 0 &&
                              (e.stopScheduler("timerLine"),
                              (n.style.width = "100%"));
                        },
                        100
                      );
                    }
                  }
                },
              },
              {
                key: "close",
                value: function () {
                  Jo(ei(i.prototype), "close", this).call(this),
                    this.hideHeader();
                },
              },
              {
                key: "destroy",
                value: function () {
                  let t, e;
                  null === (t = this.wrapper) ||
                    void 0 === t ||
                    null === (e = t.classList) ||
                    void 0 === e ||
                    e.remove("adfinity-z-index"),
                    document
                      .querySelector("body")
                      .classList.remove("adfinity-overflow-hidden"),
                    Jo(ei(i.prototype), "destroy", this).call(this);
                },
              },
            ]) && Xo(e.prototype, n),
            r && Xo(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })($o);
        function ri(t) {
          return (
            (ri =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ri(t)
          );
        }
        function oi(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, li(r.key), r);
          }
        }
        function ii() {
          return (
            (ii =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = ci(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            ii.apply(this, arguments)
          );
        }
        function ai(t, e) {
          return (
            (ai = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            ai(t, e)
          );
        }
        function ui(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = ci(t);
            if (e) {
              const o = ci(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === ri(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return si(t);
            })(this, n);
          };
        }
        function si(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ci(t) {
          return (
            (ci = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            ci(t)
          );
        }
        function li(t) {
          const e = (function (t, e) {
            if ("object" !== ri(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== ri(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === ri(e) ? e : String(e);
        }
        const fi = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ai(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = ui(i);
          function i() {
            let t, e, n, r;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var a = arguments.length, u = new Array(a), s = 0; s < a; s++)
              u[s] = arguments[s];
            return (
              (t = o.call.apply(o, [this].concat(u))),
              (e = si(t)),
              (r = null),
              (n = li((n = "substrateNode"))) in e
                ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = r),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "run",
                value: function () {
                  if (!ii(ci(i.prototype), "run", this).call(this)) return !1;
                  this.renderSubstrate();
                },
              },
              {
                key: "createWrapper",
                value: function () {
                  return (
                    !!ii(ci(i.prototype), "createWrapper", this).call(this) &&
                    (this.params.position &&
                      this.wrapper.classList.add(
                        "adfinity-position-" + this.params.position
                      ),
                    this.wrapper)
                  );
                },
              },
              {
                key: "htmlHeader",
                value: function () {
                  let t = "";
                  return (
                    this.params.positionPanelClose &&
                      (t = "adfinity-header-position-".concat(
                        this.params.positionPanelClose
                      )),
                    "<div class=\"adfinity-header ".concat(t, "\">") +
                      "<div class=\"adfinity-to-close\"><div class=\"adfinity-to-close-num\"></div></div><div class=\"adfinity-close\"></div></div>"
                  );
                },
              },
              {
                key: "renderSubstrate",
                value: function () {
                  this.params.hideBottomSubstrate ||
                    (this.substrateNode ||
                      (document.body.insertAdjacentHTML(
                        "beforeend",
                        "<div id=\"adfinity-overlay-substrate\"></div>"
                      ),
                      (this.substrateNode = document.getElementById(
                        "adfinity-overlay-substrate"
                      ))),
                    void 0 !== this.params.height
                      ? (this.substrateNode.style.height =
                          this.params.height + this.params.unitsMeasurement)
                      : getComputedStyle(this.getBody()).height > 40 &&
                        (this.substrateNode.style.height = getComputedStyle(
                          this.getBody()
                        ).height));
                },
              },
              {
                key: "formatShow",
                value: function () {
                  this &&
                    null != this &&
                    this.wrapper &&
                    (this.wrapper.classList.contains("adfinity-formatHide") &&
                      this.wrapper.classList.remove("adfinity-formatHide"),
                    this.wrapper.classList.contains(
                      "adfinity-formatHideLight"
                    ) &&
                      this.wrapper.classList.remove(
                        "adfinity-formatHideLight"
                      ));
                },
              },
              {
                key: "formatHide",
                value: function () {
                  const t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  this &&
                    null != this &&
                    this.wrapper &&
                    (t
                      ? this.wrapper.classList.contains(
                          "adfinity-formatHideLight"
                        ) ||
                        this.wrapper.classList.add("adfinity-formatHideLight")
                      : this.wrapper.classList.contains(
                          "adfinity-formatHide"
                        ) || this.wrapper.classList.add("adfinity-formatHide"));
                },
              },
              {
                key: "closeFormat",
                value: function () {
                  ii(ci(i.prototype), "hideWrapper", this).call(this),
                    ii(ci(i.prototype), "sendCommand", this).call(
                      this,
                      "pauseWork"
                    ),
                    this.removeSubstrate();
                },
              },
              {
                key: "openFormat",
                value: function () {
                  ii(ci(i.prototype), "sendCommand", this).call(
                    this,
                    "unpauseWork"
                  ),
                    this.renderSubstrate();
                },
              },
              {
                key: "removeSubstrate",
                value: function () {
                  this.substrateNode &&
                    ((this.substrateNode = null),
                    document
                      .getElementById("adfinity-overlay-substrate")
                      .remove());
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.substrateNode && this.substrateNode.remove(),
                    ii(ci(i.prototype), "destroy", this).call(this);
                },
              },
            ]),
            n && oi(e.prototype, n),
            r && oi(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })($o);
        function di(t) {
          return (
            (di =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            di(t)
          );
        }
        function yi(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== di(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== di(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === di(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function hi(t, e) {
          return (
            (hi = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            hi(t, e)
          );
        }
        function pi(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = vi(t);
            if (e) {
              const o = vi(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === di(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function vi(t) {
          return (
            (vi = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            vi(t)
          );
        }
        const bi = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && hi(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = pi(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            n && yi(e.prototype, n),
            r && yi(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(xo);
        function mi(t) {
          return (
            (mi =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            mi(t)
          );
        }
        function gi(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== mi(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== mi(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === mi(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function wi() {
          return (
            (wi =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Pi(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            wi.apply(this, arguments)
          );
        }
        function Si(t, e) {
          return (
            (Si = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Si(t, e)
          );
        }
        function ki(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Pi(t);
            if (e) {
              const o = Pi(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === mi(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function Pi(t) {
          return (
            (Pi = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Pi(t)
          );
        }
        function Oi(t) {
          return (
            (Oi =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Oi(t)
          );
        }
        function Ci(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Oi(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== Oi(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Oi(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function ji(t, e) {
          return (
            (ji = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            ji(t, e)
          );
        }
        function Ri(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = _i(t);
            if (e) {
              const o = _i(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Oi(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function _i(t) {
          return (
            (_i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            _i(t)
          );
        }
        const xi = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ji(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Ri(i);
          function i() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              o.apply(this, arguments)
            );
          }
          return (
            (e = i),
            n && Ci(e.prototype, n),
            r && Ci(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(
          (function (t) {
            !(function (t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && Si(t, e);
            })(i, t);
            let e,
              n,
              r,
              o = ki(i);
            function i() {
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                o.apply(this, arguments)
              );
            }
            return (
              (e = i),
              (n = [
                {
                  key: "run",
                  value: function () {
                    if (!wi(Pi(i.prototype), "run", this).call(this)) return !1;
                    this.launchCreativeManager();
                  },
                },
              ]) && gi(e.prototype, n),
              r && gi(e, r),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              i
            );
          })(Ur)
        );
        function Ti(t) {
          return (
            (Ti =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ti(t)
          );
        }
        function Ii(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                t,
                ((o = r.key),
                (i = void 0),
                (i = (function (t, e) {
                  if ("object" !== Ti(t) || null === t) return t;
                  const n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    const r = n.call(t, e || "default");
                    if ("object" !== Ti(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(o, "string")),
                "symbol" === Ti(i) ? i : String(i)),
                r
              );
          }
          let o, i;
        }
        function Li() {
          return (
            (Li =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = Bi(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Li.apply(this, arguments)
          );
        }
        function Ei(t, e) {
          return (
            (Ei = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Ei(t, e)
          );
        }
        function Ni(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Bi(t);
            if (e) {
              const o = Bi(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return (function (t, e) {
              if (e && ("object" === Ti(e) || "function" === typeof e))
                return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(this, n);
          };
        }
        function Bi(t) {
          return (
            (Bi = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Bi(t)
          );
        }
        const Ai = {
          formats: {
            overlay: fi,
            fullscreen: ni,
            content: xo,
            sidebar: Fo,
            trap: (function (t) {
              !(function (t, e) {
                if ("function" !== typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && Ei(t, e);
              })(i, t);
              let e,
                n,
                r,
                o = Ni(i);
              function i() {
                let t;
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return (
                  (t = o.call.apply(o, [this].concat(n))).params
                    .switchOnInternalLinkBlock &&
                    (t.finishWrappingImmediately = !0),
                  (t.launchPermissions.trapShow = !1),
                  t.addEventListener(
                    "mouseOverTop",
                    window,
                    "mousemove",
                    (e) => {
                      e.y <= 50 && (t.launchPermissions.trapShow = !0);
                    }
                  ),
                  t
                );
              }
              return (
                (e = i),
                (n = [
                  {
                    key: "canRun",
                    value: function () {
                      return (
                        Li(Bi(i.prototype), "canRun", this).call(this) &&
                        window.innerWidth > this.params.widthDevice
                      );
                    },
                  },
                  {
                    key: "createWrapper",
                    value: function () {
                      const t = Li(Bi(i.prototype), "createWrapper", this).call(
                        this
                      );
                      return (
                        t &&
                          this.setTimeout(
                            "forTrap",
                            () => {
                              return t.classList.remove("adfinity-trap-hidden");
                            },
                            0
                          ),
                        t
                      );
                    },
                  },
                  {
                    key: "htmlWrapper",
                    value: function () {
                      let t,
                        e = this.params.switchOnInternalLinkBlock
                          ? this.renderInternalLink()
                          : "",
                        n = this.params.switchOnAdvertBlock
                          ? "<div class=\"adfinity-trap-body\"></div>`;"
                          : "";
                      return (
                        (t =
                          "internalLink" === this.params.whichBlockFirst
                            ? e + n
                            : n + e),
                        "<div "
                          .concat(
                            this.getWrapAttributes(["adfinity-trap-hidden"]),
                            "><div class=\"adfinity-body\">"
                          )
                          .concat(t, "</div></div>")
                      );
                    },
                  },
                  {
                    key: "getBody",
                    value: function () {
                      return this.wrapper.querySelector(".adfinity-trap-body");
                    },
                  },
                  {
                    key: "renderInternalLink",
                    value: function () {
                      const t =
                          this.params.internalLinkList[
                            Math.floor(
                              Math.random() *
                                this.params.internalLinkList.length
                            )
                          ],
                        e = this.params.position,
                        n = [
                          "full" === e
                            ? ""
                            : ".adfinity-trap-hidden{"
                                .concat(e, ":-")
                                .concat(this.params.width - 5, "px!important}"),
                          ".adfinity-trap-content{background-color:".concat(
                            this.params.colorBackground,
                            "}"
                          ),
                          ".adfinity-trap-title{color:".concat(
                            this.params.colorTitle,
                            "}"
                          ),
                          ".adfinity-trap-description{color:".concat(
                            this.params.colorDecription,
                            "}"
                          ),
                          ".adfinity-trap-button{color:"
                            .concat(
                              this.params.colorBtnTxt,
                              ";background-color:"
                            )
                            .concat(this.params.colorBtn, "}"),
                          ".adfinity-trap-img{background-image:url('".concat(
                            t.image,
                            "')!important}"
                          ),
                        ];
                      W.addStyle("trap", n.join(""));
                      const r = '<div class="adfinity-trap-title">'.concat(
                          t.title,
                          "</div>"
                        ),
                        o = t.description
                          ? '<div class="adfinity-trap-description">'.concat(
                              t.description,
                              "</div>"
                            )
                          : "",
                        i = '<div class="adfinity-trap-text">'
                          .concat(r)
                          .concat(o)
                          .concat(
                            '<div class="adfinity-trap-button">Читать статью</div>',
                            "</div>"
                          );
                      return "<a href=\""
                        .concat(t.url, "\" class=\"adfinity-trap-content\">")
                        .concat(i)
                        .concat(
                          "<div class=\"adfinity-trap-img-block\"><div class=\"adfinity-trap-img\"></div></div>",
                          "</a>"
                        );
                    },
                  },
                ]) && Ii(e.prototype, n),
                r && Ii(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                i
              );
            })(fi),
            topSticky: go,
            rv: bi,
            nowrap: xi,
          },
          create: function (t, e) {
            let n,
              r = e.type;
            return (
              "function" === typeof this.formats[r]
                ? (n = new this.formats[r](t, e))
                : ((n = null), console.error("Нет формата " + r)),
              n
            );
          },
        };
        function Wi(t) {
          return (
            (Wi =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Wi(t)
          );
        }
        function Mi(t, e) {
          let n =
            ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (!t) return;
                if ("string" === typeof t) return Fi(t, e);
                let n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return Fi(t, e);
              })(t)) ||
              (e && t && "number" === typeof t.length)
            ) {
              n && (t = n);
              let r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          let i,
            a = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              const t = n.next();
              return (a = t.done), t;
            },
            e: function (t) {
              (u = !0), (i = t);
            },
            f: function () {
              try {
                a || null == n.return || n.return();
              } finally {
                if (u) throw i;
              }
            },
          };
        }
        function Fi(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function Hi(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, Zi(r.key), r);
          }
        }
        function Di(t, e) {
          return (
            (Di = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Di(t, e)
          );
        }
        function Vi(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = Yi(t);
            if (e) {
              const o = Yi(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return zi(this, n);
          };
        }
        function zi(t, e) {
          if (e && ("object" === Wi(e) || "function" === typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Ui(t);
        }
        function Ui(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Yi(t) {
          return (
            (Yi = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            Yi(t)
          );
        }
        function qi(t, e, n) {
          return (
            (e = Zi(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Zi(t) {
          const e = (function (t, e) {
            if ("object" !== Wi(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== Wi(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === Wi(e) ? e : String(e);
        }
        const Gi = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Di(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Vi(i);
          function i(t, e, n) {
            let r, a;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              qi(
                Ui((a = o.call(this, t, e))),
                "masterFieldName",
                "application"
              ),
              qi(Ui(a), "workersFieldName", "format"),
              qi(Ui(a), "application", null),
              qi(Ui(a), "format", null),
              qi(Ui(a), "initialized", !1),
              qi(Ui(a), "run", !1),
              qi(Ui(a), "blockCaption", !1),
              qi(Ui(a), "mediaFormatType", !1),
              qi(Ui(a), "styles", !1),
              a.initManager(t, e),
              (a.blockId = n),
              (a.blockCaption = a.params.blockCaption),
              (a.mediaFormatType =
                null !== (r = a.params.mediaFormatType) && void 0 !== r
                  ? r
                  : "D"),
              a.checkUrl(a.params.urlsForbidden, a.params.urlsAllowed) ||
                a.log("Не выводить блок на этой странице"),
              a.checkWidthWindow(a.params.widthWindowToShow) ||
                a.log(
                  "Не выводить блок при текущей ширине экрана: " +
                    window.innerWidth
                ),
              a.validParams(e.params, e.format)
                ? (a.loadWorkers(e.format),
                  a.format ? ((a.initialized = !0), a) : zi(a))
                : (a.err("Не валидные параметры"), zi(a))
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "loadWorker",
                value: function (t, e) {
                  return (
                    (e.params.blockCaption = this.blockCaption),
                    (e.params.mediaFormatType = this.mediaFormatType),
                    Ai.create(t, e)
                  );
                },
              },
              {
                key: "checkUrl",
                value: function (t, e) {
                  let n = !0,
                    r = window.location.href.split(window.location.host)[1];
                  if (Array.isArray(e) && e.length > 0) {
                    n = !1;
                    let o,
                      i = Mi(e);
                    try {
                      for (i.s(); !(o = i.n()).done; ) {
                        const a = o.value,
                          u = new RegExp(a);
                        if (r.match(u)) {
                          n = !0;
                          break;
                        }
                      }
                    } catch (t) {
                      i.e(t);
                    } finally {
                      i.f();
                    }
                  }
                  if (!0 === n && Array.isArray(t) && t.length > 0) {
                    let s,
                      c = Mi(t);
                    try {
                      for (c.s(); !(s = c.n()).done; ) {
                        const l = s.value,
                          f = new RegExp(l);
                        if (r.match(f)) {
                          n = !1;
                          break;
                        }
                      }
                    } catch (t) {
                      c.e(t);
                    } finally {
                      c.f();
                    }
                  }
                  return n;
                },
              },
              {
                key: "checkWidthWindow",
                value: function () {
                  const t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    e = !t.min || t.min < window.innerWidth,
                    n = !t.max || window.innerWidth <= t.max;
                  return e && n;
                },
              },
              {
                key: "validParams",
                value: function (t, e) {
                  let n = !1;
                  return (
                    e.type
                      ? e.params || (n = "Не заданы параметры формата")
                      : (n = "Не задан формат"),
                    !1 === n || (this.err(n), !1)
                  );
                },
              },
              {
                key: "addToPage",
                value: function () {
                  return this.format.addToPage();
                },
              },
              {
                key: "tryRun",
                value: function () {
                  return this.run
                    ? "alreadyRun"
                    : !(
                        !this.getCanShowOnPage() ||
                        !this.format.canRun() ||
                        (this.log("Запуск блока"),
                        this.format.run(),
                        (this.run = !0),
                        this.initStyles(this.params.styles),
                        0)
                      );
                },
              },
              {
                key: "getCanShowOnPage",
                value: function () {
                  return (
                    this.checkWidthWindow(this.params.widthWindowToShow) &&
                    this.checkUrl(
                      this.params.urlsForbidden,
                      this.params.urlsAllowed
                    )
                  );
                },
              },
              {
                key: "initStyles",
                value: function (t) {
                  t && W.addStyle("block_" + this.blockId, t);
                },
              },
              {
                key: "onExternalLaunchCommand",
                value: function () {
                  this.sendCommand("externalLaunch");
                },
              },
            ]),
            n && Hi(e.prototype, n),
            r && Hi(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p);
        function $i(t) {
          return (
            ($i =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" === typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            $i(t)
          );
        }
        function Ki(t, e) {
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, oa(r.key), r);
          }
        }
        function Xi() {
          return (
            (Xi =
              "undefined" !== typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (t, e, n) {
                    const r = (function (t, e) {
                      for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, e) &&
                        null !== (t = na(t));

                      );
                      return t;
                    })(t, e);
                    if (r) {
                      const o = Object.getOwnPropertyDescriptor(r, e);
                      return o.get
                        ? o.get.call(arguments.length < 3 ? t : n)
                        : o.value;
                    }
                  }),
            Xi.apply(this, arguments)
          );
        }
        function Ji(t, e) {
          return (
            (Ji = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            Ji(t, e)
          );
        }
        function Qi(t) {
          const e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], () => {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            let n,
              r = na(t);
            if (e) {
              const o = na(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return ta(this, n);
          };
        }
        function ta(t, e) {
          if (e && ("object" === $i(e) || "function" === typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return ea(t);
        }
        function ea(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function na(t) {
          return (
            (na = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            na(t)
          );
        }
        function ra(t, e, n) {
          return (
            (e = oa(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function oa(t) {
          const e = (function (t, e) {
            if ("object" !== $i(t) || null === t) return t;
            const n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(t, e || "default");
              if ("object" !== $i(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(t, "string");
          return "symbol" === $i(e) ? e : String(e);
        }
        (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ji(t, e);
          })(i, t);
          let e,
            n,
            r,
            o = Qi(i);
          function i(t, e) {
            let n;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ra(ea((n = o.call(this, t, e))), "workersFieldName", "blocks"),
              ra(ea(n), "blocks", {}),
              ra(ea(n), "howManyWorkers", "many"),
              ra(ea(n), "listAddToPage", new Map()),
              n.initManager(t, e),
              W.init(n.params),
              n.canRun(e)
                ? (n.testLunchInfo(),
                  er.initBefore(n.params.creativesConfig),
                  n.loadWorkers(e.blocks),
                  er.initAfter(n.params.creativesConfig),
                  n.loadStyles(n.params.staticUrl),
                  n.isLogsOn() &&
                    document.addEventListener("DOMContentLoaded", () => {
                      return n.publicationBoardOn();
                    }),
                  n.setInterval(
                    "mainCycleOfBlocks",
                    () => {
                      return n.tryRunBlocks();
                    },
                    50
                  ),
                  n.params.is_spa && n.reloadApplicationIfPageChange(),
                  n)
                : ta(n)
            );
          }
          return (
            (e = i),
            (r = [
              {
                key: "startApplication",
                value: function () {
                  const t = window.adfinityData;
                  window.adfinity = new this(null, t);
                },
              },
            ]),
            (n = [
              {
                key: "canRun",
                value: function (t) {
                  return W.checkDomain(this.params.domains)
                    ? W.checkUrlForShow(this.params.url_exception)
                      ? 0 !== t.blocks.length
                      : (this.err("На этой странице исключён вывод рекламы"),
                        !1)
                    : (this.err("Домена нет среди разрешённых"), !1);
                },
              },
              {
                key: "block",
                value: function (t) {
                  return this.blocks[t];
                },
              },
              {
                key: "loadWorker",
                value: function (t, e, n) {
                  const r = new Gi(t, e, n);
                  if (r.initialized) return this.addToPage(r), r;
                },
              },
              {
                key: "loadBlock",
                value: function (t, e) {
                  return (this.blocks[e] = this.loadWorker(this, t, e));
                },
              },
              {
                key: "addToPage",
                value: function (t) {
                  let e,
                    n,
                    r =
                      null !==
                        (e =
                          null === (n = t.addToPage) || void 0 === n
                            ? void 0
                            : n.call(t)) && void 0 !== e
                        ? e
                        : {};
                  for (const o in r)
                    if (!this.listAddToPage.has(o)) {
                      var i,
                        a,
                        u = r[o];
                      "function" === typeof u && u(),
                        "object" == $i(u) &&
                          u.tag &&
                          W.addTag(
                            u.tag,
                            u.attrs,
                            null !== (i = u.el) && void 0 !== i ? i : null,
                            null !== (a = u.pos) && void 0 !== a ? a : null
                          ),
                        this.listAddToPage.set(o, u);
                    }
                },
              },
              {
                key: "tryRunBlocks",
                value: function () {
                  for (const t in this.blocks) {
                    var e, n;
                    null === (e = (n = this.blocks[t]).tryRun) ||
                      void 0 === e ||
                      e.call(n);
                  }
                },
              },
              {
                key: "loadStyles",
                value: function (t) {
                  const e = {
                    href: t + "/css/adfinity.css",
                    rel: "stylesheet",
                    charset: "utf-8",
                  };
                  W.addTag("link", e), this.additionalStyles();
                },
              },
              {
                key: "additionalStyles",
                value: function () {
                  const t = {
                    "DEV-501": ".adfinity-hide-adfox {top: 100vh!important;}",
                  };
                  for (const e in t) W.addStyle(e, t[e]);
                },
              },
              {
                key: "testLunchInfo",
                value: function () {
                  ("#adfinity_info_on" === window.location.hash ||
                    location.search.search("adfinity_info_on") > -1) &&
                    this.logsOn(),
                    ("#adfinity_info_off" === window.location.hash ||
                      location.search.search("adfinity_info_off") > -1) &&
                      this.logsOff();
                },
              },
              {
                key: "onLogsOn",
                value: function () {
                  this.publicationBoardOn();
                },
              },
              {
                key: "onLogsOff",
                value: function () {
                  this.publicationBoardOff();
                },
              },
              {
                key: "publicationBoardOn",
                value: function () {
                  let t = '<div class="adfinity-pub-info-date">'
                      .concat(this.params.env, " / ")
                      .concat(this.params.published_at, "</div>"),
                    e = this.params.version.branch;
                  e = e.length > 15 ? e.substring(0, 15) + "..." : e;
                  const n = "<div class=\"adfinity-pub-info-branch\">".concat(
                      e,
                      "</div>"
                    ),
                    r = "<div class=\"adfinity-pub-info-revision\">".concat(
                      this.params.version.revision,
                      "</div>"
                    ),
                    o = "<div id=\"adfinity-pub-info\" class=\"adfinity-env-"
                      .concat(this.params.env, "\">")
                      .concat(t)
                      .concat(n)
                      .concat(r, "</div>");
                  document.body.insertAdjacentHTML("afterbegin", o);
                },
              },
              {
                key: "publicationBoardOff",
                value: function () {
                  let t;
                  null === (t = document.getElementById("adfinity-pub-info")) ||
                    void 0 === t ||
                    t.remove();
                },
              },
              {
                key: "launchBlock",
                value: function (t) {
                  this.sendCommand("externalLaunch", {}, t);
                },
              },
              {
                key: "event",
                value: function () {
                  return this;
                },
              },
              {
                key: "publish",
                value: function (t, e) {
                  "externalLaunch" === t && this.launchBlock(e);
                },
              },
              {
                key: "storage",
                value: function () {
                  return s;
                },
              },
              {
                key: "destroy",
                value: function () {
                  Xi(na(i.prototype), "destroy", this).call(this),
                    delete window.adfinity;
                },
              },
              {
                key: "reloadApplicationIfPageChange",
                value: function () {
                  const t = this;
                  this.setInterval(
                    "checkPageChange",
                    () => {
                      W.hasChangedCurrentPage() &&
                        (t.destroy(), t.constructor.startApplication());
                    },
                    10
                  );
                },
              },
            ]) && Ki(e.prototype, n),
            r && Ki(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            i
          );
        })(p).startApplication();
      },
      208: () => {},
    },
    n = {};
  function r(t) {
    const o = n[t];
    if (void 0 !== o) return o.exports;
    const i = (n[t] = { exports: {} });
    return e[t](i, i.exports, r), i.exports;
  }
  (r.m = e),
    (t = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        let a = 1 / 0;
        for (l = 0; l < t.length; l++) {
          for (var [n, o, i] = t[l], u = !0, s = 0; s < n.length; s++)
            (!1 & i || a >= i) && Object.keys(r.O).every((t) => r.O[t](n[s]))
              ? n.splice(s--, 1)
              : ((u = !1), i < a && (a = i));
          if (u) {
            t.splice(l--, 1);
            const c = o();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      i = i || 0;
      for (var l = t.length; l > 0 && t[l - 1][2] > i; l--) t[l] = t[l - 1];
      t[l] = [n, o, i];
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      const t = { 997: 0, 538: 0 };
      r.O.j = (e) => 0 === t[e];
      const e = (e, n) => {
          let o,
            i,
            [a, u, s] = n,
            c = 0;
          if (a.some((e) => 0 !== t[e])) {
            for (o in u) r.o(u, o) && (r.m[o] = u[o]);
            if (s) var l = s(r);
          }
          for (e && e(n); c < a.length; c++)
            (i = a[c]), r.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return r.O(l);
        },
        n = (self.webpackChunk = self.webpackChunk || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })(),
    r.O(void 0, [538], () => r(364));
  let o = r.O(void 0, [538], () => r(208));
  o = r.O(o);
})();
/* Published at: 2025-04-16 19:40:24 | production | main | f0e2752370ba024ea9ac0d28f4127490f4d75a22 */
