import {Component} from "react";
import {Container} from "react-bootstrap";
import {TitleComponent} from "../../../default/Profile/Utils.component";

export class ActorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actors: []
        }
        this.getActors = this.getActors.bind(this)
        this.initContent = this.initContent.bind(this)

        this.initContent()
    }

    async initContent() {
        let res = await this.getActors()
        let actors = res._embedded.actors
        console.log(actors)
        this.setState({
            ...this.state,
            actors: actors
        })
    }

    getActors() {
        return new Promise(function (resolve, reject) {
            fetch('http://localhost:8080/actors', {
                method: 'GET',
            }).then(response => {
                response.json().then(json => {
                    resolve(json)
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })
        })
    }

    render() {
        return (
            <Container className={'my-2 p-2 bg-light'}>
                <TitleComponent compTitle={'Actor List'}/>
                <table>
                    <tr>
                        <th width={'50'}>ID</th>
                        <th width={'100'}>First Name</th>
                        <th width={'100'}>Last Name</th>
                    </tr>
                    {this.state.actors.map(actor => {
                        return (
                            <tr>
                                <td>{actor.actorId}</td>
                                <td>{actor.firstName}</td>
                                <td>{actor.lastName}</td>
                            </tr>
                        )
                    })}
                </table>
            </Container>
        )
    }
}

export default ActorComponent