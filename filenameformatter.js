function newFileName(format, ext, index) {

    var formatted = format.replace(/(\$+)/, function(match) {

        var diff = match.length - String(index).length;

        return "0".repeat(diff < 0 ? 0 : diff) + index;

    });

    return formatted + "." + ext;

}