import './style.scss'
const Effect = () => {
    return ( 
        <section>

                <button aria-pressed="false" onClick="this.setAttribute('aria-pressed',this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');">Pause Animation</button>

                <div class='marquees'>
                    <section class='marquee' style='--char-count: 28'>
                        <div class='marquee--inner'>
                            <p>You have brains in your head</p>
                            <p aria-hidden='true'>You have brains in your head</p>
                            <p aria-hidden='true'>You have brains in your head</p>
                            <p aria-hidden='true'>You have brains in your head</p>
                            <p aria-hidden='true'>You have brains in your head</p>
                                        <p aria-hidden='true'>You have brains in your head</p>
                        </div>
                    </section>

                    <div class='marquee' style='--char-count: 30'>
                        <div class='marquee--inner'>
                            <p>You have feet in your shoes</p>
                            <p aria-hidden='true'>You have feet in your shoes</p>
                            <p aria-hidden='true'>You have feet in your shoes</p>
                            <p aria-hidden='true'>You have feet in your shoes</p>
                            <p aria-hidden='true'>You have feet in your shoes</p>
                                        <p aria-hidden='true'>You have feet in your shoes</p>
                        </div>
                    </div>

                    <section class='marquee' style='--char-count: 22'>
                        <div class='marquee--inner'>
                            <p>You can steer yourself</p>
                            <p aria-hidden='true'>You can steer yourself</p>
                            <p aria-hidden='true'>You can steer yourself</p>
                            <p aria-hidden='true'>You can steer yourself</p>
                            <p aria-hidden='true'>You can steer yourself</p>
                                        <p aria-hidden='true'>You can steer yourself</p>
                        </div>
                    </section>

                    <section class='marquee' style='--char-count: 24'>
                        <div class='marquee--inner'>
                            <p>Any direction you choose</p>
                            <p aria-hidden='true'>Any direction you choose</p>
                            <p aria-hidden='true'>Any direction you choose</p>
                            <p aria-hidden='true'>Any direction you choose</p>
                            <p aria-hidden='true'>Any direction you choose</p>
                                        <p aria-hidden='true'>Any direction you choose</p>
                        </div>
                    </section>
                </div>
        </section>

     );
}
 
export default Effect;