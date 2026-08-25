# test-srv-0x7f

obfuscated key-checker crackme reverse engineering challenge.

## the challenge

```
node index.js
>> enter key: ???
```

find the key. only a SHA-256 digest of it is stored:

```
1997a6810320afe627348062d16b4e8489a3272c9c12ab279dd717716df8567f
```

## protections

- all string literals XOR(0x5F) + base64 encoded, resolved at runtime
- control flow flattened into a switch state machine
- hex-identifier mangling + dead-code junk functions
- timing anti-debug check

## rules

- static analysis, dynamic analysis, whatever. no brute-forcing the hash (that's cheating, and impossible anyway).

## run

```
node index.js
```

## rebuild

```
node build.js
```

---

<img src="smiley.svg" width="120" alt=":)">

