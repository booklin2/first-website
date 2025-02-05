'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('普通');

  const priorityColors = {
    緊急: 'bg-red-100 text-red-800',
    重要: 'bg-yellow-100 text-yellow-800',
    普通: 'bg-gray-100 text-gray-800'
  };

  const priorityOrder = {
    緊急: 1,
    重要: 2,
    普通: 3
  };

  // 載入 localStorage 中的資料
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      // 為舊資料添加預設標記
      const parsedTodos = JSON.parse(savedTodos).map(todo => ({
        ...todo,
        priority: todo.priority || '普通'
      }));
      setTodos(parsedTodos);
    }
  }, []);

  // 當 todos 改變時，儲存到 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      createdAt: new Date().toLocaleString(),
      completed: false,
      completedAt: null,
      priority: priority
    };

    setTodos([todo, ...todos]);
    setNewTodo('');
    setPriority('普通'); // 重置為預設值
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? new Date().toLocaleString() : null
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 排序待辦事項
  const sortedTodos = [...todos].sort((a, b) => {
    // 先依完成狀態排序
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    // 如果都是已完成的，依完成時間排序（新的在下面）
    if (a.completed && b.completed) {
      return new Date(a.completedAt) - new Date(b.completedAt);
    }
    
    // 如果都是未完成的，依優先順序排序
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-purple-500 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="/" className="text-xl font-bold hover:text-purple-200">首頁</a>
          </div>
          <div className="space-x-6">
            <a href="/about" className="hover:text-purple-200">關於本站</a>
            <a href="/todo" className="hover:text-purple-200">待辦事項</a>
            <a href="/chat-room" className="hover:text-purple-200">聊天室</a>
            <a href="/contact" className="hover:text-purple-200">聯絡資訊</a>
          </div>
        </div>
      </nav>

      <div className="pt-16 container mx-auto px-4">
        {/* Todo Form */}
        <section className="py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">待辦事項</h1>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex gap-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="輸入待辦事項..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="緊急">緊急</option>
                <option value="重要">重要</option>
                <option value="普通">普通</option>
              </select>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPlus} />
                新增
              </button>
            </div>
          </form>
        </section>

        {/* Todo List */}
        <section className="py-8">
          <div className="max-w-2xl mx-auto space-y-4">
            {sortedTodos.map(todo => (
              <div
                key={todo.id}
                className={`bg-white p-4 rounded-lg shadow-md flex items-center gap-4 ${
                  todo.completed ? 'bg-gray-50' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 text-pink-500 rounded border-gray-300 focus:ring-pink-500"
                />
                <div className="flex-1">
                  <p className={`text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.text}
                  </p>
                  <div className="text-sm text-gray-500 mt-1">
                    <p>建立時間: {todo.createdAt}</p>
                    {todo.completed && <p>完成時間: {todo.completedAt}</p>}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColors[todo.priority]}`}>
                  {todo.priority}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 text-red-500 hover:bg-red-50 rounded transition-colors flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                  刪除
                </button>
              </div>
            ))}
            {todos.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                目前沒有待辦事項
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
} 