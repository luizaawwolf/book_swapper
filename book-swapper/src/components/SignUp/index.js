import React, { Component } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//     fullname: Yup.string().required('Fullname is required'),
//     username: Yup.string()
//       .required('Username is required')
//       .min(6, 'Username must be at least 6 characters')
//       .max(20, 'Username must not exceed 20 characters'),
//     email: Yup.string()
//       .required('Email is required')
//       .email('Email is invalid'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(6, 'Password must be at least 6 characters')
//       .max(40, 'Password must not exceed 40 characters'),
//     confirmPassword: Yup.string()
//       .required('Confirm Password is required')
//       .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
//     acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
//   });

// const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//     } = useForm({
//     resolver: yupResolver(validationSchema)
// });

// const onSubmit = data => {
//     console.log(JSON.stringify(data, null, 2));
//   };

class SignupForm extends Component { 
    constructor(props) {
		super(props);

		this.state = {
			fullName: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			errors: []
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const newUserData = {
            fullName: this.state.fullName,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.confirmPassword
		};
        console.log(newUserData);
	};

    render() {
        const { errors, loading } = this.state;
        return (
            <div className="register-form">
            <form>
                <div className="form-group">
                <label>Full Name</label>
                <input
                    name="fullName"
                    id="fullName"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <div className="invalid-feedback">{errors.fullname?.message}</div>
                </div>

                <div className="form-group">
                <label>Username</label>
                <input
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div className="form-group">
                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
                </div>

                <div className="form-group">
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                
                <div className="form-group">
                <label>Confirm Password</label>
                <input
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    onChange={this.handleChange}
                />
                <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                </div>
                </div>

                <div className="form-group">
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                    Register
                </button>

                </div>
            </form>
            </div>
        );
    }
};
export default SignupForm;