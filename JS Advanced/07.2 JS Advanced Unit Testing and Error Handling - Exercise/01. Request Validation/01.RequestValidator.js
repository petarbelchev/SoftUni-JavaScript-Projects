function validator(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (methods.includes(obj.method) == false || obj.method == undefined) {
        throw Error('Invalid request header: Invalid Method');
    } else if ((/^[\w\.]+$/g.test(obj.uri) == false && obj.uri != '*') || obj.uri == undefined) {
        throw Error('Invalid request header: Invalid URI');
    } else if (versions.includes(obj.version) == false || obj.version == undefined) {
        throw Error('Invalid request header: Invalid Version');
    } else if (/^[^<>\\&'"]*$/.test(obj.message) == false || obj.message == undefined) {
        throw Error('Invalid request header: Invalid Message');
    }

    return obj;
}

module.exports = validator;