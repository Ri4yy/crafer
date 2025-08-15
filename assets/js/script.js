document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu'),
    btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('menu--open')

        btnMenu.classList.toggle('btn-menu--open')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 768) {
            menu.classList.remove('menu--open')
            btnMenu.classList.remove('btn-menu--open')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

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
})