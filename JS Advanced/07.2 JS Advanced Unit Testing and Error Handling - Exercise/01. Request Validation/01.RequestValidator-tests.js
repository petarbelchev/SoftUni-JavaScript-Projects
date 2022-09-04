const result = require('./01.RequestValidator.js');
const expect = require('chai').expect;

describe('First Test Group', () => {
    it('valid object', () => {
        let obj = { method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' };
        expect(result(obj)).to.be.equals(obj);
    });

    it('invalid method', () => {
        let obj = { method: 'OPTIONS', uri: 'git.master', version: 'HTTP/1.1', message: '-recursive' };
        expect(() => result(obj).throw(Error).which.has.property('message', 'Invalid request header: Invalid Method'));
    });

    it('invalid uri', () => {
        let obj = { method: 'GET', uri: '%appdata%', version: 'HTTP/1.1', message: '' };
        expect(() => result(obj).throw(Error).which.has.property('message', 'Invalid request header: Invalid URI'));
    });

    it('uri is *', () => {
        let obj = { method: 'GET', uri: '*', version: 'HTTP/1.1', message: '' };
        expect(result(obj)).to.be.equals(obj);
    });

    it('invalid version', () => {
        let obj = { method: 'POST', uri: 'home.bash', message: 'rm -rf /*' };
        expect(() => result(obj).throw(Error).which.has.property('message', 'Invalid request header: Invalid Version'));
    });

    it('invalid message', () => {
        let obj = { method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '"value"' };
        expect(() => result(obj).throw(Error).which.has.property('message', 'Invalid request header: Invalid Message'));
    });

    it('missing message field', () => {
        let obj = { method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1' };
        expect(() => result(obj).throw(Error).which.has.property('message', 'Invalid request header: Invalid Message'));
    });
});