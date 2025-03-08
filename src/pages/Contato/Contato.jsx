import React from 'react'

const Contato = () => {
    return (
        <section className='contact'>
            <header>
                <h2 className='h2 article-title'>Contato</h2>
            </header>
            <section className='mapbox'>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62984.76963870426!2d-40.55123196371975!3d-9.373196083204869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7737a8452b2d649%3A0xa0e71dc0c94e0aed!2sPetrolina%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1741399889279!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>
            <section className='contact-form'>
                <h3 className='h3 form-title'>Contato</h3>
                <form action="#" className='form'>
                    <div className='input-wrapper'>
                        <input type="text" name='fullname' id='fullname' className='form-input' placeholder='Nome' />
                        <input type="email" name='email' id='email' className='form-input' placeholder='Email' />
                    </div>
                    <textarea name="message" className='form-input' placeholder='Messagem'></textarea>
                    <button className='form-btn' type='submit'>
                        <span>ENVIAR</span>
                    </button>
                </form>
            </section>
        </section>
    )
}

export default Contato