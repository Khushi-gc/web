(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  62730,
  (e, i, t) => {
    !(function (n, r) {
      "use strict";
      var a = "function",
        o = "undefined",
        s = "object",
        l = "string",
        d = "major",
        c = "model",
        u = "name",
        m = "type",
        _ = "vendor",
        h = "version",
        g = "architecture",
        p = "console",
        f = "mobile",
        b = "tablet",
        w = "smarttv",
        x = "wearable",
        v = "embedded",
        y = "Amazon",
        j = "Apple",
        N = "ASUS",
        T = "BlackBerry",
        O = "Browser",
        C = "Chrome",
        k = "Firefox",
        I = "Google",
        P = "Huawei",
        E = "Microsoft",
        S = "Motorola",
        A = "Opera",
        F = "Samsung",
        R = "Sharp",
        M = "Sony",
        q = "Xiaomi",
        U = "Zebra",
        L = "Facebook",
        V = "Chromium OS",
        W = "Mac OS",
        $ = " Browser",
        D = function (e, i) {
          var t = {};
          for (var n in e)
            i[n] && i[n].length % 2 == 0
              ? (t[n] = i[n].concat(e[n]))
              : (t[n] = e[n]);
          return t;
        },
        G = function (e) {
          for (var i = {}, t = 0; t < e.length; t++)
            i[e[t].toUpperCase()] = e[t];
          return i;
        },
        B = function (e, i) {
          return typeof e === l && -1 !== H(i).indexOf(H(e));
        },
        H = function (e) {
          return e.toLowerCase();
        },
        z = function (e, i) {
          if (typeof e === l)
            return (
              (e = e.replace(/^\s\s*/, "")),
              typeof i === o ? e : e.substring(0, 500)
            );
        },
        X = function (e, i) {
          for (var t, n, r, o, l, d, c = 0; c < i.length && !l; ) {
            var u = i[c],
              m = i[c + 1];
            for (t = n = 0; t < u.length && !l && u[t]; )
              if ((l = u[t++].exec(e)))
                for (r = 0; r < m.length; r++)
                  (d = l[++n]),
                    typeof (o = m[r]) === s && o.length > 0
                      ? 2 === o.length
                        ? typeof o[1] == a
                          ? (this[o[0]] = o[1].call(this, d))
                          : (this[o[0]] = o[1])
                        : 3 === o.length
                        ? typeof o[1] !== a || (o[1].exec && o[1].test)
                          ? (this[o[0]] = d ? d.replace(o[1], o[2]) : void 0)
                          : (this[o[0]] = d ? o[1].call(this, d, o[2]) : void 0)
                        : 4 === o.length &&
                          (this[o[0]] = d
                            ? o[3].call(this, d.replace(o[1], o[2]))
                            : void 0)
                      : (this[o] = d || void 0);
            c += 2;
          }
        },
        Y = function (e, i) {
          for (var t in i)
            if (typeof i[t] === s && i[t].length > 0) {
              for (var n = 0; n < i[t].length; n++)
                if (B(i[t][n], e)) return "?" === t ? void 0 : t;
            } else if (B(i[t], e)) return "?" === t ? void 0 : t;
          return i.hasOwnProperty("*") ? i["*"] : e;
        },
        Z = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        Q = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [h, [u, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [h, [u, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [u, h],
            [/opios[\/ ]+([\w\.]+)/i],
            [h, [u, A + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [h, [u, A + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [h, [u, A]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [h, [u, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [h, [u, "Maxthon"]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
              /(heytap|ovi|115)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [u, h],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [h, [u, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [h, [u, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [h, [u, "UC" + O]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [h, [u, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [h, [u, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [h, [u, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [h, [u, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [h, [u, "Smart Lenovo " + O]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[u, /(.+)/, "$1 Secure " + O], h],
            [/\bfocus\/([\w\.]+)/i],
            [h, [u, k + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [h, [u, A + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [h, [u, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [h, [u, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [h, [u, A + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [h, [u, "MIUI" + $]],
            [/fxios\/([\w\.-]+)/i],
            [h, [u, k]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [h, [u, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [[u, /(.+)/, "$1Browser"], h],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[u, /(.+)/, "$1" + $], h],
            [/samsungbrowser\/([\w\.]+)/i],
            [h, [u, F + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [h, [u, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[u, "Sogou Mobile"], h],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [u, h],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [u],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
              /ome\/([\w\.]+).+qihu (360)[es]e/i,
            ],
            [h, u],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[u, L], h],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [u, h],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [h, [u, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [h, [u, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [h, [u, C + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[u, C + " WebView"], h],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [h, [u, "Android " + O]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [u, h],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [h, [u, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [h, u],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [
              u,
              [
                h,
                Y,
                {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              ],
            ],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [u, h],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[u, "Netscape"], h],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [u, h],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [h, [u, k + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
            ],
            [u, [h, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [u, [h, /master.|lts./, ""]],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[g, "amd64"]],
            [/(ia32(?=;))/i],
            [[g, H]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[g, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[g, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[g, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[g, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[g, /ower/, "", H]],
            [/(sun4\w)[;\)]/i],
            [[g, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[g, H]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [c, [_, F], [m, b]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [c, [_, F], [m, f]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [c, [_, j], [m, f]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [c, [_, j], [m, b]],
            [/(macintosh);/i],
            [c, [_, j]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [c, [_, R], [m, f]],
            [/(?:honor)([-\w ]+)[;\)]/i],
            [c, [_, "Honor"], [m, f]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [c, [_, P], [m, b]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [c, [_, P], [m, f]],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
            ],
            [
              [c, /_/g, " "],
              [_, q],
              [m, f],
            ],
            [
              /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
              /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
            ],
            [
              [c, /_/g, " "],
              [_, q],
              [m, b],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [c, [_, "OPPO"], [m, f]],
            [/\b(opd2\d{3}a?) bui/i],
            [c, [_, "OPPO"], [m, b]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [c, [_, "Vivo"], [m, f]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [c, [_, "Realme"], [m, f]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [c, [_, S], [m, f]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [c, [_, S], [m, b]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [c, [_, "LG"], [m, b]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [c, [_, "LG"], [m, f]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [c, [_, "Lenovo"], [m, b]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [c, /_/g, " "],
              [_, "Nokia"],
              [m, f],
            ],
            [/(pixel c)\b/i],
            [c, [_, I], [m, b]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [c, [_, I], [m, f]],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [c, [_, M], [m, f]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [c, "Xperia Tablet"],
              [_, M],
              [m, b],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [c, [_, "OnePlus"], [m, f]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [c, [_, y], [m, b]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [c, /(.+)/g, "Fire Phone $1"],
              [_, y],
              [m, f],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [c, _, [m, b]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [c, [_, T], [m, f]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [c, [_, N], [m, b]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [c, [_, N], [m, f]],
            [/(nexus 9)/i],
            [c, [_, "HTC"], [m, b]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [_, [c, /_/g, " "], [m, f]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [c, [_, "TCL"], [m, b]],
            [/(itel) ((\w+))/i],
            [
              [_, H],
              c,
              [m, Y, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [c, [_, "Acer"], [m, b]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [c, [_, "Meizu"], [m, f]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [c, [_, "Ulefone"], [m, f]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [c, [_, "Energizer"], [m, f]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [c, [_, "Cat"], [m, f]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [c, [_, "Smartfren"], [m, f]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [c, [_, "Nothing"], [m, f]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [_, c, [m, f]],
            [
              /(imo) (tab \w+)/i,
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [_, c, [m, b]],
            [/(surface duo)/i],
            [c, [_, E], [m, b]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [c, [_, "Fairphone"], [m, f]],
            [/(u304aa)/i],
            [c, [_, "AT&T"], [m, f]],
            [/\bsie-(\w*)/i],
            [c, [_, "Siemens"], [m, f]],
            [/\b(rct\w+) b/i],
            [c, [_, "RCA"], [m, b]],
            [/\b(venue[\d ]{2,7}) b/i],
            [c, [_, "Dell"], [m, b]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [c, [_, "Verizon"], [m, b]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [c, [_, "Barnes & Noble"], [m, b]],
            [/\b(tm\d{3}\w+) b/i],
            [c, [_, "NuVision"], [m, b]],
            [/\b(k88) b/i],
            [c, [_, "ZTE"], [m, b]],
            [/\b(nx\d{3}j) b/i],
            [c, [_, "ZTE"], [m, f]],
            [/\b(gen\d{3}) b.+49h/i],
            [c, [_, "Swiss"], [m, f]],
            [/\b(zur\d{3}) b/i],
            [c, [_, "Swiss"], [m, b]],
            [/\b((zeki)?tb.*\b) b/i],
            [c, [_, "Zeki"], [m, b]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[_, "Dragon Touch"], c, [m, b]],
            [/\b(ns-?\w{0,9}) b/i],
            [c, [_, "Insignia"], [m, b]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [c, [_, "NextBook"], [m, b]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[_, "Voice"], c, [m, f]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[_, "LvTel"], c, [m, f]],
            [/\b(ph-1) /i],
            [c, [_, "Essential"], [m, f]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [c, [_, "Envizen"], [m, b]],
            [/\b(trio[-\w\. ]+) b/i],
            [c, [_, "MachSpeed"], [m, b]],
            [/\btu_(1491) b/i],
            [c, [_, "Rotor"], [m, b]],
            [/(shield[\w ]+) b/i],
            [c, [_, "Nvidia"], [m, b]],
            [/(sprint) (\w+)/i],
            [_, c, [m, f]],
            [/(kin\.[onetw]{3})/i],
            [
              [c, /\./g, " "],
              [_, E],
              [m, f],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [c, [_, U], [m, b]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [c, [_, U], [m, f]],
            [/smart-tv.+(samsung)/i],
            [_, [m, w]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [c, /^/, "SmartTV"],
              [_, F],
              [m, w],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [_, "LG"],
              [m, w],
            ],
            [/(apple) ?tv/i],
            [_, [c, j + " TV"], [m, w]],
            [/crkey/i],
            [
              [c, C + "cast"],
              [_, I],
              [m, w],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [c, [_, y], [m, w]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [c, [_, R], [m, w]],
            [/(bravia[\w ]+)( bui|\))/i],
            [c, [_, M], [m, w]],
            [/(mitv-\w{5}) bui/i],
            [c, [_, q], [m, w]],
            [/Hbbtv.*(technisat) (.*);/i],
            [_, c, [m, w]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [_, z],
              [c, z],
              [m, w],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[m, w]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [_, c, [m, p]],
            [/droid.+; (shield) bui/i],
            [c, [_, "Nvidia"], [m, p]],
            [/(playstation [345portablevi]+)/i],
            [c, [_, M], [m, p]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [c, [_, E], [m, p]],
            [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
            [c, [_, F], [m, x]],
            [/((pebble))app/i],
            [_, c, [m, x]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [c, [_, j], [m, x]],
            [/droid.+; (glass) \d/i],
            [c, [_, I], [m, x]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [c, [_, U], [m, x]],
            [/droid.+; (glass) \d/i],
            [c, [_, I], [m, x]],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [_, c, [m, x]],
            [/; (quest( \d| pro)?)/i],
            [c, [_, L], [m, x]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [_, [m, v]],
            [/(aeobc)\b/i],
            [c, [_, y], [m, v]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [c, [m, f]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [c, [m, b]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[m, b]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[m, f]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [c, [_, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [h, [u, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [u, h],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [h, [u, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [u, h],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [h, u],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [u, h],
            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
            [u, [h, Y, Z]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [h, Y, Z],
              [u, "Windows"],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [h, /_/g, "."],
              [u, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [u, W],
              [h, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [h, u],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [u, h],
            [/\(bb(10);/i],
            [h, [u, T]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [h, [u, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [h, [u, k + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [h, [u, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [h, [u, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [h, [u, C + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[u, V], h],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [u, h],
            [/(sunos) ?([\w\.\d]*)/i],
            [[u, "Solaris"], h],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [u, h],
          ],
        },
        J = function (e, i) {
          if ((typeof e === s && ((i = e), (e = void 0)), !(this instanceof J)))
            return new J(e, i).getResult();
          var t = typeof n !== o && n.navigator ? n.navigator : void 0,
            r = e || (t && t.userAgent ? t.userAgent : ""),
            p = t && t.userAgentData ? t.userAgentData : void 0,
            w = i ? D(Q, i) : Q,
            x = t && t.userAgent == r;
          return (
            (this.getBrowser = function () {
              var e,
                i = {};
              return (
                (i[u] = void 0),
                (i[h] = void 0),
                X.call(i, r, w.browser),
                (i[d] =
                  typeof (e = i[h]) === l
                    ? e.replace(/[^\d\.]/g, "").split(".")[0]
                    : void 0),
                x &&
                  t &&
                  t.brave &&
                  typeof t.brave.isBrave == a &&
                  (i[u] = "Brave"),
                i
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return (e[g] = void 0), X.call(e, r, w.cpu), e;
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e[_] = void 0),
                (e[c] = void 0),
                (e[m] = void 0),
                X.call(e, r, w.device),
                x && !e[m] && p && p.mobile && (e[m] = f),
                x &&
                  "Macintosh" == e[c] &&
                  t &&
                  typeof t.standalone !== o &&
                  t.maxTouchPoints &&
                  t.maxTouchPoints > 2 &&
                  ((e[c] = "iPad"), (e[m] = b)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return (
                (e[u] = void 0), (e[h] = void 0), X.call(e, r, w.engine), e
              );
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e[u] = void 0),
                (e[h] = void 0),
                X.call(e, r, w.os),
                x &&
                  !e[u] &&
                  p &&
                  p.platform &&
                  "Unknown" != p.platform &&
                  (e[u] = p.platform
                    .replace(/chrome os/i, V)
                    .replace(/macos/i, W)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return r;
            }),
            (this.setUA = function (e) {
              return (
                (r = typeof e === l && e.length > 500 ? z(e, 500) : e), this
              );
            }),
            this.setUA(r),
            this
          );
        };
      if (
        ((J.VERSION = "1.0.40"),
        (J.BROWSER = G([u, h, d])),
        (J.CPU = G([g])),
        (J.DEVICE = G([c, _, m, p, f, w, b, x, v])),
        (J.ENGINE = J.OS = G([u, h])),
        typeof t !== o)
      )
        i.exports && (t = i.exports = J), (t.UAParser = J);
      else if (typeof define === a && define.amd) e.r, void 0 !== J && e.v(J);
      else typeof n !== o && (n.UAParser = J);
      var K = typeof n !== o && (n.jQuery || n.Zepto);
      if (K && !K.ua) {
        var ee = new J();
        (K.ua = ee.getResult()),
          (K.ua.get = function () {
            return ee.getUA();
          }),
          (K.ua.set = function (e) {
            ee.setUA(e);
            var i = ee.getResult();
            for (var t in i) K.ua[t] = i[t];
          });
      }
    })("object" == typeof window ? window : e.e);
  },
  41447,
  (e, i, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = e.r(75705),
      r = n && "object" == typeof n && "default" in n ? n.default : n,
      a = e.r(62730),
      o = new a(),
      s = o.getBrowser(),
      l = o.getCPU(),
      d = o.getDevice(),
      c = o.getEngine(),
      u = o.getOS(),
      m = o.getUA(),
      _ = function (e) {
        return o.setUA(e);
      },
      h = function (e) {
        if (!e) return void console.error("No userAgent string was provided");
        var i = new a(e);
        return {
          UA: i,
          browser: i.getBrowser(),
          cpu: i.getCPU(),
          device: i.getDevice(),
          engine: i.getEngine(),
          os: i.getOS(),
          ua: i.getUA(),
          setUserAgent: function (e) {
            return i.setUA(e);
          },
        };
      },
      g = Object.freeze({
        ClientUAInstance: o,
        browser: s,
        cpu: l,
        device: d,
        engine: c,
        os: u,
        ua: m,
        setUa: _,
        parseUserAgent: h,
      });
    function p(e, i) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        i &&
          (n = n.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function f(e) {
      return (f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function b() {
      return (b =
        Object.assign ||
        function (e) {
          for (var i = 1; i < arguments.length; i++) {
            var t = arguments[i];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function w(e) {
      return (w = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function x(e, i) {
      return (x =
        Object.setPrototypeOf ||
        function (e, i) {
          return (e.__proto__ = i), e;
        })(e, i);
    }
    function v(e, i) {
      if (null == e) return {};
      var t,
        n,
        r = (function (e, i) {
          if (null == e) return {};
          var t,
            n,
            r = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]), i.indexOf(t) >= 0 || (r[t] = e[t]);
          return r;
        })(e, i);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (t = a[n]),
            !(i.indexOf(t) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, t) &&
              (r[t] = e[t]);
      }
      return r;
    }
    function y(e) {
      if (void 0 === e)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function j(e, i) {
      (null == i || i > e.length) && (i = e.length);
      for (var t = 0, n = Array(i); t < i; t++) n[t] = e[t];
      return n;
    }
    var N = "mobile",
      T = "tablet",
      O = "smarttv",
      C = "console",
      k = "wearable",
      I = "embedded",
      P = void 0,
      E = {
        Chrome: "Chrome",
        Firefox: "Firefox",
        Opera: "Opera",
        Yandex: "Yandex",
        Safari: "Safari",
        InternetExplorer: "Internet Explorer",
        Edge: "Edge",
        Chromium: "Chromium",
        Ie: "IE",
        MobileSafari: "Mobile Safari",
        EdgeChromium: "Edge Chromium",
        MIUI: "MIUI Browser",
        SamsungBrowser: "Samsung Browser",
      },
      S = {
        IOS: "iOS",
        Android: "Android",
        WindowsPhone: "Windows Phone",
        Windows: "Windows",
        MAC_OS: "Mac OS",
      },
      A = {
        isMobile: !1,
        isTablet: !1,
        isBrowser: !1,
        isSmartTV: !1,
        isConsole: !1,
        isWearable: !1,
      },
      F = function (e) {
        switch (e) {
          case N:
            return { isMobile: !0 };
          case T:
            return { isTablet: !0 };
          case O:
            return { isSmartTV: !0 };
          case C:
            return { isConsole: !0 };
          case k:
            return { isWearable: !0 };
          case P:
            return { isBrowser: !0 };
          case I:
            return { isEmbedded: !0 };
          default:
            return A;
        }
      },
      R = function (e) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "none";
        return e || i;
      },
      M = function () {
        return (
          !!("undefined" != typeof window && (window.navigator || navigator)) &&
          (window.navigator || navigator)
        );
      },
      q = function (e) {
        var i = M();
        return (
          i &&
          i.platform &&
          (-1 !== i.platform.indexOf(e) ||
            ("MacIntel" === i.platform &&
              i.maxTouchPoints > 1 &&
              !window.MSStream))
        );
      },
      U = function (e) {
        return e.type === N;
      },
      L = function (e) {
        return e.type === T;
      },
      V = function (e) {
        var i = e.type;
        return i === N || i === T;
      },
      W = function (e) {
        return e.type === O;
      },
      $ = function (e) {
        return e.type === P;
      },
      D = function (e) {
        return e.type === k;
      },
      G = function (e) {
        return e.type === C;
      },
      B = function (e) {
        return e.type === I;
      },
      H = function (e) {
        return R(e.vendor);
      },
      z = function (e) {
        return R(e.model);
      },
      X = function (e) {
        return R(e.type, "browser");
      },
      Y = function (e) {
        return e.name === S.Android;
      },
      Z = function (e) {
        return e.name === S.Windows;
      },
      Q = function (e) {
        return e.name === S.MAC_OS;
      },
      J = function (e) {
        return e.name === S.WindowsPhone;
      },
      K = function (e) {
        return e.name === S.IOS;
      },
      ee = function (e) {
        return R(e.version);
      },
      ei = function (e) {
        return R(e.name);
      },
      et = function (e) {
        return e.name === E.Chrome;
      },
      en = function (e) {
        return e.name === E.Firefox;
      },
      er = function (e) {
        return e.name === E.Chromium;
      },
      ea = function (e) {
        return e.name === E.Edge;
      },
      eo = function (e) {
        return e.name === E.Yandex;
      },
      es = function (e) {
        var i = e.name;
        return i === E.Safari || i === E.MobileSafari;
      },
      el = function (e) {
        return e.name === E.MobileSafari;
      },
      ed = function (e) {
        return e.name === E.Opera;
      },
      ec = function (e) {
        var i = e.name;
        return i === E.InternetExplorer || i === E.Ie;
      },
      eu = function (e) {
        return e.name === E.MIUI;
      },
      em = function (e) {
        return e.name === E.SamsungBrowser;
      },
      e_ = function (e) {
        return R(e.version);
      },
      eh = function (e) {
        return R(e.major);
      },
      eg = function (e) {
        return R(e.name);
      },
      ep = function (e) {
        return R(e.name);
      },
      ef = function (e) {
        return R(e.version);
      },
      eb = function () {
        var e = M(),
          i = e && e.userAgent && e.userAgent.toLowerCase();
        return "string" == typeof i && /electron/.test(i);
      },
      ew = function (e) {
        return "string" == typeof e && -1 !== e.indexOf("Edg/");
      },
      ex = function () {
        var e = M();
        return (
          e &&
          (/iPad|iPhone|iPod/.test(e.platform) ||
            ("MacIntel" === e.platform && e.maxTouchPoints > 1)) &&
          !window.MSStream
        );
      },
      ev = function () {
        return q("iPad");
      },
      ey = function () {
        return q("iPhone");
      },
      ej = function () {
        return q("iPod");
      },
      eN = function (e) {
        return R(e);
      };
    function eT(e) {
      var i = e || g,
        t = i.device,
        n = i.browser,
        r = i.os,
        a = i.engine,
        o = i.ua;
      return {
        isSmartTV: W(t),
        isConsole: G(t),
        isWearable: D(t),
        isEmbedded: B(t),
        isMobileSafari: el(n) || ev(),
        isChromium: er(n),
        isMobile: V(t) || ev(),
        isMobileOnly: U(t),
        isTablet: L(t) || ev(),
        isBrowser: $(t),
        isDesktop: $(t),
        isAndroid: Y(r),
        isWinPhone: J(r),
        isIOS: K(r) || ev(),
        isChrome: et(n),
        isFirefox: en(n),
        isSafari: es(n),
        isOpera: ed(n),
        isIE: ec(n),
        osVersion: ee(r),
        osName: ei(r),
        fullBrowserVersion: e_(n),
        browserVersion: eh(n),
        browserName: eg(n),
        mobileVendor: H(t),
        mobileModel: z(t),
        engineName: ep(a),
        engineVersion: ef(a),
        getUA: eN(o),
        isEdge: ea(n) || ew(o),
        isYandex: eo(n),
        deviceType: X(t),
        isIOS13: ex(),
        isIPad13: ev(),
        isIPhone13: ey(),
        isIPod13: ej(),
        isElectron: eb(),
        isEdgeChromium: ew(o),
        isLegacyEdge: ea(n) && !ew(o),
        isWindows: Z(r),
        isMacOs: Q(r),
        isMIUI: eu(n),
        isSamsungBrowser: em(n),
      };
    }
    var eO = W(d),
      eC = G(d),
      ek = D(d),
      eI = B(d),
      eP = el(s) || ev(),
      eE = er(s),
      eS = V(d) || ev(),
      eA = U(d),
      eF = L(d) || ev(),
      eR = $(d),
      eM = $(d),
      eq = Y(u),
      eU = J(u),
      eL = K(u) || ev(),
      eV = et(s),
      eW = en(s),
      e$ = es(s),
      eD = ed(s),
      eG = ec(s),
      eB = ee(u),
      eH = ei(u),
      ez = e_(s),
      eX = eh(s),
      eY = eg(s),
      eZ = H(d),
      eQ = z(d),
      eJ = ep(c),
      eK = ef(c),
      e0 = eN(m),
      e1 = ea(s) || ew(m),
      e2 = eo(s),
      e3 = X(d),
      e6 = ex(),
      e4 = ev(),
      e9 = ey(),
      e7 = ej(),
      e5 = eb(),
      e8 = ew(m),
      ie = ea(s) && !ew(m),
      ii = Z(u),
      it = Q(u),
      ir = eu(s),
      ia = em(s);
    function io(e) {
      return h(e || window.navigator.userAgent);
    }
    (t.AndroidView = function (e) {
      var i = e.renderWithFragment,
        t = e.children,
        a = v(e, ["renderWithFragment", "children"]);
      return eq
        ? i
          ? r.createElement(n.Fragment, null, t)
          : r.createElement("div", a, t)
        : null;
    }),
      (t.BrowserTypes = E),
      (t.BrowserView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eR
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.ConsoleView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eC
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.CustomView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = (e.viewClassName, e.style, e.condition),
          o = v(e, [
            "renderWithFragment",
            "children",
            "viewClassName",
            "style",
            "condition",
          ]);
        return a
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", o, t)
          : null;
      }),
      (t.IEView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eG
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.IOSView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eL
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.MobileOnlyView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a =
            (e.viewClassName,
            e.style,
            v(e, ["renderWithFragment", "children", "viewClassName", "style"]));
        return eA
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.MobileView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eS
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.OsTypes = S),
      (t.SmartTVView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eO
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.TabletView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eF
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.WearableView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return ek
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.WinPhoneView = function (e) {
        var i = e.renderWithFragment,
          t = e.children,
          a = v(e, ["renderWithFragment", "children"]);
        return eU
          ? i
            ? r.createElement(n.Fragment, null, t)
            : r.createElement("div", a, t)
          : null;
      }),
      (t.browserName = eY),
      (t.browserVersion = eX),
      (t.deviceDetect = function (e) {
        var i,
          t,
          n,
          r,
          a = e ? h(e) : g,
          o = a.device,
          s = a.browser,
          l = a.engine,
          d = a.os,
          c = a.ua,
          u = F(o.type),
          m = u.isBrowser,
          _ = u.isMobile,
          f = u.isTablet,
          b = u.isSmartTV,
          w = u.isConsole,
          x = u.isWearable,
          v = u.isEmbedded;
        if (m)
          return {
            isBrowser: m,
            browserMajorVersion: R(s.major),
            browserFullVersion: R(s.version),
            browserName: R(s.name),
            engineName: R(l.name),
            engineVersion: R(l.version),
            osName: R(d.name),
            osVersion: R(d.version),
            userAgent: R(c),
          };
        if (b)
          return {
            isSmartTV: b,
            engineName: R(l.name),
            engineVersion: R(l.version),
            osName: R(d.name),
            osVersion: R(d.version),
            userAgent: R(c),
          };
        if (w)
          return {
            isConsole: w,
            engineName: R(l.name),
            engineVersion: R(l.version),
            osName: R(d.name),
            osVersion: R(d.version),
            userAgent: R(c),
          };
        if (_ || f) {
          return (
            (i = u),
            (t = o),
            (n = d),
            (r = c),
            (function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var t = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? p(Object(t), !0).forEach(function (i) {
                      var n, r, a;
                      (n = e),
                        (r = i),
                        (a = t[i]),
                        r in n
                          ? Object.defineProperty(n, r, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (n[r] = a);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : p(Object(t)).forEach(function (i) {
                      Object.defineProperty(
                        e,
                        i,
                        Object.getOwnPropertyDescriptor(t, i)
                      );
                    });
              }
              return e;
            })({}, i, {
              vendor: R(t.vendor),
              model: R(t.model),
              os: R(n.name),
              osVersion: R(n.version),
              ua: R(r),
            })
          );
        }
        return x
          ? {
              isWearable: x,
              engineName: R(l.name),
              engineVersion: R(l.version),
              osName: R(d.name),
              osVersion: R(d.version),
              userAgent: R(c),
            }
          : v
          ? {
              isEmbedded: v,
              vendor: R(o.vendor),
              model: R(o.model),
              engineName: R(l.name),
              engineVersion: R(l.version),
              osName: R(d.name),
              osVersion: R(d.version),
              userAgent: R(c),
            }
          : void 0;
      }),
      (t.deviceType = e3),
      (t.engineName = eJ),
      (t.engineVersion = eK),
      (t.fullBrowserVersion = ez),
      (t.getSelectorsByUserAgent = function (e) {
        if (!e || "string" != typeof e)
          return void console.error("No valid user agent string was provided");
        var i = h(e);
        return eT({
          device: i.device,
          browser: i.browser,
          os: i.os,
          engine: i.engine,
          ua: i.ua,
        });
      }),
      (t.getUA = e0),
      (t.isAndroid = eq),
      (t.isBrowser = eR),
      (t.isChrome = eV),
      (t.isChromium = eE),
      (t.isConsole = eC),
      (t.isDesktop = eM),
      (t.isEdge = e1),
      (t.isEdgeChromium = e8),
      (t.isElectron = e5),
      (t.isEmbedded = eI),
      (t.isFirefox = eW),
      (t.isIE = eG),
      (t.isIOS = eL),
      (t.isIOS13 = e6),
      (t.isIPad13 = e4),
      (t.isIPhone13 = e9),
      (t.isIPod13 = e7),
      (t.isLegacyEdge = ie),
      (t.isMIUI = ir),
      (t.isMacOs = it),
      (t.isMobile = eS),
      (t.isMobileOnly = eA),
      (t.isMobileSafari = eP),
      (t.isOpera = eD),
      (t.isSafari = e$),
      (t.isSamsungBrowser = ia),
      (t.isSmartTV = eO),
      (t.isTablet = eF),
      (t.isWearable = ek),
      (t.isWinPhone = eU),
      (t.isWindows = ii),
      (t.isYandex = e2),
      (t.mobileModel = eQ),
      (t.mobileVendor = eZ),
      (t.osName = eH),
      (t.osVersion = eB),
      (t.parseUserAgent = h),
      (t.setUserAgent = function (e) {
        return _(e);
      }),
      (t.useDeviceData = io),
      (t.useDeviceSelectors = function (e) {
        var i = io(e || window.navigator.userAgent);
        return [eT(i), i];
      }),
      (t.useMobileOrientation = function () {
        var e,
          i =
            (function (e) {
              if (Array.isArray(e)) return e;
            })(
              (e = n.useState(function () {
                var e = 90 * (window.innerWidth > window.innerHeight);
                return {
                  isPortrait: 0 === e,
                  isLandscape: 90 === e,
                  orientation: 0 === e ? "portrait" : "landscape",
                };
              }))
            ) ||
            (function (e, i) {
              var t,
                n,
                r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != r) {
                var a = [],
                  o = !0,
                  s = !1;
                try {
                  for (
                    r = r.call(e);
                    !(o = (t = r.next()).done) &&
                    (a.push(t.value), 2 !== a.length);
                    o = !0
                  );
                } catch (e) {
                  (s = !0), (n = e);
                } finally {
                  try {
                    o || null == r.return || r.return();
                  } finally {
                    if (s) throw n;
                  }
                }
                return a;
              }
            })(e, 2) ||
            (function (e, i) {
              if (e) {
                if ("string" == typeof e) return j(e, 2);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t)
                )
                  return Array.from(e);
                if (
                  "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                )
                  return j(e, 2);
              }
            })(e, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          t = i[0],
          r = i[1],
          a = n.useCallback(
            function () {
              var e = 90 * (window.innerWidth > window.innerHeight),
                i = {
                  isPortrait: 0 === e,
                  isLandscape: 90 === e,
                  orientation: 0 === e ? "portrait" : "landscape",
                };
              t.orientation !== i.orientation && r(i);
            },
            [t.orientation]
          );
        return (
          n.useEffect(
            function () {
              return (
                ("undefined" == typeof window ? "undefined" : f(window)) !==
                  void 0 &&
                  eS &&
                  (a(),
                  window.addEventListener("load", a, !1),
                  window.addEventListener("resize", a, !1)),
                function () {
                  window.removeEventListener("resize", a, !1),
                    window.removeEventListener("load", a, !1);
                }
              );
            },
            [a]
          ),
          t
        );
      }),
      (t.withOrientationChange = function (e) {
        return (function (i) {
          var t;
          if ("function" != typeof i && null !== i)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          function n(e) {
            var i;
            if (!(this instanceof n))
              throw TypeError("Cannot call a class as a function");
            return (
              ((i = (function (e, i) {
                if (i && ("object" == typeof i || "function" == typeof i))
                  return i;
                if (void 0 !== i)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return y(e);
              })(this, w(n).call(this, e))).isEventListenerAdded = !1),
              (i.handleOrientationChange = i.handleOrientationChange.bind(
                y(i)
              )),
              (i.onOrientationChange = i.onOrientationChange.bind(y(i))),
              (i.onPageLoad = i.onPageLoad.bind(y(i))),
              (i.state = { isLandscape: !1, isPortrait: !1 }),
              i
            );
          }
          return (
            (n.prototype = Object.create(i && i.prototype, {
              constructor: { value: n, writable: !0, configurable: !0 },
            })),
            i && x(n, i),
            (t = [
              {
                key: "handleOrientationChange",
                value: function () {
                  this.isEventListenerAdded || (this.isEventListenerAdded = !0);
                  var e = 90 * (window.innerWidth > window.innerHeight);
                  this.setState({ isPortrait: 0 === e, isLandscape: 90 === e });
                },
              },
              {
                key: "onOrientationChange",
                value: function () {
                  this.handleOrientationChange();
                },
              },
              {
                key: "onPageLoad",
                value: function () {
                  this.handleOrientationChange();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  ("undefined" == typeof window ? "undefined" : f(window)) !==
                    void 0 &&
                    eS &&
                    (this.isEventListenerAdded
                      ? window.removeEventListener("load", this.onPageLoad, !1)
                      : (this.handleOrientationChange(),
                        window.addEventListener("load", this.onPageLoad, !1)),
                    window.addEventListener(
                      "resize",
                      this.onOrientationChange,
                      !1
                    ));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener(
                    "resize",
                    this.onOrientationChange,
                    !1
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return r.createElement(
                    e,
                    b({}, this.props, {
                      isLandscape: this.state.isLandscape,
                      isPortrait: this.state.isPortrait,
                    })
                  );
                },
              },
            ]),
            (function (e, i) {
              for (var t = 0; t < i.length; t++) {
                var n = i[t];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(n.prototype, t),
            n
          );
        })(r.Component);
      });
  },
  31823,
  (e) => {
    e.v({
      container: "QrCode-module-scss-module__JUa4oG__container",
      qr_code: "QrCode-module-scss-module__JUa4oG__qr_code",
      text: "QrCode-module-scss-module__JUa4oG__text",
    });
  },
  60500,
  (e) => {
    e.v({
      animated: "FamCoinsPerks-module-scss-module__TrfHNG__animated",
      divider: "FamCoinsPerks-module-scss-module__TrfHNG__divider",
      fam_perks: "FamCoinsPerks-module-scss-module__TrfHNG__fam_perks",
      fam_perks_text:
        "FamCoinsPerks-module-scss-module__TrfHNG__fam_perks_text",
      famcard_description:
        "FamCoinsPerks-module-scss-module__TrfHNG__famcard_description",
      famcoin_card: "FamCoinsPerks-module-scss-module__TrfHNG__famcoin_card",
      famcoins_container:
        "FamCoinsPerks-module-scss-module__TrfHNG__famcoins_container",
      features_container:
        "FamCoinsPerks-module-scss-module__TrfHNG__features_container",
      heading: "FamCoinsPerks-module-scss-module__TrfHNG__heading",
      maxHeight: "FamCoinsPerks-module-scss-module__TrfHNG__maxHeight",
      mob_card_selector:
        "FamCoinsPerks-module-scss-module__TrfHNG__mob_card_selector",
      mob_famcoin_card_container:
        "FamCoinsPerks-module-scss-module__TrfHNG__mob_famcoin_card_container",
      mob_phone_image_container:
        "FamCoinsPerks-module-scss-module__TrfHNG__mob_phone_image_container",
      mob_pointer: "FamCoinsPerks-module-scss-module__TrfHNG__mob_pointer",
      phone_image: "FamCoinsPerks-module-scss-module__TrfHNG__phone_image",
      pointer: "FamCoinsPerks-module-scss-module__TrfHNG__pointer",
    });
  },
  21751,
  (e, i, t) => {
    i.exports = (function (e) {
      var i = {};
      function t(n) {
        if (i[n]) return i[n].exports;
        var r = (i[n] = { i: n, l: !1, exports: {} });
        return e[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
      }
      return (
        (t.m = e),
        (t.c = i),
        (t.d = function (e, i, n) {
          t.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: n });
        }),
        (t.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function (e, i) {
          if (
            (1 & i && (e = t(e)),
            8 & i || (4 & i && "object" == typeof e && e && e.__esModule))
          )
            return e;
          var n = Object.create(null);
          if (
            (t.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & i && "string" != typeof e)
          )
            for (var r in e)
              t.d(
                n,
                r,
                function (i) {
                  return e[i];
                }.bind(null, r)
              );
          return n;
        }),
        (t.n = function (e) {
          var i =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(i, "a", i), i;
        }),
        (t.o = function (e, i) {
          return Object.prototype.hasOwnProperty.call(e, i);
        }),
        (t.p = ""),
        t((t.s = 1))
      );
    })([
      function (e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.POSITION = {
            PREV: "prev",
            NEXT: "next",
            CURRENT: "current",
            HIDDEN: "hidden",
          }),
          (i.ALIGNMENT = { HORIZONTAL: "horizontal", VERTICAL: "vertical" }),
          (i.SPREAD = { NARROW: "narrow", MEDIUM: "medium", WIDE: "wide" });
      },
      function (e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 });
        var n =
            Object.assign ||
            function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var t = arguments[i];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            },
          r = (function () {
            function e(e, i) {
              for (var t = 0; t < i.length; t++) {
                var n = i[t];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function (i, t, n) {
              return t && e(i.prototype, t), n && e(i, n), i;
            };
          })(),
          a = t(2),
          o = c(a),
          s = c(t(3)),
          l = t(6),
          d = t(0);
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function (e) {
          function i(e) {
            if (!(this instanceof i))
              throw TypeError("Cannot call a class as a function");
            var t = (function (e, i) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return i && ("object" == typeof i || "function" == typeof i)
                ? i
                : e;
            })(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
            return (
              (t.goTo = function (e) {
                t.setState({ current_index: Number(e) }, t.props.afterChange);
              }),
              (t.next = function () {
                t._is_mounted && t._cardOnClick(d.POSITION.NEXT);
              }),
              (t.prev = function () {
                return t._cardOnClick(d.POSITION.PREV);
              }),
              (t.getCurrentIndex = function () {
                return t.state.current_index;
              }),
              (t._keydownEventListener = function (e) {
                return 39 === e.which
                  ? t.next()
                  : 37 === e.which
                  ? t.prev()
                  : void 0;
              }),
              (t._autoplay = function () {
                if (t._is_mounted) {
                  var e = t.props.autoplay_speed,
                    i = setInterval(t.next, e);
                  t.setState({ interval: i });
                }
              }),
              (t._resetInterval = function () {
                clearInterval(t.state.interval), t._autoplay();
              }),
              (t._getCardClass = function (e) {
                var i = t.props.children,
                  n = t.state.current_index;
                return null === n
                  ? d.POSITION.HIDDEN
                  : e === n
                  ? d.POSITION.CURRENT
                  : e === n + 1 ||
                    (0 === e && n === o.default.Children.count(i) - 1)
                  ? d.POSITION.NEXT
                  : e === n - 1 ||
                    (e === o.default.Children.count(i) - 1 && 0 === n)
                  ? d.POSITION.PREV
                  : d.POSITION.HIDDEN;
              }),
              (t._cardOnClick = function (e) {
                var i = t.props,
                  n = i.children,
                  r = i.autoplay,
                  a = t.state.current_index;
                r && t._resetInterval(),
                  e === d.POSITION.NEXT
                    ? a === o.default.Children.count(n) - 1
                      ? t.setState({ current_index: 0 }, t.props.afterChange)
                      : t.setState(
                          { current_index: a + 1 },
                          t.props.afterChange
                        )
                    : e === d.POSITION.PREV &&
                      (0 === a
                        ? t.setState(
                            { current_index: o.default.Children.count(n) - 1 },
                            t.props.afterChange
                          )
                        : t.setState(
                            { current_index: a - 1 },
                            t.props.afterChange
                          ));
              }),
              (t.ChildComponents = function () {
                var e = t.props,
                  i = e.alignment,
                  r = e.spread,
                  a = e.disable_box_shadow;
                return o.default.Children.map(
                  t.props.children,
                  function (e, s) {
                    var d = t._getCardClass(s);
                    return o.default.createElement(
                      "div",
                      {
                        key: s,
                        onClick: function () {
                          return t._cardOnClick(d);
                        },
                        style: n({}, l.STYLES.CARD, {
                          opacity: (0, l.getOpacity)(d),
                          zIndex: (0, l.getZIndex)(d),
                          transform: (0, l.getTransform)(d, i, r),
                          boxShadow: (0, l.getBoxShadow)(d, i, a),
                          cursor: (0, l.getCursor)(d, i),
                        }),
                      },
                      e
                    );
                  }
                );
              }),
              (t.state = {
                current_index: e.disable_fade_in ? e.initial_index : null,
                interval: null,
              }),
              t
            );
          }
          return (
            (function (e, i) {
              if ("function" != typeof i && null !== i)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof i
                );
              (e.prototype = Object.create(i && i.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                i &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, i)
                    : (e.__proto__ = i));
            })(i, e),
            r(i, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    i = this.props,
                    t = i.initial_index,
                    n = i.disable_keydown,
                    r = i.disable_fade_in,
                    a = i.autoplay;
                  (this._is_mounted = !0),
                    r ||
                      setTimeout(function () {
                        e.setState({ current_index: t });
                      }, 0.25),
                    n || (document.onkeydown = this._keydownEventListener),
                    a && this._autoplay();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this._is_mounted = !1),
                    this.props.disable_keydown || (document.onkeydown = null);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement(
                    "div",
                    { style: l.STYLES.CONTAINER },
                    o.default.createElement(this.ChildComponents, null)
                  );
                },
              },
            ]),
            i
          );
        })(a.Component);
        (u.propTypes = {
          alignment: s.default.oneOf([
            d.ALIGNMENT.HORIZONTAL,
            d.ALIGNMENT.VERTICAL,
          ]),
          spread: s.default.oneOf([
            d.SPREAD.NARROW,
            d.SPREAD.MEDIUM,
            d.SPREAD.WIDE,
          ]),
          initial_index: s.default.number,
          disable_keydown: s.default.bool,
          disable_box_shadow: s.default.bool,
          disable_fade_in: s.default.bool,
          autoplay: s.default.bool,
          autoplay_speed: s.default.number,
          afterChange: s.default.func,
        }),
          (u.defaultProps = {
            alignment: d.ALIGNMENT.HORIZONTAL,
            spread: d.SPREAD.MEDIUM,
            initial_index: 0,
            disable_keydown: !1,
            disable_box_shadow: !1,
            disable_fade_in: !1,
            autoplay: !1,
            autoplay_speed: 5e3,
            afterChange: function () {},
          }),
          (i.default = u);
      },
      function (i, t) {
        i.exports = e.r(75705);
      },
      function (e, i, t) {
        e.exports = t(4)();
      },
      function (e, i, t) {
        "use strict";
        var n = t(5);
        function r() {}
        function a() {}
        (a.resetWarningCache = r),
          (e.exports = function () {
            function e(e, i, t, r, a, o) {
              if (o !== n) {
                var s = Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function i() {
              return e;
            }
            e.isRequired = e;
            var t = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: i,
              element: e,
              elementType: e,
              instanceOf: i,
              node: e,
              objectOf: i,
              oneOf: i,
              oneOfType: i,
              shape: i,
              exact: i,
              checkPropTypes: a,
              resetWarningCache: r,
            };
            return (t.PropTypes = t), t;
          });
      },
      function (e, i, t) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      function (e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.STYLES = void 0),
          (i.getOpacity = function (e) {
            return +(e !== n.POSITION.HIDDEN);
          }),
          (i.getZIndex = function (e) {
            return e === n.POSITION.HIDDEN
              ? 0
              : e === n.POSITION.CURRENT
              ? 2
              : 1;
          }),
          (i.getTransform = function (e, i, t) {
            var r,
              a,
              o =
                ((r = void 0),
                (a = void 0),
                t === n.SPREAD.MEDIUM
                  ? ((r = "-85%"), (a = "-15%"))
                  : t === n.SPREAD.NARROW
                  ? ((r = "-75%"), (a = "-25%"))
                  : t === n.SPREAD.WIDE && ((r = "-95%"), (a = "-5%")),
                { prev: r, next: a }),
              s = o.prev,
              l = o.next;
            if (i === n.ALIGNMENT.HORIZONTAL) {
              if (e === n.POSITION.PREV)
                return "translate(" + s + ", -50%) scale(0.82)";
              if (e === n.POSITION.NEXT)
                return "translate(" + l + ", -50%) scale(0.82)";
            }
            if (i === n.ALIGNMENT.VERTICAL) {
              if (e === n.POSITION.PREV)
                return "translate(-50%, " + s + ") scale(0.82)";
              if (e === n.POSITION.NEXT)
                return "translate(-50%, " + l + ") scale(0.82)";
            }
            return e === n.POSITION.HIDDEN
              ? "translate(-50%, -50%) scale(0.5)"
              : "translate(-50%, -50%)";
          }),
          (i.getBoxShadow = function (e, i, t) {
            if (!t && e === n.POSITION.CURRENT) {
              if (i === n.ALIGNMENT.HORIZONTAL)
                return "30px 0px 20px -20px rgba(0, 0, 0, .4), -30px 0px 20px -20px rgba(0, 0, 0, .4)";
              if (i === n.ALIGNMENT.VERTICAL)
                return "0px 30px 20px -20px rgba(0, 0, 0, .4), 0px -30px 20px -20px rgba(0, 0, 0, .4)";
            }
            return "unset";
          }),
          (i.getCursor = function (e, i) {
            if (e === n.POSITION.NEXT) {
              if (i === n.ALIGNMENT.HORIZONTAL) return "e-resize";
              if (i === n.ALIGNMENT.VERTICAL) return "s-resize";
            }
            if (e === n.POSITION.PREV) {
              if (i === n.ALIGNMENT.HORIZONTAL) return "w-resize";
              if (i === n.ALIGNMENT.VERTICAL) return "n-resize";
            }
            return "unset";
          });
        var n = t(0);
        i.STYLES = {
          CONTAINER: {
            positive: "relative",
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
          },
          CARD: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transition: "all 0.6s",
          },
        };
      },
    ]);
  },
  13353,
  (e) => {
    e.v({
      arrow_left: "TestimonialCards-module-scss-module__rP4tiG__arrow_left",
      arrow_right: "TestimonialCards-module-scss-module__rP4tiG__arrow_right",
      author_info: "TestimonialCards-module-scss-module__rP4tiG__author_info",
      mob_scrollable_container:
        "TestimonialCards-module-scss-module__rP4tiG__mob_scrollable_container",
      profile_image_container:
        "TestimonialCards-module-scss-module__rP4tiG__profile_image_container",
      ratings_container:
        "TestimonialCards-module-scss-module__rP4tiG__ratings_container",
      source_info: "TestimonialCards-module-scss-module__rP4tiG__source_info",
      testimonial_card:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_card",
      testimonial_card_container:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_card_container",
      testimonial_cards_container:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_cards_container",
      testimonial_container:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_container",
      testimonial_description:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_description",
      testimonial_headline:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_headline",
      testimonial_text_container:
        "TestimonialCards-module-scss-module__rP4tiG__testimonial_text_container",
      text_content: "TestimonialCards-module-scss-module__rP4tiG__text_content",
    });
  },
  70983,
  (e) => {
    e.v({
      Testimonial: "home-module-scss-module__7j9g1q__Testimonial",
      all_transaction_image:
        "home-module-scss-module__7j9g1q__all_transaction_image",
      bottom_links_container:
        "home-module-scss-module__7j9g1q__bottom_links_container",
      bottom_links_container_mobile:
        "home-module-scss-module__7j9g1q__bottom_links_container_mobile",
      btns: "home-module-scss-module__7j9g1q__btns",
      buttons: "home-module-scss-module__7j9g1q__buttons",
      change: "home-module-scss-module__7j9g1q__change",
      description_text: "home-module-scss-module__7j9g1q__description_text",
      download_links: "home-module-scss-module__7j9g1q__download_links",
      famcard_image: "home-module-scss-module__7j9g1q__famcard_image",
      famcard_section: "home-module-scss-module__7j9g1q__famcard_section",
      famcoins_perks_section:
        "home-module-scss-module__7j9g1q__famcoins_perks_section",
      header_content_container:
        "home-module-scss-module__7j9g1q__header_content_container",
      heading: "home-module-scss-module__7j9g1q__heading",
      heading_container: "home-module-scss-module__7j9g1q__heading_container",
      heading_container_list:
        "home-module-scss-module__7j9g1q__heading_container_list",
      heading_container_list_item:
        "home-module-scss-module__7j9g1q__heading_container_list_item",
      heading_container_text:
        "home-module-scss-module__7j9g1q__heading_container_text",
      help_section: "home-module-scss-module__7j9g1q__help_section",
      help_text_section: "home-module-scss-module__7j9g1q__help_text_section",
      hiring_section: "home-module-scss-module__7j9g1q__hiring_section",
      hiring_text_section:
        "home-module-scss-module__7j9g1q__hiring_text_section",
      image_container: "home-module-scss-module__7j9g1q__image_container",
      image_content: "home-module-scss-module__7j9g1q__image_content",
      landing_visa_image: "home-module-scss-module__7j9g1q__landing_visa_image",
      lead_container: "home-module-scss-module__7j9g1q__lead_container",
      links_container: "home-module-scss-module__7j9g1q__links_container",
      mob_famcoins_perks_section:
        "home-module-scss-module__7j9g1q__mob_famcoins_perks_section",
      mob_header_content_container:
        "home-module-scss-module__7j9g1q__mob_header_content_container",
      mob_lead_container: "home-module-scss-module__7j9g1q__mob_lead_container",
      mob_upi: "home-module-scss-module__7j9g1q__mob_upi",
      phone_image: "home-module-scss-module__7j9g1q__phone_image",
      poweredBy: "home-module-scss-module__7j9g1q__poweredBy",
      ratings_container: "home-module-scss-module__7j9g1q__ratings_container",
      rewards_content: "home-module-scss-module__7j9g1q__rewards_content",
      sponsor_container: "home-module-scss-module__7j9g1q__sponsor_container",
      trust_section: "home-module-scss-module__7j9g1q__trust_section",
      upi_img: "home-module-scss-module__7j9g1q__upi_img",
      upi_img_mob: "home-module-scss-module__7j9g1q__upi_img_mob",
      white_bg: "home-module-scss-module__7j9g1q__white_bg",
      wrap: "home-module-scss-module__7j9g1q__wrap",
    });
  },
  66120,
  (e) => {
    "use strict";
    var i = e.i(68601),
      t = e.i(75705),
      n = e.i(83427),
      r = e.i(98011),
      a = e.i(64738),
      o = e.i(41447),
      s = e.i(29749),
      l = e.i(31823),
      d = e.i(12357);
    let c = () => {
      let [e, n] = (0, t.useState)(!1);
      return (
        (0, t.useEffect)(() => {
          let e = () => {
            n(window.scrollY > 60);
          };
          return (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, []),
        (0, i.jsxs)("div", {
          style: { bottom: `${e ? "2rem" : "-20rem"}` },
          className: `${l.default.container}`,
          children: [
            (0, i.jsxs)("div", {
              className: `${l.default.text}`,
              children: [
                (0, i.jsx)("div", { children: "Download" }),
                (0, i.jsx)("div", { children: "FamApp by Trio" }),
              ],
            }),
            (0, i.jsx)("img", {
              className: `${l.default.qr_code} ${e ? l.default.showO : ""}`,
              src: d.qrcode,
              alt: "qrcode",
            }),
          ],
        })
      );
    };
    var u = e.i(35792),
      m = e.i(60500);
    let _ = [
        [
          {
            text: "Cashback & FamCoins on everyday spends",
            icon: d.rewardIcon,
          },
          {
            text: "Enjoy exciting discounts & offers from top brands",
            icon: d.giveaway,
          },
          { text: "Win big from spinners and giveaways", icon: d.challenges },
        ],
      ],
      h = ({ isTabletView: e }) => {
        let t = ({ animate: e }) =>
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className: `${e ? "animated " : ""} ${
                m.default.famcard_description
              }`,
              children: _[0].map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: `${m.default.fam_perks}`,
                    children: [
                      (0, i.jsx)("img", { src: e.icon }),
                      (0, i.jsx)("div", {
                        className: `${m.default.fam_perks_text}`,
                        children: e.text,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          });
        return e
          ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)("div", {
                className: `${m.default.famcoin_card}`,
                children: [
                  (0, i.jsx)("h6", {
                    className: `${m.default.heading} paragraph_text`,
                    children: "Perks of FamX by Trio",
                  }),
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", { className: `${m.default.divider}` }),
                      (0, i.jsx)(t, { animate: !0 }),
                    ],
                  }),
                ],
              }),
            })
          : (0, i.jsxs)("div", {
              className: `${m.default.famcoin_card}`,
              children: [
                (0, i.jsx)("h6", {
                  className: `${m.default.heading} paragraph_text`,
                  children: "Perks of FamX by Trio",
                }),
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", { className: `${m.default.divider}` }),
                    (0, i.jsx)(t, { animate: !0 }),
                  ],
                }),
              ],
            });
      },
      g = ({ isTabletView: e }) =>
        (0, i.jsx)("div", {
          className: `${m.default.famcoins_container}`,
          children: (0, i.jsxs)(r.Row, {
            className: m.default.features_container,
            children: [
              (0, i.jsx)(a.Col, {
                md: 12,
                lg: 7,
                children: (0, i.jsx)(h, { isTabletView: e }),
              }),
              (0, i.jsx)(a.Col, {
                md: 12,
                lg: 5,
                className: m.default.mob_phone_image_container,
                children: (0, i.jsx)("img", {
                  src: d.burnFamcoinPhoneImage,
                  className: m.default.phone_image,
                }),
              }),
            ],
          }),
        });
    var p = e.i(21751);
    let f = [
      {
        imageUrl: d.EshaaImg,
        rating: 1,
        title: "Yeh toh upgrade ka bhi upgrade hai 🐐",
        description:
          "The new design is so cool and app has become more smooth. The FamApp has everything I need in one place.",
        author: "Eshaa",
        source: "Play store",
        reviewDate: "22nd June 2020",
      },
      {
        imageUrl: d.AdityaImg,
        rating: 2,
        title: "Love the concept of spending account 💖",
        description:
          "The idea is so cool. I can use my spending account to make daily payments - and keep it separate from my savings now!",
        author: "Aditya",
        source: "Instagram",
        reviewDate: "21st Aug 2020",
      },
      {
        imageUrl: d.CassiusImg,
        rating: 3,
        title: "My payment took 0.6 seconds! ⚡",
        description:
          "I was at a shop, and I needed to make a payment in hurry. It was honestly the fastest payment I’ve ever done.",
        author: "Cassius",
        source: "Play store",
        reviewDate: "8th July 2020",
      },
    ];
    var b = e.i(13353);
    let w = ({ type: e, isTabletView: n }) => {
      let o = (0, t.useRef)(),
        [s, l] = (0, t.useState)(0);
      return (
        void 0 !== e &&
          f.filter((i) =>
            "Parents" === e ? "Parent" === i.age : "Parent" !== i.age
          ),
        (0, i.jsx)(i.Fragment, {
          children: n
            ? (0, i.jsx)("div", {
                className: b.default.mob_scrollable_container,
                children: (0, i.jsx)("div", {
                  className: `${b.default.testimonial_card_container}`,
                  children: (f || []).map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: b.default.testimonial_card,
                        style: { backgroundColor: "transparent" },
                        children: [
                          (0, i.jsx)("div", {
                            className: b.default.profile_image_container,
                            style: { backgroundImage: `url(${e.imageUrl})` },
                          }),
                          (0, i.jsxs)("div", {
                            className: b.default.text_content,
                            children: [
                              (0, i.jsx)("h6", {
                                className: `${b.default.testimonial_headline} light_grey_text`,
                                children: f[t].title,
                              }),
                              (0, i.jsx)("p", {
                                className: `${b.default.testimonial_description}`,
                                children: f[t].description,
                              }),
                              (0, i.jsx)("div", {
                                className: `light_grey_text ${b.default.source_info}`,
                                children: (0, i.jsx)("p", {
                                  className: `${b.default.author_info} light_black_text`,
                                  children: f[t].author,
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              })
            : (0, i.jsxs)(r.Row, {
                className: `${b.default.testimonial_container}`,
                children: [
                  (0, i.jsx)(a.Col, {
                    xs: 12,
                    lg: 6,
                    className: `${b.default.testimonial_cards_container}`,
                    children: (0, i.jsx)(p.default, {
                      ref: o,
                      autoplay: !0,
                      autoplay_speed: 8e3,
                      spread: "narrow",
                      afterChange: () => {
                        l(o.current.getCurrentIndex());
                      },
                      children: f.map((e, t) =>
                        (0, i.jsx)(
                          "div",
                          {
                            className: `${b.default.testimonial_card}`,
                            style: { backgroundImage: `url(${e.imageUrl})` },
                          },
                          t
                        )
                      ),
                    }),
                  }),
                  (0, i.jsxs)(a.Col, {
                    xs: 12,
                    lg: 6,
                    className: `${b.default.testimonial_text_container} text-left`,
                    children: [
                      (0, i.jsx)("h6", {
                        className: `subheading_text ${b.default.testimonial_headline} light_grey_text`,
                        children: f[s].title,
                      }),
                      (0, i.jsx)("p", {
                        className: `${b.default.testimonial_description} subparagraph_text`,
                        children: f[s].description,
                      }),
                      (0, i.jsx)("p", {
                        className: `${b.default.author_info} paragraph_text light_black_text`,
                        children: f[s].author,
                      }),
                    ],
                  }),
                ],
              }),
        })
      );
    };
    var x = e.i(24894),
      v = e.i(70983),
      y = e.i(68553);
    let j = [
      [
        "Elevation Capital",
        d.elevationImage,
        "https://www.elevationcapital.com/",
      ],
      ["Sequoia", d.sequoiaImage, "https://www.sequoiacap.com/india/"],
      ["Venture Highway", d.vhImage, "http://venturehighway.vc/"],
      ["General Catalyst", d.gcImage, "https://www.generalcatalyst.com/"],
      ["Y Combinator", d.ycImage, "https://www.ycombinator.com/"],
      [
        "Global Founders Capital",
        d.gfcImage,
        "https://www.globalfounderscapital.com//",
      ],
      ["Rocketship VC", d.rocketshipImage, "https://www.rocketship.vc/"],
      ["GreenOaks", d.greenoaksImage, "http://www.greenoakscap.com/"],
    ];
    e.s(
      [
        "default",
        0,
        () => {
          let [e, l] = (0, t.useState)(
            "https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US"
          );
          return (
            (0, t.useEffect)(() => {
              o.isAndroid
                ? l(
                    "https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US"
                  )
                : o.isIOS || o.isMacOs
                ? l(
                    "https://apps.apple.com/in/app/fampay-upi-payments-for-teens/id1499806454"
                  )
                : l(
                    "https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US"
                  );
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(n.Container, {
                  fluid: !0,
                  children: [
                    (0, i.jsx)(u.default, { url: e }),
                    (0, i.jsx)(y.Media, {
                      lessThan: "lg",
                      children: (0, i.jsx)(r.Row, {
                        className: "header_section_background",
                        children: (0, i.jsxs)(a.Col, {
                          children: [
                            (0, i.jsx)("video", {
                              autoPlay: !0,
                              muted: !0,
                              loop: !0,
                              style: {
                                display: "block",
                                height: "100%",
                                position: "absolute",
                                left: "50%",
                                top: "45%",
                                transform: "translate(-50%, -50%)",
                                width: "100%",
                                zIndex: "-1",
                              },
                              children: (0, i.jsx)("source", {
                                src: d.HomeScreenMobVisual,
                                type: "video/mp4",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: `${v.default.mob_header_content_container}`,
                              children: [
                                (0, i.jsx)("img", {
                                  alt: "FamX",
                                  src: d.FamXBanner,
                                  style: { marginBottom: "12px" },
                                }),
                                (0, i.jsx)("h1", {
                                  className: "heading_text white_text",
                                  children: "spending account",
                                }),
                                (0, i.jsx)("div", {
                                  className: `${v.default.heading}`,
                                  children: (0, i.jsxs)("div", {
                                    className: `${v.default.heading_container}`,
                                    children: [
                                      (0, i.jsxs)("p", {
                                        className: `heading_text white_text ${v.default.heading_container_text}`,
                                        children: ["for", " "],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: `primary_orange_text ${v.default.heading_container_list}`,
                                        children: [
                                          (0, i.jsx)("div", {
                                            className: `${v.default.heading_container_list_item}`,
                                            children: "teens",
                                          }),
                                          (0, i.jsx)("div", {
                                            className: `${v.default.heading_container_list_item}`,
                                            children: "adults",
                                          }),
                                          (0, i.jsx)("div", {
                                            className: `${v.default.heading_container_list_item}`,
                                            children: "everyone",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: `${v.default.buttons}`,
                                  children: (0, i.jsx)(x.default, {
                                    buttonText: "Open account",
                                    url: e,
                                    wrapStyle: {
                                      width: "100%",
                                      padding: ".8rem 2.5rem",
                                      backgroundColor: "#FBAF03",
                                      color: "#1c1c1c",
                                      fontSize: "1.2rem",
                                      fontWeight: "600",
                                    },
                                    activeStatus: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsx)(y.Media, {
                      greaterThanOrEqual: "lg",
                      children: (0, i.jsx)(r.Row, {
                        className: "header_section_background",
                        children: (0, i.jsxs)(a.Col, {
                          children: [
                            (0, i.jsx)("video", {
                              autoPlay: !0,
                              muted: !0,
                              loop: !0,
                              style: {
                                display: "block",
                                height: "90%",
                                position: "absolute",
                                left: "10%",
                                top: "0",
                                width: "100%",
                                zIndex: "-1",
                              },
                              children: (0, i.jsx)("source", {
                                src: `${d.HomeScreenPCVisual}`,
                                type: "video/mp4",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: `${v.default.header_content_container}`,
                              children: [
                                (0, i.jsx)("img", {
                                  src: d.FamXBanner,
                                  alt: "banner",
                                  style: { width: 220 },
                                }),
                                (0, i.jsx)("h1", {
                                  className: "heading_text white_text",
                                  style: { margin: "16px 0px 0px" },
                                  children: "spending account",
                                }),
                                (0, i.jsx)("div", {
                                  className: v.default.heading,
                                  children: (0, i.jsxs)("div", {
                                    className: `${v.default.heading_container}`,
                                    children: [
                                      (0, i.jsx)("p", {
                                        className: `heading_text white_text ${v.default.heading_container_text}`,
                                        children: "for",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: `primary_orange_text ${v.default.heading_container_list}`,
                                        children: [
                                          (0, i.jsx)("div", {
                                            className: `${v.default.heading_container_list_item}`,
                                            children: "teens",
                                          }),
                                          (0, i.jsx)("div", {
                                            className: `${v.default.heading_container_list_item}`,
                                            children: "adults",
                                          }),
                                          (0, i.jsx)("div", {
                                            className: `${v.default.heading_container_list_item}`,
                                            children: "everyone",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: `${v.default.btns}`,
                                  children: (0, i.jsx)(x.default, {
                                    buttonText: "Open Account",
                                    url: "https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US",
                                    wrapStyle: {
                                      backgroundColor: "#FBAF03",
                                      color: "#1c1c1c",
                                      marginRight: "20px",
                                      fontSize: "1.5rem",
                                      fontWeight: "600",
                                    },
                                    activeStatus: !0,
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: v.default.bottom_links_container,
                              children: [
                                (0, i.jsx)("img", {
                                  src: d.userTrustImage,
                                  style: { height: "6rem" },
                                  alt: "10M+ Registered Users",
                                }),
                                (0, i.jsx)("hr", {}),
                                (0, i.jsx)("div", {
                                  className: v.default.poweredBy,
                                  children: "Powered by",
                                }),
                                (0, i.jsx)("img", {
                                  style: { height: 30 },
                                  src: d.TrioLogo,
                                  alt: "Trio",
                                }),
                                (0, i.jsx)("img", {
                                  style: { height: 26 },
                                  src: d.VisaLogo,
                                  alt: "Visa",
                                }),
                                (0, i.jsx)("img", {
                                  style: { height: 30 },
                                  src: d.RupayLogo,
                                  alt: "Rupay",
                                }),
                                (0, i.jsx)("img", {
                                  style: { height: 36 },
                                  src: d.UPILogo,
                                  alt: "UPI",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(n.Container, {
                  fluid: !0,
                  className: "dark_bg below_header_container",
                  children: [
                    (0, i.jsx)(y.Media, {
                      lessThan: "lg",
                      children: (0, i.jsxs)("div", {
                        className: `${v.default.bottom_links_container_mobile}`,
                        children: [
                          (0, i.jsx)("div", {
                            className: v.default.wrap,
                            style: { padding: "1rem 0px" },
                            children: (0, i.jsx)("img", {
                              src: d.userTrustImage,
                              alt: "10M+ Registered Users",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: v.default.poweredBy,
                            children: "Powered by",
                          }),
                          (0, i.jsxs)("div", {
                            className: v.default.wrap,
                            style: { marginBottom: 26 },
                            children: [
                              (0, i.jsx)("img", {
                                style: { width: 55 },
                                src: d.TrioLogo,
                                alt: "Trio",
                              }),
                              (0, i.jsx)("img", {
                                style: { width: 70 },
                                src: d.VisaLogo,
                                alt: "Visa",
                              }),
                              (0, i.jsx)("img", {
                                style: { width: 70 },
                                src: d.RupayLogo,
                                alt: "Rupay",
                              }),
                              (0, i.jsx)("img", {
                                style: { width: 70 },
                                src: d.UPILogo,
                                alt: "UPI",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(n.Container, {
                      className: "light_grey_text extra_sides_padding",
                      children: (0, i.jsxs)(r.Row, {
                        className: "section_vertical_spacing",
                        children: [
                          (0, i.jsx)(a.Col, {
                            lg: 6,
                            style: { textAlign: "center" },
                            children: (0, i.jsx)("img", {
                              src: d.SpendingAccountImage,
                              style: { height: 600, maxWidth: "100%" },
                              alt: "spending-account-img",
                              className: v.default.all_transaction_image,
                            }),
                          }),
                          (0, i.jsx)(a.Col, {
                            lg: 6,
                            children: (0, i.jsxs)("div", {
                              children: [
                                (0, i.jsxs)("h1", {
                                  className:
                                    "heading_text heading_text_sm white_text",
                                  children: [
                                    "One account",
                                    " ",
                                    (0, i.jsx)("span", {
                                      className: "primary_orange_text",
                                      children: "for all your spends",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("ul", {
                                  className: "paragraph_text",
                                  children: [
                                    (0, i.jsx)("li", {
                                      children:
                                        "Get your own FamX card & UPI ID",
                                    }),
                                    (0, i.jsx)("li", {
                                      children:
                                        "Enable quick payments with your fingerprint/Face ID",
                                    }),
                                    (0, i.jsx)("li", {
                                      children:
                                        "Easily track, manage and budget your expenses",
                                    }),
                                    (0, i.jsx)("li", {
                                      children:
                                        "Keep your bank statements clean & clutter-free",
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("br", {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(r.Row, {
                      className: `full_width_section section_vertical_spacing light_grey_text ${v.default.famcard_section}`,
                      style: { background: "#000" },
                      children: [
                        (0, i.jsx)(a.Col, {
                          lg: 6,
                          className:
                            "section_image_container section_right_image",
                          children: (0, i.jsx)("img", {
                            className: ` ${v.default.famcard_image}`,
                            src: d.FamXTeens,
                            alt: "FamCard",
                          }),
                        }),
                        (0, i.jsx)(a.Col, {
                          lg: 6,
                          children: (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("h1", {
                                className: "heading_text heading_text_sm",
                                children: [
                                  (0, i.jsxs)("span", {
                                    className: "primary_orange_text",
                                    children: ["Your first and forever", " "],
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "white_text",
                                    children: "account",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("ul", {
                                className: "paragraph_text",
                                children: [
                                  (0, i.jsx)("li", {
                                    children:
                                      "Make payments without a bank account",
                                  }),
                                  (0, i.jsx)("li", {
                                    children:
                                      "Get a customised UPI & card as a teen",
                                  }),
                                  (0, i.jsx)("li", {
                                    children: "Open for everyone ages 11+",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(y.Media, {
                      lessThan: "lg",
                      children: (0, i.jsxs)("div", {
                        className: `${v.default.mob_upi}`,
                        children: [
                          (0, i.jsxs)("h1", {
                            className: "heading_text_sm white_text",
                            children: [
                              "UPI payments that take less than",
                              " ",
                              (0, i.jsx)("span", {
                                className: "primary_orange_text",
                                children: "2 seconds",
                              }),
                            ],
                          }),
                          (0, i.jsx)("img", {
                            src: d.scanPayUpi,
                            alt: "scan and pay",
                            className: `${v.default.upi_img_mob}`,
                          }),
                          (0, i.jsx)("p", {
                            className: "light_grey_text",
                            children: "Scan & Pay with your customised UPI ID",
                          }),
                          (0, i.jsx)("img", {
                            src: d.personalizedThemes,
                            alt: "scan and pay",
                            className: `${v.default.upi_img_mob}`,
                          }),
                          (0, i.jsx)("p", {
                            className: "light_grey_text",
                            children:
                              "Choose personalized QR themes to match your style",
                          }),
                          (0, i.jsx)("img", {
                            src: d.recharge,
                            alt: "scan and pay",
                            className: `${v.default.upi_img_mob}`,
                          }),
                          (0, i.jsx)("p", {
                            className: "light_grey_text",
                            children:
                              "Reacharge, pay bills, shop online, and more",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(y.Media, {
                      greaterThanOrEqual: "lg",
                      children: (0, i.jsx)(n.Container, {
                        className: "grey_text extra_sides_padding",
                        children: (0, i.jsxs)(r.Row, {
                          children: [
                            (0, i.jsx)(a.Col, {
                              lg: 6,
                              className:
                                "section_image_container section_right_image",
                              children: (0, i.jsx)("img", {
                                className: `${v.default.upi_img} image_content`,
                                src: d.upiImage,
                                alt: "upi",
                              }),
                            }),
                            (0, i.jsx)(a.Col, {
                              lg: 6,
                              children: (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsxs)("h1", {
                                    className: "heading_text white_text",
                                    children: [
                                      "UPI payments that go through in",
                                      " ",
                                      (0, i.jsx)("span", {
                                        className: "primary_orange_text",
                                        children: "seconds",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("ul", {
                                    className: "paragraph_text light_grey_text",
                                    children: [
                                      (0, i.jsx)("li", {
                                        children:
                                          "Scan & Pay anywhere with your customised UPI ID",
                                      }),
                                      (0, i.jsx)("li", {
                                        children:
                                          "Choose from a range of fun QR themes",
                                      }),
                                      (0, i.jsx)("li", {
                                        children:
                                          "Recharge, pay bills and shop online, all within the app",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(x.default, {
                                    buttonText: "Get your own UPI ID",
                                    url: e,
                                    wrapStyle: {
                                      backgroundColor: "#FBAF03",
                                      color: "#1c1c1c",
                                      marginRight: "20px",
                                      marginTop: "2rem",
                                      fontSize: "1.5rem",
                                      fontWeight: "600",
                                    },
                                    activeStatus: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsx)(y.Media, {
                      lessThan: "lg",
                      children: (0, i.jsx)(r.Row, {
                        className: `full_width_section section_vertical_spacing ${v.default.mob_famcoins_perks_section}`,
                        children: (0, i.jsxs)(a.Col, {
                          children: [
                            (0, i.jsxs)("h1", {
                              style: {
                                paddingBottom: "0.5rem",
                                textAlign: "center",
                              },
                              className: "heading_text_sm white_text",
                              children: [
                                "The ",
                                (0, i.jsx)("span", {
                                  className: "primary_orange_text",
                                  children: "most rewarding ",
                                }),
                                (0, i.jsx)("br", {}),
                                "spending account",
                              ],
                            }),
                            (0, i.jsx)("p", {
                              style: {
                                maxWidth: "100%",
                                padding: "0 10% 0 10%",
                                textAlign: "center",
                              },
                              className: `${v.default.description_text} paragraph_text`,
                              children:
                                "Cashbacks, discounts, and offers on your favourite brand.",
                            }),
                            (0, i.jsx)(g, { isTabletView: !0 }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsx)(y.Media, {
                      greaterThanOrEqual: "lg",
                      children: (0, i.jsxs)(r.Row, {
                        className: `full_width_section section_vertical_spacing ${v.default.famcoins_perks_section}`,
                        children: [
                          (0, i.jsx)("img", {
                            src: d.famcoinRewards,
                            alt: "rewards",
                            style: {
                              display: "block",
                              height: "100%",
                              position: "absolute",
                              left: "0%",
                              top: "0",
                              zIndex: "-1",
                            },
                          }),
                          (0, i.jsxs)(a.Col, {
                            className: `${v.default.rewards_content}`,
                            children: [
                              (0, i.jsxs)("h1", {
                                style: { paddingBottom: "2rem" },
                                className: "heading_text white_text",
                                children: [
                                  "The ",
                                  (0, i.jsx)("span", {
                                    className: "primary_orange_text",
                                    children: "most rewarding",
                                  }),
                                  (0, i.jsx)("br", {}),
                                  "spending account",
                                ],
                              }),
                              (0, i.jsx)(g, {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(n.Container, {
                      className: "grey_text extra_sides_padding",
                      children: (0, i.jsxs)(r.Row, {
                        children: [
                          (0, i.jsx)(a.Col, {
                            lg: 6,
                            xs: 12,
                            className:
                              "section_image_container section_right_image",
                            children: (0, i.jsx)("img", {
                              src: d.FamXCard,
                              alt: "upi",
                              style: { maxHeight: 650, maxWidth: "100%" },
                            }),
                          }),
                          (0, i.jsx)(a.Col, {
                            lg: 6,
                            xs: 12,
                            style: { display: "flex", alignItems: "center" },
                            children: (0, i.jsxs)("div", {
                              children: [
                                (0, i.jsx)("h1", {
                                  className: "heading_text_sm white_text",
                                  children: (0, i.jsx)("img", {
                                    width: 350,
                                    src: d.FamXCardTitle,
                                    alt: "FamX Card Title",
                                  }),
                                }),
                                (0, i.jsxs)("ul", {
                                  className: "paragraph_text light_grey_text",
                                  children: [
                                    (0, i.jsx)("li", {
                                      children:
                                        "Numberless card that keeps your info safe",
                                    }),
                                    (0, i.jsx)("li", {
                                      children:
                                        "Quick and secure payments with Tap & Pay",
                                    }),
                                    (0, i.jsx)("li", {
                                      children:
                                        "Design your own card with doodles",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)("h1", {
                      className: "heading_text white_text text-center",
                      style: { margin: "140px 20px" },
                      children: [
                        "Memberships",
                        (0, i.jsx)("span", {
                          className: "primary_orange_text",
                          children: " tailor-made ",
                        }),
                        "for your needs",
                      ],
                    }),
                    (0, i.jsxs)(r.Row, {
                      className: v.default.custom_plans,
                      style: { maxWidth: 1200, margin: "0 auto" },
                      children: [
                        (0, i.jsx)(a.Col, {
                          lg: 4,
                          style: { display: "flex" },
                          children: (0, i.jsx)("img", {
                            style: {
                              width: "370px",
                              maxWidth: "90%",
                              margin: "0 auto 40px",
                            },
                            src: d.Classic,
                            alt: "Hiring",
                          }),
                        }),
                        (0, i.jsx)(a.Col, {
                          lg: 4,
                          style: { display: "flex" },
                          children: (0, i.jsx)("img", {
                            style: {
                              width: "370px",
                              maxWidth: "90%",
                              margin: "0 auto 40px",
                            },
                            src: d.HigherDepositLimits,
                            alt: "Hiring",
                          }),
                        }),
                        (0, i.jsx)(a.Col, {
                          lg: 4,
                          style: { display: "flex" },
                          children: (0, i.jsx)("img", {
                            style: {
                              width: "370px",
                              maxWidth: "90%",
                              margin: "0 auto 40px",
                            },
                            src: d.Ultra,
                            alt: "Hiring",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(r.Row, {
                      className: `full_width_section ${v.default.help_section}`,
                      children: [
                        (0, i.jsx)(a.Col, {
                          lg: 6,
                          className: `section_image_container ${v.default.image_container}`,
                          children: (0, i.jsx)("img", {
                            className: `image_content ${v.default.image_content}`,
                            src: d.supportChatGif,
                            alt: "Hiring",
                          }),
                        }),
                        (0, i.jsxs)(a.Col, {
                          lg: 6,
                          className: `${v.default.help_text_section}`,
                          children: [
                            (0, i.jsxs)("h1", {
                              className: "heading_text white_text",
                              children: [
                                "Our support team is",
                                (0, i.jsx)("br", {}),
                                (0, i.jsx)("span", {
                                  className: "primary_orange_text",
                                  children: "active 24x7",
                                }),
                              ],
                            }),
                            (0, i.jsx)("p", {
                              className: "paragraph_text light_grey_text",
                              children:
                                "Feel free to chat with our support team whenever you need more clarity",
                            }),
                            (0, i.jsx)(x.default, {
                              buttonText: "Contact Us",
                              path: "/contact",
                              wrapStyle: {
                                backgroundColor: "#FBAF03",
                                color: "#1c1c1c",
                                marginRight: "20px",
                                marginTop: "2rem",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                              },
                              activeStatus: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(r.Row, {
                      className: `section_vertical_spacing text-center light_grey_text ${v.default.Testimonial}`,
                      children: (0, i.jsxs)(a.Col, {
                        xs: 12,
                        children: [
                          (0, i.jsxs)("h1", {
                            className: "heading_text white_text",
                            children: [
                              "Over a ",
                              (0, i.jsx)("span", {
                                className: "primary_orange_text",
                                children: "million",
                              }),
                              " happy stories",
                            ],
                          }),
                          (0, i.jsx)(a.Col, {
                            xs: 12,
                            children: (0, i.jsx)(y.Media, {
                              lessThan: "lg",
                              children: (0, i.jsx)(w, {
                                type: "Parents",
                                isTabletView: !0,
                              }),
                            }),
                          }),
                          (0, i.jsx)(a.Col, {
                            xs: 12,
                            children: (0, i.jsx)(y.Media, {
                              greaterThanOrEqual: "lg",
                              children: (0, i.jsx)(w, {
                                type: "Parents",
                                isTabletView: !1,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(r.Row, {
                      className:
                        "section_vertical_spacing text-center extra_sides_padding",
                      children: (0, i.jsxs)(a.Col, {
                        xs: 12,
                        children: [
                          (0, i.jsxs)("h1", {
                            className: "heading_text white_text",
                            children: [
                              "We are ",
                              (0, i.jsx)("span", {
                                className: "primary_orange_text",
                                children: "trusted",
                              }),
                              " by",
                            ],
                          }),
                          (0, i.jsx)(r.Row, {
                            className: `${v.default.trust_section} text-center`,
                            children: j.map((e, t) =>
                              (0, i.jsx)(
                                a.Col,
                                {
                                  xs: 6,
                                  md: 4,
                                  lg: 3,
                                  className: v.default.sponsor_container,
                                  children: (0, i.jsx)("a", {
                                    href: e[2],
                                    children: (0, i.jsx)("img", {
                                      src: e[1],
                                      alt: e[0],
                                    }),
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(r.Row, {
                      className: `full_width_section white_text ${v.default.hiring_section}`,
                      children: [
                        (0, i.jsx)(a.Col, {
                          lg: 6,
                          className:
                            "section_image_container section_right_image",
                          children: (0, i.jsx)("img", {
                            className: `image_content ${v.default.image_content}`,
                            src: d.hiringImage,
                            alt: "Hiring",
                          }),
                        }),
                        (0, i.jsxs)(a.Col, {
                          lg: 6,
                          className: `${v.default.hiring_text_section}`,
                          children: [
                            (0, i.jsxs)("h1", {
                              className: "heading_text white_text",
                              children: [
                                "Want to shape finance",
                                (0, i.jsx)("br", {}),
                                "for the ",
                                (0, i.jsx)("span", {
                                  className: "primary_orange_text",
                                  children: "next gen?",
                                }),
                              ],
                            }),
                            (0, i.jsx)(y.Media, {
                              lessThan: "sm",
                              children: (0, i.jsx)(x.default, {
                                buttonText: "Join the Fam",
                                url: "/careers",
                                wrapStyle: {
                                  backgroundColor: "#FBAF03",
                                  width: "100%",
                                  fontWeight: "600",
                                  color: "#1c1c1c",
                                },
                                activeStatus: !0,
                              }),
                            }),
                            (0, i.jsx)(y.Media, {
                              greaterThanOrEqual: "sm",
                              children: (0, i.jsx)(x.default, {
                                buttonText: "Join the Fam",
                                url: "/careers",
                                wrapStyle: {
                                  padding: ".8rem 2.5rem",
                                  backgroundColor: "#FBAF03",
                                  color: "#1c1c1c",
                                  fontSize: "1.2rem",
                                  fontWeight: "600",
                                },
                                activeStatus: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(c, {}),
                    (0, i.jsx)(s.default, { dark: !0 }),
                  ],
                }),
              ],
            })
          );
        },
      ],
      66120
    );
  },
  12482,
  (e, i, t) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", () => e.r(66120)]),
      i.hot &&
        i.hot.dispose(function () {
          window.__NEXT_P.push(["/"]);
        });
  },
]);

//# sourceMappingURL=2bad581fe01ce963.js.map
