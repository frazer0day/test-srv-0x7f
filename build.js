// build.js — generates the obfuscated crackme (run: node build.js)
const fs = require('fs');

const STRINGS = [
  'crypto',                              // 0
  'createHash',                          // 1
  'sha256',                              // 2
  'update',                              // 3
  'utf8',                                // 4
  'digest',                              // 5
  'hex',                                 // 6
  '1997a6810320afe627348062d16b4e8489a3272c9c12ab279dd717716df8567f', // 7
  '>> enter key: ',                      // 8
  '\n[+] ACCESS GRANTED :: welcome, operator\n',   // 9
  '\n[-] ACCESS DENIED :: attempt logged\n',       // 10
  'on'                                   // 11
];

const enc = s => Buffer.from([...Buffer.from(s, 'utf8')].map(b => b ^ 0x5F)).toString('base64');
const arr = STRINGS.map(enc).map(s => `"${s}"`).join(',\n  ');

const out = `// obfuscated build — do not format
var _0x4f2a=[${arr}];
var _0x9e17=(function(){var _0x77bd=function(_0x1a,_0x2b){var _0xc=Buffer.from(_0x4f2a[_0x1a],'base64'),_0xd='';for(var _0xe=0;_0xe<_0xc.length;_0xe++)_0xd+=String.fromCharCode(_0xc[_0xe]^0x5f);return _0xd;};return _0x77bd;})();
var _0x3fc1=function(_0x1){return _0x9e17(_0x1);};
(function(){var _0xa1=0x1337;function _0xb2(_0xc3){return (_0xc3*0x85ebca6b)>>>0;}while(_0xa1-->0){_0xb2(_0xa1^_0xa1<<3);}})();
var _0x8dd0=function(_0x2a){var _0x3b=_0x2a^0x9e3779b9;for(var _0x4c=0;_0x4c<8;_0x4c++){_0x3b=(_0x3b*0x27d4eb2f)>>>0;_0x3b^=_0x3b>>>15;}return _0x3b>>>0;};
var _0x5ee1=function(){var _0x6f=Date.now();for(var _0x7a=0;_0x7a<0x2710;_0x7a++);return (Date.now()-_0x6f)<0x32;};
var _0xc0de=require(_0x3fc1(0));
var _0xfa11=function(_0x8b){return _0xc0de[_0x3fc1(1)](_0x3fc1(2))[_0x3fc1(3)](_0x8b,_0x3fc1(4))[_0x3fc1(5)](_0x3fc1(6));};
var _0x1337c='${STRINGS[7]}';
process.stdout.write(_0x3fc1(8));
process.stdin[_0x3fc1(11)]('data',function(_0x9d){
  var _0xae=_0x9d.toString().trim(),_0xbf=0,_0xd0;
  while(0x1){
    switch(_0xbf){
      case 0x0:_0xbf=_0x5ee1()?0x1:0x3;break;
      case 0x1:_0xbf=(_0xfa11(_0xae)===_0x1337c)?0x2:0x3;break;
      case 0x2:process.stdout.write(_0x3fc1(9));process.exit(0x0);break;
      case 0x3:process.stdout.write(_0x3fc1(10));process.exit(0x1);break;
      default:process.exit(0x2);
    }
  }
});
`;

fs.writeFileSync(__dirname + '/index.js', out);
console.log('built index.js,', out.length, 'bytes');
