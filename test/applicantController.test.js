"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const applicantController_1 = require("../controllers/applicantController"); // Import the function from the file where it's defined
const app = (0, express_1.default)();
app.get('/awesome/applicant', applicantController_1.getFunInformation); // Mimic the routing in your main app
describe('GET /awesome/applicant', () => {
    it('should return some fun information', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get('/awesome/applicant')
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('fullName', 'Jesus Del Barrio');
        expect(res.body).toHaveProperty('favoriteLanguages', ["TypeScript", "JavaScript", "Python"]);
        expect(res.body).toHaveProperty('top3Hobbies', ["Learning", "Reading", "Soccer"]);
        expect(res.body).toHaveProperty('helloIn7Languages');
    }));
    // Another test to simulate a server error and expect a 500 status code
    it('should return an error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Here you'd mock the function to throw an error
        // Then call the API and expect the status code to be 500
    }));
});
