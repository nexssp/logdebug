# @nexssp/log

Easy loging/debuging. Going to stderr if `--debug`. You can change from stderr to stdout easy by another option `--debug:stdout`. You can disable logs just by adding `--quiet`. Maybe you need just debug information, combine it with `--quiet --debug`.

## Debug and Log functions and colors

![Nexss Log and Debug functions](https://raw.githubusercontent.com/nexssp/log/master/nexssp_log_colors_and_messages.png)

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
