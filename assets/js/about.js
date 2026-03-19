// تأثيرات الظهور عند التمرير
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// تهيئة تأثيرات الظهور
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Video functionality - Fixed version

// Video functionality - Complete version with working controls
const setupVideo = () => {
    const videoPlayer = document.querySelector('.video-player');
    const video = videoPlayer.querySelector('video');
    const playButton = videoPlayer.querySelector('.play-button');
    const videoOverlay = videoPlayer.querySelector('.video-overlay');
    const playPauseBtn = videoPlayer.querySelector('.play-pause-btn');
    const progressBar = videoPlayer.querySelector('.progress-bar');
    const progress = videoPlayer.querySelector('.progress');
    const volumeBtn = videoPlayer.querySelector('.volume-btn');
    const fullscreenBtn = videoPlayer.querySelector('.fullscreen-btn');

    video.removeAttribute('controls');

    const updateProgress = () => {
        if (video.duration) {
            const percent = (video.currentTime / video.duration) * 100;
            progress.style.width = `${percent}%`;
        }
    };

    const updatePlayPauseIcon = () => {
        const icon = playPauseBtn.querySelector('i');
        icon.className = video.paused ? 'fas fa-play' : 'fas fa-pause';
    };

    const updateVolumeIcon = () => {
        const icon = volumeBtn.querySelector('i');
        if (video.muted || video.volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (video.volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    };

    const playVideo = () => {
        video.play();
        videoOverlay.classList.add('hidden');
        videoPlayer.classList.add('playing');
        updatePlayPauseIcon();
    };

    const pauseVideo = () => {
        video.pause();
        videoOverlay.classList.remove('hidden');
        videoPlayer.classList.remove('playing');
        updatePlayPauseIcon();
    };

    const togglePlayPause = () => {
        if (video.paused) playVideo(); else pauseVideo();
    };

    const toggleVolume = () => {
        video.muted = !video.muted;
        updateVolumeIcon();
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            videoPlayer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const seekVideo = (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        video.currentTime = percent * video.duration;
    };

    // Events
    playButton.addEventListener('click', playVideo);
    videoOverlay.addEventListener('click', playVideo);
    video.addEventListener('click', togglePlayPause);
    playPauseBtn.addEventListener('click', togglePlayPause);
    progressBar.addEventListener('click', seekVideo);
    volumeBtn.addEventListener('click', toggleVolume);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('play', () => { updatePlayPauseIcon(); updateVolumeIcon(); });
    video.addEventListener('pause', updatePlayPauseIcon);
    video.addEventListener('volumechange', updateVolumeIcon);

    // Initialize
    updatePlayPauseIcon();
    updateVolumeIcon();
};

document.addEventListener("DOMContentLoaded", setupVideo);
//end Video


// كاروسيل فريق العمل مع خاصية العودة للبداية
const setupTeamCarousel = () => {
    const carousel = document.querySelector('.team-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const teamMembers = document.querySelectorAll('.team-member');

    if (!carousel || teamMembers.length === 0) return;

    const memberWidth = teamMembers[0].offsetWidth + 30;

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -memberWidth,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        const currentScroll = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (currentScroll >= maxScroll - 10) {
            // العودة للبداية
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // التمرير العادي
            carousel.scrollBy({
                left: memberWidth,
                behavior: 'smooth'
            });
        }
    });
};

// كاروسيل فريق التطوير مع خاصية العودة للبداية
const setupDevTeamCarousel = () => {
    const carousel = document.querySelector('.dev-team-carousel');
    const prevBtn = document.querySelector('.dev-prev-btn');
    const nextBtn = document.querySelector('.dev-next-btn');
    const devMembers = document.querySelectorAll('.dev-member');

    if (!carousel || devMembers.length === 0) return;

    const memberWidth = devMembers[0].offsetWidth + 30;

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -memberWidth,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        const currentScroll = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (currentScroll >= maxScroll - 10) {
            // العودة للبداية
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // التمرير العادي
            carousel.scrollBy({
                left: memberWidth,
                behavior: 'smooth'
            });
        }
    });
};

// دالة لإنشاء صورة بالأحرف الأولى
const createInitialsImage = (name, size = 300) => {
    // استخراج الأحرف الأولى من الاسم
    const getInitials = (fullName) => {
        return fullName
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .substring(0, 2); // أخذ أول حرفين فقط
    };

    const initials = getInitials(name);
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // خلفية متدرجة جميلة
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#31b2cc');
    gradient.addColorStop(1, '#31b2cc');

    // رسم الخلفية
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // نص الأحرف الأولى
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${size / 3}px Poppins, Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initials, size / 2, size / 2);

    return canvas.toDataURL();
};

