const moment = require('moment')

const date = (format,date) => {
    if(format && typeof format === 'string')
        return _generate(format, date)
    return _generate('YYYY-MM-DD')
}
const dateAgo = (date) => {
    return moment(date).fromNow()
}
const datetime = (format,date) => {
    if(format && typeof format === 'string')
        return _generate(format, date)
    return _generate('YYYY-MM-DD H:i:s')
}
const _generate = (format,date) => {
    if(date && typeof date === 'string')
        return moment(date).format(format)
    return moment().format(format)
}
module.exports = {
	date,
	datetime,
    dateAgo
}