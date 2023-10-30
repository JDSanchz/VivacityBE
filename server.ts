import express from 'express';
import cors from 'cors';
import routes from './routes/index';  // Importing routes from index.ts in the routes folder

// Initialize the express app
const app = express();

// Enable CORS
app.use(cors());

// Use the routes
app.use('/', routes);  // Using routes from index.ts

// Listen on port 3000 only if this module is the main module (i.e., not imported elsewhere)
if (require.main === module) {
    app.listen(3080, () => {
        console.log('Server is running on http://localhost:3080');
    });
}

// Export the app instance for use in other files
export default app;
