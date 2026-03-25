const discordReviews = [
    { username: "Alex Johnson", avatar: "https://i.pravatar.cc/150?img=1", review: "0Resmon's resources have transformed our FiveM server! The scripts are top-notch, easy to integrate, and have significantly enhanced our players' experience.", date: "Oct 2, 2025", rating: 5, scripts: '0R Nail Shop' },
    { username: "Sarah Miller", avatar: "https://i.pravatar.cc/150?img=2", review: "Absolutely amazing quality! The scripts work flawlessly and the customization options are endless. Best purchase I've made for my server.", date: "Oct 5, 2025", rating: 5, scripts: '0R Vehicle System' },
    { username: "Mike Chen", avatar: "https://i.pravatar.cc/150?img=3", review: "Very satisfied with the product. Support team responded quickly to my questions and helped with setup. Highly recommend!", date: "Oct 8, 2025", rating: 5, scripts: '0R Banking' },
    { username: "Emma Davis", avatar: "https://i.pravatar.cc/150?img=4", review: "Good scripts overall, but could use more documentation. Once I figured it out, everything works great!", date: "Oct 12, 2025", rating: 5, scripts: '0R Inventory' },
    { username: "James Wilson", avatar: "https://i.pravatar.cc/150?img=5", review: "These scripts have taken our roleplay to the next level! Players love the new features and the performance is excellent.", date: "Oct 15, 2025", rating: 5, scripts: '0R Job System' },
    { username: "Lisa Anderson", avatar: "https://i.pravatar.cc/150?img=6", review: "Great value for money. Easy to install and configure. My players have been asking for more 0Resmon scripts!", date: "Oct 18, 2025", rating: 5, scripts: '0R Housing' },
    { username: "David Brown", avatar: "https://i.pravatar.cc/150?img=7", review: "Solid script with regular updates. The developer clearly cares about quality and listens to feedback.", date: "Oct 21, 2025", rating: 5, scripts: '0R Garage System' },
    { username: "Sophie Taylor", avatar: "https://i.pravatar.cc/150?img=8", review: "Impressed with how smooth everything runs. No performance issues at all even with 128 players online!", date: "Oct 24, 2025", rating: 5, scripts: '0R Phone' },
    { username: "Ryan Martinez", avatar: "https://i.pravatar.cc/150?img=9", review: "Very professional scripts. Clean code and great optimization. Worth every penny for serious server owners.", date: "Oct 27, 2025", rating: 5, scripts: '0R Shop System' },
    { username: "Olivia Garcia", avatar: "https://i.pravatar.cc/150?img=10", review: "Best scripts on the market! The attention to detail and constant improvements make 0Resmon stand out from the competition.", date: "Oct 30, 2025", rating: 5, scripts: '0R Dealership' },
];

