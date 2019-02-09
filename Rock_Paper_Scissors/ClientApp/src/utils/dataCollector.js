export default function(event) {
    this.setState({[event.target.name]: event.target.value});
}
