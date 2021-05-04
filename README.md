# @nexssp/logdebug

Note: **1.0.12+**

Now **header** function is size of terminal window.

Note: **1.0.11+ See new time functions below ..**

Easy loging/debuging. Going to stderr if `--debug`. You can change from stderr to stdout easy by another option `--debug:stdout`. You can disable logs just by adding `--quiet`. Maybe you need just debug information, combine it with `--quiet --debug`.

## Debug and Log functions and colors

![Nexss Log and Debug functions](https://user-images.githubusercontent.com/53263666/117049034-f4530f00-ad13-11eb-95f1-a4d80e42ec7d.png)

## Parameters

This library is designed just to use cli process.argv directly.

- **yourprogram.js --debug** # will display debugging information, without it won't.
- **yourprogram.js --debug:stdout** # will pipe to stdout.
- **yourprogram.js --quiet** # will hide logs information

## Examples

note: below must be run with `--debug` or `--debug:stdio` . if you add `--quiet`, logs will not be displayed.

```js
const log = require('@nexssp/log');
const { bold } = require('@nexssp/ansi');
// You can display debug infor by --debug or --debug:stdout
log.dy('\t Debug yellow: ' + bold('log.dy'));
log.dr('\t Debug red: ' + bold('log.dr'));
log.dg('\t Debug green: ' + bold('log.dg'));
log.di('\t Debug bold: ' + bold('log.di'));
log.db('\t Debug blue: ' + bold('log.db'));
log.du('\t Debug underscore: ' + bold('log.du'));

// You can bellow hide by --quiet
log.warn('\t Warning message ' + bold('log.warn'));
log.error('\t error message ' + bold('log.error'));
log.info('\t info message ' + bold('log.info'));
log.success('sucess message ' + bold('log.success'));
log.ok('\t ok message ' + bold('log.ok'));
log.trace('\t trace message ' + bold('log.trace'));
```

## Time options (1.0.11+)

#### --debug:ms

displays time from the begining.

![image](https://user-images.githubusercontent.com/8799218/96580565-c60e6480-12d8-11eb-82d0-e86516016299.png)

#### --debug:diff

Displays difference between each log.

![image](https://user-images.githubusercontent.com/8799218/96580751-0b329680-12d9-11eb-888a-14c2ce2b9dc1.png)
