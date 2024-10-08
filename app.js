
import express from 'express';  
import dotenv from 'dotenv'
import path from 'path';  
import { fileURLToPath } from 'url';  
import { dirname } from 'path'; 

dotenv.config()

// Create an instance of Express  
const app = express();  

// Get the current filename and directory name  
const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);  

// Define the port  
const port = process.env.PORT || 8080;  

// Serve HTML files for different routes  
app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname, 'index.html'));  
});  

app.get('/about', (req, res) => {  
    res.sendFile(path.join(__dirname, 'about.html'));  
});  

app.get('/contact', (req, res) => {  
    res.sendFile(path.join(__dirname, 'contact-me.html'));  
});  

// Handle 404 - Not Found  
app.use((req, res) => {  
    res.status(404).sendFile(path.join(__dirname, '404.html'));  
});  

// Start the server  
app.listen(port, () => {  
    console.log(`Server is running on http://localhost:${port}`);  
});