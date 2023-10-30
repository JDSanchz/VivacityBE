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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunInformation = void 0;
const getFunInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const funInformation = {
            fullName: "Jesus Del Barrio",
            favoriteLanguages: ["JavaScript", "C#", "Python"],
            top3Hobbies: ["Learning", "Reading", "Soccer"],
            helloIn7Languages: {
                English: "Hello",
                Spanish: "Hola",
                French: "Bonjour",
                German: "Hallo",
                Mandarin: "你好 (Nǐ hǎo)",
                Russian: "Здравствуйте (Zdravstvuyte)",
                Hindi: "नमस्ते (Namaste)"
            }
        };
        res.status(200).json(funInformation);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
exports.getFunInformation = getFunInformation;
