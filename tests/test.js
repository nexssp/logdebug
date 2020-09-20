const log = require('../src/log');
const { bold } = require('@nexssp/ansi');
console.log(bold('\n   >> Debug functions <<'));
log.dy('\t Debug yellow: ' + bold('log.dy'));
log.dr('\t Debug red: ' + bold('log.dr'));
log.dg('\t Debug green: ' + bold('log.dg'));
log.di('\t Debug bold: ' + bold('log.di'));
log.db('\t Debug blue: ' + bold('log.db'));
log.du('\t Debug underscore: ' + bold('log.du'));

console.log(bold('\n   >> Log functions <<'));
log.warn('\t Warning message ' + bold('log.warn'));
log.error('\t error message ' + bold('log.error'));
log.info('\t info message ' + bold('log.info'));
log.success(' sucess message ' + bold('log.success'));
log.ok('\t ok message ' + bold('log.ok'));
log.trace('\t trace message ' + bold('log.trace'));
//   // Log
//   warn: nexssLog('error')('WARN')(yellow),
//   error: nexssLog('error')('ERROR')(red),
//   info: nexssLog('error')('INFO')(white),
//   success: nexssLog('error')('SUCCESS')(green),
//   ok: nexssLog('error')('OK')(green),
//   trace: nexssLog('error')('TRACE')(green),
