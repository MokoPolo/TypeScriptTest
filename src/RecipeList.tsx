// http://webapiservices20171007063236.azurewebsites.net/api/grocery
/* export const getRecipeList = id => {
    const settings = appConfig;
    return (dispatch) => {
      fetch(`${settings.RestServerLocation}/Api/recipe`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(result => result.json())
        .then((data) => {
          dispatch({
            type: GET_RECIPE_LIST,
            RecipeList: data
          })
        });
    }
  } */

import * as React from 'react';

interface ServiceResponse {
  
}

interface RecipeListProps {
  recipes: any;
}

const RecipeList: React.SFC<RecipeListProps> = (props) => {
  return (
    <div>hi this is the recipelist {props.recipes}</div>
  );
};

export default RecipeList;