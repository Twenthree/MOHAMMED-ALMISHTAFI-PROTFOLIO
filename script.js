const starsContainer = document.getElementById('stars');

if (starsContainer) {
    // إنشاء 250 نجمة
    for (let i = 0; i < 250; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // موضع عشوائي
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // تأخير عشوائي
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // حجم عشوائي (1px إلى 4px)
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        starsContainer.appendChild(star);
    }

     console.log('✅ تم إنشاء النجوم!');
} else {
    console.error('❌ صندوق النجوم مو موجود!');
}

// ===== Slider الأعمال =====
const projectsContainer = document.querySelector('.projects-container');
const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');

if (projectsContainer && arrowRight && arrowLeft) {
    
    const scrollAmount = 380; // عرض البطاقة + المسافة
    
    // السهم الأيمن (السابق)
    arrowRight.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // السهم الأيسر (التالي)
    arrowLeft.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    console.log('✅ Slider الأعمال يشتغل!');
}