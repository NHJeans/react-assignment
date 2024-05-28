import AccountForm from "../../components/Account/AccountForm";
import AccountList from "../../components/Account/AccountList";
import AccountSelector from "../../components/Account/AccountSelector";
import Layout from "../../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <AccountForm />
      <AccountSelector />
      <AccountList />
    </Layout>
  );
};
export default HomePage;
