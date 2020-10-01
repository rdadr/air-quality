import React from 'react';
import './Footer.scss';

const Footer = ({partners, links, author, designer}) => {
	const partnersLogos = partners.map((logo, i) => <img key={i} src={logo} alt={'partner logo'}
				className="footer-partners-item"/>);
	const navLinks = links.map((link, i) => <a href={link.href} key={i} className={'footer-nav-link'}>{link.title}</a>)
	
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-partners">
					{partnersLogos}
				</div>
				
				<div className="footer-text-wrap">
					<div className="footer-nav">
						{navLinks}
					</div>					
					<p className='footer-nav-text'>
						Велика ДЯКА розробнику сайту:<br/> <span className='text-yellow'>{author}</span> - в учбових цілях, в рамках освітньої програми IT nation.<br/> Дизайн сайту виконала <span className='text-yellow'>{designer}</span>.
					</p>
				</div>
				
				<p className='footer-text'>
					2020, Всі права защищені
				</p>
				<p className='footer-text'>
					Згода на обработку персональных даних <br/>
					Політика конфіденційності
				</p>
			</div>
		</footer>
	);
};

export default Footer;