const faqQuestions = [
    { icon: "fa-circle-question", question: "How do I install 0Resmon scripts on my FiveM server?", answer: "To install 0Resmon scripts, download the script files from your Tebex purchase page, extract them, and upload them to your server's resources folder. Then, add the appropriate start commands to your server.cfg file and restart your server." },
    { icon: "fa-credit-card", question: "What payment methods are accepted on Tebex?", answer: "Tebex accepts a variety of payment methods including credit/debit cards, PayPal, and other regional payment options depending on your location." },
    { icon: "fa-shield-halved", question: "Are 0Resmon scripts secure to use?", answer: "Yes, 0Resmon scripts are developed with security in mind. We follow best practices to ensure that our scripts do not introduce vulnerabilities to your server." },
    { icon: "fa-arrows-rotate", question: "How often are 0Resmon scripts updated?", answer: "0Resmon scripts are regularly updated to fix bugs, add new features, and ensure compatibility with the latest FiveM updates. We recommend checking our Tebex page for the latest updates." },
    { icon: "fa-users", question: "Is there customer support available for 0Resmon scripts?", answer: "Yes, we offer customer support for all our scripts. You can reach out to us via our Discord server or through the support options available on our Tebex page." },
    { icon: "fa-gear", question: "Can I customize 0Resmon scripts to fit my server's needs?", answer: "Absolutely! 0Resmon scripts are designed to be flexible and customizable. You can modify configuration files to adjust settings and features according to your server's requirements." },
    { icon: "fa-globe", question: "Do 0Resmon scripts support multiple languages?", answer: "Yes, many of our scripts come with multi-language support. You can easily switch languages by modifying the configuration files provided with each script." },
    { icon: "fa-star", question: "What makes 0Resmon scripts different from other FiveM scripts?", answer: "0Resmon scripts are known for their high quality, ease of use, and excellent customer support. We focus on creating scripts that enhance the player experience while being easy to install and manage for server owners." },
    { icon: "fa-circle-info", question: "Where can I find documentation for 0Resmon scripts?", answer: "Documentation for each 0Resmon script is available on our Tebex page and within the downloaded script files. The documentation includes installation instructions, configuration options, and troubleshooting tips." },
    { icon: "fa-mobile-screen", question: "Are 0Resmon scripts compatible with mobile devices?", answer: "Yes, many of our scripts are designed to be mobile-friendly, ensuring that players can enjoy a seamless experience whether they are playing on desktop or mobile devices." },
    { icon: "fa-gift", question: "Do you offer discounts for bulk purchases of 0Resmon scripts?", answer: "We occasionally offer discounts and promotions for bulk purchases. Please check our Tebex page or join our Discord server to stay updated on any special offers." },
    { icon: "fa-lock", question: "Can I get a refund if I'm not satisfied with a 0Resmon script?", answer: "Refunds are handled according to Tebex's refund policy. If you encounter any issues with a script, please contact our support team to discuss your concerns." },
    { icon: "fa-cloud-arrow-down", question: "How do I download updates for 0Resmon scripts?", answer: "You can download updates for 0Resmon scripts from your Tebex purchase page. Simply log in to your account, navigate to your purchases, and download the latest version of the script." },
    { icon: "fa-life-ring", question: "Where can I get help if I encounter issues with 0Resmon scripts?", answer: "If you encounter any issues, you can reach out to our support team via our Discord server or through the support options available on our Tebex page. We're here to help!" },
    { icon: "fa-chart-line", question: "Do 0Resmon scripts impact server performance?", answer: "0Resmon scripts are optimized for performance and designed to minimize their impact on server resources. However, overall performance may vary depending on your server setup and the number of scripts running simultaneously." },
    { icon: "fa-calendar-days", question: "Can I schedule automatic updates for 0Resmon scripts?", answer: "Currently, automatic updates are not supported. You will need to manually download and install updates from your Tebex purchase page." }
];

// Utility functions
const createElement = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
};

const createStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, i) => 
        `<i class="fa-solid fa-star text-xl ${i < rating ? 'text-[#FF3A52]' : 'text-white/20'}" style="filter: drop-shadow(0 2px 4px rgba(255,58,82,0.5));"></i>`
    ).join('');
};

