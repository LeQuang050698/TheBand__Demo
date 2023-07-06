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
            img: '../IMG/ny.jpg'
        },

        {
            site: 'Chicago',
            title: 'Thank you, Chicago - A night we will not forget.',
            img: '../IMG/chicago.jpg'
        },

        {
            site: 'Los Angeles',
            title: 'We had the best time playing at Venice Beach!',
            img: '../IMG/la.jpg'
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

    sliderChange: function() {
        setInterval(()=> {
            this.currentIndex++
            if(this.currentIndex >= (this.sliders.length + 1)) {
                this.currentIndex = 0
            }
    
            $('.slider').style.backgroundImage = `url('${this.currentSlider.img}')`
            $('.slider__title').textContent = this.currentSlider.site
            $('.slider__subTitle').textContent = this.currentSlider.title
        },4000)
    },

    start: function() {
        this.defineProperties()
        this.sliderChange()
        this.handleEvent()
    }
}

main.start()
