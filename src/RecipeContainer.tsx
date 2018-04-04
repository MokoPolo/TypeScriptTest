import * as React from 'react';
import RecipeList from './RecipeList';
import * as Recipez from './recipez';

interface TodoState {
    ice: string;
    recipes?: Recipez.RootObject;
}
interface TodoProps {

}
export default class RecipeContainer extends React.Component<TodoProps, TodoState> {
        constructor (props: TodoProps) {
            super(props);
            this.state = { ice: 'juju', recipes: undefined };
        } 

    async testFetch() {
        let response = await fetch('http://webapiservices20171007063236.azurewebsites.net/api/grocery');
        let data = await response.json();
        console.log(data.Id);
        this.setState( {recipes: <Recipez.RootObject>data});
    }

    public componentDidMount() {
        // this.setState({ ice: 'baby'});
        this.testFetch();
    }
    public render() {
        return (
            <RecipeList recipes={this.state.recipes} />
        );
    }
}