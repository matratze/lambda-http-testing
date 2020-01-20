const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Tests Hello World', function () {
    this.timeout(10000);

    it('verifies successful greeting', async () => {

        const result = await chai.request('http://localhost:3000')
            .get('/hello');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('object');
        expect(result.body.message).to.be.a('string');
        expect(result.body.message).to.be.eq("Hello World!");
    });
});
