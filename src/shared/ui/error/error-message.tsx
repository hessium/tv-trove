import  './error.scss';
interface ErrorMessageProps {
  title: string;
  message?: string;
}

export const ErrorMessage = ({ message, title }: ErrorMessageProps) => (
  <div className='container error-message'>
    <h2 className='error-message__title'>
      {title}
    </h2>
    {message && <p className="error-message__desc">{message}</p>}
  </div>
);