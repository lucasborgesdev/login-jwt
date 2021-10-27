export const  configuration = () => {
  return {
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE, 
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD, 
  }
}