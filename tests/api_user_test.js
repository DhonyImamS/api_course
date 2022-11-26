const chai = require('chai');
const { expect } = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const apiUser = require('../api/api_user');
const apiData = require('../data/api_user_data');


describe('API User Test', async () => {

    it('Test Apakah Get Username salah itu tidak keluarkan data', async () => {
        // your scripting code start

        const response = await apiUser.getUserByName('Dhony');

        console.log(response.body);
        expect(response.body.status).to.equal('success');
        
    });

    it('Test Apakah Post Create Username itu berhasil', async () => {
        // your scripting code start
        const dataCreateUser =  apiData.userData('Andri', 'Gamers');
        const response = await apiUser.postUserCreate(dataCreateUser);

        const { firstName, hobbies } = dataCreateUser;

        console.log(response.body.data[0].hobbies);

        expect(response.status).to.equal(200);
        expect(response.body.firstName).to.equal(firstName);
        
        expect(response.body.hobbies).to.be.array();
        expect(response.body.hobbies).to.be.equalTo(hobbies);

        expect(response.body.hobbies).to.be.containingAllOf([ "Manga", "Selling", "Sales" ]);
        expect(response.body.hobbies).to.be.containing('tawuran');
        
    });
});


