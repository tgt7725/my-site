/**
 * 格式化一个时间戳
 * @param {Number} time 时间戳
 * @returns 
 */
export default function (time) {
    const d = new Date(time);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const second = d.getSeconds();
    return `${year}-${padStart(month)}-${padStart(date)} ${padStart(hour)}:${padStart(minutes)}:${padStart(second)}`
}

function padStart(num) {
    return (num + '').padStart(2, 0)
}