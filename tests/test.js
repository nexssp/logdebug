const log = require('../src/logdebug');
const { bold } = require('@nexssp/ansi');

if (log.isDebug) console.log(bold('\n   >> Debug functions << show with --debug'));
log.dy('Debug yellow: ' + bold('log.dy'));
log.dr('Debug red: ' + bold('log.dr'));
log.dg('Debug green: ' + bold('log.dg'));
log.dm('Debug magenta: ' + bold('log.dm'));
log.dc('Debug cyan: ' + bold('log.dc'));
log.di('Debug bold: ' + bold('log.di'));
log.db('Debug blue: ' + bold('log.db'));
log.du('Debug underscore: ' + bold('log.du'));
log.dr(1, 2, 3, { object: true });

if (!log.isQuiet) console.log(bold('\n   >> Log functions << hide with --quiet'));
log.warn('Warning message ' + bold('log.warn'));
log.error('error message ' + bold('log.error'));
log.info('info message ' + bold('log.info'));
log.important(' important message ' + bold('log.important'));
log.success(' sucess message ' + bold('log.success'));
log.ok('ok message ' + bold('log.ok'));
log.trace('trace message ' + bold('log.trace'));
log.info(1, 2, 3, { object: true });
