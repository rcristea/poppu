import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import {Component} from "react";
import {Button, Form, Row} from "react-bootstrap";
import {FaOm} from "react-icons/all";

export class AutoForm extends Component {
    form_data;
    render() {
        return (
            <Row>
                <Form>
                    <Form.Group>
                        {this.props.form_data.map(form_item => {
                            return (
                                <Form.Label>
                                    {form_item.item_label}
                                    <Form.Control
                                        type={form_item.item_type}
                                        placeholder={form_item.item_placeholder}
                                        value={form_item.item_value}
                                        {form_item.read_only && "readOnly"}
                                    />
                                    <Form.Text className={"text-muted"}>
                                        {form_item.item_message}
                                    </Form.Text>
                                </Form.Label>
                            )
                        })}
                    </Form.Group>
                    <Button type={"submit"}>Submit</Button>
                </Form>
            </Row>
        )
    }
}

export default AutoForm