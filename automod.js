
    var hasilgetlinkarp = false;
    $.ajax({
        url: '//' + web_safelink + "/feeds/posts/summary/?alt=json-in-script&orderby=updated&max-results=9999",
        type: 'get',
        dataType: 'jsonp',
        success: function aku(younglex) {
            var cewek_cantik = younglex.feed;
            var ambillinku = cewek_cantik.openSearch$totalResults.$t;
            if (ambillinku > 150) {
                var totallinkarp = 150;
            };
            if (ambillinku <= 150) {
                var totallinkarp = ambillinku;
            };
            var listlinkku = new Array();

            for (var i = 0; i < totallinkarp; i++) {
                if (cewek_cantik.entry[i].link[4] === undefined) {
                    var akuula = cewek_cantik.entry[i].link[2].href;
                    if (akuula.indexOf(web_safelink) >= 0) {
                        listlinkku[i] = cewek_cantik.entry[i].link[2].href;
                    }
                } else {
                    listlinkku[i] = cewek_cantik.entry[i].link[4].href;
                }

            }
            hasilgetlinkarp = listlinkku;
            nextgetarp();
        },
        async: false
    });

    function nextgetarp() {
        var long_bungabdi_tampan = document.getElementsByTagName('a').length;
        var awb = new Array();
        var awb_ceo = new Array();
        var kasian_si_jomblo = new Array();
        var kasian_si_jomblo2 = new Array();
        var broindo = -1;
        var broindo2 = -1;
        var broindo3 = -1;
        if (type_direct == 'all') {
            fix_nodirect_domain = (no_enscript + ',' + window.location.hostname + ',blogger.com,javascript:void(0);').split(',');
            i_love_you1();

            function i_love_you1() {
                broindo += 1;
                if (broindo < long_bungabdi_tampan) {
                    var bertobatla = document.getElementsByTagName('a')[broindo].href;
                    bertobatla = bertobatla.replace('http://', '');
                    bertobatla = bertobatla.replace('https://', '');
                    bertobatla = bertobatla.replace('www.', '');
                    bertobatla = bertobatla.replace('#', '');
                    bertobatla = bertobatla.replace('?', '');
                    awb[broindo] = bertobatla.split('/')[0];
                    kasian_si_jomblo[broindo] = broindo;
                    i_love_you1();
                } else {
                    i_love_you2();
                }
            }

            function i_love_you2() {
                broindo2 += 1;
                if (broindo2 < fix_nodirect_domain.length) {
                    i_love_you3(broindo2);
                    i_love_you2();
                } else {
                    i_love_you4();
                }
            }

            function i_love_you3(broindo2) {
                if (awb.indexOf(fix_nodirect_domain[broindo2]) >= 0) {
                    var dompet_kosong = awb.indexOf(fix_nodirect_domain[broindo2]);
                    awb[dompet_kosong] = -1;
                    kasian_si_jomblo[dompet_kosong] = -1;
                    i_love_you3(broindo2);
                }
            }

            function i_love_you4() {
                broindo3 += 1;
                if (broindo3 < awb.length) {
                    if (kasian_si_jomblo[broindo3] > 0) {
                        var dunia_cuman_sebentar = kasian_si_jomblo[broindo3];
                        if (document.getElementsByTagName('a')[dunia_cuman_sebentar].href.split('').length > 0) {
                            var rajin_sholat_ya = document.getElementsByTagName('a')[dunia_cuman_sebentar].href;
                            var ibuku_baik = aesCrypto.encrypt(convertstr(rajin_sholat_ya), convertstr('root'));
                            var mengantuk = "//"+web_safelink + path + ibuku_baik;
                            document.getElementsByTagName('a')[dunia_cuman_sebentar].setAttribute('href', mengantuk);
                            document.getElementsByTagName('a')[dunia_cuman_sebentar].setAttribute('target', '_blank');
                        }
                    }
                    i_love_you4();
                }
            }
        }
        //enscript
        if (type_direct == 'only') {
            for (var ji = 0; ji < enscript.split(',').length; ji++) {
                for (var i = 0; i < long_bungabdi_tampan; i++) {
                    var awb_ceo = document.getElementsByTagName('a');
                    awb[i] = awb_ceo[i].href.replace('http://', '').replace('https://', '').split('/')[0];
                    if (awb[i].indexOf(enscript.split(',')[ji]) >= 0) {
                        var rajin_sholat_ya = document.getElementsByTagName('a')[i].href;
                        var ibuku_baik = aesCrypto.encrypt(convertstr(rajin_sholat_ya), convertstr('root'));
                        var mengantuk = "//"+ web_safelink + path + ibuku_baik;
                        document.getElementsByTagName('a')[i].setAttribute('href', mengantuk);
                        document.getElementsByTagName('a')[i].setAttribute('target', '_blank');
                        console.log(enscript.split(',')[ji] + ' ada di posisi ' + i)
                    }
                }
            }
        }
    }


