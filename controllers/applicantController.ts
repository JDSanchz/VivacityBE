import { Request, Response } from 'express';

export const getFunInformation = async (req: Request, res: Response) => {
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
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
