/**
 * 
 */

    
    
	jQuery.validator.addMethod(
			  "password",
			  function(value,element){
				  return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) ;
			  },
			  'Le mot de passe doit contenir : au moins une lettre minuscule,au moins une lettre majuscule, au moins un chiffre,au moins huit caractères ' 
		     
			  
	);
	
	jQuery.validator.addMethod(
			  "email",
			  function(value,element){
				  return  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
			  },
			  'Rentrez une adresse email valide ' 
		     
			  
	);

	//$.validator.setDefaults( {
		//	submitHandler: function () {
			//	alert( "submitted!" );
			//}
		//} );


		$( document ).ready( function () {
                    
                     $('input').on('blur', function () {
                        if ($("#signupForm").valid()) {
                            $('#submit').prop('disabled', false);
                        } else {
                            $('#submit').prop('disabled', 'disabled');
                        }
                    });
                    
			$( "#signupForm" ).validate( {
				rules: {
                                        sex : "required",
					prenom: "required",
					nom: "required",
					identifiant: {
						required: true,
						minlength: 2
					},
					password: {
						required: true,
						minlength: 5
					},
					confirm_password: {
						required: true,
						minlength: 5,
						equalTo: "#password"
					},
					email: {
						required: true,
						email: true
					},
					formation : "required",
			              Commentaire : "required"
				},
				messages: {
                                        sex: "Veuillez cocher votre genre",
					prenom: "Veuillez saisir votre prenom",
					nom: "Veuillez saisir votre nom",
					identifiant: {
						required: "Veuillez saisir votre identifiant",
						minlength: "Votre identifiant doit contenir au moins deux characters"
					},
					password: {
						required: "Veuillez saisir votre mot de passe",
						minlength: "Votre mot de passe doit contenir au moins 5 characters"
					},
					confirm_password: {
						required: "Veuillez saisir votre mot de passe",
						minlength: "Votre identifiant doit contenir au moins 5 characters",
						equalTo: "Veuillez saisir le meme mot de passe que précédent"
					},
					email: { required : "Veuillez saisir un email valide"},
			               formation: "Choisissez une formation",
			               Commentaire : "Saisissez un commentaire"
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "help-block" );

					// Add `has-feedback` class to the parent div.form-group
					// in order to add icons to inputs
					element.parents( ".col-sm-5" ).addClass( "has-feedback" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}

					// Add the span element, if doesn't exists, and apply the icon classes to it.
					if ( !element.next( "span" )[ 0 ] ) {
						$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
					}
				},
				success: function ( label, element ) {
					// Add the span element, if doesn't exists, and apply the icon classes to it.
					if ( !$( element ).next( "span" )[ 0 ] ) {
						$( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
					$( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
				},
				unhighlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
					$( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
				}
                                
			} );
		} );
                
