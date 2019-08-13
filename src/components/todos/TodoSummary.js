import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/*
Shows summary of most important todos on the dashboard
*/
class TodoSummary extends React.Component{
    render(){
        return(
            <div className="container" style={{width: '100%'}}>
                <Card>
                    <CardContent>
                        {/* holds text in each list item of todo list */}
                        <div className="todo-content">
                            <h3>a todo</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default TodoSummary;