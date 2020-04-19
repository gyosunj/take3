import Header from './header';
import Footer from './footer';

export default (Page: any) => {
  const pageComponent = (props: any) => {
    return (
      <div>
        <Header />
        <Page {...props} />
        <Footer />
      </div>
    )
  };

  if (Page.getInitialProps) {
    pageComponent.getInitialProps = (context: any) => Page.getInitialProps(context);
  }

  return pageComponent;
};
