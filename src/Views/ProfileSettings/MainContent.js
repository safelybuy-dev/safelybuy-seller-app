import { useContext } from 'react';
import Container from './ContentContainer';
import Personal from './Personal';
import Password from './Password';
import BankForm from './Bank';
import Business from './Business';
import { ContextUser } from 'context';

export default function MainContent({ active, setActive }) {
  const userContext = useContext(ContextUser);
  function renderSections() {
    switch (active) {
      case 'personal':
        return (
          <Container
            title="Personal Information"
            subtitle="Details about your personal information"
            setActive={setActive}>
            <Personal userContext={userContext} />
          </Container>
        );
      case 'business':
        return (
          <Container
            title="Business Information"
            subtitle="Details about your company information"
            setActive={setActive}>
            <Business />
          </Container>
        );
      case 'password':
        return (
          <Container
            title="Change Password"
            subtitle="Change your account password for safety"
            setActive={setActive}>
            <Password />
          </Container>
        );
      case 'bank':
        return (
          <Container
            title="Bank Details"
            subtitle="Details about the bank registered for withdrawals"
            setActive={setActive}>
            <BankForm />
          </Container>
        );

      default:
        return null;
    }
  }

  return (
    <div className="flex-[0.65]  overflow-y-scroll  h-screen   py-8">
      <div className="w-[85%] mx-auto">{renderSections()}</div>
    </div>
  );
}
