body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: url('fondo.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    text-align: center;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.6);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    animation: fadeIn 2s ease-in-out;
}

.titulo {
    font-family: 'Great Vibes', cursive;
    font-size: 4em;
    margin-bottom: 10px;
    animation: zoomIn 1.5s ease-in-out;
}

.fecha, .lugar, .vestimenta {
    font-size: 1.5em;
    margin: 10px 0;
}

.countdown {
    font-size: 2em;
    margin: 20px 0;
    font-weight: bold;
    color: #ffd700;
}

.btn-whatsapp {
    display: inline-flex;
    align-items: center;
    background-color: #25D366;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    text-decoration: none;
    font-size: 1.2em;
    margin: 20px 0;
    transition: transform 0.3s;
}

.btn-whatsapp:hover {
    transform: scale(1.1);
}

.regalos {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}
