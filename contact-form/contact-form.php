<?php
function renderContactForm() {
?>
    <div class="contact">
        <div class="contactform-send-message">
            Send a message to Advance Coin Laundry:
        </div>
        <form id="contactForm" method="POST" action="/contact-form/contact-handler.php">
            <ul>
                <li>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </li>
                <li>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </li>
                <li>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </li>
                <li class="button">
                    <button type="submit">Send</button>
                </li>
            </ul>
        </form>
        <div id="responseMessage" style="display: none;"></div>
    </div>

    <script>
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const responseDiv = document.getElementById('responseMessage');
            
            try {
                const response = await fetch('/contact-form/contact-handler.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                responseDiv.style.display = 'block';
                responseDiv.className = result.status === 'success' ? 'success' : 'error';
                responseDiv.textContent = result.message;
                
                if (result.status === 'success') {
                    this.reset();
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                responseDiv.style.display = 'block';
                responseDiv.className = 'error';
                responseDiv.textContent = 'An error occurred while sending your message.';
            }
        });
    </script>
<?php
}
?>