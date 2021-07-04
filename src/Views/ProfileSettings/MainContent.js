import Container from './ContentContainer';
import Personal from './Personal';
import Password from './Password';
import BankForm from './Bank';
import Business from './Business';

export default function MainContent({ active }) {
  const RenderSections = () => {
    switch (active) {
      case 'personal':
        return (
          <Container
            title='Personal Information'
            subtitle='Details about your personal information'
          >
            <Personal />
          </Container>
        );
      case 'business':
        return (
          <Container
            title='Business Information'
            subtitle='Details about your company information'
          >
            <Business />
          </Container>
        );
      case 'password':
        return (
          <Container
            title='Change Password'
            subtitle='Change your account password for safety'
          >
            <Password />
          </Container>
        );
      case 'bank':
        return (
          <Container
            title='Bank Details'
            subtitle='Details about the bank registered for withdrawals'
          >
            <BankForm />
          </Container>
        );

      default:
        break;
    }
  };

  return (
    <div className=''>
      <RenderSections />
    </div>
  );
}