const createReviewCard = (review) => `
    <div class="review-card w-[350px] h-[306px] border-2 border-white/5 rounded-2xl p-[22px] flex flex-col items-start justify-between flex-shrink-0">
        <div class="flex flex-col items-start gap-y-3">
            <div class="flex items-center gap-x-3">
                <img src="${review.avatar}" alt="${review.username}" class="w-10 h-10 rounded-md object-cover">
                <div class="flex flex-col items-start">
                    <h3 class="font-bold text-base text-white line-clamp-1">${review.username}</h3>
                    <p class="font-normal text-white/35 line-clamp-1 text-xs">${review.date}</p>
                </div>
            </div>
            <div class="flex items-center gap-x-1">${createStarRating(review.rating)}</div>
            <p class="max-w-[296px] font-medium text-sm text-white/35 line-clamp-5">${review.review}</p>
        </div>
        <div class="w-full h-10 flex items-center px-4 bg-white/10 border border-white/[.04] rounded-lg gap-x-2">
            <svg width="18" height="18" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-white/40">
                <path d="M13.5 36C11.0138 36 9.0225 38.0138 9.0225 40.5C9.0225 42.9862 11.0138 45 13.5 45C15.9862 45 18 42.9862 18 40.5C18 38.0138 15.9862 36 13.5 36ZM0.212551 2.61406e-08C0.0951623 1.17036e-08 0 0.0951622 0 0.212551V4.28745C0 4.40484 0.0951621 4.5 0.212551 4.5H3.9621C4.29059 4.5 4.58969 4.68923 4.73038 4.98607L12.5888 21.5662L9.55125 27.0788C9.2025 27.7313 9 28.4625 9 29.25C9 31.7362 11.0138 33.75 13.5 33.75H40.5V30.5253C40.5 29.821 39.929 29.25 39.2247 29.25H14.4562C14.1413 29.25 13.8938 29.0025 13.8938 28.6875C13.8938 28.5863 13.9163 28.4963 13.9613 28.4175L15.975 24.75H32.7375C34.425 24.75 35.8988 23.8162 36.675 22.4325L44.7188 7.83C44.8988 7.515 45 7.14375 45 6.75C45 5.50125 43.9875 4.5 42.75 4.5H9.48375L7.69211 0.728127C7.48087 0.283405 7.0325 8.64894e-07 6.54016 8.04343e-07L0.212551 2.61406e-08ZM36 36C33.5138 36 31.5225 38.0138 31.5225 40.5C31.5225 42.9862 33.5138 45 36 45C38.4862 45 40.5 42.9862 40.5 40.5C40.5 38.0138 38.4862 36 36 36Z"/>
            </svg>
            <p class="font-semibold text-white/40 line-clamp-1">${review.scripts}</p>
        </div>
    </div>
`;

const createFAQItem = (faq) => `
    <div class="faq-item w-full">
        <div class="faq-question w-full h-[49px] flex items-center justify-between bg-[#FFFFFF]/[.08] border border-white/5 rounded-xl p-[9px] cursor-pointer">
            <div class="flex items-center gap-x-3">
                <div class="min-w-8 w-8 h-8 flex items-center justify-center rounded-md border border-[#FF3A52]/5 bg-[#FF3A52]/10">
                    <i class="fa-solid ${faq.icon}" style="background: linear-gradient(179.74deg, #FF3A52 17.72%, #8E2734 99.04%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;text-fill-color: transparent;"></i>
                </div>
                <p class="text-xs md:text-sm font-semibold text-[#5E5E5E] line-clamp-1">${faq.question}</p>
            </div>
            <i class="fa-solid fa-chevron-down faq-icon text-white/40 transition-transform duration-300"></i>
        </div>
        <div class="faq-answer overflow-hidden" style="height: 0;">
            <div class="text-xs md:text-sm text-white/60 leading-relaxed bg-[#FFFFFF]/[.08] border border-white/5 rounded-xl p-[9px] mt-2">
                <p>${faq.answer}</p>
            </div>
        </div>
    </div>
`;

// Discord Reviews
const displayDiscordReviews = () => {
    const container = document.getElementById("discord-reviews");
    if (!container) return;

    const fragment = document.createDocumentFragment();
    discordReviews.forEach(review => {
        fragment.appendChild(createElement(createReviewCard(review)));
    });
    container.innerHTML = '';
    container.appendChild(fragment);
};

// FAQ Handler Class
class FAQHandler {
    constructor(container, searchInput, answerCount) {
        this.container = container;
        this.searchInput = searchInput;
        this.answerCount = answerCount;
        
        this.init();
    }

    init() {
        this.renderFAQs(faqQuestions);
        this.searchInput.addEventListener('input', (e) => this.filterFAQs(e.target.value));
    }

    filterFAQs(searchTerm) {
        const term = searchTerm.toLowerCase();
        const filtered = faqQuestions.filter(faq => 
            faq.question.toLowerCase().includes(term) || 
            faq.answer.toLowerCase().includes(term)
        );
        this.renderFAQs(filtered);
    }

