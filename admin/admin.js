document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.id.replace('-link', '');
      showPage(targetId);
    });
  });

  function showPage(id) {
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === id) {
        page.classList.add('active');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.id === `${id}-link`) {
        link.classList.add('active');
      }
    });

    if (id === 'messages') {
      loadMessages();
    } else if (id === 'settings') {
      loadSettings();
    }
  }

  async function loadMessages() {
    const response = await fetch('/api/messages');
    const messages = await response.json();
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';
    messages.forEach(msg => {
      const li = document.createElement('li');
      li.textContent = `[${new Date(msg.timestamp).toLocaleString()}] ${msg.from_user}: ${msg.body}`;
      messageList.appendChild(li);
    });
  }

  async function loadSettings() {
    const response = await fetch('/api/settings');
    const settings = await response.json();
    document.getElementById('gemini-api-key').value = settings.gemini_api_key || '';
  }

  const settingsForm = document.getElementById('settings-form');
  settingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const gemini_api_key = document.getElementById('gemini-api-key').value;
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gemini_api_key })
    });
    alert('Settings saved!');
  });

  // Show the dashboard by default
  showPage('dashboard');
});
