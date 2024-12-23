"use client"

import { useForm } from 'react-hook-form'

export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    
    const onSubmit = async (data:object) => {
        try {
            const response = await fetch(
                'https://tech.mindrisers.com.np/api/v1/contactus/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            )

            if(response.ok){
                let modal = document.getElementById('admission-modal')
                if (modal) {
                    modal.classList.add('active')
                }
            }else{
                throw new Error('custom error')
            }

            reset()
        } catch (error) {
            alert("Something went wrong! please try again later.")
            console.error('Error:', error)
        }
    }

    return (
        <div className="container  gap-10 rounded-3xl border border-emerald-200 bg-white p-10 ">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-x-5 md:grid-cols-2">
                    <div className="form-group">
                        <label className="form-label required-field">
                            Name
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            className="form-control "
                            placeholder="Enter name"
                            {...register('full_name', {
                                required: {
                                    message: 'required field',
                                    value: true
                                }
                            })}
                        />
                        {errors.full_name && errors.full_name.message && 
                            <p className="mt-1 text-sm text-red-500">
                                {`${errors.full_name?.message}`}
                            </p>
                        }
                    </div>
                    <div className="form-group">
                        <label className="form-label required-field">
                            Email
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            className="form-control"
                            placeholder="Enter email"
                            {...register('email', {
                                required: {
                                    message: 'required field',
                                    value: true
                                }
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {`${errors.email.message}`}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label required-field">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="number"
                            className="form-control"
                            placeholder="Enter phone number"
                            {...register('number', {
                                required: 'required field',
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Please enter a valid phone number'
                                }
                            })}
                        />
                        {errors.number && (
                            <p className="mt-1  text-sm text-red-500">
                                {`${errors.number.message}`}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label required-field">
                            Interest
                        </label>
                        <input
                            type="text"
                            id="interest"
                            className="form-control "
                            placeholder="Enter interest"
                            {...register('interest', {
                                required: {
                                    message: 'required field',
                                    value: true
                                }
                            })}
                        />
                        {errors.interest && (
                            <p className="mt-1 text-sm text-red-500">
                                {`${errors.interest.message}`}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label required-field">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company_name"
                            className="form-control "
                            placeholder="Enter company name"
                            {...register('company_name', {
                                required: {
                                    message: 'required field',
                                    value: true
                                }
                            })}
                        />
                        {errors.company_name && (
                            <p className="mt-1  text-sm text-red-500">
                                {`${errors.company_name.message}`}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label required-field">
                        Any queries?
                    </label>
                    <textarea
                        rows={7}
                        id="message"
                        className="form-control "
                        placeholder="Enter queries if any "
                        {...register('message', {
                            required: {
                                message: 'required field',
                                value: true
                            }
                        })}
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                            {`${errors.message.message}`}
                        </p>
                    )}
                </div>
                <div className="flex justify-end py-5 ">
                    <button className="btn">Send Enquiry</button>
                </div>
            </form>
        </div>
    )
}