    renderFAQs(faqs) {
        if (faqs.length === 0) {
            this.container.innerHTML = '<p class="text-white/40 text-center py-8">No FAQs found matching your search.</p>';
            this.answerCount.textContent = '0 answers';
            return;
        }

        const fragment = document.createDocumentFragment();
        
        faqs.forEach(faq => {
            fragment.appendChild(createElement(createFAQItem(faq)));
        });

        this.container.innerHTML = '';
        this.container.appendChild(fragment);
        this.answerCount.textContent = `${faqs.length} answer${faqs.length !== 1 ? 's' : ''}`;
        
        requestAnimationFrame(() => this.initializeAccordions());
    }

    initializeAccordions() {
        this.container.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            let isOpen = false;

            question.addEventListener('click', () => {
                const height = isOpen ? 0 : 'auto';
                const rotation = isOpen ? 0 : 180;
                
                gsap.to(answer, { height, duration: 0.4, ease: "power2.inOut" });
                gsap.to(icon, { rotation, duration: 0.3, ease: "power2.inOut" });
                
                isOpen = !isOpen;
            });
        });
    }
}

// Navbar Scroll with throttle
const initNavbarScroll = () => {
    const nav = document.getElementById('navbar');
    const spacer = document.getElementById('spacer');
    if (!nav || !spacer) return;

    let ticking = false;

    const handleScroll = () => {
        if (ticking) return;
        
        ticking = true;
        requestAnimationFrame(() => {
            const scrolled = window.scrollY > 50;
            
            spacer.classList.toggle('hidden', !scrolled);
            spacer.classList.toggle('block', scrolled);
            
            nav.classList.toggle('bg-[#171717]/80', scrolled);
            nav.classList.toggle('backdrop-blur-md', scrolled);
            nav.classList.toggle('shadow-sm', scrolled);
            nav.classList.toggle('fixed', scrolled);
            nav.classList.toggle('top-0', scrolled);
            nav.classList.toggle('left-0', scrolled);
            nav.classList.toggle('w-full', scrolled);
            nav.classList.toggle('z-50', scrolled);
            nav.classList.toggle('bg-transparent', !scrolled);
            nav.classList.toggle('relative', !scrolled);
            
            ticking = false;
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
};

const moveElementsToContainer = (containerId, selector) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (containerId === 'youtube-videos') {
        document.querySelectorAll('table.youtube-video').forEach(t => {
            const rows = [...t.querySelectorAll('tbody tr')];
            const link = rows.find(r => r.children[0]?.textContent.trim() === 'video_link')?.children[1]?.textContent.trim();
            const name = rows.find(r => r.children[0]?.textContent.trim() === 'video_name')?.children[1]?.textContent.trim();
            const id = link?.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1];
            if (!link || !name || !id) return;

            container.insertAdjacentHTML(
                'beforeend',
                `<a href="${link}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="flex flex-col gap-y-3 group youtube-video
                          max-[640px]:min-w-[260px]
                          max-[640px]:max-w-[260px]
                          sm:w-[450px]">
                
                    <div class="w-full aspect-video sm:aspect-auto sm:h-[250px]
                                rounded-2xl overflow-hidden
                                border-2 border-white/5
                                group-hover:border-white/10
                                transition-colors duration-200">
                
                        <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg"
                             class="w-full h-full object-cover">
                    </div>
                
                    <p class="text-white/70 group-hover:text-white
                              font-medium text-sm sm:text-lg
                              line-clamp-2 transition-colors duration-200">
                        ${name}
                    </p>
                </a>`
            );
            
            t.remove();
        });
        return;
    }

    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const fragment = document.createDocumentFragment();
    elements.forEach(el => fragment.appendChild(el));
    container.appendChild(fragment);
};

// Package Filter
const initPackageFilter = () => {
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".package-card");

    if (!searchInput || cards.length === 0) return;

    const cardData = Array.from(cards).map(card => ({
        element: card,
        name: card.querySelector(".package-name")?.textContent.toLowerCase() || ''
    }));

    const filterPackages = () => {
        const searchValue = searchInput.value.toLowerCase();

        cardData.forEach(({ element, name }) => {
            element.style.display = name.includes(searchValue) ? "block" : "none";
        });
    };

    searchInput.addEventListener("input", filterPackages);
};

