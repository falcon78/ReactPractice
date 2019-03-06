class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("before render");
  }
  render() {
    return <div />;
  }
}
