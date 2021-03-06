describe('dynamicBase', function () {

    var mockHostname,
        mockProtocol,
        mockPort,
        getBase,
        mockLocation,
        getBaseTags,
        getBaseHref;

    beforeEach(function () {

        mockProtocol = 'https:';
        mockHostname = 'test.local';
        mockPort = '7777';

        mockLocation = {
            hostname: mockHostname,
            protocol: mockProtocol,
            port: mockPort,
        };

        spyOn(window, '__getLocation').and.returnValue(mockLocation);

        getBaseTags = function () {
            return document.getElementsByTagName('base')
        };

        getBase = function () {
            return getBaseTags()[0];
        };

        getBaseHref = function () {
            return getBase().getAttribute('href');
        }

    });

    afterEach(function () {
        var elem = document.getElementsByTagName('base')[0];
        elem.parentNode.removeChild(elem);
    });

    it('should add a base tag to the protocol', function () {
        window.dynamicBase();
        expect(getBaseTags().length).toEqual(1)
    });

    it('should properly set the href without a suffix', function () {
        window.dynamicBase();
        expect(getBaseHref()).toEqual('https://test.local:7777')
    });

    it('should properly set the href with a suffix', function () {
        window.dynamicBase('/suffix/test');
        expect(getBaseHref()).toEqual('https://test.local:7777/suffix/test')
    });

    it('should properly set the href when no port exists', function () {
        mockLocation.port = undefined;
        window.dynamicBase();
        expect(getBaseHref()).toEqual('https://test.local')
    });

    it('should properly set the href when no port exists and a suffix is specifed', function () {
        mockLocation.port = undefined;
        window.dynamicBase('/suffix/test');
        expect(getBaseHref()).toEqual('https://test.local/suffix/test')
    });

    it('should match the origin when called through', function () {
        window.__getLocation.and.callThrough();
        window.dynamicBase('/test');
        expect(getBaseHref()).toEqual(window.origin + '/test')
    });

});