// Modal functionality
const setupModal = () => {
    const modal = document.getElementById('teamModal');
    const closeBtn = document.querySelector('.close-btn');
    const teamMembers = document.querySelectorAll('.team-member');

    // Team member data
    const teamData = [
        {
            name: 'Mohammad Swilem',
            role: 'President',
            bio: `The President of the association stands at the forefront of leadership, guiding the team with vision and dedication. 
    As the key decision-maker, they steer the organization towards its goals, ensuring that every effort aligns with the association's mission.
     Behind every successful initiative, the President provides direction, inspiration, and strategic oversight, 
     shaping the path for continued growth and impact. Their leadership not only drives progress but also unites the team, 
     fostering a culture of collaboration, innovation, and excellence.
    Key Responsibilities:
• Strategic Planning & Policy Development
• Board Governance & Role Definition  
• Financial Oversight & Coordination
• Performance Evaluation & Auditing
• Operational Excellence & Quality Control
• Team Management & Development`,
            email: 'mohammad.swilem141@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:m.swilem@ain.org' }
            ]
        },
        {
            name: 'Mohammad Daraghmeh',
            role: 'Vice President',
            bio: `The Vice President plays a vital role in balancing strong leadership with active listening. Working closely with the President, 
    they support the organization's vision, ensure continuity in the President's absence, and contribute to effective decision-making and teamwork that drive the association's success.
    Key Responsibilities:
• Financial & Administrative Oversight
• Activity Monitoring & Compliance  
• Branch Strategy Development
• Administrative Coordination
• Executive Liaison & Collaboration
`,
            email: 'mohammadjamaldaraghmeh@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:mohammadjamaldaraghmeh@gmail.com' }
            ]
        },
        {
            name: 'Mosab Haddad',
            role: 'Activity Coordinator',
            bio: `Having an Activities Coordinator helps organize events that enhance member engagement 
            and skill development. Through planning, coordination, and encouraging participation, 
            they create a positive environment that fosters teamwork and initiative among students.
            Key Responsibilities:
• Event Planning
• Activity Coordination  
• Logistics Management
• Program Developmentt`,
            email: 'mosabalhaddad18@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:m.haddad@ain.org' }
            ]
        },
        {
            name: 'Najwa Khazendar',
            role: 'Treasurer',
            bio: `The Finance Officer plays a key role in managing financial resources, maintaining the association's financial health,
             and organizing and allocating the budget through effective financial planning to ensure efficient use of funds.
            Key Responsibilities:
• Financial Management
• Budget Planning
• Revenue Collection
• Logistics Support`,
            email: 'najwakhazndar@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:n.khazendar@ain.org' }
            ]
        },
        {
            name: 'Sadeel Daraghmeh',
            role: 'PR & Outreach',
            bio: `The Public Relations and External Communications Officer plays a vital role in enhancing the association's image 
            and building strong connections with the community. They coordinate events, manage media campaigns, 
            and deliver strategic messages, contributing to greater trust and transparency. 
            Through these efforts, they help achieve the ultimate goal of raising public awareness and strengthening effective partnerships.
            Key Responsibilities:
• Partnership Management
• Media Relations
• Communications Strategy
• Event Coordination`,
            email: 'sadeelabuhelweh@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:s.daraghmeh@ain.org' }
            ]
        },
        {
            name: 'Asmaa Abd Alhadi',
            role: 'Media Chair',
            bio: `The Digital Media Officer is the heart of modern communication in the association. 
            They lead their team in creating innovative content strategies and strengthening the association's online presence, 
            from managing social media accounts to designing ad campaigns. Their role attracts audience attention,
            ensures member and community engagement, and helps shape a strong, positive image of the association.
            Key Responsibilities:
• Content Management
• Social Media Strategy
• Digital Platform Oversight
• Audience Engagement`,
            email: 'abdalhadiasmaa@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:a.abdAlhadi@ain.org' }
            ]
        },
        {
            name: 'Tala Alhendi',
            role: 'Technical Solutions Chair',
            bio: `In today's digital world, having a Solutions Architect means that every technical challenge has a smart and seamless solution!
               This person is the mastermind behind optimizing processes, developing systems, and ensuring that technology effectively serves our goals.
               Whether it's about speeding up workflows or delivering an exceptional experience to the audience.
        Key Responsibilities:
• Website Design & Development
• Technical Maintenance & Issue Resolution
• Digital Systems & Platform Management`,
            email: 'talaalhendiuni4@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:talaalhendiuni4@gmail.com' }
            ]
        },
        {
            name: 'Ghaida Saify',
            role: 'Technical Solutions Chair',
            bio: `In today's digital world, having a Solutions Architect means that every technical challenge has a smart and seamless solution!
                 This person is the mastermind behind optimizing processes, developing systems, and ensuring that technology effectively serves our goals.
                 Whether it's about speeding up workflows or delivering an exceptional experience to the audience.
        Key Responsibilities:
• Website Design & Development
• Technical Maintenance & Issue Resolution
• Digital Systems & Platform Management`,
            email: 'g.safw2018@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:g.safw2018@gmail.com' }
            ]
        },
        {
            name: 'Hamza Abdulsalam',
            role: 'Membership Chair',
            bio: `The Membership Officer is a key pillar of any association. They manage relationships with members through strong connections 
            and effective communication, provide support and assistance with inquiries, 
            and help strengthen the association while attracting new members.
            Key Responsibilities:
• Member Engagement & Motivation
• Membership Growth & Development
• Activity Coordination & Quality Assurance
• Member Support & Feedback Management`,
            email: 'hamzasalam554@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:h.abdulsalam@ain.org' }
            ]
        },
        {
            name: 'Shadi Salous',
            role: 'Photographer',
            bio: `Documenting activities and events professionally is more than just taking photos—it's key to enhancing transparency 
            and raising awareness of the association's efforts. Photos capture every special moment and allow us to revisit them later. 
            One image can convey a message more powerfully than a thousand words, 
            and having a professional photographer ensures our message is delivered clearly and effectively.
            Key Responsibilities:
• Event Photography
• Video Production
• Media Documentation
• Creative Editing`,
            email: 'shadisalam205@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:s.salous@ain.org' }
            ]
        },
        {
            name: 'Meera Sorady',
            role: 'Video Editor',
            bio: `A Video Editor plays a key role in sharing information and increasing impact. 
            By producing engaging videos that showcase the association's work realistically, 
            while maintaining a consistent media identity, they effectively capture attention and reinforce the core message.
            Key Responsibilities:
• Video Editing and Post-Production
• Motion Graphics and Visual Effects
• Audio Syncing and Sound Design
• Content Optimization for Digital Platforms`,
            email: 'meerasorady21@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:n.khazendar@ain.org' }
            ]
        },
        {
            name: 'Teeba Qusai',
            role: 'Designer',
            bio: `Having a designer is crucial for developing the association's visual identity, 
            including logos, colors, and fonts. They make visual content attractive and professional, 
            effectively conveying messages and boosting audience engagement on social media.
            Key Responsibilities:
• Visual Design
• Multimedia Production
• Digital Innovation
• Project Management`,
            email: 'teeba.qusai2021@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:t.qusai@ain.org' }
            ]
        },
        {
            name: 'Dia arar',
            role: 'Technical Solutions Chair',
            bio: `In today's digital world, having a Solutions Architect means that every technical challenge has a smart and seamless solution!
                 This person is the mastermind behind optimizing processes, developing systems, and ensuring that technology effectively serves our goals.
                 Whether it's about speeding up workflows or delivering an exceptional experience to the audience.
        Key Responsibilities:
• Website Design & Development
• Technical Maintenance & Issue Resolution
• Digital Systems & Platform Management`,
            email: 'diaararx@gmail.com',
            social: [
                { platform: 'envelope', url: 'mailto:g.safw2018@gmail.com' }
            ]
        }
    ];

    // Function to format bio content
    const formatBio = (bio) => {
        const bioLines = bio.split('\n').map(line => line.trim()).filter(line => line);

        // Check if bio has "Key Responsibilities:" section
        const responsibilitiesIndex = bioLines.findIndex(line =>
            line.toLowerCase().includes('key responsibilities') ||
            line.toLowerCase().includes('responsibilities:')
        );

        let description = '';
        let responsibilities = [];

        if (responsibilitiesIndex !== -1) {
            // Extract description (everything before "Key Responsibilities:")
            description = bioLines.slice(0, responsibilitiesIndex).join(' ');

            // Extract responsibilities (everything after "Key Responsibilities:")
            const responsibilitiesLines = bioLines.slice(responsibilitiesIndex + 1);
            responsibilities = responsibilitiesLines
                .filter(line => line.startsWith('•') || line.trim().length > 0)
                .map(line => line.replace(/^•\s*/, '').trim())
                .filter(line => line.length > 0);
        } else {
            // If no "Key Responsibilities:" section, use entire bio as description
            description = bioLines.join(' ');
        }

        // Build HTML
        let html = '';

        if (description) {
            html += `<p class="about-description">${description}</p>`;
        }

        if (responsibilities.length > 0) {
            html += '<h4 class="responsibilities-title">Key Responsibilities:</h4>';
            html += '<ul class="responsibilities-list">';
            responsibilities.forEach(resp => {
                html += `<li>${resp}</li>`;
            });
            html += '</ul>';
        }

        return html;
    };

    // Add click event to each team member
    teamMembers.forEach((member, index) => {
        member.addEventListener('click', () => {
            const memberData = teamData[index];

            // Set modal content
            document.getElementById('modalName').textContent = memberData.name;
            document.getElementById('modalRole').textContent = memberData.role;
            document.getElementById('modalBio').innerHTML = formatBio(memberData.bio);
            document.getElementById('modalEmail').textContent = memberData.email || '';

            // Set modal image
            const modalImage = document.getElementById('modalImage');
            const memberImage = member.querySelector('img');
            modalImage.src = memberImage.src;
            modalImage.alt = memberData.name;



            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking close button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Scroll to member if hash is present in URL (from index.html)
    function scrollToMember() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#member-')) {
            const memberId = hash.replace('#member-', '');
            const memberElement = document.getElementById(`member-${memberId}`);
            if (memberElement) {
                // Wait for page to fully load and images to load
                setTimeout(() => {
                    // Hide Website Development Team section permanently when coming from homepage
                    const devTeamSection = document.querySelector('.dev-team');
                    if (devTeamSection) {
                        devTeamSection.style.display = 'none';
                    }

                    // Calculate the position accounting for fixed header
                    const headerHeight = 100;
                    const teamSection = document.querySelector('.team');
                    if (teamSection) {
                        const teamSectionTop = teamSection.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = teamSectionTop - headerHeight - 20;

                        // Scroll to the team section first
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Then scroll the carousel to show the member
                        setTimeout(() => {
                            const teamCarousel = memberElement.closest('.team-carousel');
                            if (teamCarousel) {
                              memberElement.scrollIntoView({
                             behavior: "smooth",
                             inline: "center",
                             block: "nearest"
                            });
                            }

                            // Add highlight effect after scroll
                            setTimeout(() => {
                                memberElement.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
                                memberElement.style.boxShadow = '0 0 30px rgba(49, 178, 204, 0.7)';
                                memberElement.style.transform = 'scale(1.05)';
                                setTimeout(() => {
                                    memberElement.style.boxShadow = '';
                                    memberElement.style.transform = '';
                                }, 3000);
                            }, 300);
                        }, 400);
                    }
                }, 600);
            }
        }
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(scrollToMember, 300);
        });
    } else {
        setTimeout(scrollToMember, 300);
    }
    window.addEventListener('hashchange', scrollToMember);
};

// Scroll to top function for gallery items
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// تهيئة الصور والتأثيرات
const initializePage = () => {
    // إعداد الفيديو
    setupVideo();

    // تهيئة الصور التوضيحية للفريق
    const teamImages = document.querySelectorAll('.team-member img');
    const teamData = {
        0: { name: 'Mohammad Swilem', image: 'MohammadSwilem.jpg' },
        1: { name: 'Mohammad Daraghmeh', image: 'MohammadDaraghmeh.jpg' },
        2: { name: 'Mosab Haddad', image: 'MosabHaddad.jpg' },
        3: { name: 'Najwa Khazendar', image: 'NajwaKhazendar.jpg' },
        4: { name: 'Sadeel Daraghmeh', image: 'SadeelDaraghmeh.jpg' },
        5: { name: 'Asmaa Abd Alhadi', image: 'AsmaaAbdAlhadi.jpg' },
        6: { name: 'Tala Alhendi', image: 'TalaAlhendi.jpg' },
        7: { name: 'Ghaida Saify', image: 'GhaidaSaify.jpg' },
        8: { name: 'Hamza Abdulsalam', image: 'HamzaAbdulsalam.jpg' },
        9: { name: 'Shadi Salous', image: 'ShadiSalous.jpg' },
        10: { name: 'Meera Sorady', image: 'Meera Sorady.jpg' },
        11: { name: 'Teeba Qusai', image: 'TeebaQusai.jpg' },
        12: { name: 'Dia Arar', image: 'DiaArar.jpg' }

    };

    teamImages.forEach((img, index) => {
        const member = teamData[index];

        if (member && member.image) {
            img.src = `image/${member.image}`;
            img.alt = member.name;

            img.onerror = function () {
                // إذا فشل تحميل الصورة، أنشئ صورة بالأحرف الأولى
                this.src = createInitialsImage(member.name, 300);
                console.log(`Using initials image for ${member.name}`);
            };
        } else {
            // استخدام صورة افتراضية إذا لم توجد بيانات
            const fallbackName = `Team Member ${index + 1}`;
            img.src = createInitialsImage(fallbackName, 300);
            img.alt = fallbackName;
        }
    });

    // إضافة الصور لفريق التطوير
    const devImages = document.querySelectorAll('.dev-card-front img');
    const devTeamData = {
    0: { name: 'Tala Alhendi',       image: 'TalaAlhendi.jpg' },
    1: { name: 'Ghaydaa Saify',      image: 'GhaidaSaify.jpg' },
    2: { name: 'Dia Arar',           image: 'DiaArar.jpg' },      
    3: { name: 'Andreh Khouri',      image: 'Andreh.jpg' },
    4: { name: 'Jana Abu Turabi',    image: 'JanaAbuturabi.jpg' },
    5: { name: 'Dana Zaben',         image: 'dana.jpg' },
    6: { name: 'Sadeel Daraghmeh',   image: 'SadeelDaraghmeh.jpg' },
    7: { name: 'Hamza Abdulsalam',   image: 'HamzaAbdulsalam.jpg' },
    8: { name: 'Asmaa Abd Alhadi',   image: 'AsmaaAbdAlhadi.jpg' }
       
    };

    devImages.forEach((img, index) => {
        const member = devTeamData[index];

        if (member && member.image) {
            img.src = `image/${member.image}`;
            img.alt = member.name;

            img.onerror = function () {
                // إذا فشل تحميل الصورة، أنشئ صورة بالأحرف الأولى
                this.src = createInitialsImage(member.name, 300);
                console.log(`Using initials image for ${member.name}`);
            };
        } else {
            // استخدام صورة افتراضية إذا لم توجد بيانات
            const fallbackName = `Developer ${index + 1}`;
            img.src = createInitialsImage(fallbackName, 300);
            img.alt = fallbackName;
        }
    });

    // إضافة الصور التوضيحية للمعرض
    const galleryImages = document.querySelectorAll('.gallery-image');
    const galleryImageUrls = [
        'images/image-about/EOY.jpg',
        'images/image-about/Exhibition.jpg',
        'images/image-about/Hackathon.jpg'
    ];

    galleryImages.forEach((img, index) => {
        if (galleryImageUrls[index]) {
            img.src = galleryImageUrls[index];
            img.alt = `Gallery Image ${index + 1}`;

            img.onerror = function () {
                this.src = 'https://via.placeholder.com/500x300/02B6ED/ffffff?text=AIN+Project';
            };
        }
    });

    // إضافة تأثيرات إضافية للبطاقات
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-15px) scale(1.02)';
            item.style.boxShadow = '0 20px 40px rgba(2, 182, 237, 0.25)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '0 8px 20px rgba(2, 182, 237, 0.15)';
        });
    });

    // إضافة تأثيرات للبطاقات (بدون تدوير)
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.03)';
            member.style.transition = 'transform 0.3s ease';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
        });
    });

    // إضافة تأثيرات لفريق التطوير (بدون تدوير)
    document.querySelectorAll('.dev-member').forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.03)';
            member.style.transition = 'transform 0.3s ease';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
        });
    });
};


// Update the DOMContentLoaded event to include video setup
document.addEventListener('DOMContentLoaded', () => {
    // تأثيرات الظهور
    fadeInOnScroll();

    // إعداد الفيديو
    setupVideo();

    // إعداد الكاروسيل لفريق الهوية
    setupTeamCarousel();

    // إعداد الكاروسيل لفريق التطوير
    setupDevTeamCarousel();

    // إعداد المودال
    setupModal();

    // تهيئة الصور والتأثيرات
    initializePage();
});
