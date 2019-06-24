var stdin = process.openStdin();
var stdout = process.stdout;

function invertString(origin) {
    var result = origin.split("").reverse().join("");
    return result;
}

stdin.addListener("data", function(input) {
    var str = input.toString().trim();
    var output = invertString(str);
    stdout.write(output);
    stdout.write('\r\n');
});