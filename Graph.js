// Графы
// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

function killer(suspects, dead) {
    for (const [suspect, seen] of Object.entries(suspects)) {
        if (dead.every(person => seen.includes(person))) {
            return suspect;
        }
    }
    return null;
}