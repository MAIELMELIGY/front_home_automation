import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { useTranslation } from "react-i18next";

const Contact = ({ setAlert }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone:'',
        email: '',
        subject: '',
        message: ''
    });
    const { t } = useTranslation();
    const { name,phone, email, subject, message } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post('https://apihomeautomation.herokuapp.com/api/Contactus/', { name,phone, email, subject, message }, config)
        .then(res => {
      
            setLoading(false);
            window.scrollTo(0, 0);
        })
        .catch(err => {
      
            setLoading(false);
            window.scrollTo(0, 0);
        })
    };

    return (
        <div id='Contact'>
        <div class="section-title">
      
        <h2>{t('Contact Us')}</h2>
        </div>
            <Helmet>
                <title> {t("Home automation")}</title>
                <meta
                    name='description'
                    content='Contact us'
                />
            </Helmet>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <label  htmlFor='name'> {t("Name")}</label>
                <input 
                    
                    name='name' 
                    type='text' 
                  
                    onChange={e => onChange(e)} 
                    value={name} 
                    required 
                />
                <label  htmlFor='email'>{t("Email")}</label>
                <input 
                    
                    name='email' 
                    type='email' 
                  
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
                <label  htmlFor='phone'>{t("Phone")}</label>
                <input 
                    
                    name='phone' 
                    type='tel' 
                  
                    onChange={e => onChange(e)} 
                    value={phone} 
                    required 
                />
                <label  htmlFor='subject'>{t("Subject")} </label>
                <input 
                    
                    name='subject' 
                    type='text' 
                 
                    onChange={e => onChange(e)} 
                    value={subject} 
                    required 
                />
                <label  htmlFor='message'>{t("Message")}</label>
                <textarea 
                    className='contact__form__textarea'
                    name='message'
                    cols='30'
                    rows='10'
              
                    onChange={e => onChange(e)} 
                    value={message} 
                />
                {loading ?
                    <div className='contact__form__loader'>
                        <Loader
                            type="Oval"
                            color="#424242"
                            height={50}
                            width={50}
                        />
                    </div> :
                    <button className='contact__form__button' htmltype='submit'>Send</button>
                }
            </form>
            
        </div>
    );
};


export default  Contact;