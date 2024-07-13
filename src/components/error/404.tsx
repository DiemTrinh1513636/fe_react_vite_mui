import Layout from '@root/components/layout';
import ErrorIcon from '@mui/icons-material/Error';
const Notfound = () => {
  return (
    <Layout>
      <div style={{ alignItems: 'center' }}>
        <ErrorIcon
          style={{
            color: '#b51f42',
            width: 70,
            height: 70,
          }}
        />
        <div>You are accessing the unavailable page</div>
        <small>Please contact admin for more information</small>
      </div>
    </Layout>
  );
};

export default Notfound;
