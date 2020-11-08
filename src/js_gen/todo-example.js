"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  HomebaseProvider,
  useTransact,
  useQuery,
  useEntity
} = window.homebase.react;

const App = () => {
  return /*#__PURE__*/_react.default.createElement(HomebaseProvider, {
    config: config
  }, /*#__PURE__*/_react.default.createElement(Todos, null));
};

exports.App = App;
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
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NewTodo, null), /*#__PURE__*/_react.default.createElement(TodoFilters, null), /*#__PURE__*/_react.default.createElement(TodoList, null));
};

const NewTodo = () => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("form", {
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
  }, /*#__PURE__*/_react.default.createElement("input", {
    autoFocus: true,
    type: "text",
    name: "todo-name",
    placeholder: "What needs to be done?",
    autoComplete: "off",
    required: true
  }), "\xA0", /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Create Todo"));
};

const TodoFilters = () => {
  const [filters] = useEntity({
    identity: 'todoFilters'
  });
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "show-completed"
  }, "Show Completed?"), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "show-completed",
    checked: filters.get('showCompleted'),
    onChange: e => transact([{
      todoFilter: {
        id: filters.get('id'),
        showCompleted: e.target.checked
      }
    }])
  }), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(ProjectSelect, {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", null, "Project:"), "\xA0", /*#__PURE__*/_react.default.createElement("select", {
    name: "projects",
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value))
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "0"
  }), projects.map(project => /*#__PURE__*/_react.default.createElement("option", {
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
  return /*#__PURE__*/_react.default.createElement("div", null, todos.filter(todo => {
    if (!filters.get('showCompleted') && todo.get('isCompleted')) return false;
    if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false;
    return true;
  }).sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1).map(todo => /*#__PURE__*/_react.default.createElement(Todo, {
    key: todo.get('id'),
    todo: todo
  })));
};

const Todo = ({
  todo
}) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 20
  }
}, /*#__PURE__*/_react.default.createElement(TodoCheck, {
  todo: todo
}), /*#__PURE__*/_react.default.createElement(TodoName, {
  todo: todo
})), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(TodoProject, {
  todo: todo
}), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(TodoOwner, {
  todo: todo
}), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(TodoDelete, {
  todo: todo
})), /*#__PURE__*/_react.default.createElement("small", {
  style: {
    color: 'grey'
  }
}, todo.get('createdAt').toLocaleString()));

const TodoCheck = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("input", {
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
  return /*#__PURE__*/_react.default.createElement("input", {
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
  return /*#__PURE__*/_react.default.createElement(ProjectSelect, {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", null, "Owner:"), "\xA0", /*#__PURE__*/_react.default.createElement("select", {
    name: "users",
    value: todo.get('owner', 'id') || '',
    onChange: e => transact([{
      todo: {
        id: todo.get('id'),
        owner: Number(e.target.value) || null
      }
    }])
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }), users.map(user => /*#__PURE__*/_react.default.createElement("option", {
    key: user.get('id'),
    value: user.get('id')
  }, user.get('name')))));
};

const TodoDelete = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => transact([['retractEntity', todo.get('id')]])
  }, "Delete");
};