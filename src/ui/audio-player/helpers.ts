export const toReadableTime = (time: number) => {
    const min: number = Math.floor(time / 60);
    const strMin: string = min >= 10 ? min.toString() : "0" + min.toString();
    const sec: number = Math.floor(time % 60);
    const strSec: string = sec >= 10 ? sec.toString() : "0" + sec.toString();
    return `${strMin}:${strSec}`
}