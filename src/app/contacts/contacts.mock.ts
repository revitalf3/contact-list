import { Contact } from './contact';

export const getContactsMock: () => Contact[] = () => [
  {
    name: 'Luke Peterson',
    job: 'Photographer & Videographer',
    company_name: 'Clear Shoot Photography',
    phone: '123.456.7890',
    email: 'photo@email.com',
    // tslint:disable-next-line:max-line-length
    profile_image: 'https://s3.amazonaws.com/honeybook_cdn/assets_users_production/users/532b267c46ecaccbf1000143/profile_photos/2014-09-17-22-46-03-442.png',
    // tslint:disable-next-line:max-line-length
    icon: 'https://s3.amazonaws.com/honeybook_cdn/assets_users_production/companies/532b267c46ecaccbf1000144/icons/2014-10-02-18-59-41-959.png'
  }
];
