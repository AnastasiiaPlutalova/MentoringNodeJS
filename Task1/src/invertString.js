const stdin = process.stdin;
const stdout = process.stdout;

function invertString(origin) {
    const result = origin.split('').reverse().join('');
    return result;
}

stdin.on('data', (input) => {
    const str = input.toString().trim();
    const output = invertString(str);
    stdout.write(output);
    stdout.write('\r\n');
});

stdin.on('error', () => {
    stdout.write('Something went wrong');
})