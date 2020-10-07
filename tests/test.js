const log = require('../src/logdebug');
const { bold } = require('@nexssp/ansi');
if (log.isDebug) console.log(bold('\n   >> Debug functions <<'));
log.dy('Debug yellow: ' + bold('log.dy'));
log.dr('Debug red: ' + bold('log.dr'));
log.dg('Debug green: ' + bold('log.dg'));
log.dm('Debug magenta: ' + bold('log.dm'));
log.dc('Debug cyan: ' + bold('log.dc'));
log.di('Debug bold: ' + bold('log.di'));
log.db('Debug blue: ' + bold('log.db'));
log.du('Debug underscore: ' + bold('log.du'));

if (!log.isQuiet) console.log(bold('\n   >> Log functions <<'));
log.warn('Warning message ' + bold('log.warn'));
log.error('error message ' + bold('log.error'));
log.info('info message ' + bold('log.info'));
log.important(' important message ' + bold('log.important'));
log.success(' sucess message ' + bold('log.success'));
log.ok('ok message ' + bold('log.ok'));
log.trace('trace message ' + bold('log.trace'));
//   // Log
//   warn: nexssLog('error')('WARN')(yellow),
//   error: nexssLog('error')('ERROR')(red),
//   info: nexssLog('error')('INFO')(white),
//   success: nexssLog('error')('SUCCESS')(green),
//   ok: nexssLog('error')('OK')(green),
//   trace: nexssLog('error')('TRACE')(green),
