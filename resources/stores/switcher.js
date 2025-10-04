import { defineStore } from 'pinia'

export const switcherStore = defineStore('switcher', {
  state: () => ({
    colortheme: 'light', // light, dark
    direction: 'ltr', // ltr, rtl
    navigationStyles: 'vertical', // vertical, horizontal
    menuStyles: 'menu-click', // menu-click, menu-hover, icon-click, icon-hover
    layoutStyles: 'double-menu', // double-menu, detached, icon-overlay, icontext-menu, closed-menu, default-menu
    pageStyles: 'flat', // regular, classic, modern,flat
    widthStyles: 'fullwidth', // fullwidth, boxed
    menuPosition: 'fixed', // fixed, scrollable
    headerPosition: 'fixed', // fixed, scrollable
    menuColor: 'dark', // light, dark, color, gradient, transparent
    headerColor: 'transparent', // light, dark, color, gradient, transparent
    themePrimary: '', // '58, 88, 146', '92, 144, 163', '161, 90, 223', '78, 172, 76', '223, 90, 90'
    themeBackground: '',
    backgroundImage: '',
  }),
  getters: {},
  actions: {
    colorthemeFn(value) {
      let html = document.querySelector('html')
      if (value == 'light') {
        this.$state.colortheme = 'light'
        this.menuColorFn(this.menuColor)
        this.headerColorFn(this.headerColor)
        this.$state.themePrimary = ''
        this.$state.themeBackground = ''
        html.setAttribute('data-theme-mode', 'light')
        html.setAttribute('data-header-styles', 'transparent')
        html.setAttribute('data-menu-styles', 'transparent')
        html.style.removeProperty('--body-bg-rgb')
        html.style.removeProperty('--body-bg-rgb2')
        html.setAttribute('data-header-styles', 'transparent')
        html.style.removeProperty('--light-rgb')
        html.style.removeProperty('--sidemenu-active-bgcolor')
        html.style.removeProperty('--form-control-bg')
        html.style.removeProperty('--input-border')
      }
      if (value == 'dark') {
        this.colortheme = 'dark'
        this.menuColorFn(this.menuColor)
        this.headerColorFn(this.headerColor)
        this.$state.themePrimary = ''
        this.$state.themeBackground = ''
        if (
          !localStorage.getItem('vyzorMenu') ||
          localStorage.getItem('vyzorMenu') == 'transparent'
        ) {
          this.menuColor = 'transparent'
        }
        if (
          !localStorage.getItem('vyzorHeader') ||
          localStorage.getItem('vyzorHeader') == 'transparent'
        ) {
          this.headerColor = 'transparent'
        }
        if (!html.getAttribute('data-page-style')) {
          html.setAttribute('data-page-style', 'flat')
        }
        html.setAttribute('data-theme-mode', 'dark')
        html.setAttribute('data-header-styles', 'transparent')
        html.setAttribute('data-menu-styles', 'transparent')
        localStorage.removeItem('data-header-styles')
        html.style.removeProperty('--body-bg-rgb')
        html.style.removeProperty('--body-bg-rgb2')
        html.style.removeProperty('--light-rgb')
        html.style.removeProperty('--sidemenu-active-bgcolor')
        html.style.removeProperty('--form-control-bg')
        html.style.removeProperty('--input-border')
      }
    },
    directionFn(value) {
      let html = document.querySelector('html')
      if (value === 'rtl') {
        this.$state.direction = 'rtl'
        html.setAttribute('dir', 'rtl')
      } else {
        this.$state.direction = 'ltr'
        html.setAttribute('dir', 'ltr')
      }
    },
    navigationStylesFn(value) {
      let html = document.querySelector('html')
      let mainMenu = document.querySelector('.main-menu')
      mainMenu ? (mainMenu.style.marginInlineStart = '0') : ''
      if (value == 'horizontal') {
        this.$state.navigationStyles = 'horizontal'
        this.$state.menuStyles = 'menu-click'
        html.setAttribute('data-nav-layout', 'horizontal')
        html.removeAttribute('data-vertical-style')
        if (!html.getAttribute('data-nav-style')) {
          html.setAttribute('data-nav-style', 'menu-click')
        }
        this.checkHoriMenu()
      } else {
        this.$state.navigationStyles = 'vertical'
        this.$state.menuStyles = ''
        this.$state.layoutStyles = 'double-menu'
        html.setAttribute('data-nav-layout', 'vertical')
        html.setAttribute('data-toggled', 'double-menu-open')
        html.setAttribute('data-vertical-style', 'doublemenu')
        html.removeAttribute('data-nav-style')
        if (window.innerWidth < 992) {
          html.setAttribute('data-toggled', 'close')
        }
      }
    },
    layoutStylesFn(value) {
      let html = document.querySelector('html')
      let appSidebar = document.querySelector('.app-sidebar')
      let mainMenu = document.querySelector('.main-menu')
      let mainContentDiv = document.querySelector('.main-content')
      appSidebar?.removeEventListener('mouseenter', this.iconoverLayoutHoverFn)
      appSidebar?.removeEventListener('mouseleave', this.iconoverLayoutHoverFn)
      appSidebar?.removeEventListener('click', this.icontextOpenFn)
      mainContentDiv?.removeEventListener('click', this.icontextCloseFn)
      localStorage.removeItem('vyzormenuStyles')
      html.removeAttribute('data-nav-style')
      mainMenu.style.marginInlineStart = '0'
      switch (value) {
        case 'default-menu':
          this.$state.layoutStyles = value
          html.setAttribute('data-vertical-style', 'overlay')
          if (window.innerWidth < 992) {
            html.setAttribute('data-toggled', 'close')
          } else {
            html.removeAttribute('data-toggled')
          }
          html.setAttribute('data-nav-layout', 'vertical')
          document.querySelectorAll('.main-menu>li.open').forEach((ele) => {
            if (!ele?.classList.contains('active')) {
              ele.classList.remove('open')
              ele.querySelector('ul').style.display = 'none'
            }
          })
          appSidebar?.addEventListener('mouseenter', this.iconoverLayoutHoverFn, { passive: true })
          appSidebar?.addEventListener('mouseleave', this.iconoverLayoutHoverFn, { passive: true })
          break
        case 'closed-menu':
          this.$state.layoutStyles = value
          html.setAttribute('data-nav-layout', 'vertical')
          html.setAttribute('data-toggled', 'close-menu-close')
          html.setAttribute('data-vertical-style', 'closed')
          document.querySelectorAll('.main-menu>li.open').forEach((ele) => {
            if (!ele?.classList.contains('active')) {
              ele.classList.remove('open')
              ele.querySelector('ul').style.display = 'none'
            }
          })
          break
        case 'detached':
          this.$state.layoutStyles = value
          html.setAttribute('data-nav-layout', 'vertical')
          html.setAttribute('data-toggled', 'detached-close')
          html.setAttribute('data-vertical-style', 'detached')
          appSidebar?.addEventListener('mouseenter', this.iconoverLayoutHoverFn, { passive: true })
          appSidebar?.addEventListener('mouseleave', this.iconoverLayoutHoverFn, { passive: true })
          break
        case 'icontext-menu':
          this.$state.layoutStyles = value
          html.setAttribute('data-nav-layout', 'vertical')
          html.setAttribute('data-toggled', 'icon-text-close')
          html.setAttribute('data-vertical-style', 'icontext')
          appSidebar?.addEventListener('click', this.icontextOpenFn, { passive: true })
          mainContentDiv?.addEventListener('click', this.icontextCloseFn, { passive: true })

          break
        case 'icon-overlay':
          this.$state.layoutStyles = value
          html.setAttribute('data-nav-layout', 'vertical')
          html.setAttribute('data-toggled', 'icon-overlay-close')
          html.setAttribute('data-vertical-style', 'overlay')
          document.querySelectorAll('.main-menu>li.open').forEach((ele) => {
            if (!ele?.classList.contains('active')) {
              ele.classList.remove('open')
              ele.querySelector('ul').style.display = 'none'
            }
          })
          appSidebar.addEventListener('mouseenter', this.iconoverLayoutHoverFn, { passive: true })
          appSidebar.addEventListener('mouseleave', this.iconoverLayoutHoverFn, { passive: true })
          break
        case 'double-menu':
          this.$state.layoutStyles = value
          html.setAttribute('data-nav-layout', 'vertical')
          html.setAttribute('data-vertical-style', 'doublemenu')
          if (window.innerWidth < 992) {
            html.setAttribute('data-toggled', 'close')
          } else {
            html.setAttribute('data-toggled', 'double-menu-open')
          }
          // eslint-disable-next-line no-case-declarations
          const menuSlideItem = document.querySelectorAll('.main-menu > li > .side-menu__item')
          // Create the tooltip element
          // eslint-disable-next-line no-case-declarations
          const tooltip = document.createElement('div')
          tooltip.className = 'custome-tooltip'
          // tooltip.textContent = "This is a tooltip";

          // Set the CSS properties of the tooltip element
          tooltip.style.setProperty('position', 'fixed')
          tooltip.style.setProperty('display', 'none')
          tooltip.style.setProperty('padding', '0.5rem')
          tooltip.style.setProperty('font-weight', '500')
          tooltip.style.setProperty('font-size', '0.75rem')
          tooltip.style.setProperty('background-color', 'rgb(15, 23 ,42)')
          tooltip.style.setProperty('color', 'rgb(255, 255 ,255)')
          tooltip.style.setProperty('margin-inline-start', '45px')
          tooltip.style.setProperty('border-radius', '0.25rem')
          tooltip.style.setProperty('z-index', '99')
          // eslint-disable-next-line no-case-declarations
          let sidemenulink = document.querySelectorAll('.main-menu li > .side-menu__item')
          sidemenulink?.forEach((ele) => ele.removeEventListener('click', this.doubleClickFn))

          menuSlideItem.forEach((e) => {
            // Add an event listener to the menu slide item to show the tooltip
            e?.addEventListener('mouseenter', () => {
              tooltip.style.setProperty('display', 'block')
              let value = e.querySelector('.side-menu__label')?.childNodes?.[0]?.nodeValue
              tooltip.textContent = value
              if (
                document.querySelector('html').getAttribute('data-vertical-style') == 'doublemenu'
              ) {
                // e.appendChild(tooltip);
              }
            })

            // Add an event listener to hide the tooltip
            e.addEventListener(
              'mouseleave',
              () => {
                tooltip.style.setProperty('display', 'none')
                tooltip.textContent = e.querySelector('.side-menu__label')?.textContent
                if (
                  document.querySelector('html').getAttribute('data-vertical-style') == 'doublemenu'
                ) {
                  // e.removeChild(tooltip);
                }
              },
              { passive: true }
            )
          })
          if (!document.querySelector('.double-menu-active')) {
            html.setAttribute('data-toggled', 'double-menu-open')
          }
          break
      }
    },
    iconoverLayoutHoverFn(event) {
      let html = document.documentElement
      if (
        html.getAttribute('data-toggled') === 'icon-overlay-close' ||
        html.getAttribute('data-toggled') === 'detached-close'
      ) {
        if (event.type == 'mouseenter') {
          html.setAttribute('data-icon-overlay', 'open')
        }
        if (event.type == 'mouseleave') {
          html.removeAttribute('data-icon-overlay')
        }
      }
    },
    icontextOpenFn() {
      let html = document.documentElement
      if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open')
      }
    },
    icontextCloseFn() {
      let html = document.documentElement
      if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text')
      }
    },
    doubleClickFn() {
      var $this = this
      let html = document.querySelector('html')
      var checkElement = $this.nextElementSibling
      if (checkElement) {
        if (!checkElement.classList.contains('double-menu-active')) {
          if (document.querySelector('.slide-menu')) {
            let slidemenu = document.querySelectorAll('.slide-menu')
            slidemenu.forEach((e) => {
              if (e?.classList.contains('double-menu-active')) {
                e.classList.remove('double-menu-active')
                html.setAttribute('data-toggled', 'double-menu-close')
              }
            })
          }
          checkElement?.classList.add('double-menu-active')
          html.setAttribute('data-toggled', 'double-menu-open')
        }
      }
    },
    menuStylesFn(value) {
      let html = document.querySelector('html')
      this.$state.menuStyles = value
      let mainMenu = document.querySelector('.main-menu')
      localStorage.removeItem('vyzorverticalstyles')
      html.removeAttribute('data-vertical-style')
      html.removeAttribute('data-hor-style')
      mainMenu.style.marginInlineStart = '0'
      switch (value) {
        case 'menu-click':
          html.setAttribute('data-nav-style', 'menu-click')
          html.setAttribute('data-toggled', 'menu-click-closed')
          this.checkHoriMenu()
          break
        case 'menu-hover':
          html.setAttribute('data-nav-style', 'menu-hover')
          html.setAttribute('data-toggled', 'menu-hover-closed')
          this.checkHoriMenu()
          break
        case 'icon-click':
          html.setAttribute('data-nav-style', 'icon-click')
          html.setAttribute('data-toggled', 'icon-click-closed')
          this.checkHoriMenu()
          break
        case 'icon-hover':
          html.setAttribute('data-nav-style', 'icon-hover')
          html.setAttribute('data-toggled', 'icon-hover-closed')
          this.checkHoriMenu()
          break
      }
    },
    checkHoriMenu() {
      let menuNav = document.querySelector('.main-sidebar')
      let mainMenu = document.querySelector('.main-menu')
      let slideLeft = document.querySelector('.slide-left')
      let slideRight = document.querySelector('.slide-right')
      let marginRightValue =
        mainMenu &&
        Math.ceil(Number(window.getComputedStyle(mainMenu).marginInlineStart.split('px')[0]))
      // Show/Hide the arrows
      if (mainMenu && menuNav && slideRight && slideLeft) {
        if (mainMenu.scrollWidth > menuNav.offsetWidth) {
          slideRight?.classList.remove('d-none')
          slideLeft?.classList.add('d-none')
        } else {
          slideRight?.classList.add('d-none')
          slideLeft?.classList.add('d-none')
          mainMenu.style.marginLeft = '0px'
          mainMenu.style.marginRight = '0px'
        }
        if (marginRightValue == 0) {
          slideLeft?.classList.add('d-none')
        } else {
          slideLeft?.classList.remove('d-none')
        }
      }
    },
    pageStylesFn(value) {
      let html = document.querySelector('html')
      if (value) {
        this.$state.pageStyles = value
        html.setAttribute('data-page-style', value)
      }
    },
    widthStylesFn(value) {
      let html = document.querySelector('html')
      if (value) {
        this.$state.widthStyles = value
        html.setAttribute('data-width', value)
      }
    },
    menuPositionFn(value) {
      let html = document.querySelector('html')
      if (value) {
        this.$state.menuPosition = value
        html.setAttribute('data-menu-position', value)
      }
    },
    headerPositionFn(value) {
      let html = document.querySelector('html')
      if (value) {
        this.$state.headerPosition = value
        html.setAttribute('data-header-position', value)
      }
    },
    menuColorFn(value) {
      let html = document.querySelector('html')
      if (value) {
        this.$state.menuColor = value
        html.setAttribute('data-menu-styles', value)
      }
    },
    headerColorFn(value) {
      let html = document.querySelector('html')
      if (value) {
        this.$state.headerColor = value
        html.setAttribute('data-header-styles', value)
      }
    },
    themePrimaryFn(value) {
      let html = document.querySelector('html')
      this.themePrimary = value
      html.style.setProperty('--primary-rgb', value)
      localStorage.setItem('vyzorprimaryRGB', value)
    },
    themeBackgroundFn(val1, val2) {
      this.$state.themeBackground = `${val1 ?? ''}, ${val2 ?? ''}`
      let html = document.querySelector('html')
      let bgrgb = val1 ? val1 : localStorage.vyzorbodyBgRGB
      let bgrgb2 = val2 ? val2 : localStorage.vyzorbodylightRGB
      html.setAttribute('data-theme-mode', 'dark')
      html.setAttribute('data-menu-styles', 'dark')
      html.setAttribute('data-header-styles', 'dark')
      if (bgrgb && bgrgb2) {
        html.style.setProperty('--body-bg-rgb', bgrgb)
        html.style.setProperty('--body-bg-rgb2', bgrgb2)
        html.style.setProperty('--light-rgb', bgrgb2)
        html.style.setProperty('--sidemenu-active-bgcolor', `rgb(${bgrgb2})`)
        html.style.setProperty('--form-control-bg', `rgb(${bgrgb2})`)
        html.style.setProperty('--input-border', 'rgba(255,255,255,0.1)')
        localStorage.setItem('vyzorbodyBgRGB', bgrgb)
        localStorage.setItem('vyzorbodylightRGB', bgrgb2)
      }
      this.colortheme = 'dark'
      // if (!localStorage.getItem('vyzorMenu') || localStorage.getItem('vyzorMenu') == 'dark') {
      this.menuColor = 'dark'
      // } if (!localStorage.getItem('vyzorHeader') || localStorage.getItem('vyzorHeader') == 'dark') {
      this.headerColor = 'dark'
      // }
    },
    backgroundImageFn(value) {
      let html = document.querySelector('html')
      this.$state.backgroundImage = value
      html.setAttribute('data-bg-img', value)
    },
    reset() {
      let html = document.querySelector('html')
      let mainMenuEle = document.querySelector('.main-menu')
      if (localStorage.getItem('vyzornavstyles') == 'horizontal' && mainMenuEle) {
        mainMenuEle.style.display = 'block'
      }

      // clearing localstorage
      localStorage.clear()

      // reseting to light
      this.colorthemeFn('light')

      //To reset the light-rgb
      html.removeAttribute('style')

      // clearing attibutes
      // removing header, menu, pageStyle & boxed
      html.removeAttribute('data-nav-style')
      html.removeAttribute('data-menu-position')
      html.removeAttribute('data-header-position')
      html.removeAttribute('data-width')
      html.removeAttribute('data-page-style')

      // removing theme styles
      html.removeAttribute('data-bg-img')

      // clear primary & bg color
      html.style.removeProperty(`--primary-rgb`)
      html.style.removeProperty(`--body-bg-rgb`)

      // reseting to ltr
      this.directionFn('ltr')

      // reseting to vertical
      this.navigationStylesFn('vertical')

      // reseting the layout styles
      this.layoutStylesFn('double-menu')

      // resetting the menu Colot
      this.menuColorFn('transparent')

      // restting the header color

      this.headerColorFn('transparent')

      // to reset horizontal menu scroll
      mainMenuEle ? (mainMenuEle.style.marginLeft = '0px') : ''
      mainMenuEle ? (mainMenuEle.style.marginRight = '0px') : ''
    },
    retrieveFromLocalStorage() {
      this.direction = localStorage.getItem('vyzordirection') || this.direction
      this.directionFn(this.direction)
      this.navigationStyles = localStorage.getItem('vyzornavstyles') || this.navigationStyles
      this.navigationStylesFn(this.navigationStyles)
      this.pageStyles = localStorage.getItem('vyzorpageStyle') || this.pageStyles
      this.pageStylesFn(this.pageStyles)
      this.widthStyles = localStorage.getItem('vyzorwidthStyles') || this.widthStyles
      this.widthStylesFn(this.widthStyles)
      this.menuPosition = localStorage.getItem('vyzormenuposition') || this.menuPosition
      this.menuPositionFn(this.menuPosition)
      this.headerPosition = localStorage.getItem('vyzorheaderposition') || this.headerPosition
      this.headerPositionFn(this.headerPosition)
      this.themePrimary = localStorage.getItem('vyzorprimaryRGB') || this.themePrimary
      //  this function will load the themePrimary
      this.themePrimaryStorage()

      this.colortheme = localStorage.getItem('vyzorcolortheme') || this.colortheme
      this.colorthemeFn(this.colortheme)
      this.backgroundImage = localStorage.getItem('vyzorbgimg') || this.backgroundImage
      this.backgroundImageFn(this.backgroundImage)
      this.themeBackgroundStorage()
      this.menuColor = localStorage.getItem('vyzorMenu')
        ? localStorage.getItem('vyzorMenu')
        : localStorage.getItem('vyzorcolortheme') === 'dark'
          ? 'transparent'
          : this.menuColor
      this.menuColorFn(this.menuColor)
      this.headerColor = localStorage.getItem('vyzorHeader')
        ? localStorage.getItem('vyzorHeader')
        : localStorage.getItem('vyzorcolortheme') === 'dark'
          ? 'transparent'
          : this.headerColor
      this.headerColorFn(this.headerColor)
      this.menuStyles = localStorage.getItem('vyzormenuStyles') || this.menuStyles
      if (!localStorage.getItem('vyzorverticalstyles')) {
        this.menuStylesFn(this.menuStyles)
      }
      this.layoutStyles = localStorage.getItem('vyzorverticalstyles') || this.layoutStyles
      if (
        !localStorage.getItem('vyzormenuStyles') &&
        localStorage.getItem('vyzornavstyles') != 'horizontal' &&
        !localStorage.getItem('vyzormenuStyles')
      ) {
        this.layoutStylesFn(this.layoutStyles)
      }
    },
    custompageLocalStorage() {
      this.colortheme = localStorage.getItem('vyzorcolortheme') || this.colortheme
      this.colorthemeFn(this.colortheme)

      this.direction = localStorage.getItem('vyzordirection') || this.direction
      this.directionFn(this.direction)

      this.navigationStyles = 'horizontal'
      this.navigationStylesFn(this.navigationStyles)

      this.widthStyles = 'fullwidth'
      this.widthStylesFn(this.widthStyles)

      this.themePrimary = localStorage.getItem('vyzorprimaryRGB') || this.themePrimary
      this.themePrimaryFn(this.themePrimary)

      this.themeBackground = localStorage.getItem('vyzorbodyBgRGB') || this.themeBackground
      if (this.themeBackground) {
        this.themeBackgroundFn(this.themeBackground)
        this.colortheme = 'dark'
        this.menuColor = 'light'
        this.headerColor = 'light'
      }

      document.documentElement.removeAttribute('data-menu-styles')
    },

    custompageReset() {
      let html = document.querySelector('html')

      // clearing localstorage
      localStorage.clear()

      // reseting to light
      this.colorthemeFn('light')

      //To reset the light-rgb
      html.removeAttribute('style')

      // clearing attibutes
      // removing header, menu, pageStyle & boxed
      html.removeAttribute('data-nav-style')
      html.removeAttribute('data-menu-position')
      html.removeAttribute('data-header-position')
      html.removeAttribute('data-width')
      html.removeAttribute('data-page-style')

      // removing theme styles
      html.removeAttribute('data-bg-img')

      // clear primary & bg color
      html.style.removeProperty(`--primary-rgb`)
      html.style.removeProperty(`--body-bg-rgb`)

      // reseting to ltr
      this.directionFn('ltr')

      // reseting to vertical
      this.navigationStylesFn('horizontal')

      // resetting the menu Colot
      document.documentElement.removeAttribute('data-menu-styles')
    },
    themePrimaryStorage() {
      const saved = localStorage.getItem('vyzorprimaryRGB')
      if (saved) {
        this.themePrimary = saved
        this.themePrimaryFn(saved)
      }
    },
    themeBackgroundStorage() {
      const val1 = localStorage.getItem('vyzorbodyBgRGB')
      const val2 = localStorage.getItem('vyzorbodylightRGB')
      if (val1 && val2) {
        const fullStr = `${val1},${val2}`
        this.themeBackgroundFn(val1, val2)
        this.themeBackground = fullStr
        this.colortheme = 'dark'
        this.menuColor = 'dark'
        this.headerColor = 'dark'
      }
    },
  },
})