// Package initialization
const extractVideoID = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : url;
};

const initPackage = () => {
    const packageTableElement = document.querySelector('#package-description');
    const swiperContainer = document.querySelector('.package-media-swiper');
    const thumbsContainer = document.querySelector('.package-media-thumbs');
    
    let mediaData = [];
    
    if (packageTableElement) {
        const rows = packageTableElement.querySelectorAll('tbody tr');
        let isOpenVersion = false;
        let isEscrowVersion = false;
        let hasPreviewVideo = false; // Yeni flag
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length < 2) return;
            const key = cells[0].textContent.trim();
            const value = cells[1].textContent.trim();
            
            switch (key) {
                case 'script-open':
                    isOpenVersion = true;
                    const openVersionLinksContainer = document.querySelector('#other-version-links');
                    if (openVersionLinksContainer) {
                        const openLink = document.createElement('a');
                        openLink.href = value;
                        openLink.textContent = "Open Source Version";
                        openLink.className = "w-full h-max bg-white/[.02] hover:bg-white/[.03] transition-colors duration-300 rounded-[6px] p-3 font-normal text-white/70 text-sm leading-snug";
                        openVersionLinksContainer.appendChild(openLink);
                    }
                    break;
                    
                case 'script-escrow':
                    isEscrowVersion = true;
                    const escrowVersionLinksContainer = document.querySelector('#other-version-links');
                    if (escrowVersionLinksContainer) {
                        const escrowLink = document.createElement('a');
                        escrowLink.href = value;
                        escrowLink.textContent = "Escrow Version";
                        escrowLink.className = "w-full h-max bg-white/[.02] hover:bg-white/[.03] transition-colors duration-300 rounded-[6px] p-3 font-normal text-white/70 text-sm leading-snug";
                        escrowVersionLinksContainer.appendChild(escrowLink);
                    }
                    break;
                    
                case 'preview':
                    hasPreviewVideo = true;
                    const videoID = extractVideoID(value);
                    mediaData.push({
                        type: 'video',
                        url: videoID,
                        thumbnailUrl: `https://i.ytimg.com/vi_webp/${videoID}/maxresdefault.webp`
                    });
                    break;
                    
                case 'img_link':
                    mediaData.push({
                        type: 'image',
                        url: value
                    });
                    break;
            }
        });
        
        // Eğer preview video varsa, dinamik olarak preview linkini ekle
        if (hasPreviewVideo) {
            const videoData = mediaData.find(m => m.type === 'video');
            if (videoData) {
                // Twig'de video preview elementi yoksa, JavaScript ile oluştur
                const existingPreview = document.querySelector('.youtube-preview');
                if (!existingPreview) {
                    const previewContainer = document.querySelector('.w-full.flex.flex-col.items-start.gap-y-2');
                    if (previewContainer) {
                        const previewLink = document.createElement('a');
                        previewLink.href = `https://www.youtube.com/watch?v=${videoData.url}`;
                        previewLink.target = "_blank";
                        previewLink.rel = "noopener noreferrer nofollow";
                        previewLink.className = "w-full flex items-center justify-between border-2 border-white/[.04] hover:border-white/[.08] rounded-2xl backdrop-blur-xl p-3 group transition-colors duration-300 cursor-pointer youtube-preview";
                        previewLink.style.cssText = "background: radial-gradient(74.31% 154.58% at 50% 50%, rgba(42, 42, 42, 0.31) 0%, rgba(51, 51, 51, 0.31) 100%)";
                        
                        previewLink.innerHTML = `
                            <div class="flex items-center gap-x-2">
                                <div class="w-[22px] h-[22px] flex items-center justify-center bg-white/[.08] border border-white/[.06] rounded-[6px] flex-shrink-0">
                                    <i class="fa-solid fa-play text-white text-[10px]"></i>
                                </div>
                                <p class="text-white font-semibold text-sm line-clamp-1">Preview</p>
                            </div>
                            <i class="fa-solid fa-arrow-up-right-from-square text-sm text-white/40 group-hover:text-white transition-colors duration-300 flex-shrink-0"></i>
                        `;
                        
                        // İlk sıraya ekle
                        previewContainer.insertBefore(previewLink, previewContainer.firstChild);
                    }
                }
            }
        }

        const table = packageTableElement.querySelector('table');
        if (table) table.remove();

        if (!isOpenVersion && !isEscrowVersion) {
            const otherVersionArticle = document.querySelector('#other-version-article');
            if (otherVersionArticle) otherVersionArticle.remove();
        }
    }

    if (mediaData.length > 0 && swiperContainer) {
        const sortedMediaData = [...mediaData].sort((a, b) => {
            if (a.type === 'video' && b.type !== 'video') return -1;
            if (a.type !== 'video' && b.type === 'video') return 1;
            return 0;
        });
        
        const fragment = document.createDocumentFragment();
        
        sortedMediaData.forEach((media) => {
            const slide = document.createElement('swiper-slide');
            
            if (media.type === 'image') {
                slide.innerHTML = `
                    <img
                        class="w-full h-full object-cover rounded-2xl"
                        src="${media.url}"
                        alt="Package Media"
                    />
                `;
            } else if (media.type === 'video') {
                slide.innerHTML = `
                    <div class="w-full h-full relative overflow-hidden">
                        <iframe
                            src="https://www.youtube.com/embed/${media.url}?color=white&rel=0&autoplay=1&mute=1&controls=0&loop=1&playlist=${media.url}"
                            class="w-full h-full object-cover rounded-2xl"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                        >
                        </iframe>
                    </div>
                `;
            }
            
            fragment.appendChild(slide);
        });
        

        const swiperContainer = document.querySelector('.package-media-swiper');

        const firstSlide = swiperContainer.querySelector('swiper-slide');
        if (firstSlide) {
            swiperContainer.insertBefore(fragment, firstSlide);
        } else {
            swiperContainer.appendChild(fragment);
        }

        setTimeout(() => {
            if (swiperContainer.swiper) {
                swiperContainer.swiper.update();
                if (sortedMediaData[0]?.type === 'video') {
                    swiperContainer.swiper.slideTo(0);
                }
            }
        }, 100);

        if (thumbsContainer) {
            const thumbFragment = document.createDocumentFragment();

            const sortedMediaData = [...mediaData].sort((a, b) => {
                if (a.type === 'video' && b.type !== 'video') return -1;
                if (a.type !== 'video' && b.type === 'video') return 1;
                return 0;
            });
            
            sortedMediaData.forEach((media, index) => {
                const thumbItem = document.createElement('li');
                thumbItem.className = `thumb-item h-max cursor-pointer rounded-lg overflow-hidden border-2 border-white/10 ${index === 0 ? 'active' : ''}`;
                thumbItem.dataset.index = index;
                
                if (media.type === 'image') {
                    thumbItem.innerHTML = `
                        <img
                            class="w-28 h-16 object-cover rounded-lg"
                            src="${media.url}"
                            alt="Package Media"
                        />
                    `;
                } else if (media.type === 'video') {
                    thumbItem.innerHTML = `
                        <div class="w-28 h-16 relative bg-black rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                                src="https://i.ytimg.com/vi_webp/${media.url}/maxresdefault.webp"
                                alt="YouTube video"
                            />
                        </div>
                    `;
                }
                
                thumbFragment.appendChild(thumbItem);
            });

            const firstThumb = thumbsContainer.querySelector('.thumb-item');
            if (firstThumb) {
                thumbsContainer.insertBefore(thumbFragment, firstThumb);
            } else {
                thumbsContainer.appendChild(thumbFragment);
            }

            const allThumbs = thumbsContainer.querySelectorAll('.thumb-item');
            allThumbs.forEach((thumb, i) => {
                thumb.dataset.index = i;
                thumb.classList.remove('active');
            });

            if (allThumbs[0]) {
                allThumbs[0].classList.add('active');
            }
        }
        requestAnimationFrame(() => {
            if (swiperContainer.initialize) swiperContainer.initialize();
        });
        
        
        if (thumbsContainer && swiperContainer) {
            thumbsContainer.addEventListener('click', (e) => {
                const thumb = e.target.closest('.thumb-item');
                if (!thumb) return;
                const index = parseInt(thumb.dataset.index);
                if (swiperContainer.swiper) {
                    swiperContainer.swiper.slideTo(index);
                }
                thumbsContainer.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            
            swiperContainer.addEventListener('swiperslidechange', (e) => {
                const activeIndex = e.detail[0].activeIndex;
                const thumbs = thumbsContainer.querySelectorAll('.thumb-item');
                
                thumbs.forEach((t, i) => {
                    t.classList.toggle('active', i === activeIndex);
                });
            });
        }
    }
};

// Text processors
const processPreviewDescriptions = () => {
    document.querySelectorAll('.preview-desc').forEach(el => {
        let text = el.dataset.desc || '';

        text = text.replace(/<\/(p|h[1-4]|li|div)>/gi, ' ');
        text = text.replace(/<(p|h[1-4]|li|div)[^>]*>/gi, '');

        text = text.replace(/<br\s*\/?>/gi, ' ');

        text = text.replace(/<[^>]*>/g, '');

        const txt = document.createElement('textarea');
        txt.innerHTML = text;
        text = txt.value;

        text = text.replace(/\p{Extended_Pictographic}/gu, '');

        text = text.replace(/\s+/g, ' ').trim();

        el.textContent = text.slice(0, 180);
    });
};

const processPackageNames = () => {
    document.querySelectorAll('.package-name').forEach(el => {
        el.textContent = el.textContent.split('|')[0].trim();
    });
};

const processPackagePrices = () => {
    const currencies = ["AUD","BRL","CAD","DKK","EUR","NOK","NZD","GBP","SEK","USD","PLN","TRY"];
    const currencyRegex = new RegExp(`([\\d.,]+)\\s*(${currencies.join('|')})`);

    document.querySelectorAll('.package-price').forEach(el => {
        const text = el.textContent.trim();
        const match = text.match(currencyRegex);

        if (!match) return;

        const value = parseFloat(match[1].replace(',', '.'));
        const currency = match[2];

        el.textContent = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency
        }).format(value);
    });
};

