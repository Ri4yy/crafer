document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.header-mobile'),
        btnMenu = document.querySelector('.btn-menu'),
        html = document.querySelector('html');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('open')

        btnMenu.classList.toggle('btn-menu--open')
        html.classList.toggle('no-scroll')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 1024) {
            menu.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    let btnMobileMenu = document.querySelectorAll('.menu-mobile__btn');

    if(btnMobileMenu.length) {
        btnMobileMenu.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                console.log(e.target)
                e.target.closest('.menu-mobile__item').classList.toggle('active')
            })
        })
    }

    const btnAboutCompany = document.querySelector('.about-company__btn');
    const bottomAboutCompany = document.querySelector('.about-company__wrapper-bottom-wrapper');

    if (btnAboutCompany && bottomAboutCompany) {
        btnAboutCompany.addEventListener('click', function() {
            bottomAboutCompany.style.display = 'block';
            const scrollHeight = bottomAboutCompany.scrollHeight;

            setTimeout(() => {
                bottomAboutCompany.style.maxHeight = scrollHeight + 'px';
                bottomAboutCompany.style.paddingTop = '';
                bottomAboutCompany.style.paddingBottom = '';
                bottomAboutCompany.style.marginTop = '50px';
            }, 10);
            
            btnAboutCompany.style.display = 'none';
            
            setTimeout(() => {
                bottomAboutCompany.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
        });
    }

    const rows = document.querySelectorAll('.company-content__row');

    const btnCompany = document.querySelector('.company-content__btn');
    const btnCompanyWrapper = document.querySelector('.company-content__btn-wrapper');
    if (btnCompany) {
        btnCompany.addEventListener('click', function() {
            [1, 2].forEach(i => {
                if (rows[i]) {
                    rows[i].style.display = 'block';
                    const scrollHeight = rows[i].scrollHeight;
                    
                    setTimeout(() => {
                        rows[i].style.maxHeight = scrollHeight + 'px';
                        rows[i].style.paddingTop = '';
                        rows[i].style.paddingBottom = '';
                    }, 10);
                }
            });
            
            setTimeout(() => {
                rows[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
            
            btnCompanyWrapper.style.display = 'none';
        });
    }

    function tabs(wrapperMain, wrapperTab, wrapperContent, activeTab, activeContent) {
        const main = document.querySelector(wrapperMain);
        if (!main) return;
    
        const tabList = main.querySelector(wrapperTab);
        const tabs = tabList ? tabList.querySelectorAll('li') : [];
        const contents = main.querySelectorAll(wrapperContent);
    
        if (!tabList || tabs.length === 0 || contents.length === 0) return;
    
        tabList.addEventListener('click', function(e) {
            const clickedTab = e.target.closest('li');
            if (!clickedTab || clickedTab.classList.contains(activeTab)) return;
    
            tabs.forEach((tab, idx) => {
                if (tab === clickedTab) {
                    tab.classList.add(activeTab);
                    contents[idx].classList.add(activeContent);
                } else {
                    tab.classList.remove(activeTab);
                    contents[idx].classList.remove(activeContent);
                }
            });
        });
    }
    
    tabs('.services-tabs', '.services-tabs__list', '.services-tabs__content', 'active-tab', 'active');
    tabs('.info-tabs', '.info-tabs__list', '.info-tabs__content', 'active-tab', 'active');


    let propCard = document.querySelectorAll('.catalog-menu__subsection-list');

    function simpleBar(item, options, size, autoHide) {
        item.forEach((card) => {
            new SimpleBar(card, {
                autoHide: autoHide,
                scrollbarMaxSize: size,
                clickOnTrack: true,
                classNames: {
                    track: options
                }
            });
        })
    }
    simpleBar(propCard, 'simplebar-track simplebar-track__subsection', 42, false);

    document.querySelectorAll('.video-preview').forEach(function(block) {
        block.addEventListener('click', function() {
            var videoUrl = block.getAttribute('data-video');
            var rutubeId = null;
            var iframeSrc = null;

            var matchVideo = videoUrl.match(/rutube\.ru\/video\/([a-zA-Z0-9]+)/);
            var matchShorts = videoUrl.match(/rutube\.ru\/shorts\/([a-zA-Z0-9]+)/);

            if (matchVideo) {
                rutubeId = matchVideo[1];
                iframeSrc = 'https://rutube.ru/play/embed/' + rutubeId;
            } else if (matchShorts) {
                rutubeId = matchShorts[1];
                iframeSrc = 'https://rutube.ru/play/embed/' + rutubeId;
            }

            if (iframeSrc) {
                var iframe = document.createElement('iframe');
                iframe.src = iframeSrc;
                iframe.frameBorder = "0";
                iframe.allow = "autoplay; encrypted-media";
                iframe.setAttribute('allowfullscreen', '');
                iframe.setAttribute('webkitallowfullscreen', '');
                iframe.setAttribute('mozallowfullscreen', '');
                block.innerHTML = '';
                block.appendChild(iframe);
            }
        });
    });

    let dropdownEvent = document.querySelector('#dropdown-events'),
    dropdownContainer = document.querySelector('.request-form__dropdown'),
    dropdownItem = document.querySelectorAll('.request-form__dropdown-item'),
    dropdownSelected = document.querySelector('#dropdown-events span'),
    inputEvent = document.querySelector('#selected-event');

    if (dropdownEvent && dropdownContainer && dropdownSelected && inputEvent) {
        dropdownEvent.addEventListener('click', () => {
            dropdownEvent.closest('.request-form__dropdown').classList.toggle('open');
        });

        dropdownItem.forEach(el => {
            el.addEventListener('click', () => {
                let eventName = el.textContent;
                eventUpdate(eventName);
            });
        });

        function eventUpdate(name) {
            inputEvent.value = name;
            dropdownSelected.innerHTML = name;
            dropdownContainer.classList.remove('open');
        }
    }

    document.querySelectorAll('.modal-call-content__link').forEach(link => {
        const text = link.textContent;
        const match = text.match(/([\d\D]{8})$/);
        if (match) {
            const main = text.slice(0, -8);
            const last = text.slice(-8);
            link.innerHTML = `${main}<span style="color: #d1212e;">${last}</span>`;
        }
    });

     // Отображение фильтра на мобильной версии
     let filter = document.querySelector('.filter'),
     filterOpen = document.querySelector('.filter-panel__btn'),
     filterClose = document.querySelector('.filter__close');
     
     if(filter) {
         filterOpen.addEventListener('click', (e) => {
             filter.classList.add('open')
             html.classList.add('no-scroll')
         })
 
         filterClose.addEventListener('click', (e) => {
             filter.classList.remove('open')
             html.classList.remove('no-scroll')
         })
     }
 
     // Скрытие свойств фильтре, если их больше 4
     const categories = document.querySelectorAll('.filter-category__list');
 
     categories.forEach(category => {
         const items = category.querySelectorAll('.filter-properties__list');
         const showMoreButtonContainer = category.querySelector('.filter-category__more');
         const maxVisibleItems = 4;
         let isShowingAll = false;
 
         function updateVisibility() {
             let hiddenCount = 0;
 
             items.forEach((item, index) => {
                 if (index < maxVisibleItems) {
                     item.style.display = 'block';
                 } else {
                     item.style.display = 'none';
                     hiddenCount++;
                 }
             });
 
             if (showMoreButtonContainer) {
                 if (hiddenCount > 0) {
                     showMoreButtonContainer.style.display = 'block';
                     showMoreButtonContainer.innerHTML = `Показать больше (<span>${hiddenCount}</span>)`;
                 } else {
                     showMoreButtonContainer.style.display = 'none';
                 }
             }
         }
 
         function showAllItems() {
             items.forEach(item => {
                 item.style.display = 'block';
             });
 
             if (showMoreButtonContainer) {
                 showMoreButtonContainer.textContent = 'Скрыть';
             }
         }
 
         if (showMoreButtonContainer) {
             showMoreButtonContainer.addEventListener('click', function () {
                 isShowingAll = !isShowingAll;
 
                 if (isShowingAll) {
                     showAllItems();
                 } else {
                     updateVisibility();
                 }
             });
         } 
 
         updateVisibility();
     });

    // Cookie
    function checkCookies(){
        let cookieDate = localStorage.getItem('cookieDate');
        let cookieNotification = document.getElementById('cookie_notification');
        let cookieBtn = cookieNotification.querySelector('.cookie__btn');
        
        if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
            cookieNotification.classList.add('show');
        }
        
        cookieBtn.addEventListener('click', function(){
            localStorage.setItem( 'cookieDate', Date.now() );
            cookieNotification.classList.remove('show');
        })
    }
    checkCookies();
})