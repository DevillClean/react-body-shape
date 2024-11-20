const ContactsBloc = () => {
    return ( 
        <section className="contacts">
			<div className="container">
				<div className="contacts-content">
					<h2 className="contacts-title">НАПИСАТЬ НАМ</h2>

					<form action="" className="form">

						<div className="form-group">
							<label className="label" for="">Имя</label>
							<input type="text" className="input" />
						</div>

						<div className="form-group">
							<label className="label" for="">E-mail</label>
							<input type="text" className="input" />
						</div>

						<div className="form-group">
							<label className="label" for="">Сообщение</label>
							<textarea name="" id="" className="textarea"></textarea>
						</div>

						<button className="button">ОТПРАВИТЬ</button>
					</form>
				</div>
			</div>
		</section>
     );
}
 
export default ContactsBloc;