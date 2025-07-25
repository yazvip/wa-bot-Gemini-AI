## 📲 WhatsApp Chatbot with Gemini AI & Time API  

This is a **WhatsApp chatbot** that integrates **Google Gemini AI**, **whatsapp-web.js**, and **timeapi.io** to provide intelligent responses, handle customer inquiries, and display real-time Jakarta time.  

---

## 🚀 Features  

✅ **AI-Powered Responses** – Uses **Google Gemini AI** for smart replies.  
✅ **WhatsApp Automation** – Built with **whatsapp-web.js**.  
✅ **Real-Time Time API** – Fetches **current time in Jakarta (GMT+7)** from **timeapi.io**.  
✅ **Automated Customer Support** – Handles FAQs, greetings, and payments.  
✅ **Dynamic Image URLs** – Stores greeting and payment image URLs in **.env**.

---

## 🛠️ Installation (VPS)

### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/wimboro/wa-bot-Gemini-AI.git
cd wa-bot-Gemini-AI
```

### 2️⃣ **Run the Installation Script**
Make the script executable and run it:
```bash
chmod +x install.sh
./install.sh
```

### 3️⃣ **Configure the Application**
Start the server:
```bash
npm start
```
Open your web browser and go to `http://<your-vps-ip>:3000`. You will be redirected to the installation page. Enter your API keys and image URLs and save the configuration.

### 4️⃣ **Start the Application with PM2**
After saving the configuration, restart the application using PM2 to keep it running in the background:
```bash
pm2 start npm --name "wa-bot" -- start
```

### 4️⃣ **Configure `replies.js`**  
Edit `replies.js` to customize bot responses:  

```javascript
module.exports = {
  greetingsCaption: "Your custom greeting caption here.",
  paymentCaption: ""
  },
  stopMessage: "Bot berhenti. Ketik \"lanjut\" untuk melanjutkan.",
  continueMessage: "Bot telah dilanjutkan. Bagaimana saya bisa membantu Anda?",
  continuePrompt: "Anda terhubung dengan asisten otomatis. Ketik \"stop\" untuk berhenti atau abaikan untuk melanjutkan.",
  defaultMessage: "Maaf, saya tidak mengerti pertanyaan Anda. Silakan coba lagi atau hubungi customer service kami.",
  optionResponses: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: ""
  }
};
```

### 5️⃣ **Customize `prompt_template.js`**  
Edit `prompt_template.js` to customize AI prompt behavior:  

```javascript
const emeteraiPromptTemplate = `

Current Date & Time: {current_time}

User question: {user_question}

Your response:
`;

module.exports = emeteraiPromptTemplate;
```

### 6️⃣ **Run the Bot**  
```bash
npm start
```
Open your web browser and go to `http://localhost:3000`.
Scan the QR code that appears on the web page with your WhatsApp mobile app.

---

## 📌 Usage  

### 🔹 **Basic Commands**  
- `halo`, `assalamualaikum`, `selamat` → Sends a greeting with an image.  
- `pembayaran`, `bayar` → Sends a payment QR code.  
- `bantuan` → Displays available options.  
- `stop` → Stops bot responses.  
- `lanjut` → Resumes bot responses.  

### 🔹 **AI-Powered Responses**  
- The bot uses **Google Gemini AI** to generate responses for general questions about **E-meterai**.  
- If a user asks for the current time, the bot fetches the **real-time Jakarta time (GMT+7)** from **timeapi.io** and responds accordingly.  

---

## 🔧 Project Structure  

```
📂 wa-bot-Gemini-AI/
│── 📜 index.js            # Main bot logic  
│── 📜 replies.js          # Predefined bot responses  
│── 📜 prompt_template.js  # AI prompt structure  
│── 📜 .env                # API keys and configurations  
│── 📜 package.json        # Node.js dependencies  
│── 📜 README.md           # Project documentation  
```

---

## 🔥 Dependencies  

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – WhatsApp automation  
- [dotenv](https://www.npmjs.com/package/dotenv) – Manages environment variables  
- [axios](https://www.npmjs.com/package/axios) – Handles HTTP requests (for **timeapi.io**)  
- [GoogleGenerativeAI](https://www.npmjs.com/package/@google/generative-ai) – Gemini AI integration  
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) – Displays QR code in terminal  

---

## 🤝 Contributing  

1. Fork this repository.  
2. Create a new branch: `git checkout -b feature-branch`.  
3. Commit changes: `git commit -m "Added a new feature"`.  
4. Push your branch: `git push origin feature-branch`.  
5. Open a Pull Request.  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

## 📞 Contact  

📧 Email: wgp.pra@gmail.com  
🐦 Twitter: [@galasaktii](https://twitter.com/galasaktii)  
📌 GitHub: [wimboro](https://github.com/wimboro)  

---