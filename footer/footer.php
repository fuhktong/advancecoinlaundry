    </main>

    <footer>
        <a href="/">
            <h2>Advance Coin Laundry</h2>
        </a>
        <div class="footer-container">
            <div>
                <ul class="footer-links">
                    <li>
                        <a class="link2" href="/about">ABOUT</a>
                    </li>
                    <li>
                        <a class="link2" href="/speedqueen">SPEED QUEEN APP</a>
                    </li>
                    <li>
                        <a class="link2" href="/contact">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="footer-links">
                    <li>
                        <a class="link2" href="/coinmachine">COIN-OPERATED MACHINES</a>
                    </li>
                    <li>
                        <a class="link2" href="/washfold">WASH & FOLD</a>
                    </li>
                    <li>
                        <a class="link2" href="/dryclean">DRY CLEANING</a>
                    </li>
                </ul>
            </div>
            <div class="logo-footer">
                <a href="/">
                    <img src="/images/advance_coin_laundry_logo_2.png" alt="Home" />
                </a>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu functionality
        const mobileMenuIcon = document.getElementById('mobileMenuIcon');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuIcon.addEventListener('click', function() {
            mobileMenuIcon.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking links
        const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuIcon.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });

        // Scroll to top functionality
        window.scrollTo(0, 0);
    </script>
</body>
</html>