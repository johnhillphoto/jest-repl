const { loremIpsum } = require('./loremIpsum');

describe('loremIpsum', () => {
    it('loremIpsum works with async/await', async () => {
        const result = await loremIpsum();
        expect(result).toEqual('scatterbrained');
    });
});
