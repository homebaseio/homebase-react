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

const App = () => /*#__PURE__*/_react.default.createElement(HomebaseProvider, {
  config: config
}, /*#__PURE__*/_react.default.createElement(Todos, null));

exports.App = App;
const config = {
  // Lookup helpers are used to enforce
  // unique constraints and relationships.
  lookupHelpers: {
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
  // Initial data let's you conveniently transact some
  // starting data on DB creation to hydrate your components.
  initialData: [{
    todoFilter: {
      // identity is a special unique attribute for user generated ids
      // E.g. todoFilters are settings that should be easy to lookup by their identity
      identity: 'todoFilters',
      showCompleted: true
    }
  }, {
    user: {
      // Negative numbers can be used as temporary ids in a transaction.
      // Use them to relate multiple entities together at once.
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

const Todos = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NewTodo, null), /*#__PURE__*/_react.default.createElement(TodoFilters, null), /*#__PURE__*/_react.default.createElement(TodoList, null));

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
  console.log(todos);
  return /*#__PURE__*/_react.default.createElement("div", null, todos.filter(todo => {
    if (!filters.get('showCompleted') && todo.get('isCompleted')) return false;
    if (filters.get('project') && todo.get('project', 'id') !== filters.get('project')) return false;
    if (filters.get('owner') && todo.get('owner', 'id') !== filters.get('owner')) return false;
    return true;
  }).sort((a, b) => a.get('createdAt') > b.get('createdAt') ? -1 : 1).map(todo => /*#__PURE__*/_react.default.createElement(Todo, {
    key: todo.get('id'),
    id: todo.get('id')
  })));
}; // PERFORMANCE: By accepting an `id` prop instead of a whole `todo` entity
// this component stays disconnected from the useQuery in the parent TodoList.
// useEntity creates a separate scope for every Todo so changes to TodoList
// or sibling Todos don't trigger unnecessary re-renders.


const Todo = /*#__PURE__*/_react.default.memo(({
  id
}) => {
  const [todo] = useEntity(id);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
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
});

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
    defaultValue: todo.get('name'),
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
  return /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Project",
    entityType: "project",
    value: todo.get('project', 'id'),
    onChange: project => transact([{
      todo: {
        id: todo.get('id'),
        project
      }
    }])
  });
};

const TodoOwner = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Owner",
    entityType: "user",
    value: todo.get('owner', 'id'),
    onChange: owner => transact([{
      todo: {
        id: todo.get('id'),
        owner
      }
    }])
  });
};

const TodoDelete = ({
  todo
}) => {
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => transact([['retractEntity', todo.get('id')]])
  }, "Delete");
};

const TodoFilters = () => {
  const [filters] = useEntity({
    identity: 'todoFilters'
  });
  const [transact] = useTransact();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Show Completed?", /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: filters.get('showCompleted'),
    onChange: e => transact([{
      todoFilter: {
        id: filters.get('id'),
        showCompleted: e.target.checked
      }
    }])
  })), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Project",
    entityType: "project",
    value: filters.get('project'),
    onChange: project => transact([{
      todoFilter: {
        id: filters.get('id'),
        project
      }
    }])
  }), "\xA0\xB7\xA0", /*#__PURE__*/_react.default.createElement(EntitySelect, {
    label: "Owner",
    entityType: "user",
    value: filters.get('owner'),
    onChange: owner => transact([{
      todoFilter: {
        id: filters.get('id'),
        owner
      }
    }])
  }));
};

const EntitySelect = /*#__PURE__*/_react.default.memo(({
  label,
  entityType,
  value,
  onChange
}) => {
  const [entities] = useQuery({
    $find: entityType,
    $where: {
      [entityType]: {
        name: '$any'
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement("label", null, label, ":\xA0", /*#__PURE__*/_react.default.createElement("select", {
    name: entityType,
    value: value || '',
    onChange: e => onChange && onChange(Number(e.target.value) || null)
  }, /*#__PURE__*/_react.default.createElement("option", {
    key: "-",
    value: ""
  }), entities.map(entity => /*#__PURE__*/_react.default.createElement("option", {
    key: entity.get('id'),
    value: entity.get('id')
  }, entity.get('name')))));
});