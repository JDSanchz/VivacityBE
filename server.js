"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index")); // Importing routes from index.ts in the routes folder
// Initialize the express app
const app = (0, express_1.default)();
// Enable CORS
app.use((0, cors_1.default)());
// Use the routes
app.use('/', index_1.default); // Using routes from index.ts
// Listen on port 3000 only if this module is the main module (i.e., not imported elsewhere)
if (require.main === module) {
    app.listen(3080, () => {
        console.log('Server is running on http://localhost:3080');
    });
}
// Export the app instance for use in other files
exports.default = app;
