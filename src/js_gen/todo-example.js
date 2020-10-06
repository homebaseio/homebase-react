import React from 'react';
const {
  HomebaseProvider,
  useTransact,
  useQuery,
  useEntity
} = window.homebase.react;
export const App = () => {
  return /*#__PURE__*/React.createElement(HomebaseProvider, {
    config: config
  }, /*#__PURE__*/React.createElement(Todos, null));
};
const config = {
  // Schema is optional. Add as much or as little as you want.
  schema: {
    user: {
      name: {
        type: 'string'
      }
    },
    project: {
      name: {
        unique: 'identity'
      }
    },
    todo: {
      // refs are relationships
      project: {
        type: 'ref'
      },
      owner: {
        type: 'ref'
      }
    }
  },
  initialData: [{
    todoFilter: {
      // identity is a special attribute for user generated ids
      // E.g. this is a setting that should be easy to lookup by name
      identity: 'todoFilters',
      showCompleted: true,
      project: 0
    }
  }, {
    user: {
      // negative numbers can be used as temporary ids in a transaction
      id: -1,
      name: 'Stella'
    }
  }, {
    user: {
      id: -2,
      name: 'Arpegius'
    }
  }, {
    project: {
      id: -3,
      name: 'Make it'
    }
  }, {
    project: {
      id: -4,
      name: 'Do it'
    }
  }, {
    todo: {
      name: 'Fix ship',
      owner: -1,
      project: -3,
      isCompleted: true,
      createdAt: new Date('2003/11/10')
    }
  }, {
    todo: {
      name: 'Go home',
      owner: -2,
      project: -4,
      createdAt: new Date('2003/11/10')
    }
  }]
};

const Todos = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NewTodo, null), /*#__PURE__*/React.createElement(TodoFilters, null), /*#__PURE__*/React.createElement(TodoList, null));
};

const NewTodo = () => {
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      transact([{
        todo: {
          name: e.target.elements['todo-name'].value,
          createdAt: new Date()
        }
      }]);
      e.target.reset();
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    type: "text",
    name: "todo-name",
    placeholder: "What needs to be done?",
    autoComplete: "off",
    required: true
  }), "\xA0", /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Create Todo"));
};

const TodoFilters = () => {
  const [filters] = useEntity({
    identity: 'todoFilters'
  });
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "show-completed"
  }, "Show Completed?"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "show-completed",
    checked: filters.get('showCompleted'),
    onChange: e => transact([{
      todoFilter: {
        id: filters.get('id'),
        showCompleted: e.target.checked
      }
    }])
  }), "\xA0\xB7\xA0", /*#__PURE__*/React.createElement(ProjectSelect, {
    value: filters.get('project'),
    onChange: project => transact([{
      todoFilter: {
        id: filters.get('id'),
        project
      }
    }])
  }));
};

const ProjectSelect = ({
  value,
  onChange
}) => {
  const [projects] = useQuery({
    $find: 'project',
    $where: {
      project: {
        name: '$any'
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Project:"), "\xA0", /*#__PURE__*/React.createElement("select", {
    name: "projects",
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value))
  }, /*#__PURE__*/React.createElement("option", {
    value: "0"
  }), projects.map(project => /*#__PURE__*/React.createElement("option", {
    key: project.get('id'),
    value: project.get('id')
  }, project.get('name')))));
};

const TodoList = () => {
  const [filters] = useEntity({
    identity: 'todoFilters'
  });
  const [todos] = useQuery({
    $find: 'todo',
    $where: {
      todo: {
        name: '$any'
      }
    }
  });
  return /*#__PURE__*/React.createElement("div", null, todos.filter(todo => {
    if (!filters.get('showCompleted') && todo.get('isCompleted')) return false;
    if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false;
    return true;
  }).sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1).map(todo => /*#__PURE__*/React.createElement(Todo, {
    key: todo.get('id'),
    todo: todo
  })));
};

const Todo = ({
  todo
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 20
  }
}, /*#__PURE__*/React.createElement(TodoCheck, {
  todo: todo
}), /*#__PURE__*/React.createElement(TodoName, {
  todo: todo
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TodoProject, {
  todo: todo
}), "\xA0\xB7\xA0", /*#__PURE__*/React.createElement(TodoOwner, {
  todo: todo
}), "\xA0\xB7\xA0", /*#__PURE__*/React.createElement(TodoDelete, {
  todo: todo
})), /*#__PURE__*/React.createElement("small", {
  style: {
    color: 'grey'
  }
}, todo.get('createdAt').toLocaleString()));

const TodoCheck = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      width: 20,
      height: 20,
      cursor: 'pointer'
    },
    checked: !!todo.get('isCompleted'),
    onChange: e => transact([{
      todo: {
        id: todo.get('id'),
        isCompleted: e.target.checked
      }
    }])
  });
};

const TodoName = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("input", {
    style: {
      border: 'none',
      fontSize: 20,
      marginTop: -2,
      cursor: 'pointer',
      ...(todo.get('isCompleted') && {
        textDecoration: 'line-through '
      })
    },
    value: todo.get('name'),
    onChange: e => transact([{
      todo: {
        id: todo.get('id'),
        name: e.target.value
      }
    }])
  });
};

const TodoProject = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement(ProjectSelect, {
    value: todo.get('project', 'id') || '',
    onChange: projectId => transact([{
      todo: {
        id: todo.get('id'),
        'project': projectId || null
      }
    }])
  });
};

const TodoOwner = ({
  todo
}) => {
  const [transact] = useTransact();
  const [users] = useQuery({
    $find: 'user',
    $where: {
      user: {
        name: '$any'
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Owner:"), "\xA0", /*#__PURE__*/React.createElement("select", {
    name: "users",
    value: todo.get('owner', 'id') || '',
    onChange: e => transact([{
      todo: {
        id: todo.get('id'),
        owner: Number(e.target.value) || null
      }
    }])
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }), users.map(user => /*#__PURE__*/React.createElement("option", {
    key: user.get('id'),
    value: user.get('id')
  }, user.get('name')))));
};

const TodoDelete = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => transact([['retractEntity', todo.get('id')]])
  }, "Delete");
};