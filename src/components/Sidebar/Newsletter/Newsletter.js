import React from 'react';
import styles from './Newsletter.module.scss';

const Newsletter = () => (

  <div className={styles['newsletter']} data-ck-version="7">
    <div>
      <div>
        <h2 className={styles['newsletter__title']}>Sign up for my newsletter</h2>
        <p className={styles['newsletter__subtitle']}>Subscribe to get my latest content by email.</p>
        <div id = "ck_success_msg" style={{ display: 'none' }}>
          <p className={styles['newsletter__confirm']}>Thank you. Now check your email to confirm your subscription.</p>
        </div>
        <form id="ck_subscribe_form" action="https://app.convertkit.com/landing_pages/131003/subscribe" data-remote="true">
          <input type="hidden" value="{&quot;form_style&quot;:&quot;minimal&quot;,&quot;embed_style&quot;:&quot;inline&quot;,&quot;embed_trigger&quot;:&quot;scroll_percentage&quot;,&quot;scroll_percentage&quot;:&quot;70&quot;,&quot;delay_seconds&quot;:&quot;10&quot;,&quot;display_position&quot;:&quot;br&quot;,&quot;display_devices&quot;:&quot;all&quot;,&quot;days_no_show&quot;:&quot;15&quot;,&quot;converted_behavior&quot;:&quot;hide&quot;}" id="ck_form_options" />
          <input type="hidden" name="id" value="131003" id="landing_page_id" />
          <input type="hidden" name="ck_form_recaptcha" value="" id="ck_form_recaptcha" />
          <div>
            <div id="ck_error_msg" style={{ display: 'none' }}>
              <p className={styles['newsletter__error']}>There was an error submitting your subscription. Please try again.</p>
            </div>
          </div>
          <label htmlFor="ck_emailField" style={{ display: 'none' }}>Email Address</label>
          <input type="email" name="email" className={styles['newsletter__input']} id="ck_emailField" placeholder="Email Address" required />
          <div className={styles['newsletter__captcha']}>
            <input type="text" name="captcha2_h" id="ck_captcha2_h" placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer." />
          </div>
          <button id="ck_subscribe_button" className={styles['newsletter__submit']}>Subscribe</button>
        </form>
      </div>
    </div>
  </div>
);

export default Newsletter;