// Accordion handler
const initAccordions = () => {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        
        if (!trigger || !content || !icon) return;
        
        const defaultOpen = item.getAttribute('data-default-open') === 'true';
        let isOpen = defaultOpen;
        
        if (defaultOpen) {
            gsap.set(icon, { rotation: 180 });
        }
        
        trigger.addEventListener('click', () => {
            const height = isOpen ? 0 : 'auto';
            const rotation = isOpen ? 0 : 180;
            
            if (!isOpen) {
                gsap.set(content, { height: "auto" });
                gsap.from(content, { height: 0, duration: 0.4, ease: "power2.inOut" });
            } else {
                gsap.to(content, { height, duration: 0.4, ease: "power2.inOut" });
            }
            
            gsap.to(icon, { rotation, duration: 0.3, ease: "power2.inOut" });
            isOpen = !isOpen;
        });
    });
};

// Main initialization
const indexInit = () => {
    displayDiscordReviews();

    moveElementsToContainer("featured-packages", ".featured-package");
    moveElementsToContainer("youtube-videos", ".youtube-video");
    moveElementsToContainer("recent-payments", ".payment-item");

    const faqContainer = document.getElementById("faq-items");
    const searchInput = document.getElementById('faq-search');
    const answerCount = document.getElementById('answer-count');
    
    if (faqContainer && searchInput && answerCount) {
        new FAQHandler(faqContainer, searchInput, answerCount);
    }

    const footerYear = document.getElementById("current-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    initNavbarScroll();
    initPackageFilter();
    processPackageNames();
    processPackagePrices();
    processPreviewDescriptions();
    initAccordions();
};

// Page loader
window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 300);
    }
});

// Initialize based on page state
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        indexInit();
        initPackage();
    });
} else {
    indexInit();
    initPackage();
}
