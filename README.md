Production Link - https://realtime-tracker-wjng.onrender.com/


Real-Time Tracker

A real-time location tracking web application built using Node.js, Express, Socket.IO, and Leaflet.js.
This project demonstrates real-time communication between client and server and dynamic map updates using WebSockets.

🚀 Features
🌐 Real-time client–server communication using Socket.IO
🗺️ Interactive map powered by Leaflet.js
📡 Live location updates on the map
⚡ Fast and lightweight backend using Express
🎨 Clean UI with external CSS
🔄 Auto server reload using Nodemon (development)

🛠️ Tech Stack
Frontend:
HTML5
CSS3
JavaScript
Leaflet.js
Backend:
Node.js
Express.js
Socket.IO
Tools
Nodemon
Git & GitHub

📁 Project Structure
RealTime-Tracker/
│── app.js
│── package.json
│── package-lock.json
│── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│── views/
│   └── index.ejs
│── .gitignore

⚙️ Installation & Setup 

1️⃣ Clone the repository
git clone https://github.com/parshant4597/RealTime-Tracker.git
cd RealTime-Tracker

2️⃣ Install dependencies
npm install

3️⃣ Run the application
npm run dev

4️⃣ Open in browser
http://localhost:3000

🧠 How It Works
The Express server serves static files and renders the main page using EJS.
Socket.IO establishes a WebSocket connection between server and client.
The client initializes a Leaflet map.
Real-time data can be sent via sockets to update markers dynamically.
Any connected client can receive live updates instantly.

📌 Use Cases
Real-time vehicle tracking
Delivery partner monitoring
Fleet management systems
Live user location sharing
IoT-based tracking dashboards
🔮 Future Enhancements

📍 Live GPS tracking using browser Geolocation API
👥 Multiple users displayed simultaneously
🗄️ MongoDB integration for storing location history
🔐 Authentication & authorization
 