var aesCrypto,CryptoJS=CryptoJS||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;i>o;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else if(r.length>65535)for(o=0;i>o;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),s=r.enc={},c=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(r,e/2)}},a=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(a.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return a.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,s=this.blockSize,c=i/(4*s),a=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*s,f=t.min(4*a,i);if(a){for(var u=0;a>u;u+=s)this._doProcessBlock(n,u);var h=n.splice(0,a);r.sigBytes-=f}return new o.init(h,f)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(n.Hasher=u.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new h.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);function convertstr(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}!function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;r>o;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;4>c&&r>o+.75*c;c++)i.push(n.charAt(s>>>6*(3-c)&63));var a=n.charAt(64);if(a)for(;i.length%4;)i.push(a);return i.join("")},parse:function(t){var r=t.length,n=this._map,i=n.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(r=o)}for(var s=[],c=0,a=0;r>a;a++)if(a%4){var f=n.indexOf(t.charAt(a-1))<<a%4*2,u=n.indexOf(t.charAt(a))>>>6-a%4*2;s[c>>>2]|=(f|u)<<24-c%4*8,c++}return e.create(s,c)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,r,n,i,o,s){var c=t+(e&r|~e&n)+i+s;return(c<<o|c>>>32-o)+e}function r(t,e,r,n,i,o,s){var c=t+(e&n|r&~n)+i+s;return(c<<o|c>>>32-o)+e}function n(t,e,r,n,i,o,s){var c=t+(e^r^n)+i+s;return(c<<o|c>>>32-o)+e}function i(t,e,r,n,i,o,s){var c=t+(r^(e|~n))+i+s;return(c<<o|c>>>32-o)+e}var o=CryptoJS,s=o.lib,c=s.WordArray,a=s.Hasher,f=o.algo,u=[];!function(){for(var e=0;64>e;e++)u[e]=4294967296*t.abs(t.sin(e+1))|0}();var h=f.MD5=a.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var s=0;16>s;s++){var c=o+s,a=t[c];t[c]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var f=this._hash.words,h=t[o+0],p=t[o+1],l=t[o+2],d=t[o+3],y=t[o+4],v=t[o+5],g=t[o+6],_=t[o+7],S=t[o+8],x=t[o+9],m=t[o+10],B=t[o+11],C=t[o+12],k=t[o+13],z=t[o+14],w=t[o+15],E=f[0],b=f[1],D=f[2],M=f[3];E=e(E,b,D,M,h,7,u[0]),M=e(M,E,b,D,p,12,u[1]),D=e(D,M,E,b,l,17,u[2]),b=e(b,D,M,E,d,22,u[3]),E=e(E,b,D,M,y,7,u[4]),M=e(M,E,b,D,v,12,u[5]),D=e(D,M,E,b,g,17,u[6]),b=e(b,D,M,E,_,22,u[7]),E=e(E,b,D,M,S,7,u[8]),M=e(M,E,b,D,x,12,u[9]),D=e(D,M,E,b,m,17,u[10]),b=e(b,D,M,E,B,22,u[11]),E=e(E,b,D,M,C,7,u[12]),M=e(M,E,b,D,k,12,u[13]),D=e(D,M,E,b,z,17,u[14]),E=r(E,b=e(b,D,M,E,w,22,u[15]),D,M,p,5,u[16]),M=r(M,E,b,D,g,9,u[17]),D=r(D,M,E,b,B,14,u[18]),b=r(b,D,M,E,h,20,u[19]),E=r(E,b,D,M,v,5,u[20]),M=r(M,E,b,D,m,9,u[21]),D=r(D,M,E,b,w,14,u[22]),b=r(b,D,M,E,y,20,u[23]),E=r(E,b,D,M,x,5,u[24]),M=r(M,E,b,D,z,9,u[25]),D=r(D,M,E,b,d,14,u[26]),b=r(b,D,M,E,S,20,u[27]),E=r(E,b,D,M,k,5,u[28]),M=r(M,E,b,D,l,9,u[29]),D=r(D,M,E,b,_,14,u[30]),E=n(E,b=r(b,D,M,E,C,20,u[31]),D,M,v,4,u[32]),M=n(M,E,b,D,S,11,u[33]),D=n(D,M,E,b,B,16,u[34]),b=n(b,D,M,E,z,23,u[35]),E=n(E,b,D,M,p,4,u[36]),M=n(M,E,b,D,y,11,u[37]),D=n(D,M,E,b,_,16,u[38]),b=n(b,D,M,E,m,23,u[39]),E=n(E,b,D,M,k,4,u[40]),M=n(M,E,b,D,h,11,u[41]),D=n(D,M,E,b,d,16,u[42]),b=n(b,D,M,E,g,23,u[43]),E=n(E,b,D,M,x,4,u[44]),M=n(M,E,b,D,C,11,u[45]),D=n(D,M,E,b,w,16,u[46]),E=i(E,b=n(b,D,M,E,l,23,u[47]),D,M,h,6,u[48]),M=i(M,E,b,D,_,10,u[49]),D=i(D,M,E,b,z,15,u[50]),b=i(b,D,M,E,v,21,u[51]),E=i(E,b,D,M,C,6,u[52]),M=i(M,E,b,D,d,10,u[53]),D=i(D,M,E,b,m,15,u[54]),b=i(b,D,M,E,p,21,u[55]),E=i(E,b,D,M,S,6,u[56]),M=i(M,E,b,D,w,10,u[57]),D=i(D,M,E,b,g,15,u[58]),b=i(b,D,M,E,k,21,u[59]),E=i(E,b,D,M,y,6,u[60]),M=i(M,E,b,D,B,10,u[61]),D=i(D,M,E,b,l,15,u[62]),b=i(b,D,M,E,x,21,u[63]),f[0]=f[0]+E|0,f[1]=f[1]+b|0,f[2]=f[2]+D|0,f[3]=f[3]+M|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(n/4294967296),s=n;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(r.length+1),this._process();for(var c=this._hash,a=c.words,f=0;4>f;f++){var u=a[f];a[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return c},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}});o.MD5=a._createHelper(h),o.HmacMD5=a._createHmacHelper(h)}(Math),function(){var t=CryptoJS,e=t.lib,r=e.Base,n=e.WordArray,i=t.algo,o=i.MD5,s=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=r.hasher.create(),o=n.create(),s=o.words,c=r.keySize,a=r.iterations;s.length<c;){f&&i.update(f);var f=i.update(t).finalize(e);i.reset();for(var u=1;a>u;u++)f=i.finalize(f),i.reset();o.concat(f)}return o.sigBytes=4*c,o}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,n=r.Base,i=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,c=(s.Utf8,s.Base64),a=e.algo.EvpKDF,f=r.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?_:v}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()}),u=(r.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),h=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=u.CBC=function(){function e(e,r,n){var i=this._iv;if(i){var o=i;this._iv=t}else o=this._prevBlock;for(var s=0;n>s;s++)e[r+s]^=o[s]}var r=h.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize;e.call(this,t,r,i),n.encryptBlock(t,r),this._prevBlock=t.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(t,r){var n=this._cipher,i=n.blockSize,o=t.slice(r,r+i);n.decryptBlock(t,r),e.call(this,t,r,i),this._prevBlock=o}}),r}(),l=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,o=n<<24|n<<16|n<<8|n,s=[],c=0;n>c;c+=4)s.push(o);var a=i.create(s,n);t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},d=(r.BlockCipher=f.extend({cfg:f.cfg.extend({mode:p,padding:l}),reset:function(){f.reset.call(this);var t=this.cfg,e=t.iv,r=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=r.createEncryptor;else{n=r.createDecryptor;this._minBufferSize=1}this._mode=n.call(r,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;if(r)var n=i.create([1398893684,1701076831]).concat(r).concat(e);else n=e;return n.toString(c)},parse:function(t){var e=c.parse(t),r=e.words;if(1398893684==r[0]&&1701076831==r[1]){var n=i.create(r.slice(2,4));r.splice(0,4),e.sigBytes-=16}return d.create({ciphertext:e,salt:n})}},v=r.SerializableCipher=n.extend({cfg:n.extend({format:y}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),s=i.cfg;return d.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),t.createDecryptor(r,n).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),g=(e.kdf={}).OpenSSL={execute:function(t,e,r,n){n||(n=i.random(8));var o=a.create({keySize:e+r}).compute(t,n),s=i.create(o.words.slice(e),4*r);return o.sigBytes=4*e,d.create({key:o,iv:s,salt:n})}},_=r.PasswordBasedCipher=v.extend({cfg:v.cfg.extend({kdf:g}),encrypt:function(t,e,r,n){var i=(n=this.cfg.extend(n)).kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=v.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);return n.iv=i.iv,v.decrypt.call(this,t,e,i.key,n)}})}(),function(){var t=CryptoJS,e=t.lib.BlockCipher,r=t.algo,n=[],i=[],o=[],s=[],c=[],a=[],f=[],u=[],h=[],p=[];!function(){for(var t=[],e=0;256>e;e++)t[e]=128>e?e<<1:e<<1^283;var r=0,l=0;for(e=0;256>e;e++){var d=l^l<<1^l<<2^l<<3^l<<4;d=d>>>8^255&d^99,n[r]=d,i[d]=r;var y=t[r],v=t[y],g=t[v],_=257*t[d]^16843008*d;o[r]=_<<24|_>>>8,s[r]=_<<16|_>>>16,c[r]=_<<8|_>>>24,a[r]=_;_=16843009*g^65537*v^257*y^16843008*r;f[d]=_<<24|_>>>8,u[d]=_<<16|_>>>16,h[d]=_<<8|_>>>24,p[d]=_,r?(r=y^t[t[t[g^y]]],l^=t[t[l]]):r=l=1}}();var l=[0,1,2,4,8,16,32,64,128,27,54],d=r.AES=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes/4,i=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],s=0;i>s;s++)if(r>s)o[s]=e[s];else{var c=o[s-1];s%r?r>6&&s%r==4&&(c=n[c>>>24]<<24|n[c>>>16&255]<<16|n[c>>>8&255]<<8|n[255&c]):(c=n[(c=c<<8|c>>>24)>>>24]<<24|n[c>>>16&255]<<16|n[c>>>8&255]<<8|n[255&c],c^=l[s/r|0]<<24),o[s]=o[s-r]^c}for(var a=this._invKeySchedule=[],d=0;i>d;d++){s=i-d;if(d%4)c=o[s];else c=o[s-4];a[d]=4>d||4>=s?c:f[n[c>>>24]]^u[n[c>>>16&255]]^h[n[c>>>8&255]]^p[n[255&c]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,s,c,a,n)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,f,u,h,p,i);r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,s,c){for(var a=this._nRounds,f=t[e]^r[0],u=t[e+1]^r[1],h=t[e+2]^r[2],p=t[e+3]^r[3],l=4,d=1;a>d;d++){var y=n[f>>>24]^i[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[l++],v=n[u>>>24]^i[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[l++],g=n[h>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[l++],_=n[p>>>24]^i[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[l++];f=y,u=v,h=g,p=_}y=(c[f>>>24]<<24|c[u>>>16&255]<<16|c[h>>>8&255]<<8|c[255&p])^r[l++],v=(c[u>>>24]<<24|c[h>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[l++],g=(c[h>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&u])^r[l++],_=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[u>>>8&255]<<8|c[255&h])^r[l++];t[e]=y,t[e+1]=v,t[e+2]=g,t[e+3]=_},keySize:8});t.AES=e._createHelper(d)}(),function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var e=this.prefix;return(e+=t.salt.toString())+t.ciphertext.toString()},parse:function(t){var e=CryptoJS.lib.CipherParams.create({}),r=this.prefix.length;return 0!==t.indexOf(this.prefix)?e:(e.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+r)),e.salt=CryptoJS.enc.Hex.parse(t.substring(r,16+r)),e)}},t.encrypt=function(e,r){try{return CryptoJS.AES.encrypt(e,r,{format:t.formatter}).toString()}catch(t){return""}},t.decrypt=function(e,r){try{return CryptoJS.AES.decrypt(e,r,{format:t.formatter}).toString(CryptoJS.enc.Utf8)}catch(t){return""}}}(aesCrypto={}),function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var e=this.prefix;return(e+=t.salt.toString())+t.ciphertext.toString()},parse:function(t){var e=CryptoJS.lib.CipherParams.create({}),r=this.prefix.length;return 0!==t.indexOf(this.prefix)?e:(e.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+r)),e.salt=CryptoJS.enc.Hex.parse(t.substring(r,16+r)),e)}},t.encrypt=function(e,r){try{return CryptoJS.AES.encrypt(e,r,{format:t.formatter}).toString()}catch(t){return""}},t.decrypt=function(e,r){try{return CryptoJS.AES.decrypt(e,r,{format:t.formatter}).toString(CryptoJS.enc.Utf8)}catch(t){return""}}}(aesCrypto={});
