import React, { useState, useEffect } from 'react';
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import api from "../services/api";

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке задач:', error);
        }
    };

    const handleAddTask = async (newTask) => {
        try {
            const response = await api.post('/tasks', newTask);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Ошибка при создании задачи:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <div style={{ padding: '24px' }}>
            <TaskForm onAddTask={handleAddTask} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
                <h3 style={{ color: '#2563eb', fontSize: '18px', margin: 0 }}>Список задач</h3>
                <TaskFilter selectedFilter={filter} onFilterChange={setFilter} />
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {filteredTasks.map((task, index) => (
                    <TaskCard key={task.id} task={task} index={index} onDelete={handleDeleteTask} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;