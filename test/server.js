//test/server.js
var request = require('supertest');
var assert = require('assert');

// Load server.js as module
var server = require('../server');

describe('Server', function() {
	describe('GET /api/v1', function() {
		it('responds with default data', function(done) {
			request(server)
				.get('/api/v1')
				.end(function(err, res) {
					// Check for errors
					assert.equal(err, null);

					var body = res.body;
					assert.equal(body.data, 'default data');

					// Finish testing
					done();
				});
		});
	});

	describe('POST /set-data', function() {
		it('responds with success', function(done) {
			request(server)
				.post('/set-data')
				.send({data: 'new data'})
				.end(function(err, res) {
					assert.equal(err, null);
					var body = res.body;
					assert.equal(body.result, 'success');
					done();
				});
		});
	});

	describe('GET /api/v1', function() {
		it('responds with new data', function(done) {
			request(server)
				.get('/api/v1')
				.end(function(err, res) {
					assert.equal(err, null);
					var body = res.body;
					assert.equal(body.data, 'new data');
					done();
				});
		});
	});
});