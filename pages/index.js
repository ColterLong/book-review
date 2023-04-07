import Layout from '@/components/Layout'
import Login from '@/components/Login'

export default function Home(props) {
  return (
    <>
      {props.user ? (
        <>
          <span>Signed in as : {props.user.email} </span>
          <button onClick={props.signOut}>Sign Out</button>
          <Layout />
        </>
      ) : (
        <Login signIn={props.signIn} />
      )}
    </>
  );
}
