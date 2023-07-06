const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const barsBtn = $('.icon__bars')
const navbMobile = $('.navb__mobile')

const modal = $('.modal')
const closeBtns = $$('.closeBtn')
const btnBuyTickets = $$('.btn__buyTickets')

const main = {
    currentIndex: 0,
    sliders: [
        {
            site: 'New York',
            title: 'The atmosphere in New York is lorem ipsum.',
            slider: '/Assets/IMG/ny.jpg'
        },

        {
            site: 'Chicago',
            title: 'Thank you, Chicago - A night we will not forget.',
            slider: '/Assets/IMG/chicago.jpg'
        },

        {
            site: 'Los Angeles',
            title: 'We had the best time playing at Venice Beach!',
            slider: '/Assets/IMG/la.jpg'
        },
    ],

    defineProperties: function() {
        Object.defineProperty(this, 'currentSlider', {
            get: function() {
                return this.sliders[this.currentIndex]
            }
        })
    },

    handleEvent: function() {
        barsBtn.onclick = function() {
            navbMobile.classList.toggle('open')
        }

        btnBuyTickets.forEach(btnBuyTicket => {
            btnBuyTicket.onclick = function() {
                modal.classList.add('open')
            }
        })

        closeBtns.forEach(closeBtn => {
            closeBtn.onclick = function() {
                modal.classList.remove('open')
            }
        })
    },

    loadSlider: function() {
        $('.slider').style.backgroundImage = `url('${this.currentSlider.slider}')`
        $('.slider__title').textContent = this.currentSlider.site
        $('.slider__subTitle').textContent = this.currentSlider.title
    },

    sliderChange: function() {
        setInterval(()=> {
            this.currentIndex++
            if(this.currentIndex >= this.sliders.length) {
                this.currentIndex = 0
            }
            this.loadSlider()
        },2000)
    },

    start: function() {
        this.defineProperties()
        this.handleEvent()
        this.sliderChange()
    }
}

main.start()
