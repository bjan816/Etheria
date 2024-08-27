import dayjs from 'dayjs';
import bigIntSupport from 'dayjs/plugin/bigIntSupport';
dayjs.extend(bigIntSupport);


export const blockTimestampToViewFormatter = (blockTimestamp) => {

    // Timestamp
    const timestamp = blockTimestamp * 1000n; // 注意乘以1000，因为 JavaScript 中的时间戳是以毫秒为单位

    // Convert timestamp to specified format
    const formattedDate = dayjs(timestamp).format('MM/DD/YYYY, h:mm:ss A');

    return formattedDate;
}