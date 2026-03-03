// ===== HEADER NAV TOGGLE – right-side sliding drawer =====
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#site-nav');
    const overlay = document.getElementById('navOverlay');

    if (!navToggle || !nav) return;

    function openDrawer() {
        nav.classList.add('nav-open');
        navToggle.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        if (overlay) {
            overlay.style.display = 'block';
            // Force a reflow so the transition fires
            void overlay.offsetWidth;
            overlay.classList.add('overlay-active');
        }
        document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    function closeDrawer() {
        nav.classList.remove('nav-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        if (overlay) {
            overlay.classList.remove('overlay-active');
            // Wait for fade-out transition before hiding
            overlay.addEventListener('transitionend', () => {
                if (!overlay.classList.contains('overlay-active')) {
                    overlay.style.display = 'none';
                }
            }, { once: true });
        }
        document.body.style.overflow = '';
    }

    function isSmallScreen() {
        return window.matchMedia('(max-width: 880px)').matches;
    }

    // Toggle on hamburger click
    navToggle.addEventListener('click', () => {
        if (nav.classList.contains('nav-open')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeDrawer);
    }

    // Close drawer when a nav link is clicked (good UX on mobile)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isSmallScreen()) closeDrawer();
        });
    });

    // On resize to desktop, reset drawer state
    window.addEventListener('resize', () => {
        if (!isSmallScreen()) {
            closeDrawer();
        }
    });

    // Mark current page link
    const currentPath = window.location.pathname;
    nav.querySelectorAll('a').forEach(link => {
        try {
            const linkPath = new URL(link.href).pathname;
            if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html')) {
                link.classList.add('current-page');
            }
        } catch (e) { /* ignore invalid hrefs */ }
    });
});



// ===== COMMENTS SECTION ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.comment-card');

    if (cards.length === 0) return;

    function handleScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom && cardTop > 0) {
                card.style.transform = 'translateX(0)';
                card.style.opacity = '1';
            } else {
                if (index < 2) {
                    card.style.transform = 'translateX(100vw)';
                } else {
                    card.style.transform = 'translateX(-100vw)';
                }
                card.style.opacity = '0';
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
});

// ===== TEAM SECTION CAROUSEL =====
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.team-track');
    const prevBtn = document.getElementById('prevTeam');
    const nextBtn = document.getElementById('nextTeam');

    if (!track || !prevBtn || !nextBtn) {
        return;
    }

    const singleItem = track.querySelector('.team-member');
    if (!singleItem) return;

    const itemWidth = singleItem.offsetWidth + 10;
    const itemsPerScroll = 3;
    const scrollAmount = itemWidth * itemsPerScroll;

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});

// ===== QUESTIONS ACCORDION =====
document.addEventListener('DOMContentLoaded', () => {
    const questionCards = document.querySelectorAll('.question-card');

    questionCards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});

// ===== TOGGLE SHOW MORE QUESTIONS =====
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    if (!toggleBtn) return;

    const extras = document.querySelectorAll('.question-card.extra');
    let isShown = false;

    toggleBtn.addEventListener('click', () => {
        if (!isShown) {
            extras.forEach(extra => {
                extra.style.display = 'block';
            });
            toggleBtn.textContent = 'Hide';
            isShown = true;
        } else {
            extras.forEach(extra => {
                extra.style.display = 'none';
            });
            toggleBtn.textContent = 'Show more';
            isShown = false;
        }
    });
});

// ===== DISCOUNT SLIDER & POPUP =====
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const popup = document.getElementById("discountPopup");
    const popupImage = document.getElementById("popupImage");
    const popupText = document.getElementById("popupText");

    if (!sliderTrack || !popup || !popupImage || !popupText) {
        return;
    }

    const originalItems = [...sliderTrack.children];
    originalItems.forEach(item => {
        sliderTrack.appendChild(item.cloneNode(true));
    });

    let isAnimating = true;

    function setupPopupEvents() {
        const allSliderItems = document.querySelectorAll('.slider-item');

        allSliderItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                isAnimating = false;

                const dataText = item.getAttribute('data-text');
                const dataImage = item.getAttribute('data-popup-image');
                const itemImg = item.querySelector('img');

                popupText.style.display = 'none';
                popupImage.style.display = 'none';

                if (dataText && dataText.trim() !== '') {
                    popupText.textContent = dataText;
                    popupText.style.display = 'block';
                }

                let imageSrc = null;
                if (dataImage) {
                    imageSrc = dataImage;
                } else if (itemImg) {
                    imageSrc = itemImg.src;
                }

                if (imageSrc) {
                    popupImage.src = imageSrc;
                    popupImage.style.display = 'block';
                }

                popup.classList.add('active');
            });

            item.addEventListener('mouseleave', () => {
                isAnimating = true;
                popup.classList.remove('active');
            });
        });
    }

    setupPopupEvents();

    function startAnimation() {
        const firstItem = sliderTrack.querySelector('.slider-item');
        if (!firstItem) return;

        const itemWidth = firstItem.offsetWidth;
        const gap = 10;
        const totalItemWidth = itemWidth + gap;
        const originalItemsCount = originalItems.length;
        const halfTrackWidth = originalItemsCount * totalItemWidth;

        let currentOffset = 0;
        const speed = 0.15;

        function animate() {
            if (isAnimating) {
                currentOffset += speed;

                if (currentOffset >= halfTrackWidth) {
                    currentOffset = 0;
                }

                sliderTrack.style.transform = `translateX(-${currentOffset}px)`;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    startAnimation();
});
// دالة تفعيل حركات الظهور عند السكرول
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15 // يبدأ الحركة عندما يظهر 15% من القسم
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // إذا أردت أن تختفي الحركة وتتكرر احذف السطر التالي
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // استهداف كل العناصر التي تحمل كلاس reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
}

// دالة لتنظيم كروت الفريق في الموبايل
function adjustTeamForMobile() {
    const teamTrack = document.querySelector('.team-track');
    if (window.innerWidth < 768 && teamTrack) {
        teamTrack.style.cursor = 'grab';
    }
}

// تشغيل الدوال عند تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    adjustTeamForMobile();
});
