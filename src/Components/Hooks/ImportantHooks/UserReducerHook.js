import React, { useReducer } from 'react'

const initalObj = [
  {
    name: 'Subrata',
    id: 1,
    status: 'inActive'
  },
  {
    name: 'San',
    id: 2,
    status: 'inActive'
  },
]

const reducer = (state, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'ACTIVE':
      return state.map(data => data.id === action.id ? { ...data, status: 'active' } : data)
    default:
      return state
  }
}

const UserReducerHook = () => {
  const [userDetails, dispatch] = useReducer(reducer, initalObj)

  return (
    <>
      <div>UserReducerHook</div>
      {userDetails?.map(detail => <div>
        Name: {detail.name} {detail.status == 'active' ? '✔' : '❌'}
        <span><button
          onClick={() => { dispatch({ type: 'ACTIVE', id: detail.id }) }}
        >
          Active
        </button>
        </span>
      </div>)}
    </>
  )
}

export default UserReducerHook