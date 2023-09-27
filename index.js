/**
 * For example, you want to know when you will be 30 years, 30 months and 30 days old. You can pass your date
 * of birth and the year, month and day that you want to calculate into the function,
 * for example getAnniversary(new Date('1995-11-29'), 30, 30, 30) which means that you want to find out
 * when you will be 30 years, 30 months and 30 days
 *
 * @param {Date} birthday Date you were born
 * @param {number} years Year you want to find
 * @param {number} months Month you want to find
 * @param {number} days Day you want to find
 *
 * @returns {string} Formatted date
 */
function getWiredAnniversary(
    birthday,
    years,
    months,
    days
) {
    const anniversaryDate = new Date(birthday)
    anniversaryDate.setFullYear(birthday.getFullYear() + years)
    anniversaryDate.setMonth(birthday.getMonth() + months)
    anniversaryDate.setDate(birthday.getDate() + days)

    let month = (anniversaryDate.getMonth() + 1).toString(),
        day = anniversaryDate.getDate().toString(),
        year = anniversaryDate.getFullYear().toString();